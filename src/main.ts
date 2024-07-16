import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // this will remove any property that is not defined in the DTO
      forbidNonWhitelisted: true, // this will throw an error if any property is not defined in the DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
