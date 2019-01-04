import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }


  seConnecter() {
    this.router.navigate(['login']);
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
