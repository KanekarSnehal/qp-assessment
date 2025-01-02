import { BelongsTo, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { OrderItem } from './orderItem.model';

@Table
export class Order extends Model<Order> {
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  orderDate: Date;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  totalAmount: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => OrderItem)
  items: OrderItem[];
}
