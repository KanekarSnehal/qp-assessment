import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Grocery } from '../../models/grocery.model';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('groceries')
  async addGrocery(@Body() grocery: Partial<Grocery>) {
    return this.adminService.addGrocery(grocery);
  }

  @Get('groceries')
  async getGroceries() {
    return this.adminService.getGroceries();
  }

  @Put('groceries/:id')
  async updateGrocery(@Param('id') id: number, @Body() updates: Partial<Grocery>) {
    return this.adminService.updateGrocery(id, updates);
  }

  @Delete('groceries/:id')
  async deleteGrocery(@Param('id') id: number) {
    return this.adminService.deleteGrocery(id);
  }
}
