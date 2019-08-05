import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { HomePageComponent } from './pages/institutional/home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  exports: [RouterModule]
})
export class AppRoutingModule { }
