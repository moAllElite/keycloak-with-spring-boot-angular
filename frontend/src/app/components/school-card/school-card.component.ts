import {Component, input, InputSignal,} from '@angular/core';
import {School} from "../../models/School";
import { Router} from "@angular/router";


@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrl: './school-card.component.css'
})
export class SchoolCardComponent {
  school:InputSignal<School>=input();
  today: number = Date.now();
  constructor( private router: Router) {
  }
  onShowDetails(id: any) {
    this.router.navigateByUrl(`schools/${id}`).then();
  }
}
