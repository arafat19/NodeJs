var modules = require ('./modules');
/*
modules.favModules = 'The Admin';

console.log("Windy's Favourite module is " + modules.favModules);
*/

var windyModules = modules();
windyModules.favModule = 'The Admin';
console.log("Windy's Favourite module is " + windyModules.favModule);
