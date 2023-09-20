import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componen.html',
})
export class MainPageComponent {
  constructor(private DBZService: DBZService) {}

  get characters(): Character[] {
    return [...this.DBZService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.DBZService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.DBZService.addCharacter(character);
  }
}
