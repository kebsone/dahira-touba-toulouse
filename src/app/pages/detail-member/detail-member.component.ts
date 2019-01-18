import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DahiraService } from '../../service/dahira.service';
import { AppUser, Commission, Poste } from '../../dahira.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-detail-member',
  templateUrl: './detail-member.component.html',
  styleUrls: ['./detail-member.component.scss']
})
export class DetailMemberComponent implements OnInit {
  private unsubscribe = new Subject<void>();
  detailsUserForm: FormGroup;
  user: AppUser;
  commissions: Commission[] = [];
  postes: Poste[] = [];
  get detailsUserFormControl() { return this.detailsUserForm.controls; }
  get nomControl() { return this.detailsUserForm.get('nom'); }
  get prenomControl() { return this.detailsUserForm.get('prenom'); }
  get professionControl() { return this.detailsUserForm.get('profession'); }
  get adresseControl() { return this.detailsUserForm.get('adresse'); }
  get genreControl() { return this.detailsUserForm.get('genre'); }
  get telephoneControl() { return this.detailsUserForm.get('telephone'); }
  get mailControl() { return this.detailsUserForm.get('mail'); }
  constructor(private route: ActivatedRoute, private dahiraService: DahiraService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.dahiraService.getDetailsUserByUsername(params['username']).subscribe(value => {
        this.user = value;
        this.updateForm();
      });
    });

    this.detailsUserForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
      profession: ['', Validators.required],
      adresse: ['', Validators.required],
      genre: ['', Validators.required],
      telephone: ['', Validators.required],
      mail: ['', Validators.required]
    });

    this.dahiraService.getCommissions().subscribe((value: Commission[]) => {
      console.log(value);
      this.commissions = value;
    });

    this.dahiraService.getPostes().subscribe((value: Poste[]) => {
      console.log(value);
      this.postes = value;
    });

  }

  updateForm() {
    const appUser: AppUser = this.user;
    this.nomControl.setValue(appUser.nom);
    this.prenomControl.setValue(appUser.prenom);
    this.genreControl.setValue(appUser.genre);
    this.mailControl.setValue(appUser.mail);
    this.telephoneControl.setValue(appUser.telephone);
    this.adresseControl.setValue(appUser.adresse);
  }

  enregistrer() {
    this.dahiraService.updateUser(this.detailsUserForm.value).subscribe((response: AppUser) => {
      this.user = response;
      this.updateForm();
    });
  }

  annuler() {
  }

}
