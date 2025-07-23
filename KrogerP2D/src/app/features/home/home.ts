import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatSidenavModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  router: Router = inject(Router);
  opened = false;
  faBars = faBars;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit(): void {

  }

  navigate(route: string): void {
    // Logic to navigate to the specified route
    this.router.navigate([route]);
  }
}
