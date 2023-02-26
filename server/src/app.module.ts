import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfig } from './config/mongo.config';
import { SongModule } from './song/song.module';
import config from './config/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfig,
    }),
    SongModule,
  ],
})
export class AppModule {}
