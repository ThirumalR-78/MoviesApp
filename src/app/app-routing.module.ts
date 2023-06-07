import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { MovieDetailsComponentComponent } from './movie-details-component/movie-details-component.component';
import { AppComponent } from './app.component';
import { MovielistComponentComponent } from './movielist-component/movielist-component.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieDetailsComponentComponent,
  },
  {
    path: 'movie',
    component: MovielistComponentComponent,
  },
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  AppRoutes: Routes = [
    // {
    //   path: 'movie/',
    //   redirectTo: '/',
    //   pathMatch: 'full',
    // },
    {
      path: 'movie',
      component: MovieDetailsComponentComponent,
    },
    {
      path: '',
      component: AppComponent,
    },
    {
      path: '**',
      redirectTo: '/',
    },
  ];
}
