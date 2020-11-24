var car = {
	name : "sonata",
	ph : "500ph",
	start : function () {
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

var car2 = {
    name : "bmw",
	ph : "500ph",
	start : function () {
        console.log('insert keys');
		console.log("engine is starting");
	},
	stop : function () {
		console.log("engine is stoped");
	}
}

console.log(car.name);
car.start();

console.log(car2.name);
car2.start();