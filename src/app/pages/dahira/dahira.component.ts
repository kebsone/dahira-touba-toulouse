import { Component, OnInit } from '@angular/core';
import { DahiraService } from '../../service/dahira.service';

@Component({
  selector: 'app-dahira',
  templateUrl: './dahira.component.html',
  styleUrls: ['./dahira.component.scss']
})
export class DahiraComponent implements OnInit {

  constructor(private dahiraService: DahiraService) { }

  ngOnInit() {
    this.dahiraService.getCommissions().subscribe(value => {
      console.log(value);
    });
  }


  tabSelected(event) {
    console.log(event);


  }
}
