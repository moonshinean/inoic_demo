import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, DoCheck {

    @Input()
    name: string;
    @Input()
    date: string;
    @Input()
    type: string;
    @Input()
    index: number;

    Refuse: string = '拒 绝';
    Accept: string = '接 受';

    GpsItem: Boolean = false;

    inputvalue: string;

    // messgae: string;

    constructor(public alertController: AlertController,
                private router:Router) {
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            header: '拒绝理由',
            inputs: [{
                name: 'name',
                type: 'text',
                placeholder: '输入拒绝得理由',
            }],
            // message:'<textarea placeholder="请输入拒绝理由"></textarea>',
            cssClass: 'action-sheets-basic',
            mode: 'md',
            buttons: [{
                text: '取消',
                cssClass: 'secondary',
                handler: function () {
                    console.log('取消');
                }
            }, {
                text: '确认',
                handler: function (value) {
                    let name = value.name;
                    console.log(name);
                }
            }],

        });
        await alert.present();
    }

    ngOnInit() {
       this
    }


    onRefuse() {
        if (!this.GpsItem) {
            this.presentAlert();
        } else {
            console.log('123');
        }
    }

    onAccept() {
        let gps = document.getElementsByClassName('refuse');
        gps.item(this.index).className = "btn-style  refuse  itemButton";
        this.Refuse = 'G P S';
        this.Accept = '完 成';
        console.log('123');
        this.GpsItem = true;
        // this.router.navigate(['./itemaccept']);

    }

    ionAlertDidDismiss() {
        console.log(123);
    }

    //修改
    ngDoCheck(): void {

    }

    ion() {
        console.log('123');
    }
}
