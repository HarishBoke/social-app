"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AreaChartComponent = (function () {
    function AreaChartComponent() {
        //constructor(private incomeCatSvc: IncomeService){
        // this.incomeGetCatData  = this.incomeCatSvc.getCatData();
        // console.log("this.incomeGetCatData" + this.incomeGetCatData);
        //}
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    AreaChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AreaChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AreaChartComponent = __decorate([
        core_1.Component({
            selector: "area-chart",
            styles: ["\n      chart {\n        display: block;\n      }\n    "],
            template: "<div style=\"display: block\">\n  <canvas baseChart\n          [data]=\"polarAreaChartData\"\n          [labels]=\"polarAreaChartLabels\"\n          [legend]=\"polarAreaLegend\"\n          [chartType]=\"polarAreaChartType\"\n          (chartHover)=\"chartHovered($event)\"\n          (chartClick)=\"chartClicked($event)\"></canvas>\n</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], AreaChartComponent);
    return AreaChartComponent;
}());
exports.AreaChartComponent = AreaChartComponent;
//# sourceMappingURL=AreaChartComponent.js.map