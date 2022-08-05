const pokemon = ["jigglypuff", "chansey", "blissey", "mew", "clefairy", "clefable", "wigglytuff", "flaaffy", "corsola", "skitty", "alomomola", "happiny", "audino", "sylveon", "alcremie", "deerling"]

const pokemonArr = [];

pokemon.forEach(function(item, index) {
  fetch('https://pokeapi.co/api/v2/pokemon/' + item).then(res => res.json()).then(resPokemon => {
    fetch(resPokemon.species.url).then(pokemonSpecies => pokemonSpecies.json()).then(speciesType => {
      pokemonArr.push({
        id: index + 1,
        title: resPokemon.name.charAt(0).toUpperCase() + resPokemon.name.slice(1),
        img: resPokemon.sprites.other["official-artwork"].front_default,
        price: Math.floor(Math.random() * 100),
        pokemonType: speciesType.egg_groups[0].name.charAt(0).toUpperCase() + speciesType.egg_groups[0].name.slice(1),
        info: speciesType.flavor_text_entries[0].flavor_text,
        inCart: false,
        count: 0,
        total: 0
      })
    })
  })
});


export const storeProducts = pokemonArr;

console.log(storeProducts)

export const detailProduct = {
  id: 1,
  title: "Jigglypuff",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  price: 10,
  pokemonType: "Fairy",
  info:
    "When Its Huge Eyes Light Up, It Sings A Mysteriously Soothing Melody That Lulls Its Enemies To Sleep.",
  inCart: false,
  count: 0,
  total: 0
};
