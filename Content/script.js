$.fn.extend({
    animateCss: function (animationName, thenCallback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if(thenCallback !== undefined)
                thenCallback();
        });
    }
});

$(document).ready(function(){
    var wither = $("#wither");
    var teaser = $("#teaser");
    var twitterLink = $("#twitter-link");
    
    wither.addClass('hidden-load');
    teaser.addClass('hidden-load');
    twitterLink.addClass('hidden-load');
    
    wither.animateCss('fadeIn', function(){
       wither.removeClass('hidden-load');
       teaser.animateCss('fadeIn', function(){
            teaser.removeClass('hidden-load');
            twitterLink.animateCss('fadeIn', function(){
                twitterLink.removeClass('hidden-load');
            });
       });
   }); 
});