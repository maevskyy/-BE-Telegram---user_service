import { Injectable } from '@nestjs/common';

@Injectable()
export class UserConnectorService {
    db: [
        { id: '1', name: 'Mitya' }
    ]

    getOneUser(id: string) {
        return { name: 'privet' }
    }
}
