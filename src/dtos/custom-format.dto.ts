import { IsEnum, IsDateString, Matches } from 'class-validator';

enum EventType {
  Conference = 'conference',
  Webinar = 'webinar',
}

export class CustomFormatDto {
  @IsEnum(EventType, { message: 'Invalid event type' })
  type: EventType;

  @IsDateString({}, { message: 'Invalid date format (YYYY-MM-DD)' }) // ✅ Fix: `{}` added before `{ message }`
  date: string;

  @Matches(/^[A-Z]{3}[0-9]{3}$/, { message: 'Format should be AAA###' })
  stockNumber: string;
}
