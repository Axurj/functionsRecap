let pokeArray = [
  {name: 'bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
  {name: 'ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
  {name: 'charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
  {name: 'charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
  {name: 'squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  ];

let index = 0;
document.getElementById('myButton').addEventListener('click', pokeCounting1);

// Box 1 
function pokeCounting1() {
  // Gets + Shows name of Pokemon
  let nameElement = document.getElementById('pokeNames');
  nameElement.innerHTML = pokeArray[index].name;
  // Gets + Shows Pokemon Image
  let picElement = document.getElementById('pokePics');
  picElement.src = pokeArray[index].image;
  let numElement = document.getElementById('iNum');
  numElement.innerHTML = index;
  index++;
}

// Box 2
function pokeCounting2() {
  let nameElement2 = document.getElementById('pokeNames2');
  nameElement2.innerHTML = pokeArray[index].name;
  let picElement2 = document.getElementById('pokePics2');
  picElement2.src = pokeArray[index].image;
  let numElement2 = document.getElementById('num2');
  numElement2.innerHTML = index;
  index++;
}