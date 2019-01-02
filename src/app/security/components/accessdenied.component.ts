import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '@/_services';

@Component({ templateUrl: 'accessdenied.component.html', styleUrls: ['accessdenied.component.scss'] })
export class AccessDeniedComponent {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}
}
