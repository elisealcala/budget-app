import { Module } from '@nestjs/common';
import { BigNumberScalar } from 'src/scalar/decimal';

@Module({
  providers: [BigNumberScalar],
})
export class CommonModule {}
