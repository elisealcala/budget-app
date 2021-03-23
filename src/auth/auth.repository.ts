import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/graphql.schema';
import { PrismaService } from 'src/prisma.service';
import { AuthCredentialsInput } from './dto/credentials.input';

@Injectable()
export class AuthRepository {
  constructor(private prismaService: PrismaService) {}

  async signUp(authCredentialsInput: AuthCredentialsInput): Promise<User> {
    const { username, password } = authCredentialsInput;

    const salt = await bcrypt.genSalt();

    const newPassword = await this.hashPassword(password, salt);

    try {
      const newUser = await this.prismaService.user.create({
        data: {
          username,
          salt,
          password: newPassword,
        },
      });

      return newUser;
    } catch (error) {
      console.log(error);
      if (error.code === 'P2002') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(
    authCredentialsInput: AuthCredentialsInput,
  ): Promise<string> {
    const { username, password } = authCredentialsInput;

    const user = await this.prismaService.user.findUnique({
      where: {
        username,
      },
    });

    if (user && (await this.validatePassword(password, user))) {
      return user.username;
    } else {
      return '';
    }
  }

  private async validatePassword(password: string, user: User) {
    const { salt, password: userPassword } = user;

    const hash = await bcrypt.hash(password, salt);

    return hash === userPassword;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
