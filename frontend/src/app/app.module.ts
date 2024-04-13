import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolCardComponent } from './components/school-card/school-card.component';
import { SchoolDetailsComponent } from './components/school-details/school-details.component';
import { KeycloakService } from 'keycloak-angular';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ModalComponent } from './components/modal/modal.component';
import { NewSchoolComponent } from './components/new-school/new-school.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AlertComponent } from './components/alert/alert.component';
function initializeKeycloak(keycloak: KeycloakService) {
  return  async () =>
    await keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'learn-realm',
        clientId: 'school-app'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SchoolListComponent,
    SchoolCardComponent,
    SchoolDetailsComponent,
    ModalComponent,
    NewSchoolComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(withFetch(),),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    KeycloakService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
