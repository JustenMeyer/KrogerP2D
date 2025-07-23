import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatSidenavModule, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'KrogerP2D';
  router: Router = inject(Router);
  faBars = faBars;
  opened = false;

  navigate(route: string): void {
    // Logic to navigate to the specified route
    this.router.navigate([route]);
  }
}
