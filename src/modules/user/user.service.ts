import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Grocery } from '../../models/grocery.model';
import { Order } from '../../models/order.model';
import { OrderItem } from '../../models/orderItem.model';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Grocery) private readonly groceryModel: typeof Grocery,
    @InjectModel(Order) private readonly orderModel: typeof Order,
    @InjectModel(OrderItem) private readonly orderItemModel: typeof OrderItem,
  ) {}

  // Fetch all available grocery items
  async getAvailableGroceries(): Promise<Grocery[]> {
    return this.groceryModel.findAll({ where: { inventory: { $gt: 0 } } });
  }

  // Create an order with multiple grocery items
  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, items } = createOrderDto;

    // Validate groceries and check inventory
    for (const item of items) {
      const grocery = await this.groceryModel.findByPk(item.groceryId);
      if (!grocery) throw new NotFoundException(`Grocery item with ID ${item.groceryId} not found.`);
      if (grocery.inventory < item.quantity) {
        throw new BadRequestException(
          `Insufficient stock for grocery item: ${grocery.name}. Available: ${grocery.inventory}`,
        );
      }
    }

    // Create the order
    const order = await this.orderModel.create({ userId, totalAmount: 0 });

    let totalAmount = 0;

    // Create order items and update inventory
    for (const item of items) {
      const grocery = await this.groceryModel.findByPk(item.groceryId);

      // Reduce inventory
      await grocery.update({ inventory: grocery.inventory - item.quantity });

      // Calculate price
      const itemPrice = grocery.price * item.quantity;
      totalAmount += itemPrice;

      // Create order item
      await this.orderItemModel.create({
        orderId: order.id,
        groceryId: item.groceryId,
        quantity: item.quantity,
        price: itemPrice,
      });
    }

    // Update total amount in the order
    await order.update({ totalAmount });

    return order;
  }
}
