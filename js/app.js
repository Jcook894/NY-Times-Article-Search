
function loadData(){
  var $nyArticles = $('#ny-times-articles');

  var articleRequest = $(".nySearch").val();


   var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleRequest + '=&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3';

    $.getJSON(nyUrl, function(data){

      nyArticles = data.response.docs;

      for(var i = 0; i < nyArticles.length; i++){
        var articles = nyArticles[i];

        $nyArticles.append('<li class="article">'+
                '<a href="'+articles.web_url+'">'+articles.headline.main+'</a>'+
                '<p>' + articles.snippet + '</p>'+
            '</li>');

      };

    });

return false;


};


$('.search-content').submit(loadData);
