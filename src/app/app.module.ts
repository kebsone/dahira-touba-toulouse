import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { MatBadgeModule, MatToolbarModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { MatSortModule, MatTableModule, MatTooltipModule } from '@angular/material/';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { DahiraComponent } from './pages/dahira/dahira.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { MediathequeComponent } from './pages/mediatheque/mediatheque.component';
import { MembreComponent } from './pages/membre/membre.component';
import { CommerceComponent } from './pages/commerce/commerce.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LoginComponent } from './pages/login/login.component';
import { KhalifComponent } from './khalif/khalif.component';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorHandler } from '@angular/common/http/src/interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', component: AccueilComponent },
  { path: 'dahira', component: DahiraComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'mediatheque', component: MediathequeComponent },
  { path: 'membre', component: MembreComponent },
  { path: 'commerce', component: CommerceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DahiraComponent,
    ActualiteComponent,
    MediathequeComponent,
    MembreComponent,
    CommerceComponent,
    ContactComponent,
    AccueilComponent,
    LoginComponent,
    KhalifComponent,
    PreHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatSortModule, MatTableModule, MatTooltipModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule
   // FlexLayoutModule
  ],
  exports: [MatButtonModule, MatIconModule, MatTabsModule,
    MatSidenavModule],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
