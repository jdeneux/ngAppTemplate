import {Component, OnInit} from '@angular/core';
import {CarService} from '../service/carservice';
import {EventService} from '../service/eventservice';
import {Car} from '../domain/car';
import {SelectItem, MenuItem} from 'primeng/primeng';

@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardDemoComponent implements OnInit {

    cities: SelectItem[];

    cars: Car[];

    cols: any[];

    selectedCar: Car;

    chartData: any;

    events: any[];

    selectedCity: any;

    items: MenuItem[];

    fullcalendarOptions: any;

    constructor(private carService: CarService, private eventService: EventService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.eventService.getEvents().then(events => {this.events = events; });

        this.cities = [];
        this.cities.push({label: 'Select City', value: null});
        this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
        this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
        this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
        this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
        this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };

        this.items = [
            {label: 'New', icon: 'ui-icon-add'},
            {label: 'Open', icon: 'ui-icon-archive'}
        ];

        this.fullcalendarOptions = {
            defaultDate: '2016-01-12'
        };
    }
}
