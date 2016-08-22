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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var hero_1 = require("./hero");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.navigated = true;
                _this.heroService.getHero(id)
                    .then(function (hero) { return _this.hero = hero; });
            }
            else {
                _this.navigated = false;
                _this.hero = new hero_1.Hero();
            }
        });
    };
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroService
            .save(this.hero)
            .then(function (hero) {
            _this.hero = hero; // saved hero, w/ id if new
            _this.goBack(hero);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], HeroDetailComponent.prototype, "hero");
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeroDetailComponent.prototype, "close");
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-detail',
            template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n        <button (click)=\"goBack()\">Back</button>\n        <button (click)=\"save()\">Save</button>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.ActivatedRoute])
    ], HeroDetailComponent);
    return HeroDetailComponent;
})();
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map