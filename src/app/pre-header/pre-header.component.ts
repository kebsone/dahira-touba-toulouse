import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { AppUser } from '../dahira.interface';

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss']
})
export class PreHeaderComponent implements OnInit, OnChanges {
  @Input()currentUser: AppUser = null;
  constructor(private router: Router, private authService: AuthenticationServiceService) { }

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
    this.authService.deconnecter();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthencated();
  }


}
