/**
 * Created by satish on 09/08/16.
 */

import {RouterModule, RouterConfig } from '@angular/router';
import {ReaderComponent} from "./reader.component";
import {FavoritesComponent} from "./favorites.component";
import {ProfileComponent} from "./profile.component";

const routes: RouterConfig = [
    {path: '', redirectTo: 'reader', pathMatch : 'full'},

    {path : 'reader', component : ReaderComponent,children: [
        { path: '', redirectTo: 'favorites', pathMatch: 'full' },
        { path: 'favorites', component: FavoritesComponent },
        { path: 'profile',component:ProfileComponent}
    ]}
];

export const routing = RouterModule.forRoot(routes);