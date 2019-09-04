import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginService} from './service/login.service';
import {HttpClientModule} from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx'
// import { Geolocation } from 'cordova-baidu-location'

@NgModule({

  declarations: [AppComponent], // 声明组件
  entryComponents: [], // 配置不会在模板中使用的组件
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],  // 引入的模块  依赖的模块
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
      Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}  // 配置服服务
  ],
  bootstrap: [AppComponent]  // 启动模块
})
export class AppModule {}
