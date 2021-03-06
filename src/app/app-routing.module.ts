import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from './main/app.main.component';
import {AppErrorComponent} from './view/shared/error/app.error.component';
import {AppAccessdeniedComponent} from './view/shared/accessDenied/app.accessdenied.component';
import {AppLoginComponent} from './view/shared/login/app.login.component';
import {RegisterAdminComponent} from './view/shared/register-admin/register-admin.component';
import {AdminComponent} from './view/admin/admin.component';
import {FormateurComponent} from './view/formateur/formateur.component';
import {RegisterFormateurComponent} from './view/shared/register-formateur/register-formateur.component';
import {ApprenantComponent} from './view/apprenant/apprenant.component';
import {RegisterApprenantComponent} from './view/shared/register-apprenant/register-apprenant.component';
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
import {ManageFormtaeurComponent} from './view/admin/manage-formtaeur/manage-formtaeur.component';
import {ManageApprenantComponent} from './view/admin/manage-apprenant/manage-apprenant.component';
import {ManageQuizComponent} from './view/formateur/manage-quiz/manage-quiz.component';
import {CoursesComponent} from './view/admin/courses/courses.component';
import {ApprenantProfileComponent} from './view/shared/apprenant-profile/apprenant-profile.component';
import {AdminProfileComponent} from './view/shared/admin-profile/admin-profile.component';
import {ForgetPasswordComponent} from './view/shared/forget-password/forget-password.component';
import {PayementComponent} from './view/apprenant/educal/course-details/payement/payement.component';
import {ContactMainComponent} from './view/apprenant/educal/contact/contact-main/contact-main.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeTwoComponent},
            {path: 'home', component: HomeTwoComponent},
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
                path: 'payment',
                component: PayementComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
            {
                path: 'password',
                component: ForgetPasswordComponent
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
                component: ContactMainComponent
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
                path: 'profile',
                component: ApprenantProfileComponent
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
                            {path: 'consult/updateprofile', component: AdminProfileComponent},
                            {path: 'newadmin', component: RegisterAdminComponent}
                        ]
                    },
                    {
                        path: 'formateur', component: FormateurComponent,
                        children: [
                            {path: 'register', component: RegisterFormateurComponent},
                            {path: 'courses', component: ManageCoursesComponent},
                            {path: 'quizez', component: ManageQuizComponent},
                        ]
                    },
                ]
            }
            ,
            {path: 'error', component: AppErrorComponent},
            {path: 'accessdenied', component: AppAccessdeniedComponent},
            {path: '404', component: ErrorPageComponent},
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
