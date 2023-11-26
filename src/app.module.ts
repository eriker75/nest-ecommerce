import { Module } from '@nestjs/common';
import { AppModules } from './modules';
import { SeedModule } from './seed/seed.module';
import { SeedRepositoryService } from './seed.repository/seed.repository.service';

@Module({
  imports: [...AppModules, SeedModule],
  providers: [SeedRepositoryService],
})
export class AppModule {}
