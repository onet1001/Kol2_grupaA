import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/do-data.service";

@Component({
  selector: 'app-orders-do',
  templateUrl: './orders-do.component.html',
  styleUrls: ['./orders-do.component.css']
})
export class OrdersDOComponent implements OnInit {

  public items$: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
