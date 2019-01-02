import {Component} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopbarComponent {

    constructor(public app: AppComponent) {}

}
