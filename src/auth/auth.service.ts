import { User } from '.prisma/client';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AuthRepository } from './auth.repository';
import { AuthCredentialsInput } from './dto/credentials.input';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private authRepository: AuthRepository,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async signUp(authCredentialsInput: AuthCredentialsInput): Promise<User> {
    return this.authRepository.signUp(authCredentialsInput);
  }

  // async signIn(
  //   authCredentialsDto: AuthCredentialsDto,
  // ): Promise<{ accessToken: string }> {
  //   const username = await this.authRepository.validateUserPassword(
  //     authCredentialsDto,
  //   );

  //   if (!username) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }

  //   const payload: JwtPayload = { username };

  //   const accessToken = this.jwtService.sign(payload);

  //   return { accessToken };
  // }
}
