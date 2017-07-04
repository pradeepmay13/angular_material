import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { UserComponent } from './dashboard/user/user.component';
import { IconsComponent } from './dashboard/icons/icons.component';
import { TableComponent } from './dashboard/table/table.component';
import { NotificationsComponent } from './dashboard/notifications/notifications.component';
import { TypographyComponent } from './dashboard/typography/typography.component';
import { MapsComponent } from './dashboard/maps/maps.component';
import { PageNotFound } from './error_pages/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
	{ path: 'dashboard', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'table', component: TableComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'userRegistration', component: UserRegistrationComponent },
  { path: '', redirectTo: 'userRegistration', pathMatch: 'full' },
  { path:'**', component: PageNotFound }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent=[
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    LoginComponent,
    PageNotFound
]
