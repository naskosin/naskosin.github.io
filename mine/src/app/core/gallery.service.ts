import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IFish} from './interfaces';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map, tap } from 'rxjs/operators';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { 
   
    }
    getAllCatches$(): Observable<IFish[]>{
      return this.http.get<IFish[]>(`${apiUrl}/data/fishes`).pipe(map(data=>Object.values(data)));

  }
    getCatchOne(id:string): Observable<IFish>{
      return this.http.get<IFish>(`${apiUrl}/data/fishes/${id}`)
    }
    gettopFive(): Observable<IFish[]>{
      return this.http.get<IFish[]>(`${apiUrl}/data/fishes?5`).pipe(map(data=>Object.values(data).sort((a, b)=>{
        return b.weight-a.weight
      }).slice(0,5)));
    }
}
