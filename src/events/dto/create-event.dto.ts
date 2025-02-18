import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsDateString,
    IsNumber,
    Min,
    Max,
    Length,
    Matches,
    IsPositive,
    IsEmail,
    IsUUID,
  } from 'class-validator';
  
  export class CreateEventDto {
    @IsString()
    @IsNotEmpty({ message: 'Title is required' })
    @Length(5, 50, { message: 'Title must be between 5 and 50 characters' })
    title: string;
  
    @IsString()
    @IsOptional()
    @Length(10, 500, { message: 'Description must be between 10 and 500 characters' })
    description?: string;
  
    @IsDateString({}, { message: 'Date must be in YYYY-MM-DD format' })
    @IsNotEmpty({ message: 'Date is required' })
    date: string;
  
    @IsNumber()
    @Min(1, { message: 'Max attendees must be at least 1' })
    @Max(1000, { message: 'Max attendees cannot exceed 1000' })
    maxAttendees: number;
  
    @IsEmail({}, { message: 'Organizer email must be a valid email' })
    organizerEmail: string;
  
    @IsUUID('4', { message: 'Event ID must be a valid UUID v4' })
    eventId: string;
  
    @IsString()
    @Matches(/^[a-zA-Z0-9-_]+$/, { message: 'Event code can only contain letters, numbers, hyphens, and underscores' })
    eventCode: string;
  }
  