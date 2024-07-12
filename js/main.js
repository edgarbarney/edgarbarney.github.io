function RefreshTopbarClick() {

    // I'm not really a web developer, so I'm not sure if this is the best way to do this lmao
    // But it works without lagging the page, so I'm happy with it

    $(".topnav-a-active").off('click');
    $(".topnav-a-deactive").off('click');

    $(".topnav-a-deactive").on("click", function(event) {
        event.stopPropagation();
        event.stopImmediatePropagation();

        $(".topnav-a-active").addClass("topnav-a-deactive");
        $(".topnav-a-active").removeClass("topnav-a-active");
        $(this).addClass("topnav-a-active");
        $(this).removeClass("topnav-a-deactive");

        RefreshTopbarClick();
    });
}

$(document).ready(function() {
    RefreshTopbarClick();
});


