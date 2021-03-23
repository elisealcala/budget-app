import { Field, Float, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class AccountVariablesInput {
  @MinLength(1)
  @Field()
  name: string;

  @Field()
  active: boolean;

  @Field(() => Float)
  openingAmount: number;

  @Field()
  currencyIso: string;
}
