import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunk',
    power: 10
  }]


  onDeleteCharacter(id: string): void {
    console.log(id)
    this.onDeleteId.emit(id);
  }
}
