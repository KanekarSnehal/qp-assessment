import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Order } from './order.model';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('Admin', 'User'),
    allowNull: false,
    defaultValue: 'User',
  })
  role: 'Admin' | 'User';

  @HasMany(() => Order)
  orders: Order[];
}
