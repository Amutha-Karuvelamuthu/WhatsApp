import { Routes } from '@angular/router'
import { TabsPage } from './tabs.page'
export const routes :Routes =[
{
    path:'tabs',
    component:TabsPage,
    children:[
        {
            path:'chats',
            loadComponent:()=> import('../chats/chats.page').then( m => m.ChatsPage)
        },
        {
            path:'updates',
            loadComponent:()=> import('../updates/updates.page').then( m => m.UpdatesPage)
        },
        {
            path:'communities',
            loadComponent:()=> import('../communities/communities.page').then( m => m.CommunitiesPage)
        },
        {
            path:'calls',
            loadComponent:()=> import('../calls/calls.page').then( m => m.CallsPage)
        },
    {
        path:'',
        redirectTo:'chats',
        pathMatch:'full'
    }
    ]
    },
        {
    path: '',
    redirectTo: 'tabs',
    pathMatch:'full'
    }
]