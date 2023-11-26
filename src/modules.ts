import { CartModule } from './cart/cart.module';
import { ContactModule } from './contact/contact.module';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CouponsModule } from './coupons/coupons.module';
import { InvoicesModule } from './invoices/invoices.module';
import { FilesModule } from './files/files.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { ProductsModule } from './products/products.module';
import { ProvidersModule } from './providers/providers.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { MailModule } from './mail/mail.module';
import { AddressessModule } from './addressess/addressess.module';
import { CountriesModule } from './countries/countries.module';
import { DatabaseModule } from './database/database.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { BrandsModule } from './brands/brands.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PurchasesModule } from './purchases/purchases.module';
import { QueueModule } from './queue/queue.module';
import { CronModule } from './cron/cron.module';

const AppModules = [
  CartModule,
  ContactModule,
  CategoriesModule,
  TagsModule,
  WishlistModule,
  CouponsModule,
  InvoicesModule,
  FilesModule,
  UsersModule,
  OrdersModule,
  PaymentsModule,
  ProductsModule,
  ProvidersModule,
  AuthModule,
  SettingsModule,
  MailModule,
  AddressessModule,
  CountriesModule,
  DatabaseModule,
  ConfigurationsModule,
  BrandsModule,
  ReviewsModule,
  PurchasesModule,
  ConfigurationsModule,
  QueueModule,
  CronModule,
];

export { AppModules };
