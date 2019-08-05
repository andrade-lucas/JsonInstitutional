import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { HomePageComponent } from './pages/institutional/home-page/home-page.component';
import { ContactPageComponent } from './pages/institutional/contact-page/contact-page.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'contact', component: ContactPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
