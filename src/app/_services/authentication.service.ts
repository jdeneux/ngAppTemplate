import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../environments/environment';

import { User } from '@/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/api/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }

    isAuthorized(allowedRoles: string[]): boolean {
        // check if the list of allowed roles is empty, if empty, authorize the user to access the page
        if (allowedRoles == null || allowedRoles.length === 0) {
          return true;
        }

        // get token from local storage or state management
        const currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
        const token = currentUser.token;

        // decode token to read the payload details
        const decodeToken = this.jwtHelperService.decodeToken(token);

        // check if it was decoded successfully, if not the token is not valid, deny access
        if (!decodeToken) {
          console.log('Invalid token');
          return false;
        }

        // check if the user roles is in the list of allowed roles, return true if allowed and false if not allowed
        return allowedRoles.includes(decodeToken['role']);
    }
}
