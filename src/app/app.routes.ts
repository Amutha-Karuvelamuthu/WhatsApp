import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'chat/:name/:img',
    loadComponent: () => import('./chat-detail/chat-detail.page').then( m => m.ChatDetailPage)
  },
 

];
