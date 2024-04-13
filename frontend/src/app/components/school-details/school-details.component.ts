import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolCrudService} from "../../services/school-crud.service";
import { Observable} from "rxjs";
import {School} from "../../models/School";

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.css'
})
export class SchoolDetailsComponent implements OnInit{
  id!:number;
  school$!:Observable<School>;
  constructor(private route: ActivatedRoute,readonly router:Router,readonly schoolCrudService:SchoolCrudService) {
    this.id =  this.route.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit(): void {
    this.school$ = this.schoolCrudService.getSChoolById(this.id);
  }


  onDeleteSchool(id: number | undefined) {
    this.schoolCrudService.deleteById(id);
  }
}
