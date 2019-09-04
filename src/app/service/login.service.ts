import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
    })
};

@Injectable({
    providedIn: 'root'
})


export class LoginService {

    constructor(private http:HttpClient) {}
    public getLoginInfo(params):Observable<any>{
        console.log(params);
        return this.http.post('http://192.168.28.71/testW.php',params,httpOptions);
        // return this.http.post('http://192.168.28.19:9099/login',params, httpOptions)
    }

}
