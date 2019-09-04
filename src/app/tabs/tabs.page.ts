import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

    num: Boolean = false ;

    constructor(private alertcontroller: AlertController,
               ) {
    }

    async presentAlert() {
        const alert = await this.alertcontroller.create({
            header: '消息提示',
            message: '你有一个井维修任务，是否要接收此任务',
            buttons: [
                {
                    text: '查看详情',
                    handler: () => {
                        console.log(123);
                    }
                }
            ]
        });
        await alert.present();
    }

    ngOnInit() {
        setInterval(function () {
            this.num= true;
        }, 1000);
    }

}
