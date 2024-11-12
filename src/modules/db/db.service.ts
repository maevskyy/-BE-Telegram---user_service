import { InternalLogger } from '@/common/logger';
import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class DbService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new InternalLogger(DbService.name)

    constructor(
        @Inject('KNEX_CONNECTION') private readonly db: Knex,
    ) { }

    async onModuleInit() {
        try {
            await this.ping();
            this.logger.info('DB Connected successfully')
        } catch (e) {
            this.logger.error(e as Error, 'DB Connection Error');
            process.exit(1);
        }
    }

    onModuleDestroy() {
        this.db.destroy();
    }

    async ping() {
        return this.db.raw('SELECT 1+1');
    }
}
