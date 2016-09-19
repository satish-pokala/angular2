/**
 * Created by Sonakshi on 8/22/2016.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {crisisCenterRouting} from './crisis-center.routing';
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisService} from "./crisis.service";
import {CrisisAdminComponent} from "./crisis-admin.component";
import {CrisisDetailResolve} from "./crisis-detail.resolve";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        crisisCenterRouting
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisDetailComponent,
        CrisisAdminComponent
    ],
    providers: [
        CrisisService,
        CrisisDetailResolve
    ]
})
export class CrisisCenterModule {}
