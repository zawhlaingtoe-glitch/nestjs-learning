import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';
import { Cat } from './entities/cats.entity';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private readonly catsRepository: Repository<Cat>,
  ) {}

  getAllCats(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async getCatById(id: number): Promise<Cat> {
    const cat = await this.catsRepository.findOneBy({ id });

    if (!cat) {
      throw new NotFoundException('Cat not found');
    }

    return cat;
  }

  async addCat(cat: CreateCatDto): Promise<Cat> {
    const newCat = this.catsRepository.create(cat);

    return this.catsRepository.save(newCat);
  }

  async updateCat(id: number, cat: UpdateCatDto): Promise<Cat> {
    const existingCat = await this.getCatById(id);
    const updatedCat = this.catsRepository.merge(existingCat, cat);

    return this.catsRepository.save(updatedCat);
  }

  async deleteCat(id: number): Promise<{ deleted: boolean }> {
    const result: DeleteResult = await this.catsRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException('Cat not found');
    }

    return { deleted: true };
  }
}
