import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';
import { Grocery } from '../models/grocery.model';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { OrderItem } from '../models/orderItem.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    SequelizeModule.forFeature([Grocery, User, Order, OrderItem]),
  ],
  exports: [SequelizeModule],
})
export class DatabaseModule {}
