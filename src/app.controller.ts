import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('Bem vindo ao curso NodeJs com NestJs');
    return this.appService.getHello();
  }
}
