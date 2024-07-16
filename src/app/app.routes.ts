import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { LegalMeComponent } from './legal-me/legal-me.component';
import { TechMeComponent } from './tech-me/tech-me.component';
import { AboutMeComponent } from './about-me/about-me.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:`Home Page`},
    {path: 'tech-me', component: TechMeComponent, title:`Tech Me`},
    {path: 'legal-me', component: LegalMeComponent, title:`Legal Me`},
    {path: 'about', component:AboutMeComponent, title:`About Me`},
    {path: 'contact', component:ContactMeComponent, title:`Contact Me`}
];
