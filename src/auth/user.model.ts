import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  salt: string;
}

@ObjectType('Token')
export class TokenModel {
  @Field()
  accessToken: string;
}
