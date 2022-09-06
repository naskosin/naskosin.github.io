import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import {GalleryRoutingModule} from './gallery.routing.module'
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCatchComponent } from './newcatch/create-catch/create-catch.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { GallerDetailsComponent } from './galler-details/galler-details.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TopFiveComponent } from './top-five/top-five.component';
import { SearchComponent } from './pages/search/search.component';



@NgModule({
  declarations: [GalleryComponent, SearchComponent, GalleryItemComponent, GallerDetailsComponent, CreateCatchComponent, EditPageComponent, HomePageComponent, TopFiveComponent],
  imports: [
    CommonModule,
    RouterModule,
    GalleryRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [GalleryComponent,CreateCatchComponent, EditPageComponent, GallerDetailsComponent,HomePageComponent, TopFiveComponent]
})
export class FeauturesModule { }
