/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
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

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

export type Decimal = any;
export type BigNumber = any;
