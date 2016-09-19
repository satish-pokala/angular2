/**
 * Created by satish on 16/09/16.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SalesComponent} from "./sales.component";
import {salesRouting} from "./sales.routing";


@NgModule({
    declarations: [SalesComponent],
    imports: [salesRouting],
    providers: []
})

export class SalesModule {}