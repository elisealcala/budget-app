import { Module } from '@nestjs/common';
import { DateScalar } from 'src/scalar/date';
import { BigNumberScalar } from 'src/scalar/decimal';

@Module({
  providers: [BigNumberScalar, DateScalar],
})
export class CommonModule {}
