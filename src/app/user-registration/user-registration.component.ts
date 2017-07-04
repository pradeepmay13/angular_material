import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserValidationService } from './user-validation.service';

//https://embed.plnkr.co/ukwCXm/
//https://coryrylan.com/blog/angular-form-builder-and-validation-management
//https://github.com/start-angular/SB-Admin-BS4-Angular-4
//http://www.dotnetjalps.com/2016/07/angular2-packages-sublime-text3.html


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  styles: [`
  	.has-error {
	  	border-bottom: red;
	}
  `],
  providers:[UserValidationService]
})
export class UserRegistrationComponent implements OnInit {

	userForm:FormGroup;	
	constructor(private fb:FormBuilder) { }

	ngOnInit() {
		this.userForm=this.fb.group({
			username	:	['', [Validators.required, Validators.minLength(4)]],
			email		:	['', Validators.compose([Validators.required, UserValidationService.emailValidator])],
			firstname	:	['', [Validators.required]],
			lastname	:	['', [Validators.required]],
			address 	: this.fb.group({
						addressline	:	['',[Validators.required]],
						city		:	['',[Validators.required]],
						country		:	['',[Validators.required]],
						postalCode	:	['',[Validators.required, Validators.pattern('^[1-9][0-9]{4}$')]],
			}),			
			aboutYou	:	['', [Validators.required]],
		})
	}

}
