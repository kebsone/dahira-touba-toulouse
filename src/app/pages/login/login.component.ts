import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationServiceService } from '../../service/authentication-service.service';
import { AppUser } from '../../dahira.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  inscriptionForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
   snackbarConfigSuccess: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'snack-bar-success'
  };
    snackbarConfigError: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: 'snack-bar-error'
  };
    snackbarConfigLongError: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    panelClass: 'snack-bar-error'
  };

    snackbarConfigErrorPersistant: MatSnackBarConfig = {
    // duration: 10000,
    horizontalPosition: 'right',
    verticalPosition: 'bottom',
    panelClass: 'snack-bar-error'
  };



  get loginFormContrl() {
    return this.loginForm.controls;
  }

  get inscriptionFormControl() {
    return this.inscriptionForm.controls;
  }
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthenticationServiceService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.inscriptionForm = this.formBuilder.group({
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
  }

  login() {
    this.authenticationService
      .login(
        this.loginFormContrl.mail.value,
        this.loginFormContrl.password.value
      )
      .subscribe(
      (response) => {
          const jwt = response.headers.get('Authorization');
          this.authenticationService.saveToken(jwt);
        this._snackBar.open('Connexion réussi', 'x', this.snackbarConfigSuccess);
          this.router.navigateByUrl('/');
        },
        (error: HttpErrorResponse) => {
          if (error) {
            this._snackBar.open('Vérifiez votre mail et mot de passe', 'x', this.snackbarConfigError);
          }
        });
  }

  inscrire() {
    console.log(this.inscriptionForm.value);
    const user = this.createUser();
    this.authenticationService.saveUser(user).subscribe(data => {
     console.log('retour de la creaion', data);
   });
  }



  createUser(): AppUser {
    return {
      nom: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.nom : null,
      prenom: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.prenom : null,
      password: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.password : null,
      confirmedPassword: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.confirmedPassword : null,
      mail: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.mail : null,
      adresse: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.adresse : null,
      telephone: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.telephone : null,
      genre: this.inscriptionForm && this.inscriptionForm.value ? this.inscriptionForm.value.genre : null,
    };
  }

  afficherErreur(error: HttpErrorResponse, messageErr: string, snackBar: MatSnackBar, changeDetector: ChangeDetectorRef) {
    const snackMessage = this.getErrorMessage(error, messageErr);
    const snackbarRef = snackBar.open(snackMessage, 'X', this.snackbarConfigError);
    snackbarRef.afterDismissed()
      .subscribe(() => {
        changeDetector.detectChanges();
      });
  }

  afficherMessageValide(messageInfo: string, snackBar: MatSnackBar, submitted: boolean, changeDetector: ChangeDetectorRef) {
    this.afficherMessageValideWithChangeDetector(messageInfo, true, snackBar, changeDetector);
  }


  afficherMessageValideWithChangeDetector(messageInfo: string, withChangeDetector: boolean, snackBar: MatSnackBar,
    changeDetector: ChangeDetectorRef) {
    const snackbarRef = snackBar.open(messageInfo, 'X', this.snackbarConfigSuccess);
    snackbarRef.afterDismissed()
      .subscribe(() => {
        if (withChangeDetector) {
          setTimeout(() => {
            changeDetector.detectChanges();
          }, 250);
        }
      });
  }

  getHttpErrorMessage(httpErrorResponse: HttpErrorResponse): string {
    let httpErrorMessage = null;
    // In case of a catched backend error (business error)
    if (httpErrorResponse.error) {
      console.log(httpErrorMessage.error);
      // httpErrorMessage = httpErrorResponse.error.sigaapierreur.message;
      // In case of an uncatched backend error (technical error)
    } else {
      httpErrorMessage = httpErrorResponse.error.message;
    }
    return httpErrorMessage;
  }

  getErrorMessage(httpErrorResponse: HttpErrorResponse, defaultTechnicalErrorMessage?: string): string {
    let message = null;
    // In case of technical error (informing the user with a snackbar)
    if (defaultTechnicalErrorMessage != null) {
      if (httpErrorResponse.status !== 500) {
        // Recover error message of the HTTP error response
        message = this.getHttpErrorMessage(httpErrorResponse);
      } else {
        message = defaultTechnicalErrorMessage;
      }
      // In case of business management rule (highlighting a field)
    } else {
      // Recover error message of the HTTP error response
      message = this.getHttpErrorMessage(httpErrorResponse);
    }
    return message;
  }
}
