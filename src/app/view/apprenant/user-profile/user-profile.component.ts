import { Component, OnInit } from '@angular/core';
import {User} from '../../../controller/model/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user: User;
  deleteDialog: any;
  editDialog: any;
  newUserDialog: any;

  constructor() { }

  ngOnInit(): void {
  }


}
