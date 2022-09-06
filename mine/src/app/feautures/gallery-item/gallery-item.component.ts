import { Component, OnInit, Input } from '@angular/core';
import { IFish, IUser } from '../../core/interfaces';
import { UserService } from 'src/app/core/user.service';


@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
user!: IUser;
  constructor(private userService: UserService) {
    this.user = this.userService.currentUser
   }
  @Input() fish!: IFish;

  ngOnInit(): void {
  }

}
