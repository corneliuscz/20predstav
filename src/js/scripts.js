(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FireShell
  });

  /*
   * Scroll to top + animate it
   */
  $('a.nahoru').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

})(jQuery, window, document);
