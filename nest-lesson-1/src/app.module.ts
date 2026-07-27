import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '19601970',
      database: 'nest3pm',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
