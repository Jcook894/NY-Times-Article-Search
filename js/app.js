function MyViewModel(articles) {
  var self = this;
  self.articleSearch = $('articleSearch').val();


};

function loadData(){

   var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleRequest + '=&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3';

    $.getJSON(nyUrl, function(data){

      nyArticles = data.response.docs;

      for(var i = 0; i < nyArticles.length; i++){
        var articles = nyArticles[i];

      }

});




ko.applyBindings(new MyViewModel());

return false;
}
$('#search-content').submit(loadData);
