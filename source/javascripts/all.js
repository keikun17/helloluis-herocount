//= require jquery
//= require 'jquery.xdomainajax.coffee'

$(document).ready(function(){
  var resp = '';
  var grr = '';
  var x = '';

  var something = function(url){
    $('#results').text('loading...');
    $.get(url,
          function(data){
            x = data;
            resp = data.responseText;
            grr = $.parseHTML(resp);
            $('#results').html('');
            $(['druid','hunter','mage_13','rogue','warlock','warrior','priest','paladin','shaman']).map(function(){ return [[ ""+this, $(grr).find(".round1").find("img[src*='" + this + "']").length ]]; }).sort(function(a,b){ return b[1]-a[1]; }).each(function(){
              $('#results').append(this[0] + ":" + this[1] + "<br>")
              console.log(this[0],this[1])
            });
          }
         );
  }

  $('#do_it_faggot').on('submit', function(){
    something($('#fagsource').val())
    event.preventDefault();
  } );

})

