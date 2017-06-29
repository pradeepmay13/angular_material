import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [ MODULE_COMPONENTS ]
})
export class RoutingModule { }
