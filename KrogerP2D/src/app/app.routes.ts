import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { ContactUs } from './features/contact-us/contact-us';
import { Login } from './features/login/login';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact-us',
    component: ContactUs
  },
  {
    path: 'login',
    component: Login
  }
];
