import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthCredentialsInput } from './dto/credentials.input';
import { TokenModel, UserModel } from './user.model';

@Resolver()
export class AuthResolver {
  constructor(private userService: AuthService) {}

  @Query(() => [UserModel])
  users(): Promise<UserModel[]> {
    return this.userService.getAllUsers();
  }

  @Mutation(() => UserModel)
  signUp(@Args('authCredentials') authCredentialsInput: AuthCredentialsInput) {
    return this.userService.signUp(authCredentialsInput);
  }

  @Mutation(() => TokenModel)
  signIn(@Args('authCredentials') authCredentialsInput: AuthCredentialsInput) {
    return this.userService.signIn(authCredentialsInput);
  }
}
