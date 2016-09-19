/**
 * Created by satish on 16/09/16.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector:'testing',
    styles:[`
        a.active{
            font-weight: bold;
            font-size: 15px;
        }
    `],
    template:`
            <h1>Hello welcome to webpack & lazy loading example</h1>
                <a (click)="navigateToUrl('service')" routerLinkActive="active">Service</a>
                <a  routerLinkActive="active" (click)="navigateToUrl('sales')">Sales</a>
                <router-outlet></router-outlet>
            `
})

export class AppComponent{

    constructor(  private _router: Router){

    }

    navigateToUrl(url:string){
        this._router.navigate([url]);
    }
}