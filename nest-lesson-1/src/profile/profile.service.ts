import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  // ✅ CREATE
  async create(createProfileDto: CreateProfileDto): Promise<Profile> {
    try {
      return await this.profileRepository.save(createProfileDto);
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Failed to create profile');
    }
  }

  // ✅ FIND ALL
  async findAll(): Promise<Profile[]> {
    return await this.profileRepository.find({
      relations: {user: true}
    });
  }

  // ✅ FIND ONE
  async findOne(id: number): Promise<Profile> {
    try {
      const profile = await this.profileRepository.findOne({
        where: { id },
        relations: {user: true}
      });

      if (!profile) {
        throw new BadRequestException('Profile not found');
      }

      return profile;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // ✅ UPDATE
  async update(
    id: number,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    try {
      const profile = await this.profileRepository.findOne({
        where: { id },
      });

      if (!profile) {
        throw new BadRequestException('Profile not found!');
      }

      await this.profileRepository.update(id, updateProfileDto);

      const updatedProfile = await this.profileRepository.findOne({
        where: { id },
      });

      return updatedProfile as Profile;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // ✅ DELETE
  async remove(id: number): Promise<Profile> {
    try {
      const profile = await this.profileRepository.findOne({
        where: { id },
      });

      if (!profile) {
        throw new BadRequestException('Profile not found!');
      }

      return await this.profileRepository.remove(profile);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}