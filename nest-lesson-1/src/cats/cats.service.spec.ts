import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CatsService } from './cats.service';
import { Cat } from './entities/cats.entity';

describe('CatsService', () => {
  let service: CatsService;
  const catsRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    merge: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CatsService,
        {
          provide: getRepositoryToken(Cat),
          useValue: catsRepository,
        },
      ],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all cats from the repository', async () => {
    const cats = [{ id: 1, name: 'Luna', age: 3, breed: 'Siamese' }];
    catsRepository.find.mockResolvedValue(cats);

    await expect(service.getAllCats()).resolves.toEqual(cats);
    expect(catsRepository.find).toHaveBeenCalledTimes(1);
  });

  it('should throw when a cat is not found by id', async () => {
    catsRepository.findOneBy.mockResolvedValue(null);

    await expect(service.getCatById(99)).rejects.toThrow('Cat not found');
    expect(catsRepository.findOneBy).toHaveBeenCalledWith({ id: 99 });
  });

  it('should create and save a cat', async () => {
    const createCatDto = { name: 'Milo', age: 5, breed: 'British Shorthair' };
    const cat = { id: 1, ...createCatDto };
    catsRepository.create.mockReturnValue(cat);
    catsRepository.save.mockResolvedValue(cat);

    await expect(service.addCat(createCatDto)).resolves.toEqual(cat);
    expect(catsRepository.create).toHaveBeenCalledWith(createCatDto);
    expect(catsRepository.save).toHaveBeenCalledWith(cat);
  });

  it('should delete a cat', async () => {
    catsRepository.delete.mockResolvedValue({ affected: 1 });

    await expect(service.deleteCat(1)).resolves.toEqual({ deleted: true });
    expect(catsRepository.delete).toHaveBeenCalledWith(1);
  });
});
