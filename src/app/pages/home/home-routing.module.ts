import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'chats'
      },
      {
        path: 'chats',
        loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
      },
      {
        path: 'chats',
        loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
      },
      {
        path: 'updates',
        loadChildren: () => import('./updates/updates.module').then( m => m.UpdatesPageModule)
      },
      {
        path: 'calls',
        loadChildren: () => import('./calls/calls.module').then( m => m.CallsPageModule)
      },
      {
        path: 'community',
        loadChildren: () => import('./community/community.module').then( m => m.CommunityPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
