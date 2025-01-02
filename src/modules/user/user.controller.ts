import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Get a list of available grocery items
   */
  @Get('groceries')
  async getAvailableGroceries() {
    return this.userService.getAvailableGroceries();
  }

  /**
   * Book multiple grocery items in a single order
   * @param createOrderDto 
   */
  @Post('orders')
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.userService.createOrder(createOrderDto);
  }
}
