$(function() {
  // jQuery goes here...

  /*Coding Activity: Improving the Pokédex*/

  /*$.getJSON() --> This is a function that makes it easier to make such calls for JSON APIs, instead of using the AJAX function
  directly.*/
  var pokeApiUrl = "https://pokeapi.co/api/v2/generation/1";
  var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";
  $.getJSON(pokeApiUrl).done(function(pokemones){
    console.log(pokemones);
    $.each(pokemones.pokemon_species, function(index, pokemon){
      var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      var link =$("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
      var par = $("<p>").html("Pokémon species no. " + (index+1) + " is ").append(link);

      link.click(function(event){        
        $.getJSON(pokemonByName+ pokemon.name).done(function(details){
          console.log(details);

          var pokemonDiv = $("#pokemon-details");
          pokemonDiv.empty();
          pokemonDiv.append("<h2>" + name + "</h2>");
          pokemonDiv.append("<img src='" + details.sprites.front_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
          pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>");
          pokemonDiv.append("<img src='" + details.sprites.back_default + "'>");
        });
        event.preventDefault();
      });

      par.appendTo("#pokemon");
    });
  }).fail(function(){
    console.log("Request to Pokeapi failed.");
  }).always(function(){
    //This will be executed always
    console.log("Pokémon is awesome");
  });

  //Obs
  /*Normally, when requesting resources from a remote server, you'll run into a cross-origin error. 
  This means you're only allowed to fetch resources from your own domain or domains that are 
  explicitly set up to allow such remote requests (like the PokéAPI site).

  JSONP is just an easy way to avoid such cross-origin errors.*/
}); 