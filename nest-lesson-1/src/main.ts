import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.PORT || 8000;
  const HOST = process.env.HOST || 'localhost';

  await app.listen(PORT, HOST, () =>
    console.log(`Your server is running at http://${HOST}:${PORT}`),
  );
}
void bootstrap();
