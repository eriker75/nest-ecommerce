import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponsService } from './services/coupons.service';
import { CouponsController } from './controllers/coupons.controller';
import { CouponsRepository } from './repository/coupon.repository';
import { CouponEntity } from './entities/coupon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CouponEntity])],
  controllers: [CouponsController],
  providers: [CouponsRepository, CouponsService],
  exports: [TypeOrmModule, CouponsService],
})
export class CouponsModule {}
