import { Component, OnInit } from '@angular/core';
import { MasterdataService } from '../masterdata.service';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers: [MasterdataService]
})
export class CustomFormComponent implements OnInit {
  countries: any;
  states: any;
  country: any;
  constructor(public masterdataService :MasterdataService) {
  	
  }
  ngOnInit() {
  	let id = "2";
  	this.countries = this.masterdataService.getCountries();
  	this.country = this.countries.filter((countryId) => countryId.id == id);
  	console.log(this.country);
  }
  countryChange(value) {
  	this.states = this.masterdataService.getStates().filter((statesItem) => statesItem.cid === value)
  	// this.states = this._dataService.getStates().filter((item)=> item.countryid == countryid);
  }

}
