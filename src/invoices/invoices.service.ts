import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto';
import { InvoiceEntity } from './entities/invoice.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(InvoiceEntity)
    private invoiceRepository: Repository<InvoiceEntity>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<InvoiceEntity> {
    const invoice = this.invoiceRepository.create(createInvoiceDto);
    return this.invoiceRepository.save(invoice);
  }

  async findAll(): Promise<InvoiceEntity[]> {
    return this.invoiceRepository.find();
  }

  async findOne(id: string): Promise<InvoiceEntity> {
    return this.invoiceRepository.findOneBy({ id });
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.findOne(id);
    this.invoiceRepository.merge(invoice, updateInvoiceDto);
    return this.invoiceRepository.save(invoice);
  }

  async remove(id: string): Promise<void> {
    await this.invoiceRepository.delete(id);
  }
}
