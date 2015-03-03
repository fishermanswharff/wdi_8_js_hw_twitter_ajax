'use strict';
var App = App || {};

App.getTweets = function(event){
  event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/tweets/' + $('input#twitter-account').val(),
    type: 'GET'
  }).done(function(data){
    App.renderTweets(data);
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(jqXHR, textStatus, errorThrown);
  });
  return false;
};

App.renderTweets = function(data){
  console.log(data);
};

$(document).ready(function(){
  $('form#tweets-getter').on('submit',function(event){App.getTweets(event)});
});