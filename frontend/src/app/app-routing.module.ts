import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {
    path:'schools',
  //  component:SchoolListComponent,
    canActivate:[AuthGuard],
    data:{roles:['USER']},
    children:[
      {path:'',redirectTo:'all',pathMatch:'full'},
      {path:'all',component:SchoolListComponent},
      {path:'schools/:id',component:SchoolDetailsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
