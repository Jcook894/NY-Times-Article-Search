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
    data: {
      format: 'jsonp'

    },
    //jsonp: 'callback',
    error: function(){
      $(".wikiRequest").html("<p> Cant find wikiRequest </p>");
    },
    success: function(response){
      var url = response[0][3];
      console.log(response);

    }

  });


};

wikipedia();
ko.applyBindings(new MyViewModel());
