import { Component } from '@angular/core';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.componen.html',
})
export class MainPageComponent {
  constructor(public DBZService: DBZService) {}
}
