    // $('#resolution').text($("#resolution").text() + window.outerWidth.toString() + " " + window.outerHeight.toString())
    var isTouchDevice = function () { return 'ontouchstart' in window || 'onmsgesturechange' in window; };
    var isDesktop = isTouchDevice() ? true : false;
    if (!isDesktop) {
      $('#iphoneContainer').css({ 'height': window.innerHeight * 0.9 })
      $('#contentScroll').css({ 'overflow': 'scroll' })
      $('#contentScroll').addClass('isSmallDesktop');
    }

    $(window).resize(function () {
      var isTouchDevice = function () { return 'ontouchstart' in window || 'onmsgesturechange' in window; };
      var isDesktop = isTouchDevice() ? true : false;
      if (!isDesktop) {
        $('#iphoneContainer').css({ 'height': window.innerHeight * 0.9 })
        $('#contentScroll').css({ 'overflow': 'scroll' })
        $('#contentScroll').addClass('isSmallDesktop');
      }
    })
