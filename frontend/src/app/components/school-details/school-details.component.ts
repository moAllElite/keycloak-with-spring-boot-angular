import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute,  Router} from "@angular/router";
import {SchoolCrudService} from "../../services/school-crud.service";
import { Observable} from "rxjs";
import {School} from "../../models/School";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrl: './school-details.component.css'
})
export class SchoolDetailsComponent implements OnInit{
  id!:number;
  roles!:any;
  school$!:Observable<School>;
  infoMessage = signal<string>('');
  constructor(private route: ActivatedRoute,
              protected keycloakService:KeycloakService
              ,readonly router:Router,
              private schoolCrudService:SchoolCrudService) {
    this.id =  this.route.snapshot.params['id'];
    console.log(this.id);
    this.roles = this.keycloakService.getUserRoles();

  }

  ngOnInit(): void {
    this.school$ = this.schoolCrudService.getSChoolById(this.id);

  }


  onDeleteSchool(id?: number) :void{
    this.schoolCrudService.deleteById(id);
    this.infoMessage.set('Deleted successfully.');
  }

}
