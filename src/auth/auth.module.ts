import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  providers: [AuthResolver, PrismaService, AuthService, AuthRepository],
})
export class AuthModule {}
