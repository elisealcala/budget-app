import { Injectable } from '@nestjs/common';
import { Prisma, Transaction } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prismaService: PrismaService) {}

  async createTransaction(
    data: Prisma.TransactionCreateInput,
  ): Promise<Transaction> {
    return this.prismaService.transaction.create({
      data,
      include: {
        account: true,
        currency: true,
      },
    });
  }
}
