import { Injectable } from '@nestjs/common';
import { CreateCouponDto } from '../dto/create-coupon.dto';
import { CouponEntity } from '../entities/coupon.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CouponsRepository {
  constructor(
    @InjectRepository(CouponEntity)
    private couponRepository: Repository<CouponEntity>,
  ) {}

  async create(createCouponDto: CreateCouponDto): Promise<CouponEntity> {
    return await this.couponRepository.save(createCouponDto);
  }

  async findAll() {
    return await this.couponRepository.find();
  }

  async findOne(id: string) {
    return await this.couponRepository.findOneBy({ id });
  }

  async exists(id: string): Promise<boolean> {
    const coupon = await this.couponRepository.findOneBy({ id });
    return !!coupon;
  }

  async update(id: string, updateCouponDto: CreateCouponDto) {
    return await this.couponRepository.update(id, updateCouponDto);
  }

  async remove(id: string) {
    return await this.couponRepository.delete(id);
  }
}
