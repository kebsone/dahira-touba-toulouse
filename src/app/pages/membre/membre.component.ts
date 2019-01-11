import { Component, OnInit } from '@angular/core';
import { DahiraService } from '../../service/dahira.service';
import { AppUser } from '../../dahira.interface';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.scss']
})
export class MembreComponent implements OnInit {
  users: AppUser[] = [];

  constructor(private dahiraService: DahiraService) { }

  ngOnInit() {
    this.dahiraService.getMembres().subscribe((response: AppUser[]) => {
      console.log(response);
      this.users = response;
    }, error => console.log(error));
  }

  deleteUser(userId: number) {
    console.log(userId);
  }

}
