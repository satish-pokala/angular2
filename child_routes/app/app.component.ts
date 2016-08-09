/**
 * Created by satish on 09/08/16.
 */

import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router"

@Component({
    selector:'my-app',
    template:`
    <h1>Component Router</h1>
    <nav>
      <a routerLink="/reader" routerLinkActive="active">Reader Component</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent{

}