import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-accept',
  templateUrl: './item-accept.component.html',
  styleUrls: ['./item-accept.component.scss']
})
export class ItemAcceptComponent implements OnInit {
    @Input()
    name: string;
    @Input()
    date: string;
    @Input()
    type: string;
    @Input()

    Refuse: string = 'GPS';
    Accept: string = '完 成';
  constructor() { }

  ngOnInit() {
  }
    onRefuse() {

        console.log('123');
    }

    onAccept() {

        console.log('123');
    }
}
