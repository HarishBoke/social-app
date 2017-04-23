import { Component } from "@angular/core";
import { IncomeService } from "./../../services/incomeService";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector:'app-dashboard',
    templateUrl:'app/components/dashboard/dashboard.html'
})

export class DashboardComponent {
    private totalIncome:number = 0;
    private incomeCategories:any;
    private getAllIncome;
    private incomeData;
    allIncomeData:Array<any>=[];
    constructor(private incomeSvc : IncomeService){
        //this.totalIncome = this.incomeSvc.initGetTotalIncome;
       // console.log("totalIncome:" + this.totalIncome);
       // this.incomeCategories = this.incomeSvc.getData(); 
        //this.incomeCategories = this.incomeSvc.initGetCatData;
      //console.log("from Component:" + JSON.stringify(this.incomeCategories));
    }
    ngOnInit(){
       // this.setTotalIncome = this.incomeSvc.getTotalIncome();
        
        //this.incomeSvc.getIncomeData();
       // this.incomeCategories = this.incomeSvc.getIncomeData();
      // this.getAllIncomeData();
         this.getTotalIncomeCount();
         this.getCategoriesData();
    }
   private getAllIncomeData(){
        return this.incomeSvc.setIncomeData().map((incomeData) => {
                this.getAllIncome = incomeData;
                return this.getAllIncome;
        }).catch((error) => {
            console.log('error ' + error);
            throw error;
        });
    }        
   private  getTotalIncomeCount(){
        this.getAllIncomeData().subscribe( _ => {
            console.log(this.getAllIncome, "from getall incomeData")
            for(let i = 0; i < this.getAllIncome.length; ++i){
                this.totalIncome += parseInt(this.getAllIncome[i].receiptAmt);           
            }
            return this.totalIncome;
        })     
        return this.totalIncome;
    }
    private getCategoriesData(){
        var that  = this;
        this.incomeSvc.setCatData().subscribe((res)=>{
            that.incomeCategories = res;
            console.log("from get cat data", that.incomeCategories);
        });
        return this.incomeCategories;
    }
}