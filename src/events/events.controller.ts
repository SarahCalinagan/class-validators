import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';

@Controller('events')
export class EventsController {
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  createEvent(@Body() createEventDto: CreateEventDto) {
    return { message: 'Event created', event: createEventDto };
  }
}
