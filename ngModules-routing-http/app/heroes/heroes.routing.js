/**
 * Created by Sonakshi on 8/22/2016.
 */
var router_1 = require('@angular/router');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require("./heroes.component");
var heroesRoutes = [
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
exports.heroesRouting = router_1.RouterModule.forChild(heroesRoutes);
//# sourceMappingURL=heroes.routing.js.map