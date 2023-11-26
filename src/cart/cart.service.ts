import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartEntity } from './entities/cart.entity';
import { CouponsService } from 'src/coupons/services/coupons.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,
    private readonly couponsService: CouponsService,
  ) {}

  async create(createCartDto: CreateCartDto): Promise<CartEntity> {
    if (createCartDto.items.length <= 0) {
      throw new BadRequestException('Items cannot be empty');
    }
    createCartDto.items.forEach(async (item) => {
      if (item.coupon) {
        const coupon = await this.couponsService.findOne(item.coupon);
        if (coupon) {
          /* let price = (await this.productsService.findOne(item.productId)).salePrice;
          price = await this.couponsService.applyDiscount(item.coupon, price); */
          item.price = 0;
        } else {
          throw new BadRequestException('Invalid coupon');
        }
      }
    });
    return await this.cartRepository.save(createCartDto);
  }

  async findAll(): Promise<CartEntity[]> {
    return await this.cartRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return updateCartDto;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
