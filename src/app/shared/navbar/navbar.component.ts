import { Component, OnInit } from '@angular/core';
import {CommonModule, Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { SIDEBARROUTES } from '../../sidebar/sidebar-routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	private listTitles: any[];
	location:Location;
	constructor(location:Location) { 
		this.location=location;
	}

	ngOnInit() {
		this.listTitles=SIDEBARROUTES.filter(listTitle => listTitle);
	}
  	getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
}
