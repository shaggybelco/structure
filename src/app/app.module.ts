//modules++++++++++++++++++++++++++++++++++++++++++++++
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { AuthModule } from './auth/auth.module';

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
    PublicModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
