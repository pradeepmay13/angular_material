import { Component } from '@angular/core';
import {LocationStrategy, HashLocationStrategy, PlatformLocation, Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppComponent {
  title = 'app';
  location:Location;
  constructor(private _locationstrategy:LocationStrategy, location:Location){  
    this.location=location;    
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 2 );
    console.log(titlee);
  }
}
