import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [
  {path:"" , component:Home , title:"Home"},
  {path:"home" , component:Home , title:"Home"},
  {path:"about" , component:About , title:"about"},
  {path:"contact" , component:Contact , title:"contact"},
  {path:"portfolio" , component:Portfolio , title:"portfolio"},
];
