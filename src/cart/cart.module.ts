import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { CouponsModule } from 'src/coupons/coupons.module';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity]), CouponsModule],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
