import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './profile/profile.component';
import { StatComponent } from './stat/stat.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../public/home/home.component';

const routes: Routes = [
  {
    path: 'dash',
    component: PrivateComponent,
    children: [
      { path: 'setting', component: SettingComponent },
      { path: 'stats', component: StatComponent },
      {path: 'profile', component: ProfileComponent},
      {path: '', component: HomeComponent}
    ],
  },
  {
    path: 'public/home', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    PrivateComponent,
    ProfileComponent,
    StatComponent,
    SettingComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PrivateModule { }
