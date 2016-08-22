import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    ngOnInit() {
        console.log("Hi");
    }
}


