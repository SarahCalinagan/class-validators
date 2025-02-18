import { IsFromTelco } from '../validators/telco.decorator';

export class TelcoDto {
  @IsFromTelco(['smart', 'globe'], { message: 'Must be a Smart or Globe number' })
  phoneNumber: string;
}
