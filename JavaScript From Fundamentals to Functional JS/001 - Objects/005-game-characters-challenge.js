/*
Create an object using bracket and dot notation that represents
the characters and related data you may find in a game o of Clue.
 */

var game = {};

game.murderer = '??';

game['weapons'] = [
    {type: 'lasers', location: 'lab'},
    {type: 'angry cats', location: 'garden'},
    {type: 'dish soap', location: 'kitchen'},
];

game.characters = [];
game.characters[0] = 'Miss Scarlet';
game.characters[1] = 'Dr. Bob';
game.characters.push('Mr. Green');

console.log(game);