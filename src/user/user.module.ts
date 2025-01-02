import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Grocery } from '../models/grocery.model';

@Module({
  imports: [SequelizeModule.forFeature([Grocery])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
