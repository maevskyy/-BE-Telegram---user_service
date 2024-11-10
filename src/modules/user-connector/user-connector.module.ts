import { Module } from '@nestjs/common';
import { UserConnectorController } from './user-connector.controller';
import { UserConnectorService } from './user-connector.service';

@Module({
  imports: [],
  controllers: [UserConnectorController],
  providers: [UserConnectorService]
})
export class UserConnectorModule { }
