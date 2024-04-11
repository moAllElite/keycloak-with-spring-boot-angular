import {Component, signal} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {aliasTransformFactory} from "@angular/compiler-cli/src/ngtsc/transform";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  items:any=[
    {name:'Home',link:'home',icons:'bi bi-house'},
    {name:'Schools',link: 'schools',icons: 'bi bi-backpack2-fill'},
  ];
}
