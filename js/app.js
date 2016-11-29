
function loadData(){
  var $nyArticles = $('#ny-times-articles');
  var articleRequest = $(".nySearch").val();

//Sets the articles blank everytime a new search is started.
  $nyArticles.text("");

//The NY API request with the value of the search input.
   var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleRequest + '=&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3';

    $.getJSON(nyUrl, function(data){

      nyArticles = data.response.docs;
      console.log(nyArticles);

      for(var i = 0; i < nyArticles.length; i++){
        var articles = nyArticles[i];

//Appends the the Articles in a list.
        $nyArticles.append('<li class="article">'+
                '<a href="'+articles.web_url+'">'+articles.headline.main+'</a>'+
                '<p>' + articles.snippet + '</p>'+
            '</li>');

      };
// If NY times request fails, throw an error message.
    }).fail(function(e){
      $nyArticles.text("NY times request could not be found.");
      console.log("Request failed");
    });

return false;

};


$('.search-content').submit(loadData);
