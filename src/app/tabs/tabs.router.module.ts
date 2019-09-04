import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';
import {HomePage} from '../home/home.page';
import {AboutPage} from '../about/about.page';
import {ContactPage} from '../contact/contact.page';
import {ItemAcceptComponent} from '../home/item-accept/item-accept.component';
import {ItemComponent} from '../home/item/item.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/main/tabs/(home:home)',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '/',
                redirectTo: '/main/tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage,
                children:[
                    {   path:'',
                        component:ItemComponent
                    },
                    {
                        path:'item',
                        component:ItemAcceptComponent
                    }
                ]
            },
            {
                path: 'about',
                outlet: 'about',
                component: AboutPage
            },
            {
                path: 'contact',
                outlet: 'contact',
                component: ContactPage
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
