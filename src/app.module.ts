import { Module } from '@nestjs/common';
import { VideoModule } from './modules/video/video.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [VideoModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { }
