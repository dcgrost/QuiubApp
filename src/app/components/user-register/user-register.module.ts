import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UserRegisterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UserRegisterComponent]
})
export class UserRegisterModule { }
