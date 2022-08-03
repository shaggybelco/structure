//modules++++++++++++++++++++++++++++++++++++++++++++++
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';


//component=============================================
import { AppComponent } from './app.component';
//services=============================================


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
