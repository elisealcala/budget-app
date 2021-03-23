import { Field, ObjectType, ID, Float } from '@nestjs/graphql';

import { Currency } from 'src/models/currency.model';

@ObjectType('Account')
export class AccountModel {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  active: boolean;

  @Field(() => Float)
  openingAmount: number;

  @Field(() => Currency, { nullable: true })
  mainCurrency: string;
}
