function dwarfRollCall(dwarves) { 
  var arr = [];
  for (let i = 0, l = dwarves.length; i < l / 2; i++) {
    arr.push(`${i + 1}. ${dwarves[i]}`); 
  }
  return `${arr.join(' ')} `;
}

function summonCaptainPlanet(planeteerCalls){ 
  var arr = [];
  for (let i = 0, l = planeteerCalls.length; i < l; i++) {
    arr.push(`${planeteerCalls[i].toUpperCase()}!`); 
  }
  return arr;
}

function longPlaneteerCalls(words) { 
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for (let i = 0, l = foods.length; i < l; i++) {
    if (foods[i] === "gouda") {
      return "gouda";
    } else if (foods[i] === "cheddar") {
      return "cheddar";
    } else if (foods[i] === "camembert") {
      return "camembert";
    } else if (foods[i] === "swiss cheese") {
      return "swiss cheese";
    }
  }
 return "no cheese!";
}

function wordsWithB(words) {
  var arr = [];
  for (let i = 0, l = words.length; i <l; i++) {
    if (words[i].startsWith("b") === true) {
      arr.push(words[i])
    }
  }
  return arr;
}

