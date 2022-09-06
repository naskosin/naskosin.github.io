import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { IUser } from './interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
export interface CreateDto{
  username?: string
  email:string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

currentUser!: IUser;
get isLogged(): boolean{
  if(!!this.currentUser){
  return true;}
return false;
}
  

constructor(private http: HttpClient) { }



login(userData: {email: string, password: string}): Observable<IUser>{
  return this.http.post<IUser>(`${apiUrl}/users/login`, userData).pipe(tap(user=>this.currentUser=user))
}
  register( userData: {  email: string, password: string}): Observable<IUser>{
    return this.http.post<IUser>(`${apiUrl}/users/register`, userData).pipe(tap(user=>this.currentUser=user))
  }
  singleUser(options:{headers:HttpHeaders}): Observable<IUser>{
    return this.http.get<IUser>(`${apiUrl}/users/me`,options)
  }
  logOut(options:{headers:HttpHeaders}): Observable<IUser>{
    return this.http.get<IUser>(`${apiUrl}/users/logout`, options)
  }
  authentiCate(options:{headers:HttpHeaders}): Observable<IUser>{
    return this.http.get<IUser>('https://nasko-fish.herokuapp.com/users/me', options).pipe(tap(user=>this.currentUser=user), catchError((err) => {
      return EMPTY;
    }))
  }
  
}
