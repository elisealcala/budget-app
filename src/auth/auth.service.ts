import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/graphql.schema';
import { PrismaService } from 'src/prisma.service';
import { AuthRepository } from './auth.repository';
import { AuthCredentialsInput } from './dto/credentials.input';
import { JwtPayload } from './types/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private authRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async signUp(authCredentialsInput: AuthCredentialsInput): Promise<User> {
    return this.authRepository.signUp(authCredentialsInput);
  }

  async signIn(
    authCredentialsInput: AuthCredentialsInput,
  ): Promise<{ accessToken: string }> {
    const username = await this.authRepository.validateUserPassword(
      authCredentialsInput,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: JwtPayload = { username };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
