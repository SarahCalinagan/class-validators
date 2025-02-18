//comment this if wanting to test the other
//this is the events validation sample
import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';

@Module({
  imports: [EventsModule],
})
export class AppModule {}

//uncomment this to test the other class validators inside dtos folder
// import { Module } from '@nestjs/common';
// import { ValidationsController } from './validations.controller';

// @Module({
//   controllers: [ValidationsController],
// })
// export class AppModule {}
