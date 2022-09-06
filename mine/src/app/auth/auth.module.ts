import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCatchesComponent } from './my-catches/my-catches.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MyCatchesComponent,
   
  ],
  imports: [
    CommonModule,
  
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,

  ]
})
export class AuthModule { }
