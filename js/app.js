var articleRequest ="Julian";


 function MyViewModel() {
  var self = this;
  self.nameTest = ko.observable("Julian");

};


var nyUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + articleRequest + '=&sort=newest&api-key=04af26cdd76f4b8da348f53553eadcb3';

$.getJSON(nyUrl, function(data){

  articles = data.response.docs;
  console.log(articles);
})


ko.applyBindings(new MyViewModel());
