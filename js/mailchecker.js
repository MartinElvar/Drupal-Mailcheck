jQuery(function($) {

  var domains = Drupal.settings.mailcheck['domains'];

  $('.mailcheck').blur( function() {
    var currentform = this;

    $(this).mailcheck({
      domains: domains,
      suggested: function(element, suggestion) {

        message = Drupal.settings.mailcheck.message;
        $('.mailcheck-action').html(message.replace('[corrected-mail]', '<span class="corrected-mail">' + suggestion.full + '</span>'));     
        
        $('.corrected-mail').click(function() {
    
          $(this).parent().hide();
          $(currentform).val(suggestion.full);
    
        });
 
      },
      empty: function(element) {
        console.log(element);
      }
        
    }); 
  });
  
});
