//function addNumbers(a, b){
//	return a + b;
//};
//
//console.log(addNumbers(7 ,3));

//function placeAnOrder(orderNumber) {
//
//    console.log("Current Order:", orderNumber);
//
//    cookAndDeliverFood(function(){
//        console.log("Delivered food order!", orderNumber)
//    });
//}
//
//// Simulate a 5 seconds operation
//function cookAndDeliverFood(callback) {
//    setTimeout(callback, 3000);
//
//}
//
//placeAnOrder(1);
//placeAnOrder(2);
//placeAnOrder(3);
//placeAnOrder(4);

//////////////----------------------///////////////////

//var Arafat = {
//    favFood : "Burger",
//    favMovie : "SciFi"
//};
//
//var Person = Arafat;
//
//Person.favFood = "Pizza";
//
//console.log(Arafat.favFood);
//
//console.log(19 == '19') //true || two equal sign checks only values
//console.log(19 === '19') //true || three equal sign checks values and types also

//////////////----------------------///////////////////

//var Arafat = {
//    printFirstName: function(){
//        console.log("My name is Arafat");
//        console.log(this === Arafat);
//    }
//};
//
//Arafat.printFirstName();
//
////The default calling context is global
//function doSomething(){
//    console.log("\n I am working");
//    console.log(this === global);
//}
//doSomething();

//////////////----------Prototype------------///////////////////

//function User(){
//    this.name = '';
//    this.life = 100;
//
//    this.giveLife = function giveLife(targetPlayer){
//        targetPlayer.life += 1 ;
//        console.log(this.name + ' give 1 life to ' + targetPlayer.name);
//
//    }
//}
//
//var Arafat = new User();
//var Windy = new User();
//
//Arafat.name = 'Arafat';
//Windy.name = 'Windy'
//
//Arafat.giveLife(Windy);
//console.log('Arafat: ' + Arafat.life);
//console.log('Windy: ' + Windy.life);
//
////you can add function to all objects
//User.prototype.upperCut = function upperCut(targetPlayer){
//    targetPlayer.life -= 3 ;
//    console.log(this.name + ' just upercutted ' + targetPlayer.name);
//}
//
//Windy.upperCut(Arafat);
//console.log('Arafat: ' + Arafat.life);
//console.log('Windy: ' + Windy.life);
//
//// you can add function all objects
//User.prototype.magic = 50;
//console.log('Arafat Magic: ' + Arafat.magic);
//console.log('Windy Magic: ' + Windy.magic);

//////////////----------Modules------------///////////////////

/*
var personalities = require('./modules');
personalities.arafat();
personalities.windy();*/


//////----------------------- more on modules-------------------//////

/*var personalities = require('./modules');
personalities.printArafat();
console.log(personalities.favPerson);*/

//////////////-----------Shared State of Modules--------------///////////
require('./windy');
require('./arafat');