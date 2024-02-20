import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatesPageRoutingModule } from './updates-routing.module';

import { UpdatesPage } from './updates.page';
import { UserRegisterModule } from 'src/app/components/user-register/user-register.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatesPageRoutingModule,
    UserRegisterModule
  ],
  declarations: [UpdatesPage]
})
export class UpdatesPageModule {}
