import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';

import  { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomMaterialModule } from './material/material.module';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { ConfigService } from './config.service';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { RoutingModule } from './routing/routing.module';


@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbCollapseModule, CustomMaterialModule, AngularFontAwesomeModule, ReactiveFormsModule, RoutingModule ],
  declarations: [ AppComponent, FooterComponent, HeaderComponent, LoginComponent, WelcomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService, UserService]
})
export class AppModule { }
