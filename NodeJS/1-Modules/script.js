"use strict";

const Chat = require("./modules/Chat");
const date = require("./modules/date");

// =======
// const utils = require("./modules/utils");
// var { date, Chat, rand } = require("./modules/utils");

console.log(new Chat("MIC 2019").sayHello());
console.log("Today : ", date.getDate());

// console.log("Utils usage : ");
// console.log(new Chat("MIC 2019 ").sayHello());
// console.log("Today : ", date.getDate());
// console.log("Randow Number : ", rand());
