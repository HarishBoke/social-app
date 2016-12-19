import { Component } from "@angular/core";
import { IncomeService } from "./../../services/incomeService";

@Component({
    selector:'app-dashboard',
    templateUrl:'app/components/dashboard/dashboard.html'
})

export class DashboardComponent {
    private totalIncome:number = 0;
    private incomeCategories:any;
    constructor(private incomeSvc : IncomeService){
        this.totalIncome = this.incomeSvc.initGetTotalIncome;
       // console.log("totalIncome:" + this.totalIncome);
        this.incomeCategories = this.incomeSvc.initGetCatData;
      console.log("from Component:" + JSON.stringify(this.incomeCategories));
    }
        

}