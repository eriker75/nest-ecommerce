import { Module } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { SettingsController } from './settings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingEntity } from './entities/setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SettingEntity])],
  controllers: [SettingsController],
  providers: [SettingsService],
  exports: [TypeOrmModule, SettingsService],
})
export class SettingsModule {}
