import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const username = configService.get<string>('DB_USER');
        const database = configService.get<string>('DB_NAME');
        const password = configService.get<string>('DB_PASSWORD');
        const port = configService.get<number>('DB_PORT');
        return {
          type: 'postgres',
          host: 'localhost',
          port,
          username,
          password,
          database,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
