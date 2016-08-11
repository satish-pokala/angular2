import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {AppComponent}   from './app.component';
import {ReaderComponent} from "./reader.component";
import {ContributorComponent} from "./contributor.component";
import {routing} from "./app.routes";

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        ReaderComponent,
        ContributorComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
