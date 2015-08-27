/*
function printArafat(){
    console.log("Hi this is Arafat");
}

function printWindy(){
    console.log("Hi this is Windy");
}

module.exports.arafat = printArafat;
module.exports.windy = printWindy;*/

//////----------------------- more on modules-------------------//////

/*
module.exports = {
    printArafat : function (){
        console.log('This is arafat');
    },

    printWindy : function (){
        console.log('This is windy');
    },

    favPerson: 'Muhammad'
};*/

//////////////-----------Shared State of Modules--------------///////////

/*
module.exports = {
    favModules : ""
};*/


//////////////----------- Object Factory --------------///////////

module.exports = function(){
    return{
        favModule: ""
    }
};