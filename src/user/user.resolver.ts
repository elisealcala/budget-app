import { Resolver, Query } from '@nestjs/graphql';
import { PrismaService } from '../prisma.service';
import { UserType } from './user.type';

@Resolver()
export class UserResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [UserType])
  users(): Promise<UserType[]> {
    return this.prismaService.user.findMany();
  }
}
