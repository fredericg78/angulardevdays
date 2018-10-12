import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import  { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomMaterialModule } from './material/material.module';
import { AngularFontAwesomeModule} from 'angular-font-awesome';



@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbCollapseModule, CustomMaterialModule, AngularFontAwesomeModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
