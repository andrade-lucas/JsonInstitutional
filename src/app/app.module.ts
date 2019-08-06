import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomePageComponent } from './pages/institutional/home-page/home-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactPageComponent } from './pages/institutional/contact-page/contact-page.component';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    FramePageComponent,
    FooterComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
