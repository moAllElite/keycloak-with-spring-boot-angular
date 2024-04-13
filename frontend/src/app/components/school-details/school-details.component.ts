import {Component, signal, WritableSignal} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SchoolCrudService} from "../../services/school-crud.service";
import {map} from "rxjs";
import {School} from "../../models/School";

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.css'
})
export class SchoolDetailsComponent {
  id:number;
  school:WritableSignal<School | null>=signal(null);
  constructor(private route: ActivatedRoute,readonly router:Router,readonly schoolCrudService:SchoolCrudService) {
    this.id =  this.route.snapshot.params['id'];
    this.schoolCrudService.getAllSchools().pipe(
      map(item=>{
        item.filter(
          value => {
            if(value.id === this.id) this.school.set(value)
          }
        );

      }
      )
    );
  }

  onDelete(id: number | undefined) {

  }

  onUpdate(item: any) {

  }
}
