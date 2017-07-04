import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { UserValidationService } from './user-validation.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//https://embed.plnkr.co/ukwCXm/
//https://coryrylan.com/blog/angular-form-builder-and-validation-management
//https://github.com/start-angular/SB-Admin-BS4-Angular-4
//http://www.dotnetjalps.com/2016/07/angular2-packages-sublime-text3.html
//http://dotsway.com/2017/04/05/simple-page-binding-in-angular-4/
//https://scotch.io/tutorials/angular-2-http-requests-with-observables


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  styles: [`
  	.has-error {
	  	border-bottom: red;
	}
  `],
  providers : [ UserValidationService ]
})
export class UserRegistrationComponent implements OnInit {
	userForm: FormGroup;
	constructor(private fb: FormBuilder, private http: Http) { }

	ngOnInit() {
		this.userForm = this.fb.group({
			username	:	['', [Validators.required, Validators.minLength(4)]],
			email		:	['', Validators.compose([Validators.required, UserValidationService.emailValidator])],
			firstname	:	['', [Validators.required]],
			lastname	:	['', [Validators.required]],
			address 	: this.fb.group({
						addressline	:	['', [Validators.required]],
						city		:	['', [Validators.required]],
						country		:	['', [Validators.required]],
						postalCode	:	['', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{4}$')])],
						}),
			aboutYou	:	['', [Validators.required]],
		})
	}
	onSubmit(value): Observable<registration[]> {
		console.log(data: Object);
		private registrationUrl = 'http://localhost:3000/api/comments';
		let bodyString = JSON.stringify(data); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.registrationUrl, data, options)
        .map((res: response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
	}
}
