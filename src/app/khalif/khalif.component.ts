import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-khalif',
  templateUrl: './khalif.component.html',
  styleUrls: ['./khalif.component.scss']
})
export class KhalifComponent implements OnInit {
@Input() khalif ;
  constructor(private router: Router) { }

  ngOnInit() {

  }

detailKhalif(id: number) {
  console.log(id);
  this.router.navigate(['actualite']);

}


}
