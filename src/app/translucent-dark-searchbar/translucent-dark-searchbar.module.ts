import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TranslucentDarkSearchbarPage } from './translucent-dark-searchbar.page';

const routes: Routes = [
  {
    path: '',
    component: TranslucentDarkSearchbarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TranslucentDarkSearchbarPage]
})
export class TranslucentDarkSearchbarPageModule {}
