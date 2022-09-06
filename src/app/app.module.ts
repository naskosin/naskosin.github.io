import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FeauturesModule } from './feautures/feautures.module';
import { UserService } from './core/user.service';




@NgModule({
  declarations: [
    AppComponent,
   

   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AuthModule,
    CoreModule,
  
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: APP_INITIALIZER,
      
    useFactory: ( userService: UserService) =>{
     const token:string= localStorage.getItem('Token')
     const header = new HttpHeaders({'X-Authorization': token});
     
      return() => userService.authentiCate({headers:header})
    },deps: [UserService],
    multi: true}
  ],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
