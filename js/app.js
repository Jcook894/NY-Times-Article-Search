var articleRequest =" ";
 function MyViewModel() {
  var self = this;
  self.nameTest = ko.observable("Julian");
};


function wikipedia(){
  var wikiUrl = 'https://en.wikipedia.org/w/api.php?' +
        'action=opensearch&search=' + articleRequest +
        '&format=json&callback=wikiCallback'

  $.ajax({
    url: wikiUrl,
    datatype: 'jsonp',
    //jsonp: 'callback',
    success: function(response){
      var url = response[0][3];
      console.log(response);

    }

  });


};
ko.applyBindings(new MyViewModel());
