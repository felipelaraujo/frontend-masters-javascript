const game = {
  suspects: [
    {
      name: "Rusty",
      color: "Orange",
    },
    {
      name: "Miss Scarlet",
      color: "Red",
    },
  ],
};

// for (let i = 0; i < game['suspects'].length; i++) {
//     console.log('suspect: ', game['suspects'][i]);
// }

for (let i = 0; i < game.suspects.length; i++) {
  console.log("suspect: ", game.suspects[i]);
}

for (let i = 0; i < game.suspects.length; i++) {
  for (const key in game.suspects[i]) {
    if (game.suspects[i]["name"] === "Rusty") {
      game.suspects[i].marked = true;
    } else {
      game.suspects[i].marked = false;
    }
    console.log(
      `index: ${i}, valor: ${game.suspects[i][key]}, ${game.suspects[i]}`
    );
  }
}

console.log(game);
