import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/core/gallery.service';
import { IFish } from 'src/app/core/interfaces';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  fishes!: IFish[];
  searchFormGroup: FormGroup = this.formBuilder.group({
    'search': new FormControl(null, [])
    
  })
 
    constructor(private galleryService: GalleryService, private userService: UserService, private formBuilder:FormBuilder) { }
  
    ngOnInit(): void {
    
      }
      
     searchContent(){
    const {search} = this.searchFormGroup.value
    console.log(this.searchFormGroup.value)
    this.galleryService.getAllCatches$()
    
    .subscribe(
      data=>{
        this.fishes = data.filter(x=>x.species.toLowerCase().includes(search.toLowerCase()));
        console.log(data)
        
      })
    }
  
  
    }