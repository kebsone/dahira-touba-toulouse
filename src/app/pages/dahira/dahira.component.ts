import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dahira',
  templateUrl: './dahira.component.html',
  styleUrls: ['./dahira.component.scss']
})
export class DahiraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  tabSelected(event) {
    console.log(event);


  }
}
