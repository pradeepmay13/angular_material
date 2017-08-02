import { Component, OnInit } from '@angular/core';
import {LocationStrategy, HashLocationStrategy, PlatformLocation, Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
//import * as $ from 'jquery';
//import "../assets/js/material-dashboard.js";
//import "../assets/js/initMenu.js";

declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})

export class AppComponent implements OnInit {
	title = 'app';
	location: Location;
	constructor(location:Location, private _notificationsService: NotificationsService) {
	    this.location = location;
	}
  
	ngOnInit(){
      $.getScript('../assets/js/material-dashboard.js');
      $.getScript('../assets/js/initMenu.js');
  }
  public isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
          return false;
      }
      else {
          return true;
      }
  }
  //============================== Notification =====================  
  public options = {
      position: ["bottom", "right"],
      timeOut: 0,
      animate:"scale",
      pauseOnHover:true
  };
  showMsg(){
    this._notificationsService.success(
    'Success',
    'Saved Successfully',
    {
        timeOut: 5000,
        showProgressBar: true,
        clickToClose: false,
        maxLength: 10,
    }
)
  }
}
