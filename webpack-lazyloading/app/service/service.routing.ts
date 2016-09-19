/**
 * Created by satish on 16/09/16.
 */

import {RouterModule, Routes} from '@angular/router';
import {ServiceComponent} from "./service.component";

const routes: Routes = [
        {
                path: '',
                component: ServiceComponent
        }

];

export const serviceRouting = RouterModule.forChild(routes);