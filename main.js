/*
 * index.js for the COSC 4926 films database.
 *
 * This file was authored by Victoria Lacroix and Brandon Beneteau as part of a
 * group project including the aforementioned as well as Ruihua Guo and
 * Kaitlynn Anderson-Butcher.
 *
 * This javascript file depends on the following libraries:
 *
 * jQuery: http://jquery.com/
 * js-cookie: https://github.com/js-cookie/js-cookie.git
 */

// -- Cookie stuff --

function loadFilms() {
  // Globals
  movieIDs = new Array();
  movies = new Array(); // do not cookie this!
  ratings = new Array();
  statuses = new Array();
  expandedMovie = '';

  movieIDs = Cookies.get('movieIDs');
  ratings = Cookies.get('ratings');
  statuses = Cookies.get('statuses');
  $.each(movieIDs, function(i, id) {
    movies.push = fetchMovieFromOMDB(id);
  });
  console.log("Movies Loaded.");
}

function addMovieById(id) {
  // TODO add a notification
  if(!arrayContains(movieIDs, id)) {
    movieIDs.push(id);
    ratings.push('');
    movies.push(fetchMovieFromOMDB(id));

    Cookies.set('movieIDs', movieIDs);
    Cookies.set('ratings', ratings);
  }
}

function setRatingById(id, rating) {
  var index = arrayIndexOf(movieIDs, id);
  if(index >= 0) {
    ratings[index] = rating;
    Cookies.set('ratings', ratings);
  }
}

function addToWatch(id){
  
} 
/*
 * Sets the status of a movie to either "watched", "unwatched", or "rated".
 */
function setStatusById(id, stat) {
  //var index = arrayIndexOf(movieIDs, id);
  if(id == 'tt0076759'){ //star wars
   // document.cookie = "title=Star Wars; status="+stat+";";
  }
  
  
  
  
  
  
  
}

function getToWatch(){
  var i;
  //for(i=0; i<4; i++){
  Cookies.set('statuses','ToWatch');

    
  
}



function displayToWatch(){
  var str = document.cookie;
  var result = str.split("; ");
  var res;
  console.log(result);
  for(var i=0;i<result.length;i++){
    //To Watch tab:
    if(result[i] == 'StarWars=toWatch'){
      $('#not-watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"><p>Star Wars Episode IV: A New Hope</p><button onclick="document.cookie=\'StarWars=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Split=toWatch'){
      $('#not-watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg"><p>Split</p><button onclick="document.cookie=\'Split=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Moonlight=toWatch'){
      $('#not-watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg"><p>Moonlight</p><button onclick="document.cookie=\'Moonlight=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Arrival=toWatch'){
      $('#not-watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg"><p>Arrival</p><button onclick="document.cookie=\'Arrival=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }
    //Watched tab:
    if(result[i] == 'StarWars=watched'){
      $('#watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"><p>Star Wars Episode IV: A New Hope</p><button onclick="document.cookie=\'StarWars=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Split=watched'){
      $('#watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg"><p>Split</p><button onclick="document.cookie=\'Split=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Moonlight=watched'){
      $('#watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg"><p>Moonlight</p><button onclick="document.cookie=\'Moonlight=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Arrival=watched'){
      $('#watched-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg"><p>Arrival</p><button onclick="document.cookie=\'Arrival=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }
    //Rated tab:
    if(result[i] == 'StarWars=rated'){
      $('#rated-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"><p>Star Wars Episode IV: A New Hope</p><button onclick="document.cookie=\'StarWars=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Split=rated'){
      $('#rated-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BZTJiNGM2NjItNDRiYy00ZjY0LTgwNTItZDBmZGRlODQ4YThkL2ltYWdlXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_SX300.jpg"><p>Split</p><button onclick="document.cookie=\'Split=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Moonlight=rated'){
      $('#rated-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg"><p>Moonlight</p><button onclick="document.cookie=\'Moonlight=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }  
    if(result[i] == 'Arrival=rated'){
      $('#rated-contents').append('<img class="poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_SX300.jpg"><p>Arrival</p><button onclick="document.cookie=\'Arrival=;expires=Thu, 01 Jan 1970 00:00:00 UTC;\'; location.reload();">Remove</button><br/><br/>');      
    }
  }
  
  return res;
}

/*
 * Movie object for page use.
 */
function movie(id, title, year, poster, genre, plot, runtime) {
  this.id = id;
  this.title = title;
  this.year = year;
  this.poster = poster;
  this.genre = genre;
  this.plot = plot;
  this.runtime = runtime;
}

/*
 * Creates a movie object from the given OMDB JSON object.
 */
function createMovie(obj) {
  return new movie(obj.imdbID, obj.Title, obj.Year, obj.Poster, obj.Genre,
    obj.Plot, obj.Runtime);
}

// -- OMDB stuff --

function fetchMovieFromOMDB(id) {
  $.getJSON('http://omdbapi.com/?i=' + id, function(obj) {
    return createMovie(obj);
  });
}

function searchJSONBySearchBar() {
  searchJSONByTitle($('input[id=searchBar]').val());
}

/*
 * Searches the OMDB API for movies matching/containing the given title, then
 * executes the given callback function with the result.
 */
function searchJSONByTitle(title) {
  $.get('Movie_Database.json', function(response) {
    var results = [];
    $.each(JSON.parse(response), function(idx, movie) {
      var current = movie.Title.toLowerCase();
      if(!current.search(title.toLowerCase())) {
        results.push(createMovie(movie));
      }
    });
    // create results div
    document.getElementById("searchResults").innerHTML =
        generateSearchDiv(results);
  });
}

function generateSearchDiv(arr) {
  var result;
  result += '<div id="searchResults">';
  $.each(arr, function(i, movie) {
    result += generateSearchMovieDiv(movie);
  });
  result += '</div>';
  return result;
}

/**
 * Creates a <div> tag based on the given movie's poster, title and year.
 */
function generateSearchMovieDiv(movie) {
  var result = '<div class=".col-md-2" style="text-align: center">';
  result    += '<img src="' + movie.poster + '" alt="' + movie.title + '">';
  result    += '<p>' + movie.title + '</p>';
  result    += '<button type="button" onclick="addMovieById(' + movie.id + ')">Add to List</button>';
  result    += '</div>';
  return result;
}

/*
function generateClosedMovieDiv(movie) {
  '<div class="col-md-2">'
  '<center>'
  '<img class="img-responsive" src="images/hidden.jpg">'
  '<br/>'
  '<p>'
  '<img src="images/favicon-star-o.ico">'
  '<img src="images/favicon-star-o.ico">'
  '<img src="images/favicon-star-o.ico">'
  '<img src="images/favicon-star-o.ico">'
  '<img src="images/favicon-star-o.ico">'
  '</p>'
  '<p>'
  '<img src="images/favicon-eye-grey.ico">'
  '<img src="images/favicon-trash.ico">'
  '</p>'
  '</center>'
  '</div>'
  return result;
}
*/

function generateMovieInfoDiv(movie, rating) {
  var result = '<div id="big-' + movie.id
             + '" onclick="shrinkMovieDiv()" class="row">'
  result    += '<div class=".col-md-3" style="text-align: center">';
  result    += '<div class="row"><img src="' + movie.poster + '" alt="'
                  + movie.title + '"></div>';
  result    += '<div class="row">buttons</div>'; //buttons
  result    += '</div>';
  result    += '<div class=".col-md-9, center-block">';
  result    += '<div class="row"><p><h3>' + movie.title + '</h3></p></div>';
  result    += '<div class="row"><p><i>' + movie.plot + '</i></p></div>';
  result    += '<div class="row"><p>' + movie.genre + '</p></div>';
  result    += '<div class="row">';
  result    += '<div class=".col-md-6"><p>' + movie.year + '</p></div>';
  result    += '<div class=".col-md-6"><p>' + movie.runtime + '</p></div>';
  result    += '</div>';
  result    += '</div>';
  return result;
}

/*
 * Creates an info pane showing expanded movie info
 */
function expandMovieDiv(movie) {
  shrinkMovieDiv(); //remove existing movie div
  var expandedMovie = movie.id;
  var newDiv = generateMovieInfoDiv(movie);
  var smallDiv = document.getElementById('small-' + movie.id);
  smallDiv.parent.append(newDiv);
}

/*
 * Removes the expanded movie div from the document.
 */
function shrinkMovieDiv() {
  var div = document.getElementById('big-' + expandedMovie);
  if(div != null) {
    div.parent.removeChild(div);
  }
}

// Helper functions

// Actually faster than most browser implementations
function arrayContains(arr, obj) {
  if(arr == null) {
    return false;
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] == obj) {
      return true;
    }
  }
  return false;
}

// Actually faster than most browser implementations
function arrayIndexOf(arr, obj) {
  //for(var i = 0; i < arr.length; i++) {
    //if(arr[i] == obj) {
     // return i;
   // }
  //}
  //return -1;
}

function getMovieById(id) {
  return movies[arrayIndexOf(movieIDs, id)];
}

function stringify(x) {
    console.log(Object.prototype.toString.call(x));
}

