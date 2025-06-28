
console.log("***Number Methods***")
let Score = 400
console.log(" Check for Finite Number:", isFinite(Score))
console.log("Value in String:", Score.toString())
let Salary = 300.90;
console.log(" Value in Precision:", Salary.toPrecision(3))
let Number = 23456
console.log("Value in parseInt", parseInt(Number))
let c = parseFloat("4325222")
console.log("Value in parseFloat:", c)
let k = 3000.89849;
console.log("value of method:", k.valueOf())
console.log(" value using to fixed:", k.toFixed(2))
console.log("Not A Number:", isNaN("hello"));


//Use of Math Important Methods
console.log("***Math Methods***")
let Num = 123.75
console.log("ceil Return Base round Value:", Math.ceil(Num))
console.log("Floor method return floor value:", Math.floor(Num))
console.log("Round of using method:", Math.round(Num))
console.log("Random Method :", Math.random(Num))
let Num1=16;
console.log("Square Root Method Num is 16:",Math.sqrt(Num1))
console.log("Value of Sin Number 2:",Math.sin(2))
console.log("Value of PI:",Math.PI)
console.log("VAlue of log 20:",Math.log(20))
console.log("Power of NNumber 20:",Math.pow(20,3))

//USe of Object Methods
console.log("***Object Methods***")
const  abc={
    firstName: "ABCD",
    lastName: "Saini"
};
const xyz={
    firstName:"Assign",
    Age:30
    
};
console.log("FirstName using Create Method:",abc.firstName)
console.log("Assign Method:",Object.assign(abc,xyz))
console.log( Object.keys(abc))
console.log("Enteries in Object:",Object.entries(xyz))
Object.seal(abc)
abc.email="abc@gmail.com"
console.log("seal method",abc)
console.log("Freeze Method")
xyz.firstName="Freeze"
console.log("Before freeze",xyz)
Object.freeze(xyz);
xyz.firstName="NoChange"
console.log("After freeze",xyz)
