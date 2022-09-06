import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../core/gallery.service';
import { IFish } from '../../core/interfaces';

import { UserService } from 'src/app/core/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
fishes!: IFish[]
  constructor(private galleryService: GalleryService, private userService: UserService) { }

  ngOnInit(): void {
    this.galleryService.getAllCatches$().subscribe(
      data=>{
        this.fishes = data;
        
      }
    )
   


  }

}
