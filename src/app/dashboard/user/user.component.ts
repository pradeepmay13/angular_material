import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserValidationService } from './user-validation.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserValidationService ],
})
export class UserComponent implements OnInit {	
  	userForm:FormGroup;
	constructor(private _formBuilder:FormBuilder) { }

	ngOnInit() { this.userForm=this._formBuilder.group({
		username:['',[Validators.required, Validators.minLength(4)]],
		email:['',[Validators.required, UserValidationService.emailValidator]],

		})
	}
	

}
