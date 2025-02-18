import { IsCreditCard } from 'class-validator';

export class CreditCardDto {
  @IsCreditCard({ message: 'Invalid credit card number' })
  creditCardNumber: string;
}
