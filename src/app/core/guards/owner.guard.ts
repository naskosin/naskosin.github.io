import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { IFish } from '../interfaces';
import { GalleryService } from '../gallery.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerGuard implements CanActivate {

  constructor(private userService: UserService, private route: Router, private galleryServ : GalleryService,){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
     
     const id = this.userService.currentUser._id;
   
      const fishId = route.paramMap.get('fishid');

  return  this.galleryServ.getCatchOne(fishId).pipe(map(data=>{
  
     const ownerId=data._ownerId; 
     if(id==ownerId){
        
      return true;} ;
      
       alert("You're not author of this catch!")
          
      return this.route.createUrlTree(['/gallery'])
 }))
     

  
      
  }
 
}
