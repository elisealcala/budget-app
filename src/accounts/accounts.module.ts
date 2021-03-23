import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';

@Module({
  providers: [AccountsService, PrismaService, AccountsResolver],
})
export class AccountsModule {}
