import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../service/authentication-service.service';
import { AppUser } from '../dahira.interface';
import { NullTemplateVisitor } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideNaveToggled: EventEmitter<boolean> = new EventEmitter();
  @Input() currentUser: AppUser = null;
  isToggled = false;
  constructor(private router: Router, private authService: AuthenticationServiceService) { }

  ngOnInit() { }



  isAdmin(): boolean {
    return this.authService.isAdmin();
  }


  isUser(): boolean {
    return this.authService.isUser();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthencated();
  }


  seConnecter(event: any) {
    event.stopPropagation();
    this.router.navigateByUrl('/login');
    console.log('dans preheader',    localStorage.getItem('currentUser'));
  }


  deconnecter() {
    this.authService.deconnecter();
  }

  toggleSidenav() {
    this.isToggled = !this.isToggled;
    this.sideNaveToggled.emit(this.isToggled);
  }

}
