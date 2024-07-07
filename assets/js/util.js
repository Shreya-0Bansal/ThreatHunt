(function ($) {
  /**
   * Generate an indented list of links from a nav. Meant for use with panel().
   * @return {jQuery} jQuery object.
   */
  /**
   * Panel-ify an element.
   * @param {object} userConfig User config.
   * @return {jQuery} jQuery object.
   */
  $.fn.panel = function (userConfig) {
    // No elements?
    if (this.length == 0) return $this;

    // Multiple elements?
    if (this.length > 1) {
      for (var i = 0; i < this.length; i++) $(this[i]).panel(userConfig);

      return $this;
    }

    // Vars.
    var $this = $(this),
      $body = $("body"),
      $window = $(window),
      config;
    // Config.
    config = $.extend(
      {
        // Delay.
        delay: 0,

        // Hide panel on link click.
        hideOnClick: false,

        // Hide panel on escape keypress.
        hideOnEscape: false,

        // Hide panel on swipe.
        hideOnSwipe: false,

        // Reset scroll position on hide.
        resetScroll: false,

        // Reset forms on hide.
        resetForms: false,

        // Side of viewport the panel will appear.
        side: null,

        // Target element for "class".
        target: $this,

        // Class to toggle.
        visibleClass: "visible",
      },
      userConfig
    );
    // Event: Hide on ESC.
    if (config.hideOnEscape)
      $window.on("keydown", function (event) {
        if (event.keyCode == 27) $this._hide(event);
      });

    return $this;
  };
})(jQuery);