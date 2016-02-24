(function($) {
    // $(document).ready(function() {
        $.jScrollability([
            {
                'selector': '.text-wrapper',
                'start': function($el) { return $el.offset().top + $el.height()+10 },
                'end': function($el) { return $el.offset().top + $(window).height() },
                'fn': function($el,pcnt) {
                    var $spans = $el.find('span');
                    var point = Math.floor(($spans.length+1) * pcnt);
                    $spans.each(function(i,el) {
                        var $span = $(el);
                        if (i < point) {
                            $span.addClass('visible');
                        } else {
                            $span.removeClass('visible');
                        }
                    });
                }
            }
        ]);
    // });
})(jQuery);

$(document).ready(function () {
  $(document).on("scroll");

//Takes user to referenced section on nav click with a smooth scroll
  $('a[href="#body"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-25
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll");
    });
  });
});

$(document).ready(function () {
  $(document).on("scroll");

//Takes user to referenced section on nav click with a smooth scroll
  $('a[href="#work"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-25
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll");
    });
  });
});

$(document).ready(function () {
  $(document).on("scroll");

//Takes user to referenced section on nav click with a smooth scroll
  $('a[href="#contact"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top-25
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll");
    });
  });
});
