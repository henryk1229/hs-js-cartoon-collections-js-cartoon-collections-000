function dwarfRollCall(dwarves) { var arr = [];
for (let i = 0, l = dwarves.length; i < l; i++) {
  
  arr.push(`${arr.length + 1}. ${dwarves[i]}`); 
  }
  
 return `${arr.join(' ')} `;
}

function summonCaptainPlanet(planeteerCalls){ var arr = [];
for (let i = 0, l = planeteerCalls.length; i < l; i++) {
  
  arr.push(`${planeteerCalls[i]}!`); 
  
  for (let i = 0, l = arr.length; i < l; i++) {
    
    arr[i] = arr[i].toUpperCase();
  }
}

return arr;
}

function longPlaneteerCalls(words) { 
  if (words.length > 3) { 
    
    return true;
  } else {
    
    return false;
  }
}

function findTheCheese (foods) {
  for (let i = 0, l = foods.length; i < l; i++) {
    if (foods[i] === "gouda") {
   
      return "gouda";
     } else if (foods[i] === "cheddar") {
       
        return "cheddar";
       } else if (foods[i] === "camembert") {
         
          return "camembert";
        }
      }
     return "no cheese!";
    }
  

