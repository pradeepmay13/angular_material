import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserValidationService } from './user-validation.service';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from './user.service';

//https://embed.plnkr.co/ukwCXm/
//https://coryrylan.com/blog/angular-form-builder-and-validation-management
//https://github.com/start-angular/SB-Admin-BS4-Angular-4
//http://www.dotnetjalps.com/2016/07/angular2-packages-sublime-text3.html
//http://dotsway.com/2017/04/05/simple-page-binding-in-angular-4/
//https://scotch.io/tutorials/angular-2-http-requests-with-observables
//https://github.com/xiphux/gitphp
//https://stackoverflow.com/questions/233421/hosting-git-repository-in-windows


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  styles: [`
  	.has-error {
	  	border-bottom: red;
	}
  `],
  providers : [ UserValidationService, UserService ]
})
export class UserRegistrationComponent implements OnInit {
	userForm: FormGroup;
	UserService: UserService;
	constructor(private fb: FormBuilder, private userService: UserService) { }

	ngOnInit() {
		this.userForm = this.fb.group({
			username	:	['pradeep', [Validators.required, Validators.minLength(4)]],
			email		:	['pradeep@gmail.com', Validators.compose([Validators.required, UserValidationService.emailValidator])],
			firstname	:	['pradeep', [Validators.required]],
			lastname	:	['pradeep123', [Validators.required]],
			address 	: this.fb.group({
						addressline	:	['sgdsd g', [Validators.required]],
						city		:	['gurgaon', [Validators.required]],
						country		:	['fdfd', [Validators.required]],
						postalCode	:	['33333', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{4}$')])],
						}),
			aboutYou	:	['ccc', [Validators.required]],
		})
	}
	onSubmit() {

		this.userService.register(this.userForm.value)
		 .subscribe(
		   	response  => {
			    // const user = .user;
			    console.log(response);
		     	//if ( response.status === '1') {
			    //	this.status = "success";
			    //	this.message = response.message;
			    	// this.router.navigate(['about']);
		     	//} else {
			    //   	this.status = "error";
			    //	this.message = response.message;
		     	//}
		   	},
		   	//error =>  console.log(<any>error)
		   	);
	}
}
