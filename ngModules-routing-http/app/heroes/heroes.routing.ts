/**
 * Created by Sonakshi on 8/22/2016.
 */
import { Routes, RouterModule } from '@angular/router';

import { HeroDetailComponent }  from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";

const heroesRoutes: Routes = [
    {path:'',redirectTo:'/heroes',pathMatch: 'full'},
    { path: 'heroes',  component: HeroesComponent },
    { path: 'hero/:id', component: HeroDetailComponent }
];

export const heroesRouting = RouterModule.forChild(heroesRoutes);

