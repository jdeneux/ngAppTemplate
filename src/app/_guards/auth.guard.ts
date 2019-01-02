import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;

        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }

        // Check the role needed for the route
        if (route.data.allowedRoles) {
            const allowedRoles = route.data.allowedRoles;
            const isAuthorized = this.authenticationService.isAuthorized(allowedRoles);

            if (!isAuthorized) {
                // if not authorized, show access denied message
                console.log(`User ${currentUser.username} / ${currentUser.role} not autorised to open this route`);
                this.router.navigate(['/accessdenied']);
            }
        }

        // logged in so return true
        return true;
    }
}
