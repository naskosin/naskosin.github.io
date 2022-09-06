import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export interface Message { text: string, type: MessageType}

export enum MessageType {
  Success,
  Error
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
private  messageQueue$ = new Subject<Message>();
onNewMessage$ = this.messageQueue$.asObservable();
  constructor() { }
  notifyMessage(message: {text: string, type: MessageType}){
    this.messageQueue$.next(message);
  }
  clear() :void{
this.messageQueue$.next(undefined);
  }
}