/**
 * Created by satish on 16/09/16.
 */

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
        {path:'', redirectTo:'/sales', pathMatch:'full'},
        {path : 'sales',  loadChildren: () => require('es6-promise!../sales/sales.module')('SalesModule')},
        {path : 'service',loadChildren: () => require('es6-promise!../service/service.module')('ServiceModule')}
];

export const routing = RouterModule.forRoot(routes);