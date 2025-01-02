import { IsNotEmpty, IsInt, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsInt()
  @IsNotEmpty()
  groceryId: number;

  @IsInt()
  @IsNotEmpty()
  quantity: number;
}

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
