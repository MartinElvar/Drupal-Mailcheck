jQuery(function($) {

  var domains = Drupal.settings.mailcheck['domains'];

  $('.mailcheck').blur( function() {
    $(this).mailcheck({
      domains: domains,
      suggested: function(element, suggestion) {
        console.log(suggestion);
        $('.mailcheck-action').html('Did you mean, ' + suggestion.full + ' ?');     
      },
      empty: function(element) {
        console.log(element);
      }
        
    }); 
  });
  
});
