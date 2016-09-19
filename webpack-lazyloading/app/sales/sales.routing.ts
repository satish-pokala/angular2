/**
 * Created by satish on 16/09/16.
 */

import {RouterModule, Routes} from '@angular/router';
import {SalesComponent} from "./sales.component";

const routes: Routes = [
        {
                path: '',
                component: SalesComponent
        }

];

export const salesRouting = RouterModule.forChild(routes);