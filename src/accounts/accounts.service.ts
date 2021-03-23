import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { Account } from 'src/graphql.schema';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}

  async createAccount(data: Prisma.AccountCreateInput): Promise<Account> {
    return this.prismaService.account.create({
      data,
      include: {
        mainCurrency: true,
      },
    });
  }
}
