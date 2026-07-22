import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT  =  process.env.PORT || 3001;
  const HOST = process.env.HOST ||"localhost"
  

  await app.listen(PORT,HOST, () => console.log(`Your server is running at http://${HOST}:${PORT}`))
}
bootstrap();
