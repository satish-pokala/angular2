/**
 * Created by satish on 16/09/16.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceComponent} from "./service.component";
import {serviceRouting} from "./service.routing";

@NgModule({
    declarations: [ServiceComponent],
    imports: [serviceRouting],
    providers: []
})

export class ServiceModule {}