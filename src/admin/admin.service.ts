import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Grocery } from '../models/grocery.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Grocery) private readonly groceryModel: typeof Grocery) {}

  async addGrocery(grocery: Partial<Grocery>): Promise<Grocery> {
    return this.groceryModel.create(grocery);
  }

  async getGroceries(): Promise<Grocery[]> {
    return this.groceryModel.findAll();
  }

  async updateGrocery(id: number, updates: Partial<Grocery>): Promise<Grocery> {
    const grocery = await this.groceryModel.findByPk(id);
    if (grocery) {
      return grocery.update(updates);
    }
    throw new Error('Grocery not found');
  }

  async deleteGrocery(id: number): Promise<void> {
    const grocery = await this.groceryModel.findByPk(id);
    if (grocery) {
      await grocery.destroy();
    } else {
      throw new Error('Grocery not found');
    }
  }
}
