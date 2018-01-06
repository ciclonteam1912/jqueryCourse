$(function() {
  // jQuery goes here...

  /*Retrieving Flickr Images Through the Flicker API*/
  
  /*$.getJSON() --> This is a function that makes it easier to make such calls for JSON APIs, instead of using the AJAX function
  directly.*/
  var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  /*The ?jsoncallback=? in the URL it's going to make a JSONP request instead of JSON request, which is necessary to actually
  allow you to retrieve data from a different server. So it's not your server, you're not making thar request from flickr.com
  but you are accesing flickr.com, so again that's from a different domain and to be allowed to do that you have to use the 
  JSONP format and the ?jsoncallback=? is going to tell the API to do that.*/
  $.getJSON(flickrApiUrl, {
    // configuration options...
    tags: "sun, beach", //the tags you want to search for
    tagmode: "any", // or you can say 'all',any means that the image i want to fetch should be either sun or beach.
    format: "json" /*This is important because you want to retrieve JSON data and you're using the getJSON() function.
    So you want the API to know that you are expecting JSON data as your format or in other cases XML*/
  }).done(function(data){ /*This will be executed if everything went fine. 
    The done() function it's going to defined the event handler function for when the request was successfully finished.
    In the done() function, the callback gets a parameter which is the data that the server came back with*/
    console.log(data);
    /*each() is a jQuery function that makes it really easy to iterate over such arrays or also over objects*/
    $.each(data.items, function(index, item){ /*This function will be executed for every item of the array. If it was an object
    the first parameter will be the key and the second will be the value*/
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");
      if(index == 4){
        return false; //This just gonna stop all the future iterations.
      }
    }); 
    //success
  }).fail(function(){ /*This will be executed in case something went wrong*/
    //failure
    alert("Ajax call fail");
  });  

  //Obs:
  /*1) As mentioned in the official jQuery docs: "If the URL includes the string "callback=?" 
  (or similar, as defined by the server-side API), the request is treated as JSONP instead. 
  See the discussion of the jsonp data type in $.ajax() for more details."
  Notice that it says "or similar, as defined by the server-side API.

  2) Combine this with what's at the bottom of this Flickr docs page: "add the parameter jsoncallback", 
  meaning that we have to use "jsoncallback" instead of just "callback" for Flickr, 
  and you get the parameter "jsoncallback=?" that we add to the URL here.*/
}); 