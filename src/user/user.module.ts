import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, PrismaService],
})
export class UserModule {}
