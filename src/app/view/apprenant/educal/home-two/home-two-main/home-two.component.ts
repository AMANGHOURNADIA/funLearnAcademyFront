import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {Role} from '../../../../../enum/role.enum';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getUserFromLocalCache() !== null){
      if (this.authService.getUserFromLocalCache().role === Role.ADMIN){
        this.router.navigate(['/admin/manage/categories']);
      } else if (this.authService.getUserFromLocalCache().role === Role.FORMATEUR){
        this.router.navigate(['/formateur/courses']);
      }
    }
  }

}
