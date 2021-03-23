import { Scalar, CustomScalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import BigNumber from 'bignumber.js';

BigNumber.config({ DECIMAL_PLACES: 2 });

@Scalar('BigNumber')
export class BigNumberScalar implements CustomScalar<string, BigNumber> {
  description = 'BigNumber custom scalar type';

  parseValue(value: string): BigNumber {
    console.log('parseValue', value);
    if (new BigNumber(value).isNaN()) {
      throw new TypeError(`${String(value)} is not a valid decimal value.`);
    }

    return new BigNumber(value); // value from the client
  }

  serialize(value: BigNumber): string {
    return new BigNumber(value).toFixed(2); // value sent to the client
  }

  parseLiteral(ast: ValueNode): BigNumber {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(`${String(ast)} is not a valid decimal value.`);
    }

    return new BigNumber(ast.value);
  }
}
