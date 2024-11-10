import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { internalConfig } from '@/common/config'
import { InternalLogger } from '@/common/logger'

const logger = new InternalLogger('App')

process.on('unhandledRejection', (reason: any, promise: any) => {
  logger.error(reason, promise);
  process.exit(1)
})

process.on('uncaughtException', (error: Error, source: any) => {
  logger.error(error, source);
  process.exit(1)
})

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: internalConfig.app.port,
        retryAttempts: 5,
        retryDelay: 1000
      }
    },
  )
  logger.info(String(internalConfig.app.port))
  app.listen()
}
bootstrap();
