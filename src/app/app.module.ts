import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { CurrentComponent } from './main/current/current.component';
import { HeaderMobileComponent } from './main/header/header-mobile/header-mobile.component';
import { AnimationComponent } from './main/current/animation/animation.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { AboutComponent } from './main/about/about.component';
import { BackgroundComponent } from './main/about/background/background.component';
import { EducationComponent } from './main/education/education.component';
import { GalleryComponent } from './main/gallery/gallery.component';
import { GalleryViewComponent } from './main/gallery-view/gallery-view.component';
import { NavigationComponent } from './main/gallery-view/navigation/navigation.component';
import { ViewerComponent } from './main/gallery-view/viewer/viewer.component';
import { FooterComponent } from './main/footer/footer.component';
import { LoadingComponent } from './main/loading/loading.component';
import { SafePipe } from './pipe/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CurrentComponent,
    HeaderMobileComponent,
    AnimationComponent,
    ContactsComponent,
    AboutComponent,
    BackgroundComponent,
    EducationComponent,
    GalleryComponent,
    GalleryViewComponent,
    NavigationComponent,
    ViewerComponent,
    FooterComponent,
    LoadingComponent,
    SafePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
