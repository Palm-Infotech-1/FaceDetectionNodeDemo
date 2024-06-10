import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { static as static_ } from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', static_(join(__dirname, '..', 'public')));
  await app.listen(3000);
}
bootstrap();
