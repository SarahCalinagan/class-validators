import { IsUrl, IsPhoneNumber, IsFQDN } from 'class-validator';

export class ContactDto {
  @IsUrl({}, { message: 'Invalid URL format' })
  website: string;

  @IsPhoneNumber('PH', { message: 'Invalid PH phone number' })
  phoneNumber: string;

  @IsFQDN({}, { message: 'Invalid domain format' })
  domain: string;
}
