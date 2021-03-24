import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/prisma.service';
import { TransactionResolver } from './transactions.resolver';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [CommonModule],
  providers: [TransactionsService, PrismaService, TransactionResolver],
})
export class TransactionsModule {}
