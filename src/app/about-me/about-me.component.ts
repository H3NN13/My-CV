import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  constructor(private router:Router) { }
   routeTo(event: Event) { 
    console.log(this.router);
    // super cool function of angular: sets target to the event's target property and tells TS that it is an html element
    const target = event.target as HTMLElement;
    // sets route to the target element's ID
    const route = target.id;
      // Routes to the route provided
      this.router.navigate([route]);
     
  }
}
