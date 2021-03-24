import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Transaction } from 'src/graphql.schema';
import { TransactionDto } from './dto/transaction.dto';
import { TransactionsService } from './transactions.service';

@Resolver()
export class TransactionResolver {
  constructor(private transactionService: TransactionsService) {}

  @Mutation(() => Transaction)
  createTransaction(
    @Args('createTransactionInput')
    createTransactionInput: TransactionDto,
  ) {
    const {
      amount,
      type,
      date,
      currencyIso,
      accountId,
    } = createTransactionInput;

    return this.transactionService.createTransaction({
      amount,
      type,
      date,
      currency: {
        connect: {
          iso: currencyIso,
        },
      },
      account: {
        connect: {
          id: accountId,
        },
      },
    });
  }
}
