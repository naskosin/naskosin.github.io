import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { IFish } from 'src/app/core/interfaces';
import { GalleryService } from 'src/app/core/gallery.service';
import { CreateCatchService } from 'src/app/core/create-edit-delete-catch.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent implements OnInit {
  id!: string;
  fish!: IFish;
  constructor(
    private userService: UserService,
    private activeSnapshot: ActivatedRoute,
    private galleryService: GalleryService,
    private createService: CreateCatchService,
    private router: Router
  ) {}
  @ViewChild('createCatchForm') createCatchForm!: NgForm;
  ngOnInit(): void {
    this.id = this.activeSnapshot.snapshot.params['fishid'];

    this.galleryService.getCatchOne(this.id).subscribe((data) => {
      this.fish = data;
    });
  }
  formHandler(createCatchForm: NgForm): void {
    this.id = this.activeSnapshot.snapshot.params['fishid'];
    const token: string = localStorage.getItem('Token');
    let header = new HttpHeaders({ 'X-Authorization': token });

    this.createService
      .editCatch(this.id, createCatchForm.value, { headers: header })
      .subscribe((data) => {});
    setTimeout(() => {
      this.router.navigate([`gallery/${this.id}`]);
    }, 500);
  }
}
