import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DahiraService } from '../service/dahira.service';
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
  constructor(private router: Router, private dahiraService: DahiraService) { }

  ngOnInit() { }



  isAdmin(): boolean {
    return this.dahiraService.isAdmin();
  }


  isUser(): boolean {
    return this.dahiraService.isUser();
  }

  isAuthenticated(): boolean {
    return this.dahiraService.isAuthencated();
  }


  seConnecter(event: any) {
    event.stopPropagation();
    this.router.navigateByUrl('/login');
    console.log('dans preheader',    localStorage.getItem('currentUser'));
  }


  deconnecter() {
    this.dahiraService.deconnecter();
  }

  toggleSidenav() {
    this.isToggled = !this.isToggled;
    this.sideNaveToggled.emit(this.isToggled);
  }

}
