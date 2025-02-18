import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArrayDto } from './dtos/arrays.dto';
import { NestedDto } from './dtos/nested.dto';
import { ContactDto } from './dtos/contact.dto';
import { CreditCardDto } from './dtos/credit.dto';
import { IsbnDto } from './dtos/isbn.dto';
import { CustomFormatDto } from './dtos/custom-format.dto';
import { TelcoDto } from './dtos/telco.dto';

@Controller('validate')
export class ValidationsController {
  @Post('array')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateArray(@Body() dto: ArrayDto) {
    return { message: 'Array validation passed', data: dto };
  }

  @Post('nested')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateNested(@Body() dto: NestedDto) {
    return { message: 'Nested validation passed', data: dto };
  }

  @Post('contact')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateContact(@Body() dto: ContactDto) {
    return { message: 'Contact validation passed', data: dto };
  }

  @Post('credit-card')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateCreditCard(@Body() dto: CreditCardDto) {
    return { message: 'Credit card validation passed', data: dto };
  }

  @Post('isbn')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateISBN(@Body() dto: IsbnDto) {
    return { message: 'ISBN validation passed', data: dto };
  }

  @Post('custom-format')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateCustomFormat(@Body() dto: CustomFormatDto) {
    return { message: 'Custom format validation passed', data: dto };
  }

  @Post('telco')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  validateTelco(@Body() dto: TelcoDto) {
    return { message: 'Telco validation passed', data: dto };
  }
}
