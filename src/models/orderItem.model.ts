import { BelongsTo, Column, DataType, Model, Table } from 'sequelize-typescript';
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

  @BelongsTo(() => Order)
  order: Order;

  @BelongsTo(() => Grocery)
  grocery: Grocery;
}
