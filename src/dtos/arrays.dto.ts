import { IsArray, IsString, ArrayMinSize, ArrayMaxSize } from 'class-validator';

export class ArrayDto {
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one item is required' })
  @ArrayMaxSize(5, { message: 'Maximum 5 items allowed' })
  @IsString({ each: true })
  items: string[];
}
