import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../interfaces';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MessageService, MessageType } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  message!: string;
  isError!: boolean;

  private subscription!: Subscription;
  constructor(
    private userService: UserService,
    private messageBus: MessageService
  ) {}

  ngOnInit(): void {
    this.subscription = this.messageBus.onNewMessage$.subscribe(
      (newMessage) => {
        this.message = newMessage?.text || '';
        this.isError = newMessage?.type === MessageType.Error;
        if (this.message) {
          setTimeout(() => {
            this.messageBus.clear();
          }, 3000);
        }
      }
    );
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get currentUser(): IUser {
    if (!!!this.userService.currentUser) {
      localStorage.removeItem('Token');
      localStorage.setItem('isLogged', 'false');
    }
    return this.userService.currentUser;
  }
  Logout(): void {
    const token: string = localStorage.getItem('Token');
    let header = new HttpHeaders({ 'X-Authorization': token });
    this.userService.logOut({ headers: header }).subscribe((data) => {
      this.userService.currentUser = data;
      console.log(data);
    });

    return (
      localStorage.removeItem('Token'),
      localStorage.setItem('isLogged', 'false')
    );
  }
}
