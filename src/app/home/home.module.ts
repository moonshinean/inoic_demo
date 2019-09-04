import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {ItemComponent} from './item/item.component';
import {ItemAcceptComponent} from './item-accept/item-accept.component';
import {HistoryComponent} from './history/history.component';
import { HistorylistComponent } from './historylist/historylist.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomePage,
    },
];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routeConfig)
  ],
  declarations: [HomePage,ItemComponent,ItemAcceptComponent,HistoryComponent, HistorylistComponent]
})
export class HomePageModule {}
