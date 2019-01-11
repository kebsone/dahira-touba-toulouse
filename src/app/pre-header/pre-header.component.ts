import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DahiraService } from '../service/dahira.service';
import { AppUser } from '../dahira.interface';

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss']
})
export class PreHeaderComponent implements OnInit, OnChanges {
  @Input()currentUser: AppUser = null;
  constructor(private router: Router, private dahiraService: DahiraService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('dans header', changes);
  }
  seConnecter() {
    this.router.navigateByUrl('/login');
    console.log('dans preheader',    localStorage.getItem('currentUser'));
  }


  deconnecter() {
    this.dahiraService.deconnecter();
  }

  isAuthenticated(): boolean {
    return this.dahiraService.isAuthencated();
  }


}
