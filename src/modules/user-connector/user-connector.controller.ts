import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserConnectorService } from './user-connector.service';
import { InternalLogger } from '@/common/logger';
import { EUserMessagePatterns } from './types';
import { UserDTO } from './dto';

@Controller('user-connector')
export class UserConnectorController {
    private logger = new InternalLogger(UserConnectorController.name)

    constructor(
        private readonly userService: UserConnectorService,
    ) { }

    @MessagePattern(EUserMessagePatterns.AUTH_USER)
    authHandler(@Payload() data: UserDTO) {
        this.logger.info(JSON.stringify(data))
        return data
    }

    // @MessagePattern(EUserMessagePatterns.GET_ONE_USER)
    // getOneUser(@Payload() userId: string) {
    //     this.logger.info(JSON.stringify(userId))
    //     return this.userService.getOneUser(userId)
    // }
}
