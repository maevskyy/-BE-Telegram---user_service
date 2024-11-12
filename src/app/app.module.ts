import { Module } from '@nestjs/common';
import * as Modules from '@/modules'
import { PinoLogger } from './logger';


let imports = [...Object.values(Modules)]

let controllers;
let providers = [
  {
    provide: 'APP_LOGGER',
    useClass: PinoLogger
  }
];

@Module({
  imports,
  controllers,
  providers,
})
export class AppModule { }
