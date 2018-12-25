import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '', component: AccueilComponent },
  { path: 'dahira', component: DahiraComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'mediatheque', component: MediathequeComponent },
  { path: 'membre', component: MembreComponent },
  { path: 'commerce', component: CommerceComponent },
  { path: 'contact', component: ContactComponent },
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
