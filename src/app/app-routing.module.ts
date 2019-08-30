import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'child', loadChildren: './child/child.module#ChildPageModule' },
  { path: 'standard', loadChildren: './standard/standard.module#StandardPageModule' },
  { path: 'searchbar', loadChildren: './searchbar/searchbar.module#SearchbarPageModule' },
  { path: 'searchbar-dark', loadChildren: './searchbar-dark/searchbar-dark.module#SearchbarDarkPageModule' },
  { path: 'translucent', loadChildren: './translucent/translucent.module#TranslucentPageModule' },
  { path: 'translucent-dark', loadChildren: './translucent-dark/translucent-dark.module#TranslucentDarkPageModule' },
  { path: 'translucent-dark-searchbar', loadChildren: './translucent-dark-searchbar/translucent-dark-searchbar.module#TranslucentDarkSearchbarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
