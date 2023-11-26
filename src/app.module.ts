import { Module } from '@nestjs/common';
import { AppModules } from './modules';
@Module({
  imports: [...AppModules],
})
export class AppModule {}
