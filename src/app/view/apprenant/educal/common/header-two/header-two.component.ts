import {Component, HostListener, Input, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../../../controller/service/authentication.service';
import {User} from '../../../../../controller/model/user.model';
import {AppMainComponent} from '../../../../../main/app.main.component';
import {Role} from '../../../../../enum/role.enum';
import {AppComponent} from '../../../../../app.component';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

  @Input () headerShadow : string | undefined;
  user: User =new User();
  headerSticky : boolean = false;
  showSidebar : boolean = false;
  showHomeDropdown : boolean = false;
  showCoursesDropdown : boolean = false;
  showBlogDropdown : boolean = false;
  showPagesDropdown : boolean = false;

  @HostListener('window:scroll',['$event']) onscroll () {
    if(window.scrollY > 80){
      this.headerSticky = true
    }
    else{
      this.headerSticky = false
    }
  }

  // handleSidebar
  handleSidebar () {
    this.showSidebar = true;
  }
  handleSidebarClose () {
    this.showSidebar = false;
  }

  // home dropdown
  homeDropdown () {
    this.showHomeDropdown = !this.showHomeDropdown
  }
  // coursesDropdown
  coursesDropdown () {
    this.showCoursesDropdown = !this.showCoursesDropdown
  }

  // blogDropdown
  blogDropdown () {
    this.showBlogDropdown = !this.showBlogDropdown
  }
  // pagesDropDown
  pagesDropDown () {
    this.showPagesDropdown = !this.showPagesDropdown
  }
  public role = Role;
  constructor(private authenticationService: AuthenticationService,public app: AppComponent, public appMain: AppMainComponent) { }

  ngOnInit(): void {
    if(this.authenticationService.getUserFromLocalCache()!==null){
      this.user=this.authenticationService.getUserFromLocalCache();
    }
  }

  logOut() {
    this.authenticationService.logOut();
    this.user= new User();
  }

}
