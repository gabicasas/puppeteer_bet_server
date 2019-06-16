import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


// tslint:disable-next-line:no-var-requires
import session = require('express-session');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({ secret: 'nest is awesome' }));
  await app.listen(3000);
}
bootstrap();
