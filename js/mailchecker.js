jQuery(function($) {

  var domains = Drupal.settings.mailcheck['domains'];

  $('.mailcheck').blur( function() {
    $(this).mailcheck({
      domains: domains,
      suggested: function(element, suggestion) {

        marktup = Drupal.settings.mailcheck.markup;
        $('.mailcheck-action').html(markup.replace('[corrected-mail]', '<span class="corrected-mail">' + suggestion.full + '</div>'));     

      },
      empty: function(element) {
        console.log(element);
      }
        
    }); 
  });
  
});
