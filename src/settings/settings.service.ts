import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SettingEntity } from './entities/setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingEntity)
    private readonly settingRepository: Repository<SettingEntity>,
  ) {}

  async create(createSettingDto: CreateSettingDto) {
    const setting = this.settingRepository.create({
      metaKey: createSettingDto.metaKey,
      metaValue: JSON.stringify(createSettingDto.metaValue),
    });
    return this.settingRepository.save(setting);
  }

  async findAll() {
    return this.settingRepository.find();
  }

  async findByKey(key: string) {
    const setting = await this.settingRepository.findOneBy({ metaKey: key });
    return setting ? setting.metaValue : null;
  }

  async findValueByKey(key: string) {
    const setting = await this.settingRepository.findOneBy({ metaKey: key });
    return setting ? setting.metaValue : null;
  }

  async updateValueByKey(key: string, value: string) {
    const setting = await this.settingRepository.findOneBy({ metaKey: key });
    if (setting) {
      setting.metaValue = value;
      return this.settingRepository.save(setting);
    }
    return null;
  }

  async updateSettingKey(key: string, updateSettingDto: UpdateSettingDto) {
    const setting = await this.settingRepository.findOneBy({ metaKey: key });
    if (setting) {
      setting.metaKey = updateSettingDto.metaKey;
      return this.settingRepository.save(setting);
    }
    return null;
  }

  async deleteSettingByKey(key: string) {
    const setting = await this.settingRepository.findOneBy({ metaKey: key });
    if (setting) {
      return this.settingRepository.delete(setting);
    }
    return null;
  }

  async getAllKeys() {
    return await this.settingRepository.find({ select: ['metaKey'] });
  }
}
