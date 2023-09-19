$(document).ready(function() {
    loadMore();
    cookieBar();
});

$(window).on('load', function() {
    matchNavWidth();
    themeEqualise();
    stickyNav();
    keyAccountBackgroundClip();
    bootstrapNavFix();
    /*searchPosition();*/
    searchDropdown();
    //constrainMenu();
});

$(window).on('resize', function() {
    keyAccountBackgroundClip();
    themeEqualise();
    /*searchPosition();*/
    //constrainMenu();
});