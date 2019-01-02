import {Component, OnInit} from '@angular/core';
import {SelectItem, MenuItem} from 'primeng/primeng';
import { first } from 'rxjs/operators';

import {UserService} from '@/_services';
import {User} from '@/_models';

@Component({
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

    users: User[];

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}
