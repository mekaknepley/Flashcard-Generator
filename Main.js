var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

console.log("\nTesting ClozeCard with new");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
console.log(firstPresidentCloze.partial);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.fullText);

console.log("\nTesting BasicCard with new");
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident.front);
console.log(firstPresident.back);

console.log("\nTesting ClozeCard without new");
var gameOfThronesCloze = ClozeCard("Jon Snow is the King in the North.", "Jon Snow");
console.log(gameOfThronesCloze.partial);
console.log(gameOfThronesCloze.cloze);
console.log(gameOfThronesCloze.fullText);

console.log("\nTesting BasicCard without new");
var gameOfThrones = BasicCard("Who is the King in the North?", "Jon Snow");
console.log(gameOfThrones.front);
console.log(gameOfThrones.back);

console.log("");
var brokenCloze = new ClozeCard("This doesn't work", "oops");