"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var appComponent_1 = require("./appComponent");
var loginComponent_1 = require("./components/login/loginComponent");
var welcomeComponent_1 = require("./components/welcome/welcomeComponent");
var userProfileComponent_1 = require("./components/profile/userProfileComponent");
var headerComponent_1 = require("./components/header/headerComponent");
var sidebarComponent_1 = require("./components/sidebar/sidebarComponent");
var dashboardComponent_1 = require("./components/dashboard/dashboardComponent");
var AreaChartComponent_1 = require("./components/shared/charts/area-chart/AreaChartComponent");
//lib or thirdParty
//import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
var ng2_charts_1 = require("ng2-charts");
var incomeService_1 = require("./services/incomeService");
var user_service_1 = require("./services/user.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            ng2_charts_1.ChartsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { 'path': '', redirectTo: 'login', pathMatch: 'full' },
                { 'path': 'login', component: loginComponent_1.Login },
                { 'path': 'welcome', component: welcomeComponent_1.Welcome },
                { 'path': 'dashboard', component: dashboardComponent_1.DashboardComponent },
                { 'path': 'category/:id', component: welcomeComponent_1.Welcome },
            ])
        ],
        declarations: [appComponent_1.AppComponent, loginComponent_1.Login, welcomeComponent_1.Welcome, userProfileComponent_1.UserProfile, headerComponent_1.HeaderComponent, sidebarComponent_1.SidebarComponent, dashboardComponent_1.DashboardComponent, AreaChartComponent_1.AreaChartComponent],
        bootstrap: [appComponent_1.AppComponent],
        providers: [incomeService_1.IncomeService, user_service_1.UserService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map