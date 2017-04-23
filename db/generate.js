module.exports = function() {
	
 	var faker = require("faker");
	var _ = require("lodash");
	var mainCat = function(catId){
		const catArray = ["Ganpati","Swami","Mhasoba Karndak","Rent","Others"]
		return catArray[catId];
	}
	var subCat = function(catName){
		let response="";
		var subCatArray =  [
			{
			name:"Ganpati"	,
			data:["Ganpati1","Ganpati2","Ganpati3",]
		},
		{
			name:"Swami",
			data:["Swami1","Swami2","Swami3",]
		},
		{
			name:"Mhasoba 	Karndak",
			data:["Matchq1","Matchq2","Matchq3"]
		},
		{
			name:"Rent",
			data:["rent1","rent2"]
		},
		{
			name:"Others",
			data:["Other1","Other2","Other3"]
		}];
		subCatArray.forEach(function(item){
	
			if(item.name===catName)
			{
				var randomNumber = faker.random.number({
						'min': 0,
						'max': item.data.length - 1
					});		
					//console.log(item.data[randomNumber])
							response= item.data[randomNumber];
		
				
			}
		});
			console.log(response)
			return response;
	}
	return {
		users: _.times(50, function (n) {
			return {
				id : n,
				name : faker.name.findName(),
				about : faker.lorem.paragraph(),
				avatar : faker.internet.avatar(),
				friends : faker.name.findName(),
				followers : faker.name.findName(),
				photos : faker.name.findName(),
				videos : faker.name.findName()
			}
		}),
		posts: _.times(50, function (n){
			return{
				id: n,
				name: faker.lorem.sentence(),
				description:  faker.lorem.paragraph()
			}
		}),
		income: _.times(30, function (n) {
			var randomNumber = faker.random.number({
			'min': 0,
			'max': 4
		});
var mainCatName = mainCat(randomNumber);
var subCatName = subCat(mainCatName);
			return {
				receiptPersonMobile: faker.phone.phoneNumber(),
				receiptPersonEmail: faker.internet.email(),
				receiptPersonAddress: faker.address.secondaryAddress(),
				receiptType: faker.finance.transactionType(),
				receivedDate: faker.date.past(),
				receviedBy: faker.name.findName(),
				receiptAmt: faker.finance.amount(),
				receiptDescription: faker.finance.account(),
				receiptName: faker.name.findName(),
				receiptMainCategory:mainCatName ,
				receiptSubCategory: subCatName,				
				receiptid: faker.random.number(),
				id: n
			}
		})

	}
}