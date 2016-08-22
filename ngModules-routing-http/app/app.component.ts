import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/crisis-center" routerLinkActive="active">Crises</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
         </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent{
    title = 'Tour of Heroes';
}

