var windowPageUrl, pageUrl = window.location.pathname,
    ww = document.body.clientWidth,
    device = navigator.userAgent,
    srchTxt = gettext("Type and press enter to search"),
    enterSrchTxt = gettext(""),
    selectedOption = $("#protype_id option:selected").text(),
    y = 0,
    x = -3,
    slideWidth = 0,
    Project_Data = 0,
    Recaptcha_Data = 0,
    winWidth = $(window).width(),
    inquiry = { main: $("#openModal"), select: $(".selectbox"), bodr: $(".mobBorder") },
    caseStudy = { subcont: $(".casesubContent h2"), banking_subSection: $(".subSecond .leftSecond") },
    footr = { morebtn: $("#moreButton"), sublist: $("#contactSubList"), lessbtn: $("#lessButton") },
    switching = $(".switching"),
    innermenu = { subholder: $("#mobMenuHolder"), activeclass: $("#mobMenuHolder li.active"), devicesubmenu: $(".subMenus ul li a"), menuSelected: $(".menuSelected") },
    header = { inquirybtn: $("#menuIconInquiry"), mainmenu: $("#toggleMenu"), mobmenu: $("#navMenu") },
    textExpand = { expandbtn: $(".mobExpand #readMoreDown"), closebtn: $(".mobExpand #readLess"), texts: $(".expandText") },
    timer = null,
    isMobile = { Android: function() { return navigator.userAgent.match(/Android/i) }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function() { return navigator.userAgent.match(/IEMobile/i) }, any: function() { return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() } };

function setCustomCookie(e, s, i) {
    var t = new Date;
    t.setTime(t.getTime() + 24 * i * 60 * 60 * 1e3);
    var n = "expires=" + t.toUTCString();
    document.cookie = e + "=" + s + ";" + n + ";path=/"
}

function getCustomCookie(e) {
    for (var s = e + "=", i = decodeURIComponent(document.cookie).split(";"), t = 0; t < i.length; t++) {
        for (var n = i[t];
            " " == n.charAt(0);) n = n.substring(1);
        if (0 == n.indexOf(s)) return n.substring(s.length, n.length)
    }
    return ""
}
"/sharepoint-online-migration/" != pageUrl && "/salesforce-customization-integration/" != pageUrl && "/see-my-machines/" != pageUrl && "/solutions/chatbots/" != pageUrl && "/solutions/RTLS/" != pageUrl && "/cloud-migration-strategies/" != pageUrl || (setCustomCookie("windowPagePath", pageUrl, 1), windowPageUrl = getCustomCookie("windowPagePath")), "/cloud/migration/" == pageUrl && $("#navInquiryWrap").css("display", "none"), $("#document_1").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Application_of_Big_Data_in_Retail_Downloaded", 1) }), $("#document_2").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Big_Data_Analytics_in_Insurance_Downloaded", 1) }), $("#document_3").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Lambda_Architecture_Near_Real_Time_Big_Data_Analytics_Using_Hadoop_Downloaded", 1) }), $("#document_4").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Building_Big_Data_Applications_Downloaded", 1) }), $("#document_5").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Social_Media_for_Business_Downloaded", 1) }), $("#document_6").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Key_Considerations_before_Embarking_on_an_eCommerce_Project_Downloaded", 1) }), $("#document_7").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Mobile_Application_Security_Downloaded", 1) }), $("#document_8").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "Competitive_Intelligence_in_the_Web_Services_Industry_Downloaded", 1) }), $("#document_9").click(function() { ga("send", "event", "White_Papers", "Document_Downloaded", "3_Industries_Transformed_by_the_Industrial_Internet_of_Things_Document_Downloaded", 1) }), $(window).load(function() {
    setTimeout(function() { adjustPara() }, 200), window.location.search.indexOf("error") > -1 && window.location.search.indexOf("error=access_denied") > -1 && testInquiry(), $("#career_ids").one("click", function(e) { $("#career_ids").hasClass("form-active") || ($("#career_ids").addClass("form-active"), Header_Form = 0, Content_Form = 1, ga("send", "event", "Inquiry Form", "Inquiry Loaded", pageUrl, { metric8: Header_Form, metric9: Content_Form })) }), $("#career_ids").keypress(function(e) { $("#career_ids").hasClass("form-active") || ($("#career_ids").addClass("form-active"), Header_Form = 0, Content_Form = 1, ga("send", "event", "Inquiry Form", "Inquiry Loaded", pageUrl, { metric8: Header_Form, metric9: Content_Form })) }), "/inquiry/success" != pageUrl && "/inquiry/success#!" != pageUrl && setCustomCookie("windowReferPath", pageUrl, 1);
    getCustomCookie("windowReferPath"), getCustomCookie("briefdesc"), getCustomCookie("projecttype");
    var e = navigator.userAgent.toString().toLowerCase(); - 1 !== e.toLowerCase().indexOf("macintosh") ? $("body").addClass("mac") : -1 !== e.toLowerCase().indexOf("firefox") ? $("body").addClass("firefox") : -1 !== e.toLowerCase().indexOf("chrome") && $("body").addClass("chrome"), $("#career_ids_1").find("input[type=text], textarea").val("")
}), -1 != navigator.userAgent.indexOf("Safari") && -1 != navigator.userAgent.indexOf("Mac") && -1 == navigator.userAgent.indexOf("Chrome") && $("html").addClass("safari-mac");
var holderWidth, scrollPosVal, windhei = $(window).height(),
    headerHei = $("#header").outerHeight();

function adjustPara() {
    $(".designBoxContent p,.fixedHeight").css("height", "auto");
    var e = 0;
    $(".designBoxContent p, .fixedHeight").each(function() { $(this).height() > e && (e = $(this).height()) }), winWidth > 750 && $(".designBoxContent p, .fixedHeight").height(e)
}

function inquiryOpenOptions() {
    "{{EXTERNAL_URLS.QBURST_COM_URL}}".slice(7);
    if (inquiry.main.hasClass("active")) return !1;
    InquiryClearOptions(), $("#descrtextarea").val(""), $("#descrtextarea").attr("placeholder", "Brief description of your project/requirements")
}

function enableSelectBoxes() {
    innermenu.activeclass.find("span").attr("value"), innermenu.activeclass.find("a").attr("href"), innermenu.activeclass.find("span").text(), innermenu.activeclass.find("p").attr("class"), innermenu.activeclass.find("span").attr("class"), innermenu.activeclass.find("img").attr("src");
    innermenu.menuSelected.unbind("click").bind("click", function(e) { e.preventDefault(), "none" == $(this).siblings("ul#mobMenuHolder").css("display") ? ($(this).siblings("ul#mobMenuHolder").css("display", "block"), $(this).siblings("ul#mobMenuHolder").css("opacity", "1"), $(this).siblings("ul#mobMenuHolder").css("height", "100%"), $(".menuSelected").addClass("a")) : "block" == $(this).siblings("ul#mobMenuHolder").css("display") && ($(this).siblings("ul#mobMenuHolder").css("display", "none"), $(this).siblings("ul#mobMenuHolder").css("opacity", "0"), $(this).siblings("ul#mobMenuHolder").css("height", "0"), $(".menuSelected").removeClass("a")) }), innermenu.subholder.find("li").unbind("click").bind("click", function(e) {
        $("#selectTitle").remove();
        var s = $(this).find("a").attr("href"),
            i = $(this).text(),
            t = $(this).find("p").attr("class"),
            n = $(this).attr("class"),
            o = $(this).find("img").attr("src");
        innermenu.menuSelected.find("li:first-child").parent().siblings("ul").css("display", "none"), innermenu.menuSelected.find("li:first-child span:last-child").text(i), innermenu.menuSelected.find("li a").attr("href", s), innermenu.menuSelected.find("li:first-child span:first-child").attr("class", t), innermenu.menuSelected.find("li:first-child span:last-child").attr("class", n), innermenu.menuSelected.find("li:first-child span:first-child img").attr("src", o), $(this).addClass("active").siblings("li").removeClass("active")
    })
}

function deviceMenuFunctionality() {
    $(".expanded-list li, .expand-inner").unbind("click").bind("click", function(e) {
        var s = $(this),
            i = s.children("ul"),
            t = s.find(".toChild").first();
        if ($(this).parent().hasClass("subMenu")) { var n = s.find(".childMenu"); return $(".subMenu .childMenu").not(n).hide(), $(".subMenu .toChild").not(t).removeClass("activeMenu"), t.toggleClass("activeMenu"), n.slideToggle(), void e.stopPropagation() }
        $(".toChild").not(t).removeClass("activeMenu"), $(".subMenu,.childMenu").not(i).hide(), t.toggleClass("activeMenu"), s.children("ul").slideToggle()
    }), $(".childMenu li a").click(function(e) { e.stopPropagation() })
}

function subSectionHeight() {
    var e = $(".casesubRight .rightHolder").height() + "px",
        s = caseStudy.banking_subSection.find(".leftSection").height() + "px";
    caseStudy.banking_subSection.find(".leftSection").css("height", s), caseStudy.banking_subSection.css("height", e)
}

function InquiryClearOptions() { $(".applyForm_enquiry").css("display", "block"), $(".contactInquiry #content").css("display", "none"), $("#id_inquiryName").val(""), $("#email_id").val(""), $("#phone_id").val(""), $("#company_id").val(""), $(".error_msgInquiry label").text(""), "/services/web-development/rich-internet-applications/html5/flash-to-html5" == window.location.pathname && _gaq.push(["_trackEvent", "Flash_to_HTML5_Offer", "Flash_to_HTML5_Offer_Viewed", "Flash to HTML5 Offer Viewed"]), "/services/cloud-solutions/salesforce" == window.location.pathname && _gaq.push(["_trackEvent", "Salesforce_Free_Quote_Offer", "Salesforce_Free_Quote_Offer_Viewed", "Salesforce Free Quote Offer Viewed"]), "/services/testing/portfolio/security" == window.location.pathname && _gaq.push(["_trackEvent", "Security_Testing_Free_Offer", "Security_Testing_Free_Offer_Viewed", "Security Testing Free Offer Viewed"]) }

function testSearch() {
    document.body.clientWidth;
    var e = $("body").scrollTop();
    s = document.createElement("script"), s.type = "text/javascript", s.src = "https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.6/inobounce.min.js", $(".bodyWrapper").append(s), $(".searchHolder").css("display", "block"), $(".searchHolder").animate({ right: "0" }, 500), $("body").addClass("srch-open"), $(".srch-open").css({ "overflow-y": "hidden" }), $("body").append("<div class='masksrch'></div>"), activeNav = "srch-open", $(".masksrch").click(function() { $('script[src*="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.6/inobounce.min.js"]').remove(), iNoBounce.disable(), $(".srch-open").css({ "overflow-y": "visible" }), $("body").removeClass(activeNav), activeNav = "", $(".masksrch").remove(), $(".searchHolder").animate({ right: "-100%" }, 500), $(".searchHolder").css("position", "fixed"), setTimeout(function() { $(".inquiryModel").css("display", "none") }, 500), navigator.userAgent.match(/iPhone|iPad|iPod/i) && window.scrollBy(0, e) }), $(".searchBox").focus(), navigator.userAgent.match(/iPhone|iPad|iPod/i) && ($(".masksrch").css("position", "absolute"), $("body").css("overflow-x", "hidden"))
}

function testMenu() {
    $(".menuSliderOuterWrapper").hasClass("slideActive") ? $(".rightMenuContainer").css("display", "none") : $(".rightMenuContainer").css("display", "block"), setTimeout(function() { $("body").addClass("backgroundScroll") }, 1e3), scrollPosVal = $(window).scrollTop();
    $(".main-menu").outerWidth();
    $(".main-menu").css("display", "block"), $(".main-menu").css({ right: "0" }), $("body").keydown(function(e) {
        var s = new Array(33, 34, 35, 36, 37, 38, 39, 40),
            i = e.which;
        return !($.inArray(i, s) > -1) || (e.preventDefault(), !1)
    }), $("html, body").css("overflow-y", "hidden"), $(".bodyWrapper, .headerSection").css("padding-right", "15px"), $("body").append("<div class='mask'></div>"), activeNav = "smr-open", $(".mask").click(function() { $(".close-menu").trigger("click") }), $(".mainmenuContainer").css("opacity", "1")
}

function testInquiry() { inquiryOpenOptions(), scrollPosVal = $(window).scrollTop(), "/" != location.pathname ? ($(".inquiryModel").css("display", "block"), $(".inquiryFormLeft input").css("font-size", "16px"), setTimeout(function() { $('#protype_id option[selected="true"]').length && ($("#protype_id option").removeAttr("selected"), $(this).attr("selected", "selected")) }, 400), $(".inquiryHeaderInner").css("visibility", "visible"), $(".inquiryModel").animate({ right: "0" }, 500, function() { $("#protype_id").val(selectedOption), "Type of Project" === selectedOption && $("#protype_id").val("None") }), $("body").addClass("inqy-open"), $("body").append("<div class='mask'></div>"), activeNav = "inqy-open", $("body,html").css("overflow-y", "hidden"), $(".mask").click(function() { $(".srch-open").css({ "overflow-y": "visible" }), $("body").removeClass(activeNav), activeNav = "", $(".mask").remove(), $("html").css("overflow-y", "visible"), $(".inquiryModel").animate({ right: "-100%" }, 500), setTimeout(function() { $(".inquiryModel").css("display", "none") }, 500) }), winWidth > 767 ? $("#id_inquiryName").focus() : $("#career_ids input[type='radio']").focus()) : InquiryClearOptions() }

function checkSearch() {
    var e = $("#q").val(),
        s = $.trim(e);
    return "" != s && s != srchTxt && s != enterSrchTxt || ($("#q").val(enterSrchTxt), !1)
}

function clear() { $("#id_email").val(""), $("#id_comments").val(""), $("#id_captcha").val("") }

function validate_alphabet(e) { var s = (e = e || window.event).which ? e.which : e.keyCode; return 46 == s || (37 == s || (39 == s || !(s > 32 && s < 47) && !(s > 32 && s > 39 && (s < 65 || s > 90) && (s < 97 || s > 122)))) }

function validate_digit(e) { var s = (e = e || window.event).which ? e.which : e.keyCode; return 40 == s || (41 == s || (43 == s || "%" != e.key && (37 == s || 32 == s || 45 == s || 44 == s || 46 == s || 47 == s || (39 == s || !(s > 31 && (s < 48 || s > 57)))))) }

function validate_character(e) { var s = (e = e || window.event).which ? e.which : e.keyCode; return !(s > 32 && s > 34 && s > 39 && s > 59 && (s < 65 || s > 90) && (s < 97 || s > 122) && (s < 48 || s > 57)) }

function limitText(e, s) { $(e).attr("maxlength", s), $(e).attr("class", "activeState") }

function limitTextChara(e, s, i) { e.value.length > i ? e.value = e.value.substring(0, i) : s.value = i - e.value.length }

function scroller() { return $("html, body").animate({ scrollTop: 0 }, 600), !1 }

function show_contacts() {
    $(".contact_tab li").unbind("click").bind("click", function() {
        var e = $(this).attr("id");
        show_contacts_tab(e), $(this).parent().siblings().removeClass("a")
    })
}

function positionContent() {
    if (document.body.clientWidth > 767 && $(".careerlists").length) {
        var e = $(".advertisement").outerHeight(!0),
            s = $(".careerlists").children();
        s.length > 3 ? sum = s[0].clientHeight + s[1].clientHeight + s[2].clientHeight + 72 : (sum = 0, $(".advertisement").css("display", "none")), $("#jobsTable .advertisement").css("top", sum), $(".careerlists li:nth-child(3)").css("margin-bottom", e)
    }
    $(".careerlists li .toChild").unbind("click").bind("click", function(e) {
        var s, i = 0;
        ($(this).toggleClass("activeMenu"), $(this).hasClass("activeMenu") && ($(this).closest(".careerlists li").siblings("li").find(".toChild").removeClass("activeMenu"), $(this).closest(".careerlists li").siblings("li").find(".careercontent").removeClass("active")), $(this).closest(".careerlists li").find(".careercontent").toggleClass("active"), $(this).closest(".careerlists li").find(".careercontent").hasClass("active")) ? ((s = $(".careerlists").children()).length > 3 ? i = s[0].clientHeight + s[1].clientHeight + s[2].clientHeight + 72 : (i = 0, $(".advertisement").css("display", "none")), $("#jobsTable .advertisement").css("top", i), $("html, body").animate({ scrollTop: $(this).closest(".careerlists li").offset().top - 65 }, 500)) : ((s = $(".careerlists").children()).length > 3 ? i = s[0].clientHeight + s[1].clientHeight + s[2].clientHeight + 72 : (i = 0, $(".advertisement").css("display", "none")), $("#jobsTable .advertisement").css("top", i))
    })
}
$(window).scroll(function(e) { $(window).scrollTop() > $("#cookiePolicy").height() ? $("#header").addClass("moveHead") : ($("#header").removeClass("moveHead"), counter = 0) }), $.fn.inView = function() {
    var e = $(window);
    obj = $(this);
    var s = e.scrollTop(),
        i = e.scrollTop() + e.height(),
        t = obj.offset().top + obj.outerHeight();
    return i >= t && s <= t
}, $(document).ready(function(e) {
    function s() {
        ! function() {
            var e = document.getElementById("overlay"),
                s = null;
            e.addEventListener("touchstart", function(e) { 1 === e.targetTouches.length && (s = e.targetTouches[0].clientY) }, !1), e.addEventListener("touchmove", function(i) {
                1 === i.targetTouches.length && function(i) {
                    var t = i.targetTouches[0].clientY - s;
                    0 === e.scrollTop && t > 0 && i.preventDefault();
                    e.scrollHeight - e.scrollTop <= e.clientHeight && t < 0 && i.preventDefault()
                }(i)
            }, !1)
        }()
    }
    $(window).width() > 1024 ? ($(".mainmenuContainer").attr("id", "overlay"), s()) : $(".mainmenuContainer").removeAttr("id"), $(window).resize(function() { $(window).width() > 1024 ? ($(".mainmenuContainer").attr("id", "overlay"), s()) : $(".mainmenuContainer").removeAttr("id") });
    var i = $(window).width();
    $(window).resize(function() {
        (i = $(window).width()) <= 1024 ? $(".menuMiddle").css("opacity") : $(".mainmenuOuterContainer").removeClass("slideActiveMenu")
    }), $(".rightMenu .menuListClick").click(function() {
        $(".mainmenuOuterContainer").addClass("slideActiveMenu"), $(".menuSliderOuterWrapper").addClass("slideActive"), $(".menuMiddle").css({ opacity: 1, display: "block" }), $(".menuMiddleList>*").css("padding", "0 40px"), $(".menuMiddle").removeClass("menuSlide"), $(".digitalTransformation h3, .digitalTransformation ul").css("width", "100%"), (i = $(window).width()) <= 1024 ? ($(".close-menu").css("color", "#000"), $(".rightMenuContainer").css("display", "none")) : ($(".close-menu").css("color", "#000000"), $(".rightMenuContainer").css("display", "block")), $(window).resize(function() {
            (i = $(window).width()) <= 1024 ? ($(".close-menu").css("color", "#000"), $(".rightMenuContainer").css("display", "none")) : ($(".close-menu").css("color", "#000000"), $(".mainmenuOuterContainer").removeClass("slideActiveMenu"), $(".rightMenuContainer").css("display", "block"))
        }), $(".backArrow").click(function() {
            $(".xtraP").css({ opacity: "0", height: "0", padding: "0" }), $(".iconArrow").removeClass("icon-Open").addClass("icon-Close"), $(".rightMenuContainer").css("display", "block"), $(".mainmenuOuterContainer").removeClass("slideActiveMenu"), $(".menuSliderOuterWrapper").removeClass("slideActive"), $(".close-menu").css("color", "#000000"), $(".menuMiddle").addClass("menuSlide"), $(".menuSlide").css({ display: "none", opacity: "0" }), $(".menuMiddleList").css("display", "none"), $(window).resize(function() {
                (i = $(window).width()) > 1024 ? $(".menuSliderOuterWrapper").css("right", "0") : ($(".menuSliderOuterWrapper").css("right", "25%"), $(".rightMenuContainer").css("display", "block"), $(".close-menu").css("color", "#000000"))
            })
        })
    }), $(window).bind("load resize scroll", function() {
        if ($("#cookiePolicy").is(":visible")) {
            var e = $("#header").height();
            $(".wholecontentWrapper").css("margin-top", e);
            var s = $(window).height() + e;
            console.log(s), $(".main-menu").css({ height: s, "min-height": "auto" })
        }
    }), $(".cookieclose").click(function() { $(".cookies").css("display", "none"), $("#header").css("top", "0") }), $(".cookiePolicyClose").click(function() { setCustomCookie("domainname", "name of domain"), $(".cookieWrapper").css("display", "none"), $("#header").css("top", "0"), $(".main-menu").css("top", "0"), $(".wholecontentWrapper").css("margin-top", "70px") }), $(".inquiryFormLeft input").on("focus", function() { $(this).data("fontSize", $(this).css("font-size")).css("font-size", "16px") }).on("blur", function() { $(this).css("font-size", $(this).data("fontSize")) }), navigator.userAgent.match(/iPad/i) && $(".moreStoryWrapper a").on("click touchend", function(e) {
        var s = $(this).attr("href");
        window.location = s
    }), $("#phone_id").on("keydown", function(e) { 9 === e.keyCode && ($("#recaptcha2 iframe").inView() || $("html, body").animate({ scrollTop: $("#recaptcha2").offset().top }, 500)) }), $("#protype_id").change(function() { 0 == $(this)[0].selectedIndex ? $(this).hasClass("placeholder") || $(this).addClass("placeholder") : $(this).hasClass("placeholder") && $(this).removeClass("placeholder") }), navigator.userAgent.match(/iPad/i) && $(".iotWorld").css("overflow", "auto"), i > 767 && (bottomMargin = $(".Footer").height(), $(".resourceWrapper").parents("body").css("margin-bottom", bottomMargin + 100)), $("input, textarea").focus(function() { navigator.userAgent.match(/iPhone|iPad|iPod/i) && $(".closeInquiry").addClass("closed") }), $("input, textarea").blur(function() { navigator.userAgent.match(/iPhone|iPad|iPod/i) && ($("#header").css("position", "fixed"), $(".inquiryModel").css("position", "fixed"), $(".searchHolder").css("position", "fixed")) }), $(".xtraP .listTextMenu").css("display", "none"), $(".mobile-collapse-content").click(function() {
        $($(this).parent());
        $(".mobile-collapse-content").removeClass("dropOpen"), $(".xtraP").removeClass("active"), $(this).parents(".desktop-view-content").addClass("openList"), $(".desktop-view-content").not(".openList").find(".xtraP").css({ opacity: "0", height: "0", padding: "0" }), $(this).parents(".desktop-view-content").siblings().find(".xtraP").css({ opacity: "0", height: "0", padding: "0" }), $(".mobile-collapse-content").parent().find(".icon-Open").removeClass("icon-Open").addClass("icon-Close"), $(".mobile-collapse-content").parent().find(".mobile-collapse-contenting").addClass("underLine"), "0" == $(this).parent().find(".xtraP").css("opacity") ? ($(this).parent().find(".xtraP").css({ opacity: "1", height: "auto", padding: "0 0 20px 0" }), $(".rightMenuContainer .collapse-content").find(".xtraP").css({ opacity: "1", height: "auto", padding: "20px 0px" }), $(this).parent().find(".mobile-collapse-contenting").removeClass("underLine"), $(this).parent().find(".iconArrow").removeClass("icon-Close"), $(this).parent().find(".iconArrow").addClass("icon-Open"), $(this).addClass("dropOpen"), $(this).parent().find(".xtraP").addClass("active"), $(".xtraP.active .listTextMenu").css("display", "block")) : $(this).parent().find(".xtraP").css({ opacity: "0", height: "0", padding: "0" }), $(this).parents(".desktop-view-content").removeClass("openList")
    }), $(".pointerLinks").click(function() {
        var e = $(this).attr("id");
        $("html,body").animate({ scrollTop: $("." + e).offset().top - 150 }, "slow")
    }), $(".mobile-collapse-content, .devIcon").click(function() { $("html,body").animate({ scrollTop: $(this).offset().top - 200 }, 1e3) }), $("html").focus(), $(window).bind("pageshow", function() { document.getElementById("topSearch").reset() }), $("#topSearch").submit(function() { return checkSearch() }), i <= 1024 && deviceMenuFunctionality(), $(".natGeoTests .appImageOverlay").mouseover(function() { $(this).find(".overlay").stop(!0).animate({ opacity: .75 }, 500) }).mouseout(function() { $(this).find(".overlay").stop(!0).animate({ opacity: 0 }, 500) });
    var t = $(window).height();
    show_contacts();
    var n = document.body.clientWidth;

    function o() { $(".popmain").css({ display: "none", opacity: "0" }).siblings().css("opacity", "1"), $("body .bkopacity").css("display", "none"), $("body").css("overflow", "visible"), $("#menuIconInquiry").bind("click", testInquiry), $("#searchWrap").bind("click", testSearch), $("#toggleMenu").bind("click", testMenu) }
    $(".playClientVideo").unbind().click(function(e) {
        e.preventDefault(), $("html").addClass("fancybox-lock");
        var s = navigator.userAgent.toString().toLowerCase(),
            i = $(this).find(".videoWrapper input").val(),
            t = window.navigator.userAgent.indexOf("Trident/"); - 1 !== s.toLowerCase().indexOf("macintosh") || isMobile.iOS() || isMobile.Android() ? i += ".mp4" : -1 !== navigator.userAgent.indexOf("MSIE") || /Edge/.test(navigator.userAgent) || t > 0 ? i += ".mp4" : -1 != s.indexOf("safari") && -1 == s.indexOf("chrome") ? i += ".mp4" : i += ".ogg";
        var n = $(this).find(".videoWrapper").attr("id");
        getVideo(i, n)
    }), $(".fancybox-close").click(function() { $("html").removeClass("fancybox-lock") }), $(".popclose").click(function() { o() }), $(document).on("click touch", function(e) { "block" != $(".popmain").css("display") || $("body").hasClass("openPortfolio") || $(e.target).parents(".contentHold").length || o(), $("body").removeClass("openPortfolio") }), $(".contentHold").delegate(".popclose", "click", function() { o() }), $(".linker").click(function(e) {
        e.preventDefault();
        var s = $(this).attr("href");
        window.open(s, "pdf")
    }), $.browser.msie ? inquiry.select.css("font-family", "verdana") : inquiry.select.css("font-family", "OpenSansSemibold"), switching.attr("value", "false"), $(".scrolTp p").click(function() { return $("html, body").animate({ scrollTop: 0 }, 1e3), !1 }), null != document.getElementById("scroller") && jQuery("#scroller").flexslider({ animation: "fade" }), $(".contactType").find("ul li:last-child label").attr("class", "active"), $(".contactType").find("input").click(function() { $(this).parent().addClass("active").parent().siblings("li").children("label").removeClass("active") }), "/sharepoint-online-migration/" != window.location.pathname && "/salesforce-customization-integration/" != window.location.pathname || $("#phone_id").attr("placeholder", "Phone"), caseStudy.subcont.append('<span class="toChild"></span>'), $(".mobileCasesubLeft h3").append('<span class="toChild"></span>'), device.indexOf("MAC OS") > -1 && "1025" == n && $("head").append('<link href="/stylesheets/commonStyles.css" rel="stylesheet" type="text/css" media="all"/>');
    var a;

    function l() { "" === $(this).val() && $(this).val($(this).attr("placeholder")).addClass("placeholder") }

    function c() { $(this).val() === $(this).attr("placeholder") && $(this).val("").removeClass("placeholder") }

    function r() { $(".development .devBullet").removeClass("color"), $(".development .devBullet").removeClass("Child").addClass("child"), $(".development .devLink").removeClass("active"), $(".development .accordion-section-content").slideUp(300) }
    $(".filterSelected").unbind("click").bind("click", function(e) {
        var s = $(this),
            i = s.siblings(),
            n = s.parent(".dropdown-content").siblings(".dropdown-content");
        1, s.siblings("#filters, .case-study-filter, #filtersRegion").toggle(), s.parent().find(".iconHomedown").toggleClass("reverse"), n.find(".iconHomedown").removeClass("reverse"), n.find(".case-study-filter").css("display", "none"), s.siblings("#filters .parent, .case-study-filter .parent, #filtersRegion .parent").focus(), $(document).bind("keydown", function(e) {
            if ("block" == i.css("display")) {
                $("body").css({ position: "fixed", "overflow-y": "scroll", width: "100%" }), $("footer").css("position", "static");
                var s = t - (headerHei + bottomMargin);
                $(".homeWrapper").css("min-height", s), $(window).resize(function() {
                    var e = t - (headerHei + bottomMargin);
                    $(".homeWrapper").css("min-height", e)
                });
                var n, o, a = i.find(".parent"),
                    l = i.find(".parent").outerHeight(),
                    c = i.scrollTop(),
                    r = i[0].scrollHeight;
                if (40 !== e.which || a.length)
                    if (40 === e.which && a.length) c + l <= r - l ? i.scrollTop(c + l) : i.scrollTop(0), (o = a.next("li")).length && (a.removeClass("parent"), o.addClass("parent"));
                    else 38 === e.which ? (0 != c && i.scrollTop(c - l), (n = a.prev("li")).length && (a.removeClass("parent"), n.addClass("parent"))) : 13 === e.which && i.css("display", "block") && (a.find("p").trigger("click"), $(document).unbind("keydown"), $("body").css({ position: "static" }), $(".homeWrapper").css("min-height", "inherit"));
                else $filterClickGen.children("li:first-child").addClass("parent")
            }
        }), "none" == i.css("display") && ($("body").css({ position: "static" }), $(document).unbind("keydown")), e.stopPropagation()
    }), $("#filtersRegion.regionFilter li p").click(function() { $(".filterIndustry .sub-heading").text("Browse by Industry"), $(".industryFilter li p").removeClass("selected") }), $("#filters.industryFilter li p").click(function() { $(".filterSelectedRegion .sub-heading").text("Browse by Region"), $(".regionFilter li p").removeClass("selected") }), $(".filterIndustry").click(function() { $(".regionFilter").css("display", "none"), $(".filterSelectedRegion .iconHomedown").removeClass("reverse") }), $(".filterSelectedRegion").click(function() { $(".industryFilter").css("display", "none"), $(".filterIndustry .iconHomedown").removeClass("reverse") }), $("#filters li p, #filtersRegion li p, .case-study-filter li p").click(function() {
        var e, s, i, t, n = $(this);
        setCustomCookie("dataOption", e = n.attr("data-option-value")), s = $(this).text();
        var o = n.parents().eq(1).siblings(".filterSelected");
        switch (o.attr("data-option-value", e).children("li:first-child").attr("data-option-value", e).text(s).parent().siblings("ul").css("display", "none"), o.find(".iconHomedown").removeClass("reverse"), (i = $(this).closest(".dropdown-content").siblings(".dropdown-content").find(".case-study-filter li")).removeClass("parent"), i.first().addClass("parent"), t = i.first().find("p").text(), i.closest("div").find(".selectOption").html(t), 0, e) {
            case "*":
                $(".elements").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".web":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".web").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".mobile":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".mobile").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".brochure":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".brochure").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".cloudMigration":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".cloudMigration").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".sharepoint":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".sharepoint").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".servicesanalytics":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".servicesanalytics").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".artificialIntelligence":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".artificialIntelligence").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".servicesiot":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".servicesiot").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".salesforce":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".salesforce").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".bigdata":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".bigdata").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".iot":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".iot").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".financial-service":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".financial-service").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".retail":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".retail").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".media":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".media").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".engineering":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".engineering").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".tele-communications":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".tele-communications").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".education":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".education").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".healthcare":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".healthcare").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".govt":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".govt").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".marketing":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".marketing").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".transportation":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".transportation").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".hospitality":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".hospitality").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".tech":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".tech").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".realEstate":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".realEstate").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".analytics":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".analytics").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".recruitment":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".recruitment").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".renewable-energy":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".renewable-energy").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".construction":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".construction").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".digitalMarketing":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".digitalMarketing").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".QA":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".QA").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".blockchain":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".blockchain").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".consumerGoods":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".consumerGoods").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".professional":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".professional").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".utilities":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".utilities").css("display", "block").addClass("visible").removeClass("hide");
                break;
            case ".rpa":
                $(".elements").css("display", "none").addClass("hide").removeClass("visible"), $(".rpa").css("display", "block").addClass("visible").removeClass("hide")
        }
    }), "placeholder" in $("<input>")[0] || ($("input[placeholder], textarea[placeholder]").blur(l).focus(c).each(l), $("form").submit(function() { $(this).find("input[placeholder], textarea[placeholder]").each(c) })), $(".floatLeft small").html(function(e, s) { return s.replace(/;/g, "<br>") }), header.inquirybtn.on("click", function() { testInquiry() }), $(".inquiryButton .arrowText").click(function() { testInquiry() }), $(".InquiryBtn").on("click", function() {
        $(".sendInuiryBtn").attr("disabled", !1), $(".sendInuiryBtn").removeClass("disabled"), Recaptcha_Data = 0, $(this).hasClass("reportBtn") && ($("#submitbtn_id").addClass("reportInquiryBtn"), setCustomCookie("buttonClick", "report button clicked"));
        ga("send", "event", "Inquiry Form", "Inquiry Loaded", pageUrl, { metric8: 0, metric9: 1 }), $("#career_ids").addClass("form-active"), i <= 1024 && $(this).hasClass("sharePointMobileBtn") && $("#career_ids").addClass("sharepointForm"), testInquiry()
    }), $(".sharePointOnlineForm").click(function() { $("#registerForm").hasClass("form-active") || ($("#registerForm").addClass("form-active"), Header_Form = 0, Content_Form = 1, ga("send", "event", "Inquiry Form", "Inquiry Loaded", pageUrl, { metric8: Header_Form, metric9: Content_Form })) }), (a = jQuery).fn.outside = function(e, s) {
        return this.each(function() {
            a(this);
            var i = this;
            a(document).bind(e, function t(n) { n.target === i || a.contains(i, n.target) || (s.apply(i, [n]), i.parentNode || a(document.body).unbind(e, t)) })
        })
    }, $(".sharePointOnlineForm").outside("click", function(e) { $("#registerForm").removeClass("form-active") }), header.mainmenu.on("click", function() { testMenu() }), $("#searchWrap").on("click", function() { testSearch() }), $(".close-menu").on("click", function() {
        $(".dropMenu .menuListClick").css({ padding: "0", "background-color": "transparent" }), $(".xtraP").css({ opacity: "0", height: "0", padding: "0" }), $(".iconArrow").removeClass("icon-Open").addClass("icon-Close"), $(".close-menu").css("color", "#000000"), $(".bodyWrapper, .headerSection").css("padding-right", "0"), $("body").removeClass("backgroundScroll"), $(".bodyWrapper>div, .bodyWrapper #header").not(".errorbkopacity, .bkopacity").css("display", "block"), $(".mainmenuOuterContainer").removeClass("slideActiveMenu"), $(".menuSliderOuterWrapper").removeClass("slideActive"), $(".menuMiddle").addClass("menuSlide"), $(".menuSlide").css({ display: "none", opacity: "0" }), $(".menuMiddleList").css("display", "none"), $(".menuMiddle").css({ opacity: 0, display: "none" }), $(".menuSliderOuterWrapper").css("right", 0), $(".digitalTransformation h3, .digitalTransformation ul").css("width", "100%"), $(this).siblings("ul").find(".childMenu").hide(), $(this).siblings("ul").find(".subMenu").hide(), $(this).parent().find("div.activeParent").removeClass("activeParent"), $(this).siblings("ul").find(".toChild").removeClass("activeMenu"), $("body").unbind("keydown");
        var e = $(".main-menu").outerWidth();
        $(".main-menu").animate({ right: "-" + e }, 500), $("body").removeClass("smr-open"), $("html,body").css("overflow-y", "visible"), $(".mask").remove(), activeNav = "", setTimeout(function() { $(".main-menu").css("display", "none") }, 500), $(document).scrollTop(scrollPosVal), $(".mainmenuContainer").css("opacity", "0"), $(window).resize(function() {
            (i = $(window).width()) > 1024 ? ($(".menuSliderOuterWrapper").css("right", "0"), $(".close-menu.slideClose").css("display", "none")) : ($(".menuSliderOuterWrapper").css("right", "25%"), $(".rightMenuContainer, .close-menu").css("display", "block"), $(".close-menu").css("color", "#000000"))
        })
    }), $("#errorMsgWrap").parents(".homeWrapper").siblings("#footer").css("position", "absolute"), $(".closesrch").on("click", function() {
        $('script[src*="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.1.6/inobounce.min.js"]').remove(), iNoBounce.disable(), $(".srch-open").css({ "overflow-y": "visible" }), $(".searchHolder").animate({ right: "-100%" }, 500);
        document.body.clientWidth;
        $("body").removeClass("srch-open"), activeNav = "", $(".masksrch").remove(), $("body").css("overflow-x", "hidden"), setTimeout(function() { $(".searchHolder").css("display", "none"), $("#q").val(""), $("#q").attr("placeholder", srchTxt) }, 500)
    }), $(".cloudMigrationBtnInner").click(function() { ga("send", "event", "Cloud_Migration", "Cloud_Migration", "Cloud_Migration", 1) }), $("#menuInquiry").on("click", function() {
        $(".sendInuiryBtn").attr("disabled", !1), $(".sendInuiryBtn").removeClass("disabled");
        ga("send", "event", "Inquiry Form", "Inquiry Loaded", pageUrl, { metric8: 1, metric9: 0 }), $("#career_ids").addClass("form-active")
    }), $("#protype_id").on("change", function() { Project_Data = 1 }), $(".menuicon").click(function() { ga("send", "event", "Menu", "Menu_Click", "Menu_Click", 1) }), $(".closeInquiry").click(function() { "" == grecaptcha.getResponse(widgetId2) && (Recaptcha_Data = 0), $(".sendInuiryBtn").attr("disabled", !1), $(".sendInuiryBtn").removeClass("disabled"), $("#career_ids").removeClass("form-active"), $(this).removeClass("submitted"), $(".inquiryModel").animate({ right: "-100%" }, 500), $("body").removeClass("inqy-open"), $(document).scrollTop(scrollPosVal), $("#descrtextarea").css("height", "35px"), activeNav = "", $(".mask").remove(), $("body,html").css("overflow-y", "visible"), $("#header").css("position", "fixed"), $(".InquiryBtn").prop("disabled", !1), grecaptcha.reset(widgetId2), setTimeout(function() { $(".inquiryModel").css("display", "none") }, 500), $("#submitbtn_id").removeClass("reportInquiryBtn"), i > 767 ? (null === $("#id_inquiryName") || "" !== $("#id_inquiryName").val() || $("#id_inquiryName").hasClass("activeState") ? Name_Data = 1 : Name_Data = 0, null === $("#email_id") || "" !== $("#email_id").val() || $("#email_id").hasClass("activeState") ? Email_Data = 1 : Email_Data = 0, null === $("#company_id") || "" !== $("#company_id").val() || $("#company_id").hasClass("activeState") ? Company_Data = 1 : Company_Data = 0, $("#phone_id") && "" === $("#phone_id").val() && !$("#phone_id").hasClass("activeState") ? Phone_Data = 0 : Phone_Data = 1, $("#descrtextarea") && "" === $("#descrtextarea").val() && !$("#descrtextarea").hasClass("activeState") ? Desc_Data = 0 : Desc_Data = 1, Type_Data = 0 == Project_Data ? 0 : 1, Captcha_Data = 0 == Recaptcha_Data ? 0 : 1, ga("send", "event", "Inquiry Form", "Desktop Field Dropoff", pageUrl, { metric12: Name_Data, metric13: Email_Data, metric14: Company_Data, metric15: Phone_Data, metric16: Desc_Data, metric17: Type_Data, metric18: Captcha_Data }), Recaptcha_Data = 0) : (null === $("#id_inquiryName") || "" !== $("#id_inquiryName").val() || $("#id_inquiryName").hasClass("activeState") ? Name_Data = 1 : Name_Data = 0, null === $("#email_id") || "" !== $("#email_id").val() || $("#email_id").hasClass("activeState") ? Email_Data = 1 : Email_Data = 0, null === $("#company_id") || "" !== $("#company_id").val() || $("#company_id").hasClass("activeState") ? Company_Data = 1 : Company_Data = 0, $("#phone_id") && "" === $("#phone_id").val() && !$("#phone_id").hasClass("activeState") ? Phone_Data = 0 : Phone_Data = 1, ga("send", "event", "Inquiry Form", "Mobile Field Dropoff", pageUrl, { metric12: Name_Data, metric13: Email_Data, metric14: Company_Data, metric15: Phone_Data })), $("#career_ids input, #career_ids textarea").removeClass("activeState") }), textExpand.expandbtn.click(function() { textExpand.texts.slideDown(1e3), textExpand.closebtn.css("display", "inline-block"), textExpand.expandbtn.css("display", "none") }), textExpand.closebtn.click(function() { textExpand.texts.slideUp(1e3), textExpand.expandbtn.css("display", "inline-block"), textExpand.closebtn.css("display", "none") }), $("#fullwidthWrapper #readMoreDown").unbind("click").bind("click", function(e) { $(this).closest("p").siblings(".expandText").slideDown(1e3), $(this).closest("p").siblings(".expandText").find("#readLess").css("display", "inline-block"), $(this).css("display", "none") }), $("#fullwidthWrapper #readLess").unbind("click").bind("click", function(e) { $(this).closest(".expandText").slideUp(1e3), $(this).closest(".expandText").siblings("p").find("#readMoreDown").css("display", "inline-block"), $(this).css("display", "none") }), $(".devLink").click(function(e) {
        var s = $(this).attr("href");
        $(this).is(".active") ? ($(this).find(".devBullet").removeClass("devActive"), $(this).parent().parent().find(".devIcon").removeClass("activeIcon"), $(this).find(".devBullet").css({ "background-color": "#ffffff", color: "#ff584e" }), r()) : ($(".devBullet").css({ "background-color": "#ffffff", color: "#ff584e" }), $(this).find(".devBullet").removeClass("devActive"), $(".devLink").parent().parent().find(".devIcon").removeClass("activeIcon"), r(), $(".devBullet").removeClass("devActive"), $(this).addClass("active"), $(this).find(".devBullet").addClass("devActive"), $(this).parent().parent().find(".devIcon").addClass("activeIcon"), $(this).find(".devBullet").css({ "background-color": "#ff584e", color: "#ffffff" }), $(".development " + s).slideDown(300), $("html, body").animate({}, 1e3)), e.preventDefault()
    }), $(".devLink").click(function(e) { $(this).hasClass("active") && $("html, body").animate({ scrollTop: $(".devLink").offset().top - 150 }, 1e3) }), $(".solutionTab").click(function() {
        $(this).parent().hasClass("active") ? ($(this).parent().siblings().removeClass("active"), $(this).parent().removeClass("active"), $(this).find(".toChild").removeClass("activeMenu"), $(this).parent().siblings().find(".toChild").removeClass("activeMenu")) : ($(this).parent().addClass("active").siblings().removeClass("active"), $(this).find(".toChild").addClass("activeMenu"), $(this).parent().siblings().find(".toChild").removeClass("activeMenu"));
        var e = $("#header").outerHeight();
        document.body.clientWidth < 767 && $("html, body").animate({ scrollTop: $(this).offset().top - e }, 1e3)
    }), adjustMenu(), isMobile.any() ? (n < 767 && inquiry.main.css("overflow-x", "hidden"), $(document).on("touchend", function(e) {
        var s = $("#filters"),
            i = $(".case-study-filter");
        regionClientContainer = $("#filtersRegion"), $(document).click(function() {
            var e = $(".filterSelected .iconHomedown");
            s.hide(), i.hide(), regionClientContainer.hide(), e.hasClass("reverse") && e.removeClass("reverse")
        })
    })) : $(document).click(function(e) {
        if ($(e.target).is("#filters") || $(e.target).is("#filters li") || $(e.target).is("#filtersRegion") || $(e.target).is("#filtersRegion li")) return !1;
        $(".case-study-filter,#filters, #filtersRegion").hide(), $(".filterSelected").find(".iconHomedown").removeClass("reverse"), $("body").css({ position: "static" })
    }), e.browser.msie && "7.0" == e.browser.version && e("#containerWidth").css("display", "none"), $("#q").click(function() { e("#q").val() != srchTxt && e("#q").val() != enterSrchTxt || e("#q").val("") }), $("#q").keypress(function() { e("#q").val() != srchTxt && e("#q").val() != enterSrchTxt || e("#q").val("") }), $(".close").click(function() {});
    document.body.clientWidth;
    $(window).resize(function() {
        adjustMenu(), adjustPara();
        var e = $(window).width();
        e > 767 ? (bottomMargin = $(".Footer").height(), $(".resourceWrapper").parents("body").css("margin-bottom", bottomMargin + 100), $(".solutionSection, .iconSoln").children().hasClass("active") || ($(".solutionSection, .iconSoln").find(".tabContent:first-child").addClass("active"), $(".solutionSection, .iconSoln").find(".tabContent:first-child .toChild").addClass("activeMenu"))) : $(".resourceWrapper").parents("body").css("margin-bottom", 0), e <= 1024 && deviceMenuFunctionality()
    })
}), $("ul li.expand-inner .holder").each(function() { holderWidth = $(this).css("width"), $(this).parent(".expand-inner").css("width", holderWidth) }), $(".main-menu").css("display", "none"), $.fn.serializeObject = function() {
    var e = {},
        s = this.serializeArray();
    return $.each(s, function() { void 0 !== e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]), e[this.name].push(this.value || "")) : e[this.name] = this.value || "" }), e
};
var adjustMenu = function() {
    var e = document.body.clientWidth;
    if (e < 767) {
        $(".expce").css("display", "none"), $(".exp").css({ "font-family": "OpenSansBold", width: "100%", display: "inline-block" }), $(".careerlists p.experience").css({ "margin-top": "20px" }), $(".flshpenq").attr("src", "/images/responsive/service/testing/security/penp.png"), $(".flashad").insertAfter(".lsthtml5"), $("#style1").remove(), $(".tezzleMobText .mobExpand").css("display", "inline-block"), $(".badgeImg").insertAfter(".badgeTextMobile"), $("#stdtab, .std").css({ display: "table", "background-color": "#000" }), positionContent(), $("#crickeeBox").appendTo("#crickeesNews .featuredsubContent"), $("#stdtab .arrow-down, .std .arrow-down").css("visibility", "visible"), $(".stdplan ul li").css("display", "table"), switching.attr("value", "true"), $("#mobMenuHolder").insertAfter(".menuSelected"), $("#mobMenuHolder").insertAfter(".menuSelected"), $("#liquid1").hide(), $("#liquidClients").hide(), innermenu.subholder.css("display", "none"), $("#liquid2").css("display", "none"), $(".a").siblings().css("display", "block"), caseStudy.subcont.find("span.toChild").css("display", "inline-block"), $(".bankingCase .casesubLeft").insertAfter(".bankingCase .casesubRight"), caseStudy.banking_subSection.insertAfter(".bankingCase .casesubLeft"), enableSelectBoxes(), show_contacts(), $(".bigDataContent h3").css("border-bottom", "none"), $(".leftOpenDiv .leftBottom").insertAfter(".rightOpenDiv .listText"), $(".workCulture .rightContentIpad").insertAfter(".workCulture .rightContent .rightContentP"), $(".quickPicksContent .videocontent").prependTo(".quickPicksContent .leftData"), $(".tezzleBlock3").insertAfter(".tezzleBlock1"), $(".useCaseOdd").each(function() { $(this).find(".graphRight").prependTo(this) }), $(".methodology div").first().hasClass("secondBlock") && $(".methodology div.secondBlock").insertAfter(".methodology .firstBlock"), $(".collaboration div").first().hasClass("secondBlock") && $(".collaboration div.secondBlock").insertAfter(".collaboration .firstBlock"), $(".casesubContent h2, .casesubContent h3").find(".toChild").unbind("click").bind("click", function(e) { e.preventDefault(), $(this).toggleClass("activeMenu"), $(this).hasClass("activeMenu") ? ($("html, body").animate({ scrollTop: $(".activeMenu").offset().top - 150 }, 1e3), $(this).closest("div").siblings("div").find(".toChild").removeClass("activeMenu"), $(this).closest("div").parent().siblings("div").find(".toChild").removeClass("activeMenu"), $(this).closest("section").siblings("section").find(".toChild").removeClass("activeMenu"), $(this).closest("section.homeWrapper").siblings("section").find(".toChild").removeClass("activeMenu"), $(this).closest("div.casesubContent").siblings("div").find(".toChild").removeClass("activeMenu"), $(this).closest("#mobileNewsCaseouter").siblings("div").find(".toChild").removeClass("activeMenu"), $(this).closest("div.jarussubRight").siblings("div").find(".toChild").removeClass("activeMenu"), $(this).closest("div").siblings("div").children().removeClass("active"), $(this).closest("div").siblings("div").children("div").children().removeClass("active"), $(this).closest("div").siblings("div").find(".caseblock").children().removeClass("active"), $(this).closest("div").parent().siblings("div").children("div").children().removeClass("active"), $(this).closest("div").parent().siblings("div").children().removeClass("active"), $(this).closest("div.casesubContent").siblings("div").children("div").children().removeClass("active"), $(this).closest("div.casesubContent").siblings("div").children("div").children().children().removeClass("active"), $(this).closest("div.casesubContent").siblings("div").find("div.rightHolder").children().removeClass("active"), $(this).closest("div.jarussubRight").siblings("div").children().removeClass("active"), $(this).closest("div.mobileLeftthird").siblings("div").find("div.casesubContent").children().removeClass("active"), $(this).closest(".casesubRight").siblings("div").find(".listText").removeClass("active"), $(this).closest("#mobileNewsCaseouter").siblings("div").children().removeClass("active"), $(this).closest("#mobileNewsCaseouter").siblings("div").children().children().removeClass("active"), $(this).closest(".div").siblings("div.jarussubRight").find(".caseblock").children().removeClass("active"), $(this).closest("section").siblings("section").find(".casesubContent").children().children().removeClass("active"), $(this).closest("section.homeWrapper").siblings("section").find(".casesubContent").children().removeClass("active"), $(this).closest("div").siblings("div").find(".mobileCasesubLeft").removeClass("active"), $(this).closest("div").siblings("div").find(".toggleHead").css("border-bottom", "none"), $(this).closest("div").parent().siblings("div").children("div").find(".toggleHead").css("border-bottom", "none"), $(this).closest("div").parent().siblings("div").find(".toggleHead").css("border-bottom", "none"), $(this).closest("section").siblings("section").find(".toggleHead").css("border-bottom", "none"), $(this).closest("div.casesubContent").siblings("div").find(".toggleHead").css("border-bottom", "none"), $(this).closest("section.homeWrapper").siblings("section").find(".toggleHead").css("border-bottom", "none"), $(this).closest("#mobileNewsCaseouter").siblings("div").find(".toggleHead").css("border-bottom", "none"), $(this).closest("div.jarussubRight").siblings("div").find(".toggleHead").css("border-bottom", "none"), $(".casesubContent").children().last().hasClass(".casesubRight") ? $(".casesubRight").children().last().css("border-bottom", "none") : $(".casesubContent").children().last().css("border-bottom", "none")) : ($(this).parent().css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().siblings().children().hasClass("active") && ($(this).parent().siblings().children().removeClass("active"), $(this).parent().siblings().find("h2").css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().siblings().find("h2 .toChild").removeClass("activeMenu"))), $(this).parent().siblings().toggleClass("active") }), $(".mobileCasesubLeft h3, .mobileCasesubLeft h2").find(".toChild").unbind("click").bind("click", function(e) { e.preventDefault(), $(this).toggleClass("activeMenu"), $(this).hasClass("activeMenu") ? ($("html, body").animate({ scrollTop: $(".activeMenu").offset().top - 150 }, 1e3), $(this).closest(".mobileCasesubLeft").siblings("div").find(".toChild").removeClass("activeMenu"), $(this).closest(".mobileCasesubLeft").siblings("div").find(".listText").removeClass("active"), $(this).closest(".mobileCasesubLeft").siblings("div").find("h3").css("border-bottom", "none"), $(this).parent().css({ "border-bottom": "1px solid #EBEBEB", "margin-bottom": "0px" })) : $(this).parent().css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().siblings().toggleClass("active") }), $(".ecommerceLeftData .ecommerceBlock h2").find(".toChild").unbind("click").bind("click", function(e) { e.preventDefault(), $(this).toggleClass("activeMenu"), $(this).hasClass("activeMenu") ? ($("html, body").animate({ scrollTop: $(".activeMenu").offset().top - 150 }, 1e3), $(this).closest(".ecommerceBlock").siblings(".ecommerceBlock").find(".toChild").removeClass("activeMenu"), $(this).closest(".ecommerceBlock").siblings(".ecommerceBlock").children().removeClass("active"), $(this).closest(".ecommerceBlock").siblings(".ecommerceBlock").find("h2").css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).closest(".ecommerceBlock").siblings(".ecommerceBlock").css({ "margin-bottom": "0" }), $(this).parent().css({ "border-bottom": "1px solid #EBEBEB", "margin-bottom": "20px" }), $(this).parent().parent().css({ "margin-bottom": "20px" }), $(".ecommerceLeftData .lastEcommerceBlock h2").css({ "border-bottom": "1px solid #EBEBEB" })) : ($(this).parent().css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().parent().css({ "margin-bottom": "0" }), $(".ecommerceLeftData .lastEcommerceBlock h2").css({ "border-bottom": "1px solid #EBEBEB" })), $(this).parent().siblings().toggleClass("active") });
        $("#csContainer").width();
        $(".accordion-section h3").find(".devIcon").unbind("click").bind("click", function(e) { e.preventDefault(), $(this).toggleClass("activeIcon"), $(this).hasClass("activeIcon") ? ($(".devBullet").removeClass("devActive"), $(".devBullet").css("background-color", "#ffffff"), $(".devBullet").css("color", "#ff584e"), $(this).parent().parent().find(".devBullet").addClass("devActive"), $(this).parent().parent().find(".devBullet").css("background-color", "#ff584e"), $(this).parent().parent().find(".devBullet").css("color", "#ffffff"), $(this).parent().parent().siblings().find(".accordion-section-content").removeClass("active"), $(this).parent().parent().siblings().find(".accordion-section-content").css("display", "none"), $(this).parent().parent().siblings().find(".devIcon").removeClass("activeIcon"), $(this).parent().css({ "border-bottom": "1px solid #EBEBEB", "margin-bottom": "20px" }), $(this).parent().parent().css({ "margin-bottom": "20px" }), $("html, body").animate({ scrollTop: $(".activeIcon").offset().top - 150 }, 1e3), $(this).parent().siblings().css("display", "block")) : ($(this).parent().parent().find(".devBullet").css("background-color", "#ffffff"), $(this).parent().parent().find(".devBullet").css("color", "#ff584e"), $(this).parent().parent().find(".devBullet").removeClass("devActive"), $(this).parent().css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().css({ "margin-bottom": "0" }), $(this).parent().siblings().css("display", "none"), $(this).parent().siblings().css("display", "none")), $(this).parent().siblings().toggleClass("active") }), e < 767 && ($(".caserightFirst").insertAfter(".caseleftFirst"), $(".approachAnimation .devLink").unbind("click"), navigator.userAgent.match(/iPod/i) ? ($(".approachAnimation .accordion-section h3").find(".devIcon").css("margin-right", "10px"), $(".approachAnimation .accordion-section h3").find(".devIcon").unbind("touchstart click").bind("touchstart click", function(e) { e.preventDefault(), $(this).toggleClass("activeIcon"), $(this).hasClass("activeIcon") ? ($(this).closest(".accordion-section").siblings(".accordion-section").find(".devIcon").removeClass("activeIcon"), $(this).parent().parent().parent().siblings().find(".accordion-section").find(".devIcon").removeClass("activeIcon"), $(this).closest(".accordion-section").siblings().find(".approachSteps").removeClass("active"), $(this).closest(".accordion-section").parent().siblings().find(".approachSteps").removeClass("active"), $(this).closest(".accordion-section").siblings().find("h3").children().find(".headContainer").css("background-color", "#727272"), $(this).closest(".accordion-section").parent().siblings().find(".accordion-section").find("h3").children().find(".headContainer").css("background-color", "#727272"), $(this).closest(".accordion-section").siblings().find(".approachSteps").css("display", "none"), $(this).closest(".accordion-section").parent().siblings().find(".approachSteps").css("display", "none"), $(this).parent().css({ "border-bottom": "1px solid #EBEBEB", "margin-bottom": "20px" }), $(this).parent().parent().css({ "margin-bottom": "20px" }), $(this).siblings().find(".headContainer").css("background-color", "#ff584e"), $(this).siblings().find(".headContainerRight").css("background-color", "#ff584e"), $("html, body").animate({ scrollTop: $(".activeIcon").offset().top - 150 }, 1e3), $(this).parent().siblings().css("display", "block")) : ($(this).parent().css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().css({ "margin-bottom": "0" }), $(this).siblings().find(".headContainer").css("background-color", "#727272"), $(this).siblings().find(".headContainerRight").css("background-color", "#727272"), $(this).parent().siblings().css("display", "none"), $(this).siblings().addClass("active")), $(this).parent().siblings().toggleClass("active") })) : $(".approachAnimation .accordion-section h3").find(".devIcon").unbind("click").bind(" click", function(e) { e.preventDefault(), $(this).toggleClass("activeIcon"), $(this).hasClass("activeIcon") ? ($(this).closest(".accordion-section").siblings(".accordion-section").find(".devIcon").removeClass("activeIcon"), $(this).parent().parent().parent().siblings().find(".accordion-section").find(".devIcon").removeClass("activeIcon"), $(this).closest(".accordion-section").siblings().find(".approachSteps").removeClass("active"), $(this).closest(".accordion-section").parent().siblings().find(".approachSteps").removeClass("active"), $(this).closest(".accordion-section").siblings().find("h3").children().find(".headContainer").css("background-color", "#727272"), $(this).closest(".accordion-section").parent().siblings().find(".accordion-section").find("h3").children().find(".headContainer").css("background-color", "#727272"), $(this).closest(".accordion-section").siblings().find(".approachSteps").css("display", "none"), $(this).closest(".accordion-section").parent().siblings().find(".approachSteps").css("display", "none"), $(this).parent().css({ "border-bottom": "1px solid #EBEBEB", "margin-bottom": "20px" }), $(this).parent().parent().css({ "margin-bottom": "20px" }), $(this).siblings().find(".headContainer").css("background-color", "#ff584e"), $(this).siblings().find(".headContainerRight").css("background-color", "#ff584e"), $("html, body").animate({ scrollTop: $(".activeIcon").offset().top - 150 }, 1e3), $(this).parent().siblings().css("display", "block")) : ($(this).parent().css({ "border-bottom": "none", "margin-bottom": "0" }), $(this).parent().css({ "margin-bottom": "0" }), $(this).siblings().find(".headContainer").css("background-color", "#727272"), $(this).siblings().find(".headContainerRight").css("background-color", "#727272"), $(this).parent().siblings().css("display", "none"), $(this).siblings().addClass("active")), $(this).parent().siblings().toggleClass("active") }))
    } else if (e > 767 && e < 1025 || device.indexOf("KFJWI") > -1 || device.indexOf("Xoom") > -1 && "1280" == e || device.indexOf("GT") > -1 && "1280" == e || device.indexOf("Nexus 10") > -1 && "1280" == e) {
        $("#jobsTable .advertisement img").attr("src", "/images/responsive/company/career/openpositions/Ad_iPad.png"), $(".flshpenq").attr("src", "/images/responsive/service/testing/security/penp.png"), $(".caserightFirst").insertAfter(".caseleftFirst"), $(".flashad").insertAfter(".lsthtml5"), $("#crickeeBox").appendTo("#crickeesNews");
        var s = $(".approachsubLeft").height(),
            i = $(".approachsubRight").height();
        $(".approachDivisionFirst").height(s + i), positionContent(), $(".badgeImg").insertBefore(".badgeTextDesktop"), $(".clr_cons img").attr("src", "/images/responsive/product/opensource/Console_iPad.png"), $(".clr_cons").insertBefore(".clrcon_lft"), innermenu.subholder.css("display", "none"), $(".a").siblings().css("display", "block"), $("#liquid2").css("display", "none"), switching.attr("value", "true"), $(".gamesection .finalimg").insertBefore(".gamesection .sectiontwo h3"), $("#at20mc").css("display", "none"), $("#at15s").css("display", "none"), $(".addthis_button_compact").click(function() { $("#at20mc").css("display", "block"), $("#at15s").css("display", "block") }), $("#mobMenuHolder").insertAfter(".menuSelected"), $("#liquid1").hide(), $("#clientHolder").insertAfter(".clientList h2"), $("#liquidClients").hide(), caseStudy.subcont.find(".toChild").css("display", "none"), caseStudy.subcont.css({ "border-bottom": "none", "margin-bottom": "0" }), $(".restaurantlist h2 span.toChild").css("display", "none"), $(".mobileCasesubLeft h3 span.toChild").css("display", "none"), $(".mobileCasesubLeft h3").css({ "border-bottom": "none", "margin-bottom": "0" }), $(".mobileCasesubLeft h2 span.toChild").css("display", "none"), $(".mobileCasesubLeft h2").css({ "border-bottom": "none", "margin-bottom": "0" }), caseStudy.banking_subSection.insertAfter(".bankingCase .casesubLeft"), $(".dataVisContent .rightImg").insertBefore(".salesData .leftText"), $("#bigDataFramewrk").insertAfter(".bigDataService"), enableSelectBoxes(), show_contacts(), $(".leftOpenDiv .leftBottom").insertAfter(".rightOpenDiv .listText"), $(".workCulture .rightContent .rightContentIpad").insertAfter(".workCulture .rightContent"), $(".quickPicksContent .videocontent").prependTo(".quickPicksContent .leftData"), $(".tezzleBlock3").insertAfter(".tezzleBlock1"), $(".qbeaconIntro .rightTextData").insertBefore(".qbeaconIntro .leftTextData"), $(".trenchCoatImage").prependTo(".casesubLeft"), $(".mobilemoney-highlights").insertAfter(".mobilebanksolution"), $(".service-dropdown").insertAfter(".industry-dropdown"), $(".useCaseOdd").each(function() { $(this).find(".graphRight").appendTo(this) }), innermenu.devicesubmenu.click(function() {
            $(this).find("span").attr("value");
            $(this).parent().addClass("active").siblings("li").removeClass("active")
        }), $(".ecommerceLeftData .lastEcommerceBlock h2").css({ "border-bottom": "none" }), $(".tezzleMobText .mobExpand").css("display", "none"), $(".casesubRight").css("border-bottom", "none")
    } else if (e > 1024 && e < 1224) {
        $(".caserightFirst").prependTo(".casesubRight"), $(".service-dropdown").insertAfter(".industry-dropdown"), $("#style1").remove(), $(".flshpenq").attr("src", "/images/responsive/service/testing/security/PenQ.png"), $(".flashad").insertBefore(".riahtml5 .reference"), $(".searchNav").addClass("search"), $("#crickeeBox").appendTo("#crickeesNews .featuredsubContent"), $(".search").css("display", "block"), $(".searchNav").css("display", "none"), $(".search").removeClass("searchNav"), $(".tezzleMobText .mobExpand").css("display", "none"), $(".badgeImg").insertBefore(".badgeTextDesktop"), positionContent(), $(".gamesection .finalimg").insertBefore(".gamesection .sectiontwo h3"), $("#at20mc").css("display", "none"), $("#at15s").css("display", "none");
        var t = $("#mobMenuHolder");
        $(".wrapper1").append(t), $("#liquid1").show(), $("#clientHolder").insertAfter(".clientList h2"), $("#liquidClients").hide(), $("#tezzleImg").attr("src", "/images/responsive/commons/tezzleAdvt.png"), $("#jobsTable .advertisement img").attr("src", "/images/responsive/company/career/openpositions/Ad_Desktop.png"), $(".clr_cons img").attr("src", "/images/responsive/product/opensource/Clear_Console.png"), $(".clr_cons").insertAfter(".clrcon_lft"), innermenu.subholder.css("display", "block"), $(".product #mobMenuHolder").css("display", "none"), $("#liquid2").css("display", "block"), switching.attr("value", "false"), $(".leftSecond").insertBefore(".rightSecond"), caseStudy.subcont.find("span.toChild").css("display", "none"), $(".rightOpenDiv .leftBottom").insertAfter(".leftOpenDiv p"), $(".toolsWrapper").appendTo(".engageMain"), $(".windowsImage").prependTo(".casesubRight"), $(".leftBottom p br").remove(), $(".qbeaconIntro .rightTextData").appendTo(".qbeaconIntro"), $(".keyvalueImage").prependTo(".keyValueContent .rightTextData"), $(".medicalRepsImage").appendTo(".casesubRight"), $(".medicalRepsHighlights").appendTo(".casesubRight"), $(".medicalRepsTechBlock").appendTo(".casesubContent"), $(".mobilemoney-highlights").insertAfter(".mobilemoneyClient"), caseStudy.subcont.css({ "border-bottom": "none", "margin-bottom": "0" }), $(".mobileCasesubLeft h3").css({ "border-bottom": "none", "margin-bottom": "0px" }), $(".mobileCasesubLeft h2").css({ "border-bottom": "none", "margin-bottom": "0px" }), $(".analysisContent h2").css("border-bottom", "1px solid #EBEBEB"), $(".jarusContent h2").css("border-bottom", "1px solid #EBEBEB"), $(".endblock").insertAfter(".casesubRight ul.listRight"), subSectionHeight(), $(".useCaseOdd").each(function() { $(this).find(".graphRight").appendTo(this) }), $(".secSection .secrgt").insertAfter(".secSection .seclft"), $(".thrSection .thrrgt ul li#biExp").insertAfter(".thrSection .thrrgt ul li#validationExp"), innermenu.devicesubmenu.click(function() {
            $(this).find("span").attr("value");
            $(this).parent().addClass("active").siblings("li").removeClass("active")
        })
    } else if (e > 1224) {
        $(".caserightFirst").prependTo(".casesubRight"), $(".service-dropdown").insertAfter(".industry-dropdown"), $("#style1").remove(), $(".flshpenq").attr("src", "/images/responsive/service/testing/security/PenQ.png"), $(".flashad").insertBefore(".riahtml5 .reference"), $(".gamesection .finalimg").insertBefore(".gamesection .leftsection p"), $("#at20mc").css("display", "none"), $("#at15s").css("display", "none"), $(".tezzleMobText .mobExpand").css("display", "none"), $(".badgeImg").insertBefore(".badgeTextDesktop"), positionContent(), $("#crickeeBox").appendTo("#crickeesNews .featuredsubContent");
        t = $("#mobMenuHolder");
        $(".wrapper1").append(t), $("#liquid1").show();
        var n = $("#clientHolder");
        $(".wrapper1").append(n), $("#liquidClients").show(), $("#tezzleImg").attr("src", "/images/responsive/commons/tezzleAdvt.png"), $("#jobsTable .advertisement img").attr("src", "/images/responsive/company/career/openpositions/Ad_Desktop.png"), $(".clr_cons img").attr("src", "/images/responsive/product/opensource/Clear_Console.png"), $(".clr_cons").insertAfter(".clrcon_lft"), innermenu.subholder.css("display", "block"), $(".product #mobMenuHolder").css("display", "none"), $("#liquid2").css("display", "block"), switching.attr("value", "false"), $(".leftSecond").insertBefore(".rightSecond"), caseStudy.subcont.find("span.toChild").css("display", "none"), $(".airlineapp .medactivusrightfirst").insertBefore(".airlineapp .medactivusrightsecond"), $(".workCulture .rightContentIpad").insertAfter(".workCulture .rightContent .rightContentP"), $(".quickPicksContent .videocontent").prependTo(".quickPicksContent .rgtData"), $(".tezzleBlock3").insertBefore(".tezzleBlock4"), $(".windowsImage").prependTo(".casesubRight"), $(".leftBottom p br").remove(), caseStudy.subcont.css({ "border-bottom": "none", "margin-bottom": "0" }), $(".mobileCasesubLeft h3").css({ "border-bottom": "none", "margin-bottom": "0px" }), $(".mobileCasesubLeft h2").css({ "border-bottom": "none", "margin-bottom": "0px" }), $(".analysisContent h2").css("border-bottom", "1px solid #EBEBEB"), $(".jarusContent h2").css("border-bottom", "1px solid #EBEBEB"), $(".endblock").insertAfter(".casesubRight ul.listRight"), subSectionHeight(), $(".secSection .secrgt").insertAfter(".secSection .seclft"), $(".thrSection .thrrgt ul li#biExp").insertAfter(".thrSection .thrrgt ul li#validationExp"), $(".useCaseOdd").each(function() { $(this).find(".graphRight").appendTo(this) }), innermenu.devicesubmenu.click(function() {
            $(this).find("span").attr("value");
            $(this).parent().addClass("active").siblings("li").removeClass("active")
        })
    }
};
if ($(document).mouseup(function(e) {
        var s = $(".exsitu-infograph-container");
        s.is(e.target) || 0 !== s.has(e.target).length || ($(".exsitu-infograph-container .xtraP").css({ opacity: "0", height: "0", padding: "0 20px" }), $(".collapse-icon").removeClass("upArrow"))
    }), isMobile.Android() || $("#phone_id, #phone_id_1").keydown(function(e) {
        !e.shiftKey || 191 != e.keyCode && 190 != e.keyCode && 188 != e.keyCode || e.preventDefault();
        var s = navigator.userAgent.toLowerCase().indexOf("firefox");
        s > -1 && 61 == e.keyCode || s > -1 && 173 == e.keyCode || isMobile.iOS() && 187 == e.keyCode || -1 !== $.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) || (65 == e.keyCode || 86 == e.keyCode || 88 == e.keyCode || 67 == e.keyCode) && (!0 === e.ctrlKey || !0 === e.metaKey) || e.keyCode >= 35 && e.keyCode <= 40 || 32 == e.keyCode || 189 == e.keyCode || 107 == e.keyCode || 109 == e.keyCode || 111 == e.keyCode || 188 == e.keyCode || 191 == e.keyCode || !0 === e.shiftKey && 187 == e.keyCode || 57 == e.keyCode || 48 == e.keyCode || (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105) && e.preventDefault()
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) $(window).blur(function() { 0 != $("#career_ids").length && ("Type of Project" != $("#protype_id option:selected").text() ? setCustomCookie("projecttype", 1, 1) : setCustomCookie("projecttype", 0, 1), $("#descrtextarea").val().length ? setCustomCookie("briefdesc", 1, 1) : setCustomCookie("briefdesc", 0, 1)), "/inquiry/success" != pageUrl && "/inquiry/success#!" != pageUrl && setCustomCookie("windowReferPath", pageUrl, 1) });
else {
    var myEvent = window.attachEvent || window.addEventListener,
        chkevent = window.attachEvent ? "onbeforeunload" : "beforeunload";
    myEvent(chkevent, function(e) { 0 != $("#career_ids").length && ("Type of Project" != $("#protype_id option:selected").text() ? setCustomCookie("projecttype", 1, 1) : setCustomCookie("projecttype", 0, 1), $("#descrtextarea").val().length ? setCustomCookie("briefdesc", 1, 1) : setCustomCookie("briefdesc", 0, 1)), "/inquiry/success" != pageUrl && "/inquiry/success#!" != pageUrl && setCustomCookie("windowReferPath", pageUrl, 1) })
}
"/salesforce-customization-integration/" == pageUrl && $(".salesforceFooterText").css({ display: "block", "padding-top": "10px" }), "/devops-transformation/" == pageUrl && ($(".devopsTransText").css("display", "block"), $(".footerText").css("display", "none"));