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
var router_1 = require('@angular/router');
var crisis_service_1 = require("./crisis.service");
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, crisisService) {
        this.route = route;
        this.router = router;
        this.crisisService = crisisService;
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.crisisService.getCrisis(id)
                    .then(function (crisis) { return _this.crisis = crisis; });
            }
        });
    };
    CrisisDetailComponent.prototype.cancel = function () {
        this.gotoCrises();
    };
    CrisisDetailComponent.prototype.back = function () {
        window.history.back();
    };
    CrisisDetailComponent.prototype.gotoCrises = function () {
        var crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['/crisis-center', crisisId]);
    };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <div *ngIf=\"crisis\">\n    <h3>\"Hello {{crisis.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{crisis.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"crisis.name\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"back()\">Back</button>\n    </p>\n  </div>\n  ",
            styles: ['input {width: 20em}']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, crisis_service_1.CrisisService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
})();
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map