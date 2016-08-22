/**
 * Created by Sonakshi on 8/22/2016.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {heroesRouting} from './heroes.routing';
import { HeroDetailComponent }  from './hero-detail.component';
// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { HeroService } from './hero.service';
import {HeroesComponent} from "./heroes.component";
import {InMemoryDataService} from "./in-memory-data.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        heroesRouting
    ],
    declarations: [
        HeroesComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService,
        { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
        { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
    ]
})
export class HeroesModule {}
