var ww = document.body.clientWidth,
    device = navigator.userAgent,
    srchTxt = gettext("Type and press enter to search"),
    enterSrchTxt = gettext(""),
    y = 0,
    x = -3,
    firstclick = 0,
    scrollPosVal,
    inquiry = { main: $("#openModal"), select: $(".selectbox"), howtocontact: $(".howtocontact"), bodr: $(".mobBorder") },
    footr = { morebtn: $("#moreButton"), sublist: $("#contactSubList"), lessbtn: $("#lessButton") },
    header = { inquirybtn: $("#menuIconInquiry"), mainmenu: $("#toggleMenu"), mobmenu: $("#navMenu") },
    switching = $(".switching"),
    counter = 0,
    windhei = $(window).height(),
    headerHei = $("#header").outerHeight(),
    userAgent = navigator.userAgent.toString().toLowerCase(),
    winhei = $(window).height(),
    load = false,
    Project_Data = 0,
    Recaptcha_Data = 0,
    winWidth = $(window).width(),
    isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        },
    },
    pageUrl = window.location.pathname,
    selectedOption = $("#protype_id option:selected").text(),
    windowPageUrl;
$(window).scroll(function (c) {
    var a = $(window).scrollTop();
    var b = document.body.clientWidth;
    if (a > headerHei) {
        $("#header").addClass("moveHead");
    } else {
        counter = 0;
        $("#header").removeClass("moveHead");
    }
});
new LazyLoad();
(function () {
    new LazyLoad({ elements_selector: ".lazy" });
})();
function setCustomCookie(b, f, c) {
    var e = new Date();
    e.setTime(e.getTime() + c * 24 * 60 * 60 * 1000);
    var a = "expires=" + e.toUTCString();
    document.cookie = b + "=" + f + ";" + a + ";path=/";
}
setCustomCookie("windowReferPath", pageUrl, 1);
function getCustomCookie(d) {
    var b = d + "=";
    var f = decodeURIComponent(document.cookie);
    var a = f.split(";");
    for (var e = 0; e < a.length; e++) {
        var g = a[e];
        while (g.charAt(0) == " ") {
            g = g.substring(1);
        }
        if (g.indexOf(b) == 0) {
            return g.substring(b.length, g.length);
        }
    }
    return "";
}
$(document).ready(function () {
    if ($(window).width() > 1024) {
        $(".mainmenuContainer").attr("id", "overlay");
        b();
    } else {
        $(".mainmenuContainer").removeAttr("id");
    }
    $(window).resize(function () {
        if ($(window).width() > 1024) {
            $(".mainmenuContainer").attr("id", "overlay");
            b();
        } else {
            $(".mainmenuContainer").removeAttr("id");
        }
    });
    function b() {
        (function () {
            var j = document.getElementById("overlay");
            var k = null;
            j.addEventListener(
                "touchstart",
                function (n) {
                    if (n.targetTouches.length === 1) {
                        k = n.targetTouches[0].clientY;
                    }
                },
                false
            );
            j.addEventListener(
                "touchmove",
                function (n) {
                    if (n.targetTouches.length === 1) {
                        l(n);
                    }
                },
                false
            );
            function l(o) {
                var n = o.targetTouches[0].clientY - k;
                if (j.scrollTop === 0 && n > 0) {
                    o.preventDefault();
                }
                if (m() && n < 0) {
                    o.preventDefault();
                }
            }
            function m() {
                return j.scrollHeight - j.scrollTop <= j.clientHeight;
            }
        })();
    }
    var a = $(window).width();
    $(window).resize(function () {
        a = $(window).width();
        if (a <= 1024) {
            if ($(".menuMiddle").css("opacity") == "0") {
            } else {
            }
        } else {
            $(".mainmenuOuterContainer").removeClass("slideActiveMenu");
            activeIndex = $(".listTextMenu .rightMenu").index($(".menuListClick.active").parent()) + 1;
            $(".rightMenuList .rightMenu:nth-child(" + activeIndex + ") .menuListClick").addClass("active");
        }
    });
    $(".xtraP .listTextMenu, .xtraP").css("display", "none");
    $(".mobile-collapse-content").click(function () {
        var j = $($(this).parent());
        $(".xtraP").removeClass("active");
        $(".xtraP .listTextMenu, .xtraP").css("display", "none");
        $(this).parents(".desktop-view-content").addClass("openList");
        $(".desktop-view-content").not(".openList").find(".xtraP").css({ opacity: "0", height: "0", padding: "0" });
        $(this).parents(".desktop-view-content").siblings().find(".xtraP").css({ opacity: "0", height: "0", padding: "0" });
        $(".mobile-collapse-content").parent().find(".icon-Open").removeClass("icon-Open").addClass("icon-Close");
        if ($(this).parent().find(".xtraP").css("opacity") == "0") {
            $(this).parent().find(".xtraP").css({ opacity: "1", height: "auto", padding: "20px 0" });
            $(this).parent().find(".iconArrow").removeClass("icon-Close");
            $(this).parent().find(".iconArrow").addClass("icon-Open");
            $(this).parent().find(".xtraP").addClass("active");
            $(".xtraP.active .listTextMenu, .xtraP.active").css("display", "block");
        } else {
            $(this).parent().find(".xtraP").css({ opacity: "0", height: "0", padding: "0" });
        }
        $(this).parents(".desktop-view-content").removeClass("openList");
    });
    $(".rightMenu .menuListClick").click(function () {
        $(".mainmenuOuterContainer").addClass("slideActiveMenu");
        $(".menuSliderOuterWrapper").addClass("slideActive");
        $(".menuMiddle").css({ opacity: 1, display: "block" });
        $(".menuMiddleList>*").css("padding", "0 40px");
        $(".menuMiddle").removeClass("menuSlide");
        $(".digitalTransformation h3, .digitalTransformation ul").css("width", "100%");
        a = $(window).width();
        if (a <= 1024) {
            $(".rightMenuContainer").css("display", "none");
            $(".close-menu").css("color", "#fff");
        } else {
            $(".rightMenuContainer").css("display", "block");
            $(".close-menu").css("color", "#000");
        }
        $(window).resize(function () {
            a = $(window).width();
            if (a <= 1024) {
                $(".rightMenuContainer").css("display", "none");
                $(".close-menu").css("color", "#fff");
            } else {
                $(".mainmenuOuterContainer").removeClass("slideActiveMenu");
                $(".rightMenuContainer").css("display", "block");
                $(".close-menu").css("color", "#000");
            }
        });
        $(".backArrow").click(function () {
            $(".xtraP").css({ opacity: "0", height: "0", padding: "0" });
            $(".iconArrow").removeClass("icon-Open").addClass("icon-Close");
            $(".rightMenuContainer").css("display", "block");
            $(".mainmenuOuterContainer").removeClass("slideActiveMenu");
            $(".menuSliderOuterWrapper").removeClass("slideActive");
            $(".menuMiddle").addClass("menuSlide");
            $(".menuSlide").css({ display: "none", opacity: "0" });
            $(".menuMiddleList").css("display", "none");
            $(".close-menu").css("color", "#000");
            $(window).resize(function () {
                a = $(window).width();
                if (a > 1024) {
                    $(".menuSliderOuterWrapper").css("right", "0");
                } else {
                    $(".menuSliderOuterWrapper").css("right", "25%");
                    $(".rightMenuContainer").css("display", "block");
                    $(".close-menu").css("color", "#000");
                }
            });
        });
    });
    function e(k, j) {
        var k = window.innerWidth;
        if (k > 1024) {
            if ($("video").is("[data-src]")) {
                var l = $("video .ffVideo").attr("data-src");
                $("video").attr("src", l);
                $("video .ffVideo").attr("src", l);
                $("video .commonVideo").remove();
            }
            $("video").removeAttr("data-src");
        }
    }
    function d(k, j) {
        var k = window.innerWidth;
        if (k > 1024) {
            if ($("video").is("[data-src]")) {
                var l = $("video .commonVideo").attr("data-src");
                $("video").attr("src", l);
                $("video .commonVideo").attr("src", l);
                $("video .ffVideo").remove();
            }
            $("video").removeAttr("data-src");
        }
    }
    $(function () {
        if (navigator.userAgent.indexOf("Firefox") > 0) {
            e($(this).width());
            $(window).resize(function () {
                e($(this).width());
            });
        } else {
            d($(this).width());
            $(window).resize(function () {
                d($(this).width());
            });
        }
    });
    $(".cookieclose").click(function () {
        $(".cookies").css("display", "none");
        $("#header").css("top", "0");
    });
    $(window).bind("load resize scroll", function () {
        if ($("#cookiePolicy").is(":visible")) {
            (scrollTop = $(this).scrollTop()), (cookiePolicyHeight = $("#cookiePolicy").outerHeight());
            if (scrollTop <= cookiePolicyHeight) {
                $(".wholecontentWrapper").css("margin-top", cookiePolicyHeight - scrollTop);
            }
        }
    });
    $(".cookiePolicyClose").click(function () {
        setCustomCookie("domainname", "name of domain");
        $(".cookieWrapper").css("display", "none");
        $("#header").css("top", "0");
        $(".main-menu").css("top", "0");
        $(".wholecontentWrapper").css("margin-top", "0");
    });
    $("#topSearch").submit(function () {
        var j = checkSearch();
        return j;
    });
    header.inquirybtn.on("click", function () {
        if ($(".inquiryHeaderInner").find(".inqimg")) {
            var j = $(".inquiryHeaderInner").find(".inqimg").attr("lazy");
            $(".inqimg").attr("src", j);
            $(".inqimg").removeAttr("lazy");
        }
        $(".sendInuiryBtn").attr("disabled", false);
        $(".sendInuiryBtn").removeClass("disabled");
        Project_Data == 0;
        Recaptcha_Data = 0;
        ga("send", "event", "Inquiry Form", "Inquiry Loaded", pageUrl, { metric8: 1, metric9: 0 });
        $("#career_ids").addClass("form-active");
        testInquiry();
    });
    $(".inquiryButton .arrowText").click(function () {
        testInquiry();
    });
    $(".arrowDown img").on("click", function () {
        $("html, body").animate({ scrollTop: $(".firstContentWrapper").position().top - 50 }, 1000);
    });
    header.mainmenu.unbind().on("click", function () {
        testMenu();
    });
    $("#searchWrap")
        .unbind()
        .on("click", function () {
            testSearch();
        });
    $(window).bind("pageshow", function () {
        var j = document.getElementById("topSearch");
        j.reset();
    });
    $(".close-menu").on("click", function () {
        $(".dropMenu .menuListClick").css({ padding: "0", "background-color": "transparent" });
        $(".xtraP").css({ opacity: "0", height: "0", padding: "0" });
        $(".iconArrow").removeClass("icon-Open").addClass("icon-Close");
        $(".close-menu").css("color", "#fff");
        $(".bodyWrapper, .headerSection").css("padding-right", "0");
        $("body").removeClass("backgroundScroll");
        $(".bodyWrapper>div, .bodyWrapper #header").css("display", "block");
        $(".mainmenuOuterContainer").removeClass("slideActiveMenu");
        $(".menuSliderOuterWrapper").removeClass("slideActive");
        $(".menuMiddle").addClass("menuSlide");
        $(".menuSlide").css({ display: "none", opacity: "0" });
        $(".menuMiddleList").css("display", "none");
        $(".menuMiddle").css({ opacity: 0, display: "none" });
        $(".menuSliderOuterWrapper").css("right", 0);
        $(".digitalTransformation h3, .digitalTransformation ul").css("width", "100%");
        $(this).siblings("ul").find(".childMenu").hide();
        $(this).siblings("ul").find(".subMenu").hide();
        $(this).parent().find("div.activeParent").removeClass("activeParent");
        $(this).siblings("ul").find(".toChild").removeClass("activeMenu");
        $("body").unbind("keydown");
        var j = $(".main-menu").outerWidth();
        $(".main-menu").animate({ right: "-" + j }, 500);
        $("body").removeClass("smr-open");
        $("html").css("overflow-y", "scroll");
        $(".mask").remove();
        activeNav = "";
        setTimeout(function () {
            $(".main-menu").css("display", "none");
        }, 500);
        $(document).scrollTop(scrollPosVal);
        $(".mainmenuContainer").css("opacity", "0");
        $(window).resize(function () {
            a = $(window).width();
            if (a > 1024) {
                $(".menuSliderOuterWrapper").css("right", "0");
                $(".close-menu.slideClose").css("display", "none");
            } else {
                $(".menuSliderOuterWrapper").css("right", "25%");
                $(".rightMenuContainer, .close-menu").css("display", "block");
                $(".close-menu").css("color", "#000");
            }
        });
    });
    $(".closesrch").on("click", function () {
        $('script[src*="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.6/inobounce.min.js"]').remove();
        iNoBounce.disable();
        $(".srch-open").css({ "overflow-y": "visible" });
        $(".searchHolder").animate({ right: "-100%" }, 500);
        $(".searchHolder").css("position", "fixed");
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.scrollBy(0, y);
        }
        var j = document.body.clientWidth;
        $("body").removeClass("srch-open");
        activeNav = "";
        $(".masksrch").remove();
        $("body").css("overflow-x", "hidden");
        setTimeout(function () {
            $(".searchHolder").css("display", "none");
            $("#q").val("");
            $("#q").attr("placeholder", srchTxt);
        }, 500);
    });
    $(".menuicon").click(function () {
        ga("send", "event", "Menu", "Menu_Click", "Menu_Click", 1);
    });
    $(".closeInquiry").click(function () {
        $(".sendInuiryBtn").attr("disabled", false);
        $(".sendInuiryBtn").removeClass("disabled");
        $("#career_ids").removeClass("form-active");
        $(this).removeClass("submitted");
        $(".inquiryModel").animate({ right: "-100%" }, 500);
        $("body").removeClass("inqy-open");
        $(document).scrollTop(scrollPosVal);
        $("#sendLinkedin").css("display", "block");
        $("#descrtextarea").css("height", "35px");
        activeNav = "";
        $(".mask").remove();
        $("body,html").css("overflow-y", "visible");
        $(".InquiryBtn").prop("disabled", false);
        $("#protype_id option:first-child").attr("disabled", false);
        grecaptcha.reset(widgetId2);
        setTimeout(function () {
            $(".inquiryModel").css("display", "none");
        }, 500);
        if (a > 767) {
            if ($("#id_inquiryName") !== null && $("#id_inquiryName").val() === "" && !$("#id_inquiryName").hasClass("activeState")) {
                Name_Data = 0;
            } else {
                Name_Data = 1;
            }
            if ($("#email_id") !== null && $("#email_id").val() === "" && !$("#email_id").hasClass("activeState")) {
                Email_Data = 0;
            } else {
                Email_Data = 1;
            }
            if ($("#company_id") !== null && $("#company_id").val() === "" && !$("#company_id").hasClass("activeState")) {
                Company_Data = 0;
            } else {
                Company_Data = 1;
            }
            if ($("#phone_id") && $("#phone_id").val() === "" && !$("#phone_id").hasClass("activeState")) {
                Phone_Data = 0;
            } else {
                Phone_Data = 1;
            }
            if ($("#descrtextarea") && $("#descrtextarea").val() === "" && !$("#descrtextarea").hasClass("activeState")) {
                Desc_Data = 0;
            } else {
                Desc_Data = 1;
            }
            if (Project_Data == 0) {
                Type_Data = 0;
            } else {
                Type_Data = 1;
            }
            if (Recaptcha_Data == 0) {
                Captcha_Data = 0;
            } else {
                Captcha_Data = 1;
            }
            ga("send", "event", "Inquiry Form", "Desktop Field Dropoff", pageUrl, {
                metric12: Name_Data,
                metric13: Email_Data,
                metric14: Company_Data,
                metric15: Phone_Data,
                metric16: Desc_Data,
                metric17: Type_Data,
                metric18: Captcha_Data,
            });
            Project_Data == 0;
            Recaptcha_Data = 0;
        } else {
            if ($("#id_inquiryName") !== null && $("#id_inquiryName").val() === "" && !$("#id_inquiryName").hasClass("activeState")) {
                Name_Data = 0;
            } else {
                Name_Data = 1;
            }
            if ($("#email_id") !== null && $("#email_id").val() === "" && !$("#email_id").hasClass("activeState")) {
                Email_Data = 0;
            } else {
                Email_Data = 1;
            }
            if ($("#company_id") !== null && $("#company_id").val() === "" && !$("#company_id").hasClass("activeState")) {
                Company_Data = 0;
            } else {
                Company_Data = 1;
            }
            if ($("#phone_id") && $("#phone_id").val() === "" && !$("#phone_id").hasClass("activeState")) {
                Phone_Data = 0;
            } else {
                Phone_Data = 1;
            }
            ga("send", "event", "Inquiry Form", "Mobile Field Dropoff", pageUrl, { metric12: Name_Data, metric13: Email_Data, metric14: Company_Data, metric15: Phone_Data });
        }
        $("#career_ids input, #career_ids textarea").removeClass("activeState");
    });
    $("#phone_id").on("keydown", function (j) {
        if (j.keyCode === 9) {
            if (!$("#recaptcha2 iframe").inView()) {
                $("html, body").animate({ scrollTop: $("#recaptcha2").offset().top }, 500);
            }
        }
    });
    $("#protype_id").on("change", function () {
        $(this).removeClass("placeholder");
        Project_Data = 1;
    });
    var c = getCustomCookie("briefdesc"),
        i = getCustomCookie("projecttype"),
        f = getCustomCookie("sharepoint"),
        g = getCustomCookie("salesforce");
    if ($(window).width() <= 1024) {
        deviceMenuFunctionality();
    }
});
if (!isMobile.Android()) {
    $("#phone_id").keydown(function (b) {
        if (b.shiftKey && (b.keyCode == 191 || b.keyCode == 190 || b.keyCode == 188)) {
            b.preventDefault();
        }
        var a = navigator.userAgent.toLowerCase().indexOf("firefox");
        if ((a > -1 && b.keyCode == 61) || (a > -1 && b.keyCode == 173)) {
            return;
        }
        if (isMobile.iOS() && b.keyCode == 187) {
            return;
        }
        if (
            $.inArray(b.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            ((b.keyCode == 65 || b.keyCode == 86 || b.keyCode == 88 || b.keyCode == 67) && (b.ctrlKey === true || b.metaKey === true)) ||
            (b.keyCode >= 35 && b.keyCode <= 40) ||
            b.keyCode == 32 ||
            b.keyCode == 189 ||
            b.keyCode == 107 ||
            b.keyCode == 109 ||
            b.keyCode == 111 ||
            b.keyCode == 188 ||
            b.keyCode == 191 ||
            (b.shiftKey === true && b.keyCode == 187) ||
            b.keyCode == 57 ||
            b.keyCode == 48
        ) {
            return;
        }
        if ((b.shiftKey || b.keyCode < 48 || b.keyCode > 57) && (b.keyCode < 96 || b.keyCode > 105)) {
            b.preventDefault();
        }
    });
}
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(window).blur(function () {
        if ($("#protype_id option:selected").text() != "Type of Project") {
            setCustomCookie("projecttype", 1, 1);
        } else {
            setCustomCookie("projecttype", 0, 1);
        }
        if ($("#descrtextarea").val().length) {
            setCustomCookie("briefdesc", 1, 1);
        } else {
            setCustomCookie("briefdesc", 0, 1);
        }
        setCustomCookie("windowReferPath", pageUrl, 1);
    });
} else {
    var myEvent = window.attachEvent || window.addEventListener;
    var chkevent = window.attachEvent ? "onbeforeunload" : "beforeunload";
    myEvent(chkevent, function (a) {
        if ($("#protype_id option:selected").text() != "Type of Project") {
            setCustomCookie("projecttype", 1, 1);
        } else {
            setCustomCookie("projecttype", 0, 1);
        }
        if ($("#descrtextarea").val().length) {
            setCustomCookie("briefdesc", 1, 1);
        } else {
            setCustomCookie("briefdesc", 0, 1);
        }
        setCustomCookie("windowReferPath", pageUrl, 1);
    });
}
$(document).ready(function () {
    $(".slider").slick({ slidesToScroll: 1, focusOnSelect: true, slidesToShow: 1, autoplay: true, autoplaySpeed: 1500, arrows: false, pauseOnHover: false, pauseOnFocus: false, fade: true, speed: 500 });
    $(".closeInquiry").addClass("submitted");
    $(document).on("keyup", "input", function (b) {
        if (b.which == 13 && $(window).width() < 1024) {
            if (!validateName()) {
                $("#openModal").animate({ scrollTop: $("#id_inquiryName").offset().top + 270 }, 500);
            } else {
                if (!validateEmail()) {
                    $("#openModal").animate({ scrollTop: $("#email_id").offset().top + 270 }, 500);
                }
            }
            validateSubmitInquiryForm();
        }
    });
    $(document).on("keyup", "input", function (c) {
        if (c.which == 13) {
            var b;
            b = "";
            if (!validateName(b)) {
                $("#id_inquiryName" + b)
                    .next("span")
                    .show();
            } else {
                $("#id_inquiryName" + b)
                    .next("span")
                    .hide();
            }
            if (!validateEmail(b)) {
                $("#email_id" + b)
                    .next("span")
                    .show();
            } else {
                $("#email_id" + b)
                    .next("span")
                    .hide();
            }
            if (!validatePhoneNumber(b)) {
                $("#phone_id" + b)
                    .next("span")
                    .show();
            } else {
                $("#phone_id" + b)
                    .next("span")
                    .hide();
            }
            if (!validateRecaptcha()) {
                $("#headerCaptchaValMsg label").show();
            } else {
                $("headerCaptchaValMsg label").next("span").hide();
            }
            if (validateName(b) && validateEmail(b) && validateRecaptcha()) {
                validateForm(b);
            }
        } else {
            $(this).next("span").hide();
        }
    });
    var a = $("#protype_id option:first-child").val();
    if (a == "Type of Project" || a == "Choose Product" || a == "Select Category") {
        $("#protype_id option:first-child").val("None");
        $("#protype_id option:contains(" + a + ")").attr("selected", "selected");
    }
});
windowPageUrl = getCustomCookie("windowPagePath");
function validateForm(j, s) {
    if (!$(".sendInuiryBtn").hasClass("disabled")) {
        var n = "";
        if (j) {
            n = "_" + j;
        }
        var a = $("#nameValMsg" + n + " label"),
            b = $("#compValMsg" + n + " label"),
            r = $("#dropdownValMsg label"),
            p = $("#emailValMsg" + n + " label"),
            q = $("#descrValMsg label"),
            m = $("#expValMsg" + n + " label"),
            f = $("#captchaValMsg label"),
            o,
            l,
            u,
            k;
        isMobile = $(".switching").val();
        $("#id_inquiryName" + n).focus(function () {
            if (a.hasClass("needsfilled")) {
                a.removeClass("needsfilled");
                a.text("");
            }
        });
        $("#company_id" + n).focus(function () {
            if (b.hasClass("needsfilled")) {
                b.removeClass("needsfilled");
                b.text("");
            }
        });
        $("#email_id" + n).focus(function () {
            if (p.hasClass("needsfilled")) {
                p.removeClass("needsfilled");
                p.text("");
            }
        });
        $("#phone_id" + n).focus(function () {
            if (m.hasClass("needsfilled")) {
                m.removeClass("needsfilled");
                m.text("");
            }
        });
        $("#descrtextarea").focus(function () {
            if (q.hasClass("needsfilled")) {
                q.removeClass("needsfilled");
                q.text("");
            }
        });
        $("#protype_id").click(function () {
            if (r.hasClass("needsfilled")) {
                r.text("");
                r.removeClass("needsfilled");
            }
        });
        $("#recaptcha2").click(function () {
            if (r.hasClass("needsfilled")) {
                r.text("");
                r.removeClass("needsfilled");
            }
        });
        if (!validateName(n)) {
            $("#id_inquiryName" + n)
                .next("span")
                .show();
        }
        if (!validateEmail(n)) {
            $("#email_id" + n)
                .next("span")
                .show();
        }
        if (!validatePhoneNumber(n)) {
            $("#phone_id" + n)
                .next("span")
                .show();
        }
        o = validateSubmitInquiryForm(n);
        if (o == true) {
            $(".sendInuiryBtn").attr("disabled", true);
            $(".sendInuiryBtn").addClass("disabled");
            var t = $("#career_ids" + n).serializeObject();
            t.inquiryTypeOfContact = "Email";
            if ($("#descrtextarea" + n).val().length) {
                u = 1;
            } else {
                u = 0;
            }
            if ($("#company_id" + n).val().length) {
                k = 1;
            } else {
                k = 0;
            }
            if ($("#protype_id").val() != "None") {
                l = 1;
            } else {
                l = 0;
            }
            var c = "/rpc/sendInquiry";
            var d = sendInquiry;
            var i = JSONRemoteCall([t], c, d);
            var g = JSON.parse(i.responseText);
            if (g.isSendMail == true) {
                $("#homeInqury, #career_ids").removeClass("form-active");
                ga("send", "event", "Inquiry Form", "Submission", pageUrl, { metric10: 1, metric11: 0 });
                ga("send", "event", "Inquiry Form", "Typed", "Non Mandatory Fields", { metric1: u, metric2: l, metric3: k });
                if (windowPageUrl == "/sharepoint-online-migration/") {
                    if ($("#protype_id").val() == "SharePoint" || n == "_1") {
                        ga("send", "event", "Sharepoint", "Inquiry_Submission", "Sharepoint_Inquiry", 1);
                    }
                } else {
                    if (windowPageUrl == "/salesforce-customization-integration/") {
                        if ($("#protype_id").val() == "Salesforce" || n == "_1") {
                            ga("send", "event", "Salesforce", "Salesforce_Submission", "Salesforce_Inquiry", 2);
                        }
                    }
                }
                $("#emailValMsg" + n).append("<label id='emailValMsg1'></label>");
            }
        }
        return false;
    } else {
        return false;
    }
}
function validateSubmitInquiryForm(i) {
    if (i == "_1") {
        var i = i;
    } else {
        var i = "";
    }
    var e = true;
    var g = 0,
        c;
    validateName(i);
    if (i != "_1") {
        if (!validateName(i) || !validateEmail(i) || !validatePhoneNumber(i)) {
            var b, d, f, a;
            g++;
            if (!validateName(i)) {
                b = 1;
            } else {
                b = 0;
            }
            if (!validateEmail(i)) {
                d = 1;
            } else {
                d = 0;
            }
            if (!validatePhoneNumber(i)) {
                f = 1;
            } else {
                f = 0;
            }
            if (!validateRecaptcha()) {
                a = 1;
            } else {
                a = 0;
            }
            ga("send", "event", "Inquiry Form", "Validation Error", "Validation Error Field", { metric4: b, metric5: d, metric6: f, metric7: a });
            if ($(window).width() < 1024) {
                if (!validateName()) {
                    $("#openModal").animate({ scrollTop: $("#id_inquiryName").offset().top + 270 }, 500);
                } else {
                    if (!validateEmail(i)) {
                        $("#openModal").animate({ scrollTop: $("#email_id").offset().top + 270 }, 500);
                    } else {
                        if (!validatePhoneNumber(i)) {
                            $("#openModal").animate({ scrollTop: $("#phone_id").offset().top + 270 }, 500);
                        }
                    }
                }
            } else {
                return false;
            }
        }
    } else {
        if (!validateName(i) || !validateEmail(i)) {
            var b, d, f, a;
            g++;
            if (!validateName(i)) {
                b = 1;
            } else {
                b = 0;
            }
            if (!validateEmail(i)) {
                d = 1;
            } else {
                d = 0;
            }
            ga("send", "event", "Inquiry Form", "Validation Error", "Validation Error Field", { metric4: b, metric5: d, metric6: 0, metric7: 0 });
            if ($(window).width() < 1024) {
                if (!validateName()) {
                    $("#openModal").animate({ scrollTop: $("#id_inquiryName" + i).offset().top + 270 }, 500);
                } else {
                    if (!validateEmail()) {
                        $("#openModal").animate({ scrollTop: $("#email_id" + i).offset().top + 270 }, 500);
                    }
                }
            } else {
                return false;
            }
        }
    }
    if (g > 0) {
        e = false;
    }
    return e;
}
function validateEmail(e) {
    if (e == "_1") {
        var e = e;
    } else {
        var e = "";
    }
    var e = e;
    var d = true;
    var c = $("#email_id" + e);
    var b = $("#emailValMsg" + e + " label");
    var a = gettext("Please enter a valid email address.");
    if (!/^([a-zA-Z0-9_!#$`{}~%&()?^*+=:\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(c.val().trim())) {
        d = false;
        b.addClass("needsfilled");
        b.text(a);
    }
    return d;
}
function validateName(f) {
    if (f == "_1") {
        var f = f;
    } else {
        var f = "";
    }
    var f = f;
    var e = $("#nameValMsg" + f + " label");
    var a = gettext("Please enter your full name.");
    var d = true;
    var b = $("#id_inquiryName" + f)
        .val()
        .trim();
    for (var c = 0; c <= b.length; c++) {
        if (b.substring(0, c).match(/</) || b.substring(0, c).match(/>/) || b.substring(0, c).match(/\*/)) {
            e.addClass("needsfilled");
            e.text(a);
            d = false;
        }
    }
    if (b.substring(0, 1) == " " || b.substring(0, 1).match(/^[\d.,~!@#$%^&*()_+:;<>']+/)) {
        e.addClass("needsfilled");
        e.text(a);
        d = false;
    }
    b = b.replace(/\s/g, "");
    if (b.length == 0 || b.length < 3) {
        e.addClass("needsfilled");
        e.text(a);
        d = false;
    }
    if (/\d/.test(b)) {
        e.addClass("needsfilled");
        e.text("Please enter a valid name");
        d = false;
        return d;
    }
    return d;
}
function validatePhoneNumber(b) {
    var g = $("#phone_id");
    var k = g.val();
    if (k == "") {
        return true;
    } else {
        if (b == "_1") {
            var b = b;
        } else {
            var b = "";
        }
        var b = b;
        var a = true;
        if (b != "_1") {
            var g = $("#phone_id");
            var k = g.val();
            var c = /^[\/0-9- +().,]+$/;
            var j = k.length;
            var e = gettext("Please enter a valid phone number.");
        }
        var f = $("#expValMsg" + b + " label");
        for (var d = 0; d <= g.val().length; d++) {
            if (g.val().substring(0, d).match(/</) || g.val().substring(0, d).match(/>/) || g.val().substring(0, d).match(/\*/)) {
                f.addClass("needsfilled");
                f.text(e);
                a = false;
            }
        }
        if (!c.test(k)) {
            a = false;
            f.addClass("needsfilled");
            f.text(e);
        }
        if (j > 20 || j < 10) {
            a = false;
            f.addClass("needsfilled");
            f.text(e);
        }
        return a;
    }
}
function validateRecaptcha() {
    var b = gettext("Please verify that you are not a robot.");
    var a = $("#headerCaptchaValMsg label");
    if ($("#email_id").val().trim() == "portalqa13@gmail.com") {
        a.css("display", "none");
        return true;
    }
    if (grecaptcha.getResponse(widgetId2) == "" && $(window).width() > 1024) {
        a.css("display", "block");
        a.text(b);
        return false;
    }
    a.css("display", "none");
    return true;
}
function validateCaptcha() {
    var e;
    var b = $("#captchaValMsg label");
    var d = $("#captcha_id").val();
    var a = /^[0-9a-z]+$/;
    var c = gettext("Please enter valid CAPTCHA code.");
    if (d.match(a)) {
        e = true;
    } else {
        b.addClass("needsfilled");
        b.text(c);
        e = false;
    }
    if (isMobile == "true") {
        d = "default";
        e = true;
    }
    return e;
}
$(window).load(function () {
    if (window.location.search.indexOf("error") > -1) {
        if (window.location.search.indexOf("error=access_denied") > -1) {
            testInquiry();
        }
    }
    $("html").focus();
    var a = navigator.userAgent.toString().toLowerCase();
    if (a.toLowerCase().indexOf("macintosh") !== -1) {
        $("body").addClass("mac");
    } else {
        if (a.toLowerCase().indexOf("firefox") !== -1) {
            $("body").addClass("firefox");
        } else {
            if (a.toLowerCase().indexOf("chrome") !== -1) {
                $("body").addClass("chrome");
            }
        }
    }
});
function testSearch() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.6/inobounce.min.js";
    $(".bodyWrapper").append(a);
    var b = document.body.clientWidth;
    y = $("body").scrollTop();
    $(".searchHolder").css("display", "block");
    $(".searchHolder").animate({ right: "0" }, 500);
    $("body").addClass("srch-open");
    $(".srch-open").css({ "overflow-y": "hidden" });
    $("body").append("<div class='masksrch'></div>");
    activeNav = "srch-open";
    $(".masksrch").click(function () {
        $('script[src*="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.6/inobounce.min.js"]').remove();
        iNoBounce.disable();
        $(".srch-open").css({ "overflow-y": "visible" });
        $("body").removeClass(activeNav);
        activeNav = "";
        $(".masksrch").remove();
        $(".searchHolder").animate({ right: "-100%" }, 500);
        $(".searchHolder").css("position", "fixed");
        setTimeout(function () {
            $(".inquiryModel").css("display", "none");
        }, 500);
        if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
            window.scrollBy(0, y);
        }
    });
    $(".searchBox").focus();
    if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        $("body").css("overflow-x", "hidden");
    }
    $(".searchBox").trigger("click");
}
var holderWidth;
$("ul li.expand-inner .holder").each(function () {
    holderWidth = $(this).css("width");
    $(this).parent(".expand-inner").css("width", holderWidth);
});
$(".main-menu").css("display", "none");
function testMenu() {
    if ($(".menuSliderOuterWrapper").hasClass("slideActive")) {
        $(".rightMenuContainer").css("display", "none");
    } else {
        $(".rightMenuContainer").css("display", "block");
    }
    setTimeout(function () {
        $("body").addClass("backgroundScroll");
    }, 1000);
    $(".close-menu").css("color", "#000");
    $(".menuMiddleList>*").css("padding", "0");
    scrollPosVal = $(window).scrollTop();
    var a = $(".main-menu").outerWidth();
    $(".main-menu").css("display", "block");
    $(".main-menu").css({ right: "0" });
    $("body").keydown(function (d) {
        var b = new Array(33, 34, 35, 36, 37, 38, 39, 40);
        var c = d.which;
        if ($.inArray(c, b) > -1) {
            d.preventDefault();
            return false;
        }
        return true;
    });
    $("body").addClass("smr-open");
    $("html, body").css("overflow-y", "hidden");
    $(".bodyWrapper").css("padding-right", "15px");
    $(".headerSection").css("padding-right", "4px");
    $("body").append("<div class='mask'></div>");
    activeNav = "smr-open";
    $(".mask").click(function () {
        $(".close-menu").trigger("click");
    });
    $(".mainmenuContainer").css("opacity", "1");
}
function inquiryOpenOptions() {
    var b = "{{current_domain}}";
    var a = "{{EXTERNAL_URLS.QBURST_COM_URL}}".slice(7);
    if (!inquiry.main.hasClass("active")) {
        InquiryClearOptions();
        $("#descrtextarea").val("");
        $("#descrtextarea").attr("placeholder", "Brief description of your project/requirements");
    } else {
        return false;
    }
}
function InquiryClearOptions() {
    $(".applyForm_enquiry").css("display", "block");
    $(".contactInquiry #content").css("display", "none");
    $("#id_inquiryName").val("");
    $("#email_id").val("");
    $("#phone_id").val("");
    $("#company_id").val("");
    $(".error_msgInquiry label").text("");
}
function checkSearch() {
    var a = $("#q").val();
    var b = $.trim(a);
    if (b == "" || b == srchTxt || b == enterSrchTxt) {
        $("#q").val(enterSrchTxt);
        return false;
    } else {
        return true;
    }
}
function testInquiry() {
    inquiryOpenOptions();
    scrollPosVal = $(window).scrollTop();
    $(".inquiryModel").css("display", "block");
    setTimeout(function () {
        $("body").addClass("inqy-open");
        $("body").append("<div class='mask'></div>");
        activeNav = "inqy-open";
        $("body").css("overflow-y", "hidden");
        $("html").css("overflow-y", "hidden");
    }, 500);
    $(".inquiryModel").animate({ right: "0" }, 500, function () {
        $("#protype_id").val(selectedOption);
        if (selectedOption === "Type of Project") {
            $("#protype_id").val("None");
        }
    });
    $(".mask").click(function () {
        $(".srch-open").css({ "overflow-y": "visible" });
        $("body").removeClass(activeNav);
        activeNav = "";
        $(".mask").remove();
        $("html").css("overflow-y", "scroll");
        $(".inquiryModel").animate({ right: "-100%" }, 500);
        setTimeout(function () {
            $(".inquiryModel").css("display", "none");
        }, 500);
    });
    $(".inquiryHeaderInner").css("visibility", "visible");
    InquiryClearOptions();
}
$.fn.serializeObject = function () {
    var d = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (d[this.name] !== undefined) {
            if (!d[this.name].push) {
                d[this.name] = [d[this.name]];
            }
            d[this.name].push(this.value || "");
        } else {
            d[this.name] = this.value || "";
        }
    });
    return d;
};
function validate_alphabet(c) {
    c = c ? c : window.event;
    var d = c.which ? c.which : c.keyCode;
    if (d == 46) {
        return true;
    }
    if (d == 37) {
        return true;
    }
    if (d == 39) {
        return true;
    }
    if (d > 32 && d < 47) {
        return false;
    }
    if (d > 32 && d > 39 && (d < 65 || d > 90) && (d < 97 || d > 122)) {
        return false;
    }
    return true;
}
function validate_digit(c) {
    c = c ? c : window.event;
    var d = c.which ? c.which : c.keyCode;
    if (d == 40) {
        return true;
    }
    if (d == 41) {
        return true;
    }
    if (d == 43) {
        return true;
    }
    if (c.key == "%") {
        return false;
    }
    if (d == 37 || d == 32 || d == 45 || d == 44 || d == 46 || d == 47) {
        return true;
    }
    if (d == 39) {
        return true;
    }
    if (d > 31 && (d < 48 || d > 57)) {
        return false;
    }
    return true;
}
function validate_character(c) {
    c = c ? c : window.event;
    var d = c.which ? c.which : c.keyCode;
    if (d > 32 && d > 34 && d > 39 && d > 59 && (d < 65 || d > 90) && (d < 97 || d > 122) && (d < 48 || d > 57)) {
        return false;
    }
    return true;
}
function limitText(a, b) {
    $(a).attr("maxlength", b);
    $(a).attr("class", "activeState");
}
function limitTextChara(e, f, d) {
    if (e.value.length > d) {
        e.value = e.value.substring(0, d);
    } else {
        f.value = d - e.value.length;
    }
}
function h(a) {
    $(a).css({ height: "auto", "overflow-y": "hidden" }).height(a.scrollHeight);
}
$("textarea")
    .each(function () {
        h(this);
    })
    .on("input", function () {
        h(this);
    });
$(window).scroll(function (b) {
    var a = $(window).scrollTop();
    cookieHeight = $("#header").height();
    if (a > cookieHeight) {
        $("#header").addClass("moveHead");
    } else {
        counter = 0;
        $("#header").removeClass("moveHead");
    }
    if ($("#cookiePolicy").is(":visible")) {
        if (a > headerHei) {
            $("#header").addClass("moveHead");
        } else {
            counter = 0;
            $("#header").removeClass("moveHead");
        }
    }
});
$(window).resize(function () {
    if ($(window).width() <= 1024) {
        deviceMenuFunctionality();
    }
});
function deviceMenuFunctionality() {
    $(".expanded-list li, .expand-inner")
        .unbind("click")
        .bind("click", function (f) {
            var d = $(this),
                b = d.children("ul"),
                a = d.find(".toChild").first();
            if ($(this).parent().hasClass("subMenu")) {
                var c = d.find(".childMenu");
                $(".subMenu .childMenu").not(c).hide();
                $(".subMenu .toChild").not(a).removeClass("activeMenu");
                a.toggleClass("activeMenu");
                c.slideToggle();
                f.stopPropagation();
                return;
            }
            $(".toChild").not(a).removeClass("activeMenu");
            $(".subMenu").not(b).hide();
            $(".childMenu").not(b).hide();
            a.toggleClass("activeMenu");
            d.children("ul").slideToggle();
        });
    $(".childMenu li a").click(function (a) {
        a.stopPropagation();
    });
}
