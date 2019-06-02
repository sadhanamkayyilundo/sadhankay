import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';  

const routes: Routes = [  
  {path: 'contact',component: ContactUsComponent},
  {path: '',component: HomeComponent}
  ];  
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [AlertModule.forRoot(),
    BrowserModule,RouterModule.forRoot(routes)],  
  exports: [RouterModule],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
