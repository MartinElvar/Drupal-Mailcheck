mailcheck!
=========================

The mailcheck jQuery plugin now takes its leap to Drupal, with mailcheck. 

Now also supports the Webform module! 

What is it good for?
-------------------------

mailcheck implements mailcheck.js (https://github.com/Kicksend/mailcheck)
with Drupals forms, primarily the Register form.

Simply put, mailcheck checks the email form for typos, say the user writes
in user@gmaul.com mailcheck will suggest user@gmail.com.

Kicksend reports of a 50% decrease in sign up confirmation email bounces.
http://blog.kicksend.com/how-we-decreased-sign-up-confirmation-email-b

Checkout the demostration here.
http://dev11.reload.dk/mailcheck/

Drupal features
------------------------

mailcheck is shipped with a handy configuration panel, which lets you do
awesome stuff like..

- mailcheck on webform email fields
- mailcheck on Registerform
- Customable notice message
- Adding new domain support
- Gestures on typos

Installation
-----------------------

1. Download and enable the module
2. Download the latest version of mailcheck.js
(https://github.com/Kicksend/mailcheck/tree/master/src)
3. Place it in you Drupal installation folder, default path is 
"/sites/all/libraries/mailcheck/jquery.mailcheck.min.js"
4. Configure at /admin/conf/mailcheck
5. See magic happen!

Contact
-----------------------

Catch me on twitter if you got questions etc.
https://twitter.com/#!/MartinElvar
