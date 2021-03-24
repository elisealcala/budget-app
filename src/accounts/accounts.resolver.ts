import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Account } from 'src/graphql.schema';
import { AccountsService } from './accounts.service';
import { AccountVariablesInput } from './input/variables.input';

@Resolver()
export class AccountsResolver {
  constructor(private accountService: AccountsService) {}

  @Mutation(() => Account)
  createAccount(
    @Args('accountVariables') accountVariables: AccountVariablesInput,
  ) {
    const { name, active, currencyIso, openingAmount } = accountVariables;

    return this.accountService.createAccount({
      name,
      active,
      mainCurrency: {
        connect: {
          iso: currencyIso,
        },
      },
      openingAmount,
    });
  }

  @Query(() => [Account])
  getAccounts() {
    return this.accountService.getAllAccounts();
  }
}
