import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NavigationModule } from './navigation/navigation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from './core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'aimbra_education',
      schema: 'public_client',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true, // DEV only, do not use on PROD!
    }),
    NavigationModule,
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
