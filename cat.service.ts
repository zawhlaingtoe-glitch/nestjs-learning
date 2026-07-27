// This file is practice  before TypeORM


import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';

@Injectable()
export class CatsService {

private readonly cats: { id: number; name: string; age: number; breed: string }[]=[

    {id:1, name: "Shew", age: 13,  breed: "Myanmar"},
    { id: 2, name: "Luna", age: 3, breed: "Siamese" },
  { id: 3, name: "Milo", age: 5, breed: "British Shorthair" },
  { id: 4, name: "Oliver", age: 2, breed: "Maine Coon" },
  { id: 5, name: "Leo", age: 4, breed: "Persian" },
  { id: 6, name: "Bella", age: 1, breed: "Ragdoll" },
  { id: 7, name: "Charlie", age: 6, breed: "Sphynx" },
  { id: 8, name: "Lucy", age: 8, breed: "Bengal" },
  { id: 9, name: "Max", age: 7, breed: "Scottish Fold" },
  { id: 10, name: "Chloe", age: 9, breed: "Abyssinian" }
]
  getAllCats(){
    return this.cats;
  }

  getCatById(id: number){
     const foundCats= this.cats.find(cat => cat.id === id)
    if (foundCats){
            return foundCats
    }else {
        return "Cat not found"
    }
  }

  addCat(cat: CreateCatDto){
    const  lastId = this.cats.length + 1;
    this.cats.push({id: lastId, ...cat})
    return  this.cats
  }
  
  updateCat(id: number, cat: UpdateCatDto){
    const catsIndex = this.cats.findIndex(cat => cat.id === id)
    if (catsIndex !== -1){

        this.cats[catsIndex] = {...this.cats[catsIndex], ...cat}
    }
    else {
        return "This cat not found"
    }
   return this.cats

  }

  deleteCat(id: number){
     const catsIndex = this.cats.findIndex(cat => cat.id ===id)
    if (catsIndex !== -1){
            this.cats.splice(catsIndex,1)
    }else {

        return "This cat not found!"
    }
    return this.cats
  }
}
