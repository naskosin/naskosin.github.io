import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/user.service';
import { CreateCatchService } from 'src/app/core/create-edit-delete-catch.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-catch',
  templateUrl: './create-catch.component.html',
  styleUrls: ['./create-catch.component.css'],
})
export class CreateCatchComponent implements OnInit, AfterViewInit {
  constructor(
    private userService: UserService,
    private createService: CreateCatchService,
    private router: Router
  ) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}
  formHandler(createCatchForm: NgForm): void {
    const token: string = localStorage.getItem('Token');
    let header = new HttpHeaders({ 'X-Authorization': token });

    this.createService
      .createCatch(createCatchForm.value, { headers: header })
      .subscribe((data) => {});
    createCatchForm.reset();
    setTimeout(() => {
      this.router.navigate([`/gallery`]);
    }, 500);
  }
}
