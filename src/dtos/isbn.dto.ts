import { IsISBN } from 'class-validator';

export class IsbnDto {
  @IsISBN('13', { message: 'Invalid ISBN format' })
  isbn: string;
}
