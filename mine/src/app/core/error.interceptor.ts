import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService, MessageType } from './message.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  

  errorMessage!: string;
  constructor(private messageBus: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 return next.handle(request).pipe(catchError((err: HttpErrorResponse)=>{
   this.messageBus.notifyMessage({
   text: err?.error?.message || 'Something went wrong!', type: MessageType.Error})
   return throwError(err)
   
 }))
}
}