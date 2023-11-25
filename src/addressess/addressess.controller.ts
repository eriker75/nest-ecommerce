import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressessService } from './addressess.service';
import { CreateAddressessDto } from './dto/create-addressess.dto';
import { UpdateAddressessDto } from './dto/update-addressess.dto';

@Controller('addressess')
export class AddressessController {
  constructor(private readonly addressessService: AddressessService) {}

  @Post()
  create(@Body() createAddressessDto: CreateAddressessDto) {
    return this.addressessService.create(createAddressessDto);
  }

  @Get()
  findAll() {
    return this.addressessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressessDto: UpdateAddressessDto) {
    return this.addressessService.update(+id, updateAddressessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressessService.remove(+id);
  }
}
