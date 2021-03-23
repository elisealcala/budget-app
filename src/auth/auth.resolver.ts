import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Token, User } from 'src/graphql.schema';
import { AuthService } from './auth.service';
import { AuthCredentialsInput } from './dto/credentials.input';

@Resolver()
export class AuthResolver {
  constructor(private userService: AuthService) {}

  @Query(() => [User])
  users() {
    return this.userService.getAllUsers();
  }

  @Mutation(() => User)
  signUp(@Args('authCredentials') authCredentialsInput: AuthCredentialsInput) {
    return this.userService.signUp(authCredentialsInput);
  }

  @Mutation(() => Token)
  signIn(@Args('authCredentials') authCredentialsInput: AuthCredentialsInput) {
    return this.userService.signIn(authCredentialsInput);
  }
}
