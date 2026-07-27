import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  createCat(@Body() cat: CreateCatDto) {
    console.log('cat : >> ', cat);
    return this.catsService.addCat(cat);
  }

  @Get()
  async getAllCats() {
    return this.catsService.getAllCats();
  }

  @Get(':id')
  async getCatById(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.getCatById(id);
  }

  @Put(':id')
  async updateCat(
    @Param('id', ParseIntPipe) id: number,
    @Body() cat: UpdateCatDto,
  ) {
    return this.catsService.updateCat(id, cat);
  }

  @Delete(':id')
  async deleteCat(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.deleteCat(id);
  }
}
