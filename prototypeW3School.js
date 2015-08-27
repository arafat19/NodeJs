/*
function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

var me = new person('ibrahim', 'arafat', '22', 'black');
console.log(me.name());
console.log(me.age);
console.log(me.eyeColor);


x = sumAll(1, 2, 3, 4, 5, 6);

function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(x);

function returnYou(){
    return this;
}
console.log(returnYou());

var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this;
    }
}

console.log(myObject);*/
/*
var myObject;
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);


function myFunction(a, b) {
    return a * b;
}
myArray = [10, 3];
myObject = myFunction.apply(myObject, myArray);
console.log(myObject);
*/
