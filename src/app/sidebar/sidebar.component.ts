import { Component, OnInit } from '@angular/core';
import { SIDEBARROUTES } from './sidebar-routes.config';

declare var $:any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	public menuItems:any[];
	constructor() { }

	ngOnInit() {
		$.getScript('../../assets/js/sidebar-moving-tab.js');
		this.menuItems=SIDEBARROUTES.filter(menuItem=>menuItem);
	}
}
