$(function() {
  // jQuery goes here...

  /*Coding Activity: Retrieving Pokémon Data from The PokéAPI*/

  /*$.getJSON() --> This is a function that makes it easier to make such calls for JSON APIs, instead of using the AJAX function
  directly.*/
  var pokeApiUrl = "https://pokeapi.co/api/v2/generation/1";
  $.getJSON(pokeApiUrl).done(function(pokemones){
    console.log(pokemones);
    $.each(pokemones.pokemon_species, function(index, pokemon){
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

      var par = $("<p>").html("Pokémon species no. " + (index+1) + " is " + name);
      par.appendTo("#pokemon");
    });
  }).fail(function(){
    console.log("Request to Pokeapi failed.");
  }).always(function(){
    //This will be executed always
    console.log("Pokémon is awesome");
  });
}); 