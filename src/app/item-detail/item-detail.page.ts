import {Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-item-detail',
    templateUrl: './item-detail.page.html',
    styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit, DoCheck, OnDestroy {

    // baidu map

    titlename: string;
    type: string;
    date: string;
    status: number;
    itemDetailData: Array<ItemDetailData>;

    constructor(private routerInfo: ActivatedRoute) {
    }

    ngOnInit() {
        // this.titlename = this.routerInfo.snapshot.queryParams['id'];
        // this.type = this.routerInfo.snapshot.queryParams['type'];
        // this.date = this.routerInfo.snapshot.queryParams['time'];
        // this.status = this.routerInfo.snapshot.queryParams['status'];
        //
        this.itemDetailData = [
            new ItemDetailData('#ID', '132456'),
            new ItemDetailData('传感器个数', '25'),
            new ItemDetailData('水位', '123'),
            new ItemDetailData('水流量', '456'),
            new ItemDetailData('渗透率', '789'),
            new ItemDetailData('地址', 'adasdas'),
            new ItemDetailData('维修状态', ''),
        ];
        if (this.status==1) {
            this.itemDetailData[6].value = '已接收任务';
        }else if(this.status==0){
            this.itemDetailData[6].value = '任务未接收';
        }else {
            this.itemDetailData[6].value = '任务已完成';
        }
    }

    //在每个 Angular 变更检测周期中调用。
    ngDoCheck(): void {
        this.titlename = this.routerInfo.snapshot.queryParams['id'];
        this.type = this.routerInfo.snapshot.queryParams['type'];
        this.date = this.routerInfo.snapshot.queryParams['time'];
        this.status = this.routerInfo.snapshot.queryParams['status'];
    }

    ngOnDestroy(): void {
        console.log('销毁');
    }

}

class ItemDetailData {
    constructor(public key: string,
                public value: string) {
    }

}
