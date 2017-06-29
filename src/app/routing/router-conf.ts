import { Route } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../dashboard/home/home.component';
import { UserComponent } from '../dashboard/user/user.component';
import { IconsComponent } from '../dashboard/icons/icons.component';
import { TableComponent } from '../dashboard/table/table.component';
import { NotificationsComponent } from '../dashboard/notifications/notifications.component';
import { TypographyComponent } from '../dashboard/typography/typography.component';
import { MapsComponent } from '../dashboard/maps/maps.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent
]
