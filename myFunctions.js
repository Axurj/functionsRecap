let pokeArray = [
	{ name: 'bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ name: 'ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ name: 'charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ name: 'charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ name: 'squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
];

let index = 0;
document.getElementById('myButton').addEventListener('click', pokeCounting);

// Box 1 
function pokeCounting() {
	// Gets name of Pokemon for Box 1
	let nameElement = document.getElementById('pokeNames');
	// Gets Pokemon Image for Box 1
	let picElement = document.getElementById('pokePics');
	// Gets Index Number
	let numElement = document.getElementById('iNum');
	// Gets name of Pokemon in Box 2
	let nameElement2 = document.getElementById('pokeNames2');
	// Gets Picture of Pokemon in Box 2
	let picElement2 = document.getElementById('pokePics2');
	// Gets Index Number in Box 2
	let numElement2 = document.getElementById('num2');
	if (index == 0) {
		// Shows image + name of Pokemon at Box 1
		nameElement.innerHTML = pokeArray[index].name;
		picElement.src = pokeArray[index].image;
		// For testing index in Box 1
		numElement.innerHTML = index;
	} else {
		if (index == pokeArray.length) {
			numElement.innerHTML = pokeArray[0].name;
			picElement.src = pokeArray[0].image;
			numElement2.innerHTML = pokeArray[index - 1].name;
			picElement2.src = pokeArray[index - 1].image;
			numElement.innerHTML = index;
			numElement2.innerHTML = index;
			index = 0;
		} else {
			// Shows image + name of Pokemon in Box 1
			nameElement.innerHTML = pokeArray[index].name;
			picElement.src = pokeArray[index].image;
			// Testing index in Box 1
			numElement.innerHTML = index;
			// Shows image + name of Pokemon in Box 2
			nameElement2.innerHTML = pokeArray[index - 1].name;
			picElement2.src = pokeArray[index - 1].image;
			// Testing Index in Box 2
			numElement2.innerHTML = index;
		}
	}
	index++;
}


// Box 2
// function pokeCounting2() {
//  let nameElement2 = document.getElementById('pokeNames2');
//  nameElement2.innerHTML = pokeArray[index].name;
//  let picElement2 = document.getElementById('pokePics2');
// picElement2.src = pokeArray[index].image;
//  let numElement2 = document.getElementById('num2');
//  numElement2.innerHTML = index;
//  index++;
// }