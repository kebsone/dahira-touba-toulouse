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
  userConnected: string;
  constructor(private router: Router, private dahiraService: DahiraService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }



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
  }


  deconnecter() {
    this.dahiraService.deconnecter();
    this.currentUser = null;

    this.goToDashbord();

  }

  goToDashbord() {
    this.router.navigateByUrl('/accueil');
  }

  refresh() {
    window.location.reload();
  }

  userDetails() {
     this.router.navigate([`membre/details/${this.currentUser.id}`], {queryParams : { username : this.currentUser.mail }});

  }

  toggleSidenav() {
    this.isToggled = !this.isToggled;
    this.sideNaveToggled.emit(this.isToggled);
  }

}
