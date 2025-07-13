import { Routes } from '@angular/router';
import { Comprar } from './pages/comprar/comprar';
import { Home } from './pages/home/home';
import { Vender } from './pages/vender/vender';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'comprar', component: Comprar },
  { path: 'vender', component: Vender },
];
