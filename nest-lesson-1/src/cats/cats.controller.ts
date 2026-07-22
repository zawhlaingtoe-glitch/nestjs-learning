import { Controller ,Get,Post} from '@nestjs/common';

@Controller('cats')
export class CatsController {
    private  catLists = ["black","white","Yellow"]
 @Get("/")
 getAll(): string[]{
     return this.catLists;
    }
@Post()
create(name: string){
   this.catLists.push(name)
   return this.catLists
}

}
