import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Particles imports
import { NgParticlesModule } from "ng-particles";

// Angular Material imports

import {MatTooltipModule,TooltipPosition} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { ContentComponent } from './blog/content/content.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './users/login/login.component';
import { AdminComponent } from './users/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    ContentComponent,
    AboutComponent,
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatButtonModule,
    MatTooltipModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
