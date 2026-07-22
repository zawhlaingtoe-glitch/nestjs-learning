import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/home")
  getHome(): string {
    return  "Home"
  }
  @Get("about")
  getAbout(): string {
    return "About"
  }
  @Get("/userlists")
  getUserlist(): string[] {
    return ["Aye","Zaw","David"]
  }
  @Get("/object")
  getObject(): object{
    return {id: "1",name: "David"}
  }
}
