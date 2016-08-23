var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Sonakshi on 8/22/2016.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var crisis_center_routing_1 = require('./crisis-center.routing');
var crisis_center_component_1 = require("./crisis-center.component");
var crisis_list_component_1 = require("./crisis-list.component");
var crisis_detail_component_1 = require("./crisis-detail.component");
var crisis_service_1 = require("./crisis.service");
var CrisisCenterModule = (function () {
    function CrisisCenterModule() {
    }
    CrisisCenterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                crisis_center_routing_1.crisisCenterRouting
            ],
            declarations: [
                crisis_center_component_1.CrisisCenterComponent,
                crisis_list_component_1.CrisisListComponent,
                crisis_detail_component_1.CrisisDetailComponent
            ],
            providers: [
                crisis_service_1.CrisisService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CrisisCenterModule);
    return CrisisCenterModule;
})();
exports.CrisisCenterModule = CrisisCenterModule;
//# sourceMappingURL=crisis-center.module.js.map