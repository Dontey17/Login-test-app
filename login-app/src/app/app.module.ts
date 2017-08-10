import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { routing }        from './app.routing';
import {Authentication} from './service/authentication';
import {AllowAccess} from './service/allowAccess';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdSnackBar} from '@angular/material';
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
  Authentication,
  AllowAccess,
  MdSnackBar, 
  //OVERLAY_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
