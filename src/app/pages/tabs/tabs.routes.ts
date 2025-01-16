import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                loadComponent: () => import('./home/home.page').then(m => m.HomePage) 
            },
            {
                path: 'card',
                loadComponent: () => import('./card/card.page').then(m => m.CardPage) 
            },
            {
                path: 'transactions',
                loadComponent: () => import('./transactions/transactions.page').then(m => m.TransactionsPage) 
            },
            {
                path: 'settings',
                loadComponent: () => import('./settings/settings.page').then(m => m.SettingsPage) 
            }
        ]
    },
    


]