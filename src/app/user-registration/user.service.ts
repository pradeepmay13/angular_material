import { Injectable } from '@angular/core';
import {Observer} from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {
	constructor(private http: Http) { }
	register (user: Object): Observable<any> {
	    let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
	   	//const data = new URLSearchParams();
	  	//Object.keys(user).forEach(key => {
	    //	data.set(key, user[key]);
	  	//});
	  	//console.log(user);
      	return this.http.post('http://localhost/services.php', JSON.stringify(user), { headers: headers })
      	.map((response: Response) => response.json())
      	.catch((error: any) => Observable.throw(error.json().error || {message: "Server Error"}));
	  }
}
