import {Component, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ToastController} from '@ionic/angular';

declare let BMap;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    longitude: number;
    latitude: number;

    constructor(private geolocation: Geolocation,
                private toastController: ToastController) {
    }
    async presentToast(Message, time) {
        const toast = await this.toastController.create({
            message: Message,
            duration: time,
            position: 'bottom',
            cssClass: 'tip'
            // animated:true,
        });
        toast.present();
    }

    getGPS() {
        this.geolocation.getCurrentPosition().then((resp) => {
            // resp.coords.latitude
            // resp.coords.longitude
            this.longitude = resp.coords.longitude;
            this.latitude = resp.coords.latitude;

            console.log(this.longitude+";"+this.latitude);
        }).catch((error) => {
            console.log('Error getting location', error);
        });

    }

    baidu() {
        // console.log(this.longitude+";"+this.latitude);
        setTimeout(function () {
        //
            const map = new BMap.Map('container');//创建地图实例
            // const point = new BMap.Point(this.longitude, this.latitude);//创建点坐标
            const point = new BMap.Point(106.657265, 26.682917);//创建点坐标
            // console.log(this.longitude,this.latitude);
            // const point = new BMap.Point(this.longitude , this.latitude);//创建点坐标
            map.centerAndZoom(point, 15);
            map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            const myIcon = new BMap.Icon('../assets/icon/ic_map.png', new BMap.Size(40, 40));
            const marker = new BMap.Marker(point, {icon: myIcon});
            // marker.setPoint(center);
            map.addOverlay(marker);// 创建标注
        }, 10000);
    }

    ngOnInit() {
        this.getGPS();
        this.baidu();
    }
    OnBai(){

        this.presentToast(this.longitude+';'+this.latitude, 1000);
}

}

