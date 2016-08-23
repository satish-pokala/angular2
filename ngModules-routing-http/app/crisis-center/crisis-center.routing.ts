import { Routes, RouterModule } from '@angular/router';
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail.component";

const crisisCenterRoutes: Routes = [
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
            { path: ':id',  component: CrisisDetailComponent },
            { path: '',     component: CrisisListComponent }
        ]
    }
];

export const crisisCenterRouting = RouterModule.forChild(crisisCenterRoutes);

