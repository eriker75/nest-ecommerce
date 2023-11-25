import { Module } from '@nestjs/common';
import { AppModules } from './modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ...AppModules],
})
export class AppModule {}
