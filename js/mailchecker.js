jQuery(function($) {

  var domains = Drupal.settings.mailcheck['domains'];
  // Only add once
  if(Drupal.settings.mailcheck.show_in_des == true) {
    $('.mailcheck').parent().find('.description').prepend('<div class="mailcheck-action"></div>');
  }

  $('.mailcheck').blur( function() {
    var currentform = this;

    $(this).mailcheck({
      domains: domains,
      suggested: function(element, suggestion) {
        
        // Add lock gesture
        if(Drupal.settings.mailcheck.lock) {
          $('.mailcheck').closest('form').find('input[type="submit"]').click(function() {return false});
          setTimeout(function() {
            jQuery('#edit-submit').unbind('click');
          }, 2000);
        } 
        
        // Replace token with userdefined message, and insert it.
        message = Drupal.settings.mailcheck.message;
        $('.mailcheck-action').html(message.replace('[corrected-mail]', '<span class="corrected-mail">' + suggestion.full + '</span>'));     

        // Add shake gesture 
        if(Drupal.settings.mailcheck.shake) {
          skaheThatShit($('.mailcheck-action')); 
        }

        $('.corrected-mail').click(function() {
          // Remove message 
          $(".mailcheck-action").html("");
          // Replace typo with suggestion
          $(currentform).val(suggestion.full);
        });
 
      },
      empty: function(element) {
        console.log(element);
      }
        
    }); 
  });
  
  function skaheThatShit(el) {

    // First set attributes
    $(el).css({
      'position' : 'relative',
      'left' : '0px',
    });

    // Then animate
    $(el).animate({opacity: 0.25}, 100);
    $(el).animate({left: '-=10'},100); 
    $(el).animate({left: '+=20'},100);
    $(el).animate({left: '-=20'},100);
    $(el).animate({left: '+=10'},100);
    $(el).animate({opacity: 1.00}, 170);
  } 

});


