import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFish } from './interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

const apiUrl = environment.apiUrl;
  

@Injectable({
  providedIn: 'root'
})


export class CreateCatchService {
  
  accessToken: string = "";
  


  constructor(private userService: UserService, private http:HttpClient) { 
    


}
createCatch(userData: {species: string, bait: string, img:string, story:string, weight: number}, options:{headers: HttpHeaders}) : Observable<IFish>{
 
  return this.http.post<IFish>((`${apiUrl}/data/fishes`), userData, options)
}
editCatch(id: string, userData: {species: string, bait: string, img:string, story:string, weight: number}, options:{headers: HttpHeaders}) : Observable<IFish>{
 
  return this.http.put<IFish>(`${apiUrl}/data/fishes/${id}`, userData, options)
}
deleteCatch(id: string, options:{headers: HttpHeaders}) : Observable<void>{
 
  return this.http.delete<void>(`${apiUrl}/data/fishes/${id}`, options)
}  


}