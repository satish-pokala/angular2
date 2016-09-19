import { Routes, RouterModule }  from '@angular/router';
import { loginRoutes,
    authProviders }      from './login.routing';
import {CanDeactivateGuard} from "./can-deactivate-guard.service";
const appRoutes: Routes = [
    ...loginRoutes
];
export const appRoutingProviders: any[] = [
    authProviders,CanDeactivateGuard
];
export const routing = RouterModule.forRoot(appRoutes);
