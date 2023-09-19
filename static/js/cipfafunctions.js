function themeEqualise() {
    var height = null;
    const checkMobile = window.matchMedia('screen and (max-width: 575px');

    function theEqualiser(checkMobile) {
        if (checkMobile.matches) {
            $('.themeDescription').css('height', 'auto');
        } else {
            $('.themeDescription').css('height', 'auto');

            $('.themeDescription').each(function() {
                var $this = $(this);
                var thisHeight = $this.height();
                if (thisHeight > height) {
                    height = thisHeight;
                }
            });

            $('.themeDescription').css('height', height + 'px');
        }
    }
    theEqualiser(checkMobile);
    checkMobile.addListener(theEqualiser);
}

function matchNavWidth() {
    var navWidth = $('.navbar-nav').width() + 30;
    var query = 'screen and (min-width: 1200px)';
    const checkXL = window.matchMedia(query);
    if (checkXL.matches) {
        $('.container').addClass('stretchContainer');
        $('.stretchContainer').css({
            'max-width': navWidth
        });
    } else {
        $('.container').removeClass('stretchContainer');
    }
}

function stickyNav() {
    var navTop = $('.nav-row').offset().top,
        navHeight = $('.nav-row').css('height');
    if ($(window).scrollTop() >= navTop) {
        $('.nav-row').addClass('stickyNav');
        $('body').css('padding-top', navHeight);
    } else {
        $('.nav-row').removeClass('stickyNav');
        $('body').css('padding-top', 0);
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() >= navTop) {
            $('.nav-row').addClass('stickyNav');
            $('body').css('padding-top', navHeight);
        } else {
            $('.nav-row').removeClass('stickyNav');
            $('body').css('padding-top', 0);
        }
    });
}

function keyAccountBackgroundClip() {
    var backgroundPosition = 0;

    const checkMobile = window.matchMedia('screen and (max-width: 575px');

    function theBackground(checkMobile) {
        if (checkMobile.matches) {
            $('.keyAccounts .accountBox').each(function() {
                var accountsHeight = $('.keyAccounts').height();
                backgroundPosition = $(this).offset().top - $(this).parent().offset().top;
                backgroundPosition = -Math.abs(backgroundPosition);
                var backgroundSize = 'auto ' + accountsHeight + 'px';
                $(this).find('.account').css({
                    'background-position-x': 'right',
                    'background-position-y': backgroundPosition,
                    'background-size': backgroundSize
                });
            });
        } else if (window.matchMedia('screen and (min-width: 576px) and (max-width: 991px)').matches) {
            $('.keyAccounts .accountBox').each(function() {
                var accountsWidth = $('.keyAccounts').width() + 100,
                    backgroundTopPosition = $(this).offset().top - $(this).parent().offset().top + 70,
                    backgroundLeftPosition = $(this).offset().left - $(this).parent().offset().left + 100,
                    backgroundSize = accountsWidth + 'px auto';
                backgroundTopPosition = -Math.abs(backgroundTopPosition);
                backgroundLeftPosition = -Math.abs(backgroundLeftPosition);
                $(this).find('.account').css({
                    'background-position-x': backgroundLeftPosition,
                    'background-position-y': backgroundTopPosition,
                    'background-size': backgroundSize
                });
            });
        } else {
            $('.keyAccounts .accountBox').each(function() {
                var accountsWidth = $('.keyAccounts').width();
                backgroundPosition = $(this).offset().left - $(this).parent().offset().left;
                backgroundPosition = -Math.abs(backgroundPosition);
                var backgroundSize = accountsWidth + 'px auto';
                $(this).find('.account').css({
                    'background-position-x': backgroundPosition,
                    'background-position-y': '70%',
                    'background-size': backgroundSize
                });
            });
        }
    }
    theBackground(checkMobile);
    checkMobile.addListener(theBackground);
}

function bootstrapNavFix() {
    $('.dropdown > a').click(function() {
        location.href = this.href;
    });
}

function searchPosition() {
    var ele = $('.navbar-nav');
    var right = ele.css('margin-right');
    $('.searchDropdown').css({
        'right': right
    })
}

function searchDropdown() {
    $('.search .nav-link').on('click', function() {
        $('.searchDropdown').slideToggle(300);
    });
}

function constrainMenu() {
    var menu = $('.dropdown-menu'),
        oneMargin = $('.navbar-nav').css('margin-right');
    console.log('margin: ' + oneMargin);
    menu.css({
        'max-width': 'calc(100% - calc(' + oneMargin + ' * 2)'
    });
}

function loadMore() {
    var displayCount = 5;
    var displayCount2 = displayCount - 1;

    $('#loadMoreButton').on('click', function() {

        $('.blogList li:nth-child(-n+' + displayCount + ')').addClass('underlined');
        displayCount = displayCount + 5;
        displayCount2 = displayCount2 + 5;
        $('.blogList li:nth-child(-n+' + displayCount2 + ')').addClass('underlined');
        $('.blogList li:nth-child(-n+' + displayCount + ')').css({
            'display': 'block'
        });
    })

    var courseDisplay = 9;

    $('#loadMoreButton2').on('click', function() {
        courseDisplay = courseDisplay + 9;
        $('.searchList li:nth-child(-n+' + courseDisplay + ')').css({
            'display': 'block'
        });
    })
}

function cookieBar() {
    if (document.cookie.search(/cookieAccept/i) != -1) return;


    $('.acceptLink').click(function(e) {
        e.preventDefault();

        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();

        document.cookie = 'cookieAccept=1; ' + expires;
        $('.sitewideMessage').fadeOut(150);
    });

    $('.sitewideMessage').fadeIn(50);
}