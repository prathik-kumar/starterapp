var displayWikiData = function() {
    var $linksElement = $('#links');
    var searchString =  $('#searchString').val();
    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=?";

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(res) {
            var linkLists = res[1];
            //output the results of the Wikipedia data onto the screen
            linkLists.forEach(function(item){
                var url = 'https://www.wikipedia.org/wiki/' + item;
                $linksElement.append('<li><a href="'+  url + '">' + item + '</a></li>');
                return url;
            })
        }
    });

    return false;

};

$('#form').submit(displayWikiData);