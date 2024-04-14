import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
import { AuthGuard } from './guards/auth.guard';
import {NewSchoolComponent} from "./components/new-school/new-school.component";

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {
    path:'schools',
    canActivate:[AuthGuard],
    data:{roles:['default-roles-learn-realm']},
    children:[
      {
        path: '',redirectTo: 'all',pathMatch:'full'
      },
      {path:'all',component: SchoolListComponent},
      {path: ':id',component: SchoolDetailsComponent},
    ]
  },
  {
    path:'admin',
    canActivate:[AuthGuard],
    data:{roles:['ADMIN']},
    children:[
      {path:'',redirectTo:'new-school',pathMatch:'full'},
      {path:'new-school',component:NewSchoolComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
