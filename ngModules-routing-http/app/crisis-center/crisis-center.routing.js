var router_1 = require('@angular/router');
var crisis_center_component_1 = require("./crisis-center.component");
var crisis_list_component_1 = require("./crisis-list.component");
var crisis_detail_component_1 = require("./crisis-detail.component");
var crisisCenterRoutes = [
    {
        path: '',
        redirectTo: '/crisis-center',
        pathMatch: 'full'
    },
    {
        path: 'crisis-center',
        component: crisis_center_component_1.CrisisCenterComponent,
        children: [
            { path: ':id', component: crisis_detail_component_1.CrisisDetailComponent },
            { path: '', component: crisis_list_component_1.CrisisListComponent }
        ]
    }
];
exports.crisisCenterRouting = router_1.RouterModule.forChild(crisisCenterRoutes);
//# sourceMappingURL=crisis-center.routing.js.map