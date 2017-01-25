"use strict";
var testing_1 = require('@angular/core/testing');
var router_1 = require('@angular/router');
var testing_2 = require('@angular/router/testing');
var app_component_1 = require('./app.component');
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [app_component_1.AppComponent],
            providers: [router_1.provideRoutes]
        });
    });
    it("should have a title", function () {
        var fixure = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixure.detectChanges();
        expect(fixure.debugElement.componentInstance.title).toEqual('Welcome to Grocery App');
    });
});
//# sourceMappingURL=app.component.spec.js.map