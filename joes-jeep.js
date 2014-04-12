// JavaScript Document
// SpikeyfishMedia Copyright 2014

$(document).ready( function(){
  $(".showcaseScrollable h2").hide();
  $("#showcaseGallery-22151944").removeAttr("style");
  $(".showcaseScrollable").removeAttr("style");

 setTimeout(function() {$(".kalturaVideoPlayerAssoc > [id^=kaltura_dynamic_player]").removeAttr("style");},1500);
 
$(".row  .thumbnailFigure").click(
   function(){
    setTimeout(function(){$(".kalturaVideoPlayerAssoc > [id^=kaltura_dynamic_player]").removeAttr("style");},500);
   });
 }
);