import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  country: string;
}

export class NestedDto {
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
