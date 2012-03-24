jQuery(function($) {

  var domains = Drupal.settings.mailcheck['domains'];

  $('.mailcheck').blur( function() {
    $(this).mailcheck({
      domains: domains,
      suggested: function(element, suggestion) {

        message = Drupal.settings.mailcheck.message;
        $('.mailcheck-action').html(message.replace('[corrected-mail]', '<span class="corrected-mail">' + suggestion.full + '</div>'));     

      },
      empty: function(element) {
        console.log(element);
      }
        
    }); 
  });
  
});
