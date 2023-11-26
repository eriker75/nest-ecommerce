import { Injectable } from '@nestjs/common';
import { CreateCouponDto, UpdateCouponDto } from '../dto';
import { CouponsRepository } from '../repository/coupon.repository';
import { CouponEntity } from '../entities/coupon.entity';

@Injectable()
export class CouponsService {
  constructor(private readonly couponsRepository: CouponsRepository) {}

  async create(createCouponDto: CreateCouponDto): Promise<CouponEntity> {
    return await this.couponsRepository.create(createCouponDto);
  }

  async findAll(): Promise<CouponEntity[]> {
    return await this.couponsRepository.findAll();
  }

  async findOne(id: string): Promise<CouponEntity> {
    return await this.couponsRepository.findOne(id);
  }

  async exists(id: string): Promise<boolean> {
    return await this.couponsRepository.exists(id);
  }

  async applyDiscount(id: string, price: number): Promise<number> {
    const coupon = await this.couponsRepository.findOne(id);
    if (coupon.type === 'amount') {
      return price - coupon.discountAmount;
    }
    if (coupon.type === 'percentage') {
      const percentage = coupon.discountPercentage / 100;
      return price - price * percentage;
    }
    if (coupon.type === 'free') {
      return 0;
    }
    if (coupon.type === 'both') {
      const percentage = coupon.discountPercentage / 100;
      return price - price * percentage - coupon.discountAmount;
    }
    return price;
  }

  async update(id: string, updateCouponDto: UpdateCouponDto) {
    return await this.couponsRepository.update(id, updateCouponDto);
  }

  async remove(id: string) {
    return await this.couponsRepository.remove(id);
  }
}
