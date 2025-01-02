import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Order } from './order.model';
import { Grocery } from './grocery.model';

@Table
export class OrderItem extends Model<OrderItem> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price: number;
  
  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  orderId: number;

  @ForeignKey(() => Grocery)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  groceryId: number;

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Grocery)
  grocery: Grocery;
}
