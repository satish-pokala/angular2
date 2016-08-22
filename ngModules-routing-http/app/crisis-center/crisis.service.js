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
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
})();
exports.Crisis = Crisis;
var CRISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];
var crisesPromise = Promise.resolve(CRISES);
var core_1 = require('@angular/core');
var CrisisService = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrises = function () { return crisesPromise; };
    CrisisService.prototype.getCrisis = function (id) {
        return crisesPromise
            .then(function (crises) { return crises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisisService.nextCrisisId = 100;
    CrisisService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CrisisService);
    return CrisisService;
})();
exports.CrisisService = CrisisService;
//# sourceMappingURL=crisis.service.js.map