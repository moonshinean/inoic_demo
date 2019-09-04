import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-historylist',
  templateUrl: './historylist.component.html',
  styleUrls: ['./historylist.component.scss']
})
export class HistorylistComponent implements OnInit {
    @Input()
    name: string;
    @Input()
    date: string;
    @Input()
    type: string;
    @Input()
    Accept: string = '已 完 成';
    constructor() { }

  ngOnInit() {
  }

}
