import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

const TELCO_PREFIXES = {
  smart: ['0918', '0919', '0920'],
  globe: ['0917', '0926'],
};

@ValidatorConstraint({ async: false })
class IsFromTelcoConstraint implements ValidatorConstraintInterface {
  validate(phone: string, args: any) {
    const allowedTelcos = args.constraints[0];
    return allowedTelcos.some(telco =>
      TELCO_PREFIXES[telco]?.some(prefix => phone.startsWith(prefix))
    );
  }

  defaultMessage(args: any) {
    return `Phone number must be from ${args.constraints[0].join(', ')}`;
  }
}

export function IsFromTelco(telcos: string[], validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      constraints: [telcos],
      options: validationOptions,
      validator: IsFromTelcoConstraint,
    });
  };
}
