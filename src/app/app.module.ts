import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import  { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomMaterialModule } from './material/material.module';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { ConfigService } from './config.service';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbCollapseModule, CustomMaterialModule, AngularFontAwesomeModule ],
  declarations: [ AppComponent, FooterComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ConfigService, UserService]
})
export class AppModule { }
