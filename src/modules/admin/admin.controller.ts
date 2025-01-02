import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Grocery } from '../../models/grocery.model';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  /**
   * Add new grocery item
   * @param grocery 
   */
  @Post('groceries')
  async addGrocery(@Body() grocery: Partial<Grocery>) {
    return this.adminService.addGrocery(grocery);
  }

  /**
   * View all groceries
   */
  @Get('groceries')
  async getGroceries() {
    return this.adminService.getGroceries();
  }

  /**
   * Update grocery item details
   * @param id 
   * @param updates 
   */
  @Patch('groceries/:id')
  async updateGrocery(@Param('id') id: number, @Body() updates: Partial<Grocery>) {
    return this.adminService.updateGrocery(id, updates);
  }

  /**
   * Remove grocery item
   * @param id 
   */
  @Delete('groceries/:id')
  async deleteGrocery(@Param('id') id: number) {
    return this.adminService.deleteGrocery(id);
  }
}
