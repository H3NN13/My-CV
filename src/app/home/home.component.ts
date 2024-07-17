import { Component } from '@angular/core';
 
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { routes } from '../app.routes';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
   
}
