// everything that uses a dot in JavaScript is an object

var person = {};
person.name = "Mrs. White";

var who = person.name;
person.name = "Mr. White";

who.story; // undefined
