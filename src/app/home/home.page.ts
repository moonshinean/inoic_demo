import {Component} from '@angular/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})

export class HomePage {
    // onSubmit() {
    //     console.log('123');
    // }

   public itemdata: Array<ItemData>;

    constructor(){
    }
    ngOnInit(){
        this.itemdata = [
            new ItemData('156246124842','101','2018-12-12 12:12:12'),
            new ItemData('235411454511','102','2018-10-29'),
        ];

    }

}

export class ItemData {
    constructor(
        public name: string,
        public type: string,
        public date: string
    ) {
    }
}
