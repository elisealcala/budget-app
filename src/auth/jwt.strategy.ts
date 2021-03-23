import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtPayload } from './types/jwt-payload.interface';
import { User } from 'src/graphql.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user = await this.prismaService.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
