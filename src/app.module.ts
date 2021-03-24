import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { CommonModule } from './common/common.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    AuthModule,
    AccountsModule,
    CommonModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
