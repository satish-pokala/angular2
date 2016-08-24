import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }       from './app.component';
import { routing,
    appRoutingProviders } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

import { HeroesModule } from './heroes/heroes.module';
import { LoginComponent } from './login.component';
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
        HeroesModule,
        CrisisCenterModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
