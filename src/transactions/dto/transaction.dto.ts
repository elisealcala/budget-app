import { Field, Float, InputType } from '@nestjs/graphql';

enum TransactionType {
  EXPENSES = 'EXPENSES',
  INCOMES = 'INCOMES',
  TRANSFER = 'TRANSFER',
}

@InputType()
export class TransactionDto {
  @Field(() => Float)
  amount: number;

  @Field(() => TransactionType)
  type: TransactionType;

  @Field()
  date: string;

  @Field()
  accountId: string;

  @Field()
  currencyIso: string;
}
