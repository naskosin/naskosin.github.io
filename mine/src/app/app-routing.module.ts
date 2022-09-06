import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './feautures/pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './feautures/pages/home-page/home-page.component';
import { MyCatchesComponent } from './auth/my-catches/my-catches.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { GalleryComponent } from './feautures/gallery/gallery.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';
import { AboutPageComponent } from './feautures/pages/about-page/about-page.component';
import { ContactsComponent } from './feautures/pages/contacts/contacts.component';
import { SearchComponent } from './feautures/pages/search/search.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
},

{
    path: 'home',
    component: HomePageComponent
},
{
  path: 'user',
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

},
{
  path: 'gallery',
  loadChildren: () => import('./feautures/feautures.module').then(m => m.FeauturesModule)

},
{
  path: 'search',
  component: SearchComponent
},
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'contacts',
  component: ContactsComponent
},
{  path: '**',
  pathMatch: 'full',
  component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
