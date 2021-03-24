import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', () => Date)
export class DateScalar implements CustomScalar<Date, string> {
  description = 'Date custom scalar type';

  parseValue(value: Date): string {
    return new Date(value).toISOString(); // value from the client
  }

  serialize(value: string): Date {
    return new Date(value); // value sent to the client
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value).toISOString();
    }
    return null;
  }
}
