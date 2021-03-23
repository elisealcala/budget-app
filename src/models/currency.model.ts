import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType('Currency')
export class Currency {
  @Field(() => ID)
  iso: string;

  @Field()
  name: string;
}
