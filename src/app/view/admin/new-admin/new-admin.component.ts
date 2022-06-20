import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../controller/service/authentication.service';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../../../controller/model/user.model';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
