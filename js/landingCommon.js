
function openContent(evt, cloudMigration) {
    /*interative selection*/
    var i, cloudMigartionStepContent, tablinks;
    cloudMigartionStepContent = document.getElementsByClassName("cloudMigartionStepContent");
    for (i = 0; i < cloudMigartionStepContent.length; i++) {
        cloudMigartionStepContent[i].style.display = "none";
    }
    cloudMigrationClick = document.getElementsByClassName("cloudMigrationClick");
    for (i = 0; i < cloudMigrationClick.length; i++) {
        cloudMigrationClick[i].className = cloudMigrationClick[i].className.replace(" active", "");
    }
    document.getElementById(cloudMigration).style.display = "block";
    evt.currentTarget.className += " active";
}
$(document).ready(function() {
    /*dropdown*/
    $(window).click(function() {
        $('.list-unstyled').removeClass('drop');
        $('.list-unstyled li:not(:first-child)').css("display", "none");
    });

    $('.list-unstyled').click(function(event){
        event.stopPropagation();
    });
    $(".landingDrop").on( "click", function() {
        $(this).toggleClass('drop');
    });
    $(".landingDrop").on("click", ".init", function() {
        $(this).closest(".landingDrop").children('li:not(.init)').toggle();
    });

    var allOption = $(".landingDrop").children('li:not(.init)');
    $(".landingDrop").on("click", "li:not(.init)", function() {
        $(".landingDrop").children('.init').html($(this).html());
        allOption.toggle();
    });
    /*scroll top*/
    $(".landingList .cloudMigrationClick").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
    /*resize selection*/
    let activeIndex, activeIndexWeb, activeIndexMob, activeIndexData;
    function activeFunction() {
        activeIndex = $('.landingList .cloudMigrationClick').index($('.landingList .cloudMigrationClick.active')[0]);
        activeIndexWeb = activeIndex + 2;
        activeIndexMob = $('.landingDrop .cloudMigrationClick').index($('.landingDrop .cloudMigrationClick.active')[0]);
        // activeIndexData = $('.landingDrop .cloudMigrationClick.active').attr("data-id");
    }
    $(window).resize(function() {
        if($(".landingLeftWrapper").css('display') == 'none') {
            activeFunction()
            $(".landingDrop .cloudMigrationClick:nth-child(" + activeIndexWeb + ")").addClass("active")
            $(".landingDrop").children('.init').html($('.cloudMigrationClick.active').html());
        }
        else if($(".landingDropWrapper").css('display') == 'none') {
            activeFunction()
            $(".landingList .cloudMigrationClick:nth-child(" + activeIndexMob + ")").addClass("active");

        }
    });

})
