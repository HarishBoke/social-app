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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var incomeService_1 = require("./../../services/incomeService");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DashboardComponent = (function () {
    function DashboardComponent(incomeSvc) {
        this.incomeSvc = incomeSvc;
        this.totalIncome = 0;
        this.allIncomeData = [];
        //this.totalIncome = this.incomeSvc.initGetTotalIncome;
        // console.log("totalIncome:" + this.totalIncome);
        // this.incomeCategories = this.incomeSvc.getData(); 
        //this.incomeCategories = this.incomeSvc.initGetCatData;
        //console.log("from Component:" + JSON.stringify(this.incomeCategories));
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.setTotalIncome = this.incomeSvc.getTotalIncome();
        //this.incomeSvc.getIncomeData();
        // this.incomeCategories = this.incomeSvc.getIncomeData();
        // this.getAllIncomeData();
        this.getTotalIncomeCount();
        this.getCategoriesData();
    };
    DashboardComponent.prototype.getAllIncomeData = function () {
        var _this = this;
        return this.incomeSvc.setIncomeData().map(function (incomeData) {
            _this.getAllIncome = incomeData;
            return _this.getAllIncome;
        }).catch(function (error) {
            console.log('error ' + error);
            throw error;
        });
    };
    DashboardComponent.prototype.getTotalIncomeCount = function () {
        var _this = this;
        this.getAllIncomeData().subscribe(function (_) {
            console.log(_this.getAllIncome, "from getall incomeData");
            for (var i = 0; i < _this.getAllIncome.length; ++i) {
                _this.totalIncome += parseInt(_this.getAllIncome[i].receiptAmt);
            }
            return _this.totalIncome;
        });
        return this.totalIncome;
    };
    DashboardComponent.prototype.getCategoriesData = function () {
        var that = this;
        this.incomeSvc.setCatData().subscribe(function (res) {
            that.incomeCategories = res;
            console.log("from get cat data", that.incomeCategories);
        });
        return this.incomeCategories;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'app-dashboard',
        templateUrl: 'app/components/dashboard/dashboard.html'
    }),
    __metadata("design:paramtypes", [incomeService_1.IncomeService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboardComponent.js.map