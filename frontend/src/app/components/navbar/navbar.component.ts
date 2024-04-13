import {Component,  OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {KeycloakService} from "keycloak-angular";
import {KeycloakProfile} from "keycloak-js";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  items:any=[
    {name:'Home',navUrlLink:'home',icons:'bi bi-house'},
    {name:'Schools',navUrlLink: 'schools',icons: 'bi bi-backpack2-fill'},
  ];
  adminActions:any=[
    {name: 'New school',navUrlLink: 'admin',icons: 'bi bi-plus-circle'},
  ];

  profiles:KeycloakProfile| null = null;
  constructor(protected keycloakService:KeycloakService ,private router:Router) {
  }

  ngOnInit(): void {
    const isAuthenticated = this.keycloakService.isLoggedIn();
    if(isAuthenticated){
      this.keycloakService.loadUserProfile().then(
        profile=> {
          this.profiles = profile;
        }

      );
    }else {
      console.log("NOT logged in");
    }
  }


  onLogout() {
    this.keycloakService.logout(window.location.origin).then();
  }

  show(url:string) {
    this.router.navigate([url]);
  }

  onLogin() {
    this.keycloakService.login();
  }
}
