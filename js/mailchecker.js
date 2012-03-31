Drupal.behaviors.mailchecker = function(context) {
  var domains = Drupal.settings.mailcheck['domains'];
  // Only add once
  Drupal.settings.mailcheck['checked'] = false;
  
  if(Drupal.settings.mailcheck.show_in_des == true) {
    // If there aren't any description, create a empty one. 
    if(!$('.mailcheck', context).parent().find('.description').length) {
      $('.mailcheck', context).parent().append('<div class="description"> </div>');
    }
    $('.mailcheck', context).parent().find('.description').prepend('<div class="mailcheck-action"></div>');
  }

  var mailcheck = $('.mailcheck');
  mailcheck.bind('blur', function() {
    var currentform = this;
    var cfAction = $(currentform).parent().find('.mailcheck-action');
    Drupal.settings.mailcheck['checked'] = true;
    
    $(this).mailcheck({
      domains: domains,
      suggested: function(element, suggestion) {
        
        // Add lock gesture
        if(Drupal.settings.mailcheck.lock) {
          $('#edit-submit').attr("disabled", "disabled");
          setTimeout(function() {
            $('#edit-submit').removeAttr("disabled");
          }, 2000);
        } 
        
        // Replace token with userdefined message, and insert it.
        message = Drupal.settings.mailcheck.message;
        $(cfAction).html(message.replace('[corrected-mail]', '<span class="corrected-mail">' + suggestion.full + '</span>'));

        // Add shake gesture 	  	        
        if(Drupal.settings.mailcheck.shake) {
          skaheThatShit(cfAction);
        }

        $(cfAction).find('.corrected-mail').click(function() {
          // Remove message 
          $(cfAction).html("");
          // Replace typo with suggestion
          $(currentform).val(suggestion.full);
        });
 
      },
      empty: function(element) {
        //console.log(element);
      }
        
    }); 
  });
  
  $('#edit-submit').bind('click', function(e) {
    e.preventDefault();

    if (Drupal.settings.mailcheck['checked'] === false) {
      mailcheck.trigger('blur');
      if ($(this).parent().find('.corrected-mail').length === 0) {
        $(this).parents('form').submit();
      }
    } else {
      $(this).parents('form').submit();
    }
    
  });
  
};

function skaheThatShit(el) {  	  	
  // First set attributes	  	
  $(el).css({	  	
    'position' : 'relative',	  	
    'left' : '0px'	  	
  });	  	
	  	
  // Then animate	  	
  $(el).animate({
    opacity: 0.25
  }, 100);
	  	
  $(el).animate({
    left: '-=10'
  },100); 
	  	
  $(el).animate({
    left: '+=20'
  },100);
	  	
  $(el).animate({
    left: '-=20'
  },100);
	  	
  $(el).animate({
    left: '+=10'
  },100);
	  	
  $(el).animate({
    opacity: 1.00
  }, 170);
	  	
} 
	  	
	  	
