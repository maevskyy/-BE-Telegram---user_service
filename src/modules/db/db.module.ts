import { Module, Global } from '@nestjs/common';
import knex from 'knex';
import { internalConfig } from '@/common/config'
import { DbService } from './db.service';

const { host, database, port, username, password } = internalConfig.db.postgres

@Global()
@Module({
  providers: [
    {
      provide: 'KNEX_CONNECTION',
      useFactory: async () => {
        return knex({
          client: 'pg',
          connection: {
            host: host,
            port: Number(port),
            user: username,
            password: password,
            database: database,
          },
          pool: {
            min: 2,
            max: 10,
          },
        });
      },
    },
    DbService
  ],
  exports: ['KNEX_CONNECTION'],
})
export class DBModule { }
