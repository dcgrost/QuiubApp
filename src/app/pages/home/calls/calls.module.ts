import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallsPageRoutingModule } from './calls-routing.module';

import { CallsPage } from './calls.page';
import { UserRegisterModule } from 'src/app/components/user-register/user-register.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallsPageRoutingModule,
    UserRegisterModule,
  ],
  declarations: [CallsPage]
})
export class CallsPageModule {}
