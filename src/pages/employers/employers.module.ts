import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployersPage } from './employers';

@NgModule({
  declarations: [
    EmployersPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployersPage),
  ],
})
export class EmployersPageModule {}
