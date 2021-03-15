import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class AuthCredentialsInput {
  @MinLength(1)
  @Field()
  username: string;

  @MinLength(1)
  @Field()
  password: string;
}
