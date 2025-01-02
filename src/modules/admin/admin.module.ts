import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Grocery } from '../../models/grocery.model';

@Module({
  imports: [SequelizeModule.forFeature([Grocery])],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
