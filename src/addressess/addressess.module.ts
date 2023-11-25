import { Module } from '@nestjs/common';
import { AddressessService } from './addressess.service';
import { AddressessController } from './addressess.controller';

@Module({
  controllers: [AddressessController],
  providers: [AddressessService],
})
export class AddressessModule {}
