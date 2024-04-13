import {Component,  OnInit, signal, WritableSignal} from '@angular/core';

import {School} from "../../models/School";
import {SchoolCrudService} from "../../services/school-crud.service";

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrl: './school-list.component.css'
})
export class SchoolListComponent implements OnInit{

  schools:WritableSignal<School[]> = signal<School[]>([]);
  constructor(protected readonly schoolCrudService: SchoolCrudService) {

  }

  ngOnInit(): void {
    this.schoolCrudService.getAllSchools().forEach(
      value => {
        this.schools.set(value);
      }
    ).then( r=> console.log(this.schools))
    console.log(this.schools())
  }




}
