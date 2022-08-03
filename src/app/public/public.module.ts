import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: 'public',
    component: PublicComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      {path: '', component: HomeComponent}
    ],
  },
];

@NgModule({
  declarations: [PublicComponent, HomeComponent, ContactComponent, NavComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
