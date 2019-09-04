import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo:'main',pathMatch:'full'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'main', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'Welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
    {path: 'itemDetail', loadChildren: './item-detail/item-detail.module#ItemDetailPageModule' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
