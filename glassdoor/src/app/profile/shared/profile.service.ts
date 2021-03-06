import { Injectable } 		from '@angular/core';
import { Headers, Http } 	from '@angular/http';
import { Router }         from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { environment }	from '../../../environments/environment';

@Injectable()
export class ProfileService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private profileURL = `${environment.apiUrl}/auth`;

  constructor(private http: Http, private router: Router) { }

  onLogin(username: string, password: string): Promise<any> {
  	const params = JSON.stringify({username: username, password: password});
  	const url = `${this.profileURL}/login`;
  	return this.http
  		.post(url, params, {headers: this.headers})
  		.toPromise()
  		.then((data) => {
        this.navigateTo('profile');
  			return data;
  		})
  		.catch(this.handleError);
  }

  onRegister(username: string, password: string): Promise<any> {
  	const params = JSON.stringify({username: username, password: password});
  	const url = `${this.profileURL}/signup`;
  	return this.http
  		.post(url, params, {headers: this.headers})
  		.toPromise()
  		.then((data) => {
  			return data
  		})
  		.catch(this.handleError);
  }

  isTokenValid(token: string): Promise<boolean> {
		const url = `${this.profileURL}/verify`;
		return this.http
      .post(url, JSON.stringify({token: token}), {headers: this.headers})
      .toPromise()
      .then((data) => {
      	return true
      }, err => {
      	this.onLogOut();
      	return false;
      })
      .catch(this.handleError);
  }

  onLogOut(): void {
  	localStorage.removeItem('session');
  	this.navigateTo('')
  }

  private navigateTo(path: string): void {
    this.router.navigate([`/${path}`]);
    location.reload()
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
