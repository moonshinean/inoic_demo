import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {LoginService} from '../service/login.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    status:number;
    constructor(private router: Router,
                private toastController: ToastController,
                private login: LoginService) {


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

    ngOnInit() {

    }

    OnLogin(username: HTMLInputElement, password: HTMLInputElement) {
        let str="user="+username.value+"&password="+password.value;
        console.log('登陆');
        console.log(username.value);
        console.log(password.value);
        console.log({username:username.value ,pwd:password.value});

        this.login.getLoginInfo(str).subscribe(
            (value)=>{
                console.log(value);
                // this.login=value;
                this.status=value;
                console.log(this.status+":123");
                if (username.value.length == 0 || password.value.length == 0) {
                    this.presentToast('用户名或密码不能为空', 2000);
                    // alert("用户名或密码不能为空");
                } else if (this.status==10) {
                    this.presentToast('登陆成功', 1000);
                    this.router.navigate(['/main']);
                } else {
                    this.presentToast('用户名或密码错误', 2000);
                }
            }
        );
    }

}