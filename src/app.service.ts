import { Injectable } from '@nestjs/common';
// import { ConfigType } from '@nestjs/config';
// import config from './config';

@Injectable()
export class AppService {
  // constructor(
  //   //@Inject('API_KEY') private apiKey: string,
  //   @Inject('TASKS') private tasks: any[],
  //   @Inject(config.KEY) private configService: ConfigType<typeof config>,
  // ) {}
  getHello(): string {
    // const apiKey = this.configService.apiKey;
    // const dbname = this.configService.database.name;
    // ${apiKey} ${dbname}
    return `Hello World!`;
  }
}
