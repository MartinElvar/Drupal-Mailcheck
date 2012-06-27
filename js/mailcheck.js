(function ($) {

  Drupal.behaviors.mailcheck = {
    attach: function() {
      var domains = Drupal.settings.mailcheck['domains'];
      // Only add once.
      if(Drupal.settings.mailcheck.show_in_des == true) {
        // If there aren't any description, create a empty one.
        if(!$('.mailcheck').parent().find('.description').length) {
          $('.mailcheck').parent().append('<div class="description"> </div>');
        }
        $('.mailcheck').parent().find('.description').prepend('<div class="mailcheck-action"></div>');
      }

      $('.mailcheck').blur(function() {
        var currentform = this;
        if(Drupal.settings.mailcheck.show_in_des == true) {
          var cfAction = $(currentform).parent().find('.mailcheck-action');
        }
        else {
          var cfAction = $(currentform).parents('form').find('.mailcheck-action');
        }

        $(this).mailcheck({
          domains: domains,
          suggested: function(element, suggestion) {

            // Add lock gesture.
            if(Drupal.settings.mailcheck.lock) {
              $(currentform).closest('form').find('input[type="submit"]').click(function() {return false});
              setTimeout(function() {
                $(currentform).closest('form').find('input[type="submit"]').unbind('click');
              }, 2000);
            }

            // Replace token with userdefined message, and insert it.
            message = Drupal.settings.mailcheck.message;
            $(cfAction).html(message.replace('[corrected-mail]', '<span class="corrected-mail">' + suggestion.full + '</span>'));

            // Add shake gesture.
            if(Drupal.settings.mailcheck.shake) {
              skaheThatShit(cfAction);
            }

            $(cfAction).find('.corrected-mail').click(function() {
              // Remove message.
              $(cfAction).html("");
              // Replace typo with suggestion.
              $(currentform).val(suggestion.full);
            });

          },
          empty: function(element) {
            // Do we really need this?
          }
        });
      });

      function skaheThatShit(el) {

        // First set attributes.
        $(el).css({
          'position' : 'relative',
          'left' : '0px',
        });

        // Then animate.
        $(el).animate({opacity: 0.25}, 100);
        $(el).animate({left: '-=10'},100);
        $(el).animate({left: '+=20'},100);
        $(el).animate({left: '-=20'},100);
        $(el).animate({left: '+=10'},100);
        $(el).animate({opacity: 1.00}, 170);
      }
    }
  };
})(jQuery);
