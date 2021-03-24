
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum TransactionType {
    EXPENSES = "EXPENSES",
    INCOMES = "INCOMES",
    TRANSFER = "TRANSFER"
}

export class AccountVariablesInput {
    name?: string;
    active?: boolean;
    openingAmount?: number;
    currencyIso?: string;
}

export class AuthCredentialsInput {
    username?: string;
    password?: string;
}

export class CreateTransactionInput {
    amount?: number;
    type?: TransactionType;
    date?: string;
    accountId?: string;
    currencyIso?: string;
}

export class Currency {
    iso?: string;
    name?: string;
}

export class Account {
    id?: string;
    name?: string;
    active?: boolean;
    openingAmount?: BigNumber;
    mainCurrency?: Currency;
}

export abstract class IMutation {
    abstract createAccount(accountVariables?: AccountVariablesInput): Account | Promise<Account>;

    abstract signUp(authCredentials?: AuthCredentialsInput): User | Promise<User>;

    abstract signIn(authCredentials?: AuthCredentialsInput): Token | Promise<Token>;

    abstract createTransaction(createTransactionInput?: CreateTransactionInput): Transaction | Promise<Transaction>;
}

export abstract class IQuery {
    abstract getAccounts(): Account[] | Promise<Account[]>;

    abstract users(): User[] | Promise<User[]>;
}

export class User {
    id?: string;
    username?: string;
    password?: string;
    salt?: string;
}

export class Token {
    accessToken?: string;
}

export class Transaction {
    id?: string;
    amount?: BigNumber;
    active?: boolean;
    date?: Date;
    type?: TransactionType;
    account?: Account;
    currency?: Currency;
}

export type BigNumber = any;
