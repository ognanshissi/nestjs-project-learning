import { LoggerMiddleware } from './common/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
