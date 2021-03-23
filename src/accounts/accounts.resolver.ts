import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AccountModel } from './account.model';
import { AccountsService } from './accounts.service';
import { AccountVariablesInput } from './input/variables.input';

@Resolver()
export class AccountsResolver {
  constructor(private accountService: AccountsService) {}

  @Mutation(() => AccountModel)
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
}
