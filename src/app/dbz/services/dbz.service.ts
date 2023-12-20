import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid} from 'uuid'



@Injectable({
  providedIn: 'root'
})
export class DbzService{

  public characters: Character [] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9000
  },{
    id: uuid(),
    name: 'Vegueta',
    power: 8300
  }];

  addCharacter(character: Character): void {

    const newcharacter: Character = { ...character,id: uuid(),};
    console.log(newcharacter)
    this.characters.push(newcharacter);
  }

  onDeleteCharacterById(id: string): void {

    this.characters = this.characters.filter(character => character.id !== id);
  }

}

