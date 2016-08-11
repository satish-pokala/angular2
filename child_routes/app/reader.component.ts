/**
 * Created by satish on 09/08/16.
 */


import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router"

@Component({
    template:`
        <h1>Child Route</h1>
        <nav>
            <a routerLink="/reader/favorites" routerLinkActive="active">Favorite Component</a>
            <a routerLink="/reader/profile" routerLinkActive="active">Profile Component</a>
        </nav>
       <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class ReaderComponent{}