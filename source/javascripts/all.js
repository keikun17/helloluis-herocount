//= require jquery
//= require 'jquery.xdomainajax.coffee'

$(document).ready(function(){

  var something = function(url){

    if (url.indexOf("http://") == -1) {
      url = 'http://' + url;
    }

    $('#results').text('loading...');
    $.get(url, function(data){
            resp = $.parseHTML(data.responseText);
            $('#results').html('');
            $(['druid','hunter','mage_13','rogue','warlock','warrior','priest','paladin','shaman']).map(function(){ return [[ ""+this, $(resp).find(".round1").find("img[src*='" + this + "']").length ]]; }).sort(function(a,b){ return b[1]-a[1]; }).each(function(){
              $('#results').append(this[0] + ":" + this[1] + "<br>")
              console.log(this[0],this[1])
            });
          }
         );
  }

  $('#some_form').on('submit', function(){
    something($('#some_textfield').val())
    event.preventDefault();
  } );

})

