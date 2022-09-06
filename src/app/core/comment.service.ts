import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from './interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComment():Observable<IComment[]>{
    return this.http.get<IComment[]>(`${apiUrl}/data/comments`).pipe(map(data=>Object.values(data)));
  }
  createComment(userData: {comment: string,  email:string, themeId:string}, options:{headers: HttpHeaders}) : Observable<IComment>{
 
    return this.http.post<IComment>(`${apiUrl}/data/comments`, userData, options)
  }
  editComment(id:string, userData: {comment: string,  email:string, themeId:string, isInEdit:false}, options:{headers: HttpHeaders}) : Observable<IComment>{
 
    return this.http.put<IComment>(`${apiUrl}/data/comments/${id}`, userData, options)
  }

  deleteComment(id:string, options:{headers: HttpHeaders}): Observable<void>{
    return this.http.delete<void>(`${apiUrl}/data/comments/${id}`,  options)
  }
}