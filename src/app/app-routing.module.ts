import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';

import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppMainComponent} from './main/app.main.component';
import {AppNotfoundComponent} from './view/shared/page-note-found/app.notfound.component';
import {AppErrorComponent} from './view/shared/error/app.error.component';
import {AppAccessdeniedComponent} from './view/shared/accessDenied/app.accessdenied.component';
import {AppLoginComponent} from './view/shared/login/app.login.component';
import {RegisterAdminComponent} from './view/shared/register-admin/register-admin.component';
import {AdminComponent} from './view/admin/admin.component';
import {FormateurComponent} from './view/formateur/formateur.component';
import {RegisterFormateurComponent} from './view/shared/register-formateur/register-formateur.component';
import {ApprenantComponent} from './view/apprenant/apprenant.component';
import {RegisterApprenantComponent} from './view/shared/register-apprenant/register-apprenant.component';
import {register} from 'ts-node';
import {ManageCategorieComponent} from './view/admin/manage-categorie/manage-categorie.component';
import {AppTopBarComponent} from './top-bar/app.topbar.component';
import {ManageCoursesComponent} from './view/formateur/manage-courses/manage-courses.component';
import {ErrorPageComponent} from './view/apprenant/educal/error-page/error-page.component';
import {SignUpMainComponent} from './view/apprenant/educal/sign-up/sign-up-main/sign-up-main.component';
import {SignInMainComponent} from './view/apprenant/educal/sign-in/sign-in-main/sign-in-main.component';
import {CheckoutMainComponent} from './view/apprenant/educal/checkout/checkout-main/checkout-main.component';
import {WishlistMainComponent} from './view/apprenant/educal/wishlist/wishlist-main/wishlist-main.component';
import {CartComponent} from './view/apprenant/educal/cart/cart-main/cart.component';
import {EventDetailsMainComponent} from './view/apprenant/educal/event-details/event-details-main/event-details-main.component';
import {InstructorDetailsComponent} from './view/apprenant/educal/instructor-details/instructor-details-main/instructor-details.component';
import {InstructorMainComponent} from './view/apprenant/educal/instructor/instructor-main/instructor-main.component';
import {AboutMainComponent} from './view/apprenant/educal/about/about-main/about-main.component';
import {BlogDetailsMainComponent} from './view/apprenant/educal/blog-details/blog-details-main/blog-details-main.component';
import {BlogComponent} from './view/apprenant/educal/blog/blog-main/blog.component';
import {CourseDetailsComponent} from './view/apprenant/educal/course-details/course-details-main/course-details.component';
import {CourseSidebarMainComponent} from './view/apprenant/educal/course-sidebar/course-sidebar-main/course-sidebar-main.component';
import {CoursesListPageComponent} from './view/apprenant/educal/courses-list-page/courses-list-main/courses-list-page.component';
import {CoursesPageComponent} from './view/apprenant/educal/courses/courses-page/courses-page.component';
import {HomeTwoComponent} from './view/apprenant/educal/home-two/home-two-main/home-two.component';
import {HomeComponent} from './view/apprenant/educal/Home/Home/home.component';
import {ManageFormtaeurComponent} from './view/admin/manage-formtaeur/manage-formtaeur.component';
import {ManageApprenantComponent} from './view/admin/manage-apprenant/manage-apprenant.component';
import {ManageQuizComponent} from './view/formateur/manage-quiz/manage-quiz.component';
import {CoursesComponent} from './view/admin/courses/courses.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeTwoComponent },
            { path: 'home', component: HomeTwoComponent },
            {
                path: 'home-two',
                component: HomeTwoComponent
            },
            {
                path: 'courses',
                component: CoursesPageComponent
            },
            {
                path: 'courses-list',
                component: CoursesListPageComponent
            },
            {
                path: 'courses-sidebar',
                component: CourseSidebarMainComponent
            },
            {
                path: 'course-details',
                component: CourseDetailsComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: 'blog-details',
                component: BlogDetailsMainComponent
            },
            {
                path: 'about',
                component: AboutMainComponent
            },
            {
                path: 'instructor',
                component: InstructorMainComponent
            },
            {
                path: 'instructor-details',
                component: InstructorDetailsComponent
            },
            {
                path: 'event-details',
                component: EventDetailsMainComponent
            },
            {
                path: 'cart',
                component: CartComponent
            },
            {
                path: 'wishlist',
                component: WishlistMainComponent
            },
            {
                path: 'checkout',
                component: CheckoutMainComponent
            },
            {
                path: 'sign-in',
                component: SignInMainComponent
            },
            {
                path: 'sign-up',
                component: SignUpMainComponent
            },
            {
                path: 'error',
                component: ErrorPageComponent
            },
            {
                path: 'contact',
                component: CheckoutMainComponent
            },
            {
                path: '', component: ApprenantComponent,
                children: [
                    {path: '', component: RegisterApprenantComponent},
                ]
            },
            {
                path: '', component: AppMainComponent,
                children: [
                    {
                        path: 'admin', component: AdminComponent,
                        children: [
                            {path: 'register', component: RegisterAdminComponent},
                            {path: 'manage/categories', component: ManageCategorieComponent},
                            {path: 'manage/formateur', component: ManageFormtaeurComponent},
                            {path: 'manage/apprenant', component: ManageApprenantComponent},
                            {path: 'signup', component: AppTopBarComponent},
                            {path: 'consult/formations', component: CoursesComponent},
                            {path: 'consult/updateprofile', component: CoursesComponent},
                        ]
                    },
                    {
                        path: 'formateur', component: FormateurComponent,
                        children: [
                            {path: 'register', component: RegisterFormateurComponent},
                            {path: 'courses', component: ManageCoursesComponent},
                            {path: 'quizes', component: ManageQuizComponent},
                        ]
                    },
                    {path: 'home', component: HomeComponent},
                    {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
                    {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
                    {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
                    {path: 'uikit/input', component: InputDemoComponent},
                    {path: 'uikit/button', component: ButtonDemoComponent},
                    {path: 'uikit/table', component: TableDemoComponent},
                    {path: 'uikit/list', component: ListDemoComponent},
                    {path: 'uikit/tree', component: TreeDemoComponent},
                    {path: 'uikit/panel', component: PanelsDemoComponent},
                    {path: 'uikit/overlay', component: OverlaysDemoComponent},
                    {path: 'uikit/media', component: MediaDemoComponent},
                    {path: 'uikit/menu', component: MenusDemoComponent},
                    {path: 'uikit/message', component: MessagesDemoComponent},
                    {path: 'uikit/misc', component: MiscDemoComponent},
                    {path: 'uikit/charts', component: ChartsDemoComponent},
                    {path: 'uikit/file', component: FileDemoComponent},
                    {path: 'utilities/display', component: DisplayComponent},
                    {path: 'utilities/elevation', component: ElevationComponent},
                    {path: 'utilities/flexbox', component: FlexboxComponent},
                    {path: 'utilities/grid', component: GridComponent},
                    {path: 'utilities/icons', component: IconsComponent},
                    {path: 'utilities/widgets', component: WidgetsComponent},
                    {path: 'utilities/spacing', component: SpacingComponent},
                    {path: 'utilities/typography', component: TypographyComponent},
                    {path: 'utilities/text', component: TextComponent},
                    {path: 'pages/crud', component: AppCrudComponent},
                    {path: 'pages/calendar', component: AppCalendarComponent},
                    {path: 'pages/timeline', component: AppTimelineDemoComponent},
                    {path: 'pages/empty', component: EmptyDemoComponent},
                    {path: 'documentation', component: DocumentationComponent},
                ]
            }
            ,
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: '404', component: AppNotfoundComponent},
            {path: 'login', component: SignInMainComponent},
            {path: 'register/admin', component: RegisterAdminComponent},
            {path: 'register/apprenant', component: RegisterApprenantComponent},
            {path: 'register/formateur', component: RegisterFormateurComponent},
            {path: 'dash', component: AppLoginComponent},
            {path: '**', redirectTo: '/404'},
        ], {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
