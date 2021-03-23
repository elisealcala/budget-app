import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { PrismaService } from 'src/prisma.service';
import { AccountsResolver } from './accounts.resolver';
import { AccountsService } from './accounts.service';

@Module({
  providers: [AccountsService, PrismaService, AccountsResolver],
  imports: [CommonModule],
})
export class AccountsModule {}
