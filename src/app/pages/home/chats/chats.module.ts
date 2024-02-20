import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPageRoutingModule } from './chats-routing.module';

import { ChatsPage } from './chats.page';
import { UserRegisterModule } from 'src/app/components/user-register/user-register.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    UserRegisterModule,
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
