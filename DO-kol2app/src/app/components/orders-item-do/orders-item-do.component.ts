import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-do',
  templateUrl: './orders-item-do.component.html',
  styleUrls: ['./orders-item-do.component.css']
})
export class OrdersItemDOComponent implements OnInit {


  @Input() id?: string;
  @Input() title?: string;
  @Input() text: string;
  @Input() image?: string;
  @Input() price?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
