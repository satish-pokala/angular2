/**
 * Created by satish on 09/08/16.
 */

import {RouterConfig ,RouterModule } from '@angular/router';
import {ReaderComponent} from "./reader.component";
import {ContributorComponent} from "./contributor.component";

const routes: RouterConfig = [
    {path: '', redirectTo: 'reader', pathMatch : 'full'},
    {path : 'reader', component : ReaderComponent},
    {path : 'contributor', component : ContributorComponent}
];

export const routing = RouterModule.forRoot(routes);