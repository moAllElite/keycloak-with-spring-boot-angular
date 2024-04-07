import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ShoolListComponent} from "./components/shool-list/shool-list.component";
export const routes: Routes = [
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {
    path:'schools',
    component:ShoolListComponent,
    children:[

    ],
  },
];
