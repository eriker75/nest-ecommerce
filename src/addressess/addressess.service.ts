import { Injectable } from '@nestjs/common';
import { CreateAddressessDto } from './dto/create-addressess.dto';
import { UpdateAddressessDto } from './dto/update-addressess.dto';

@Injectable()
export class AddressessService {
  create(createAddressessDto: CreateAddressessDto) {
    return 'This action adds a new addressess';
  }

  findAll() {
    return `This action returns all addressess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressess`;
  }

  update(id: number, updateAddressessDto: UpdateAddressessDto) {
    return `This action updates a #${id} addressess`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressess`;
  }
}
