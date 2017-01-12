"use strict";


var myAnimate = myAnimate || {};
/**
 * [namespace description]
 * ##############################################
 *
 * @Author                                                                             Copyright    xianfei
 * @Title                                         ######
 * @DateTime                                               2016-11-09T17:15:13+0800
 * @description          模块化处理  对象 myAnimate
 *
 * ##############################################
 * @param       {[type]} ns_string  [description]
 * @return      {[type]}            [description]
 */
myAnimate.namespace = function(ns_string) {
    var parts = ns_string.split('.'),
        parent = myAnimate;
    if (parts[0] === "myAnimate") {
        parts = parts.slice(1);
    }
    for (var i = 0; i < parts.length; i++) {
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}
myAnimate.namespace("myAnimate.purchase");

/**
 * [sortChange description]
 * ##############################################
 *
 * @Author                                                                   Copyright    xianfei
 * @Title                               ######
 * @DateTime                                     2016-11-02T15:59:01+0800
 * @description          一般的效果
 *
 * ##############################################
 * @return      {[type]} [description]
 */
myAnimate.purchase.normalChange = function() {

    //页面滑动效果
    $('.banner').unslider({
        autoplay: true,
        nav: true
    });
    //skip data
    //@see :  自动解析楼层   并处理skip  hover效果
    var floorLen = $(".floorName").length;
    var skipHtml = "";
    // <li  onclick='javascript:$('#floor1').ScrollTo(800);return false;'>
    if (floorLen) {
        if (floorLen == 1) {
            skipHtml = '<li class="bt_first" onclick="javascript:$(\'#floor1\').ScrollTo(800);return false;"><span class="fl_num">1F</span><span class="fl_name vis_hid">' + $(".floorName").eq(0).text().trim() + '</span></li>';
        } else {
            skipHtml = '<li class="bt_first"  onclick="javascript:$(\'#floor1\').ScrollTo(800);return false;"><span class="fl_num">1F</span><span class="fl_name vis_hid">' + $(".floorName").eq(0).text().trim() + '</span></li>';
            for (var i = 2; i < floorLen + 1; i++) {
                skipHtml += '<li onclick="javascript:$(\'#floor' + i + '\').ScrollTo(800);return false;"><span class="fl_num">' + i + 'F</span><span class="fl_name vis_hid">' + $(".floorName").eq(i-1).text().trim() + '</span></li>';
            }
        }
    }
    $("#skip_ul").html(skipHtml);
    $("#skip_ul").find("li").each(function(i) {

                $(this).hover(function(event) {
                    $("#skip_ul").find("li").eq(i).addClass("hover_css").find("span").removeClass("vis_hid").eq(0).addClass("vis_hid");
                }, function(event) {
                     $("#skip_ul").find(".fl_name").addClass("vis_hid");
                     $("#skip_ul").find("li").removeClass("hover_css");
                   $("#skip_ul").find(".fl_num").removeClass("vis_hid");
                });

    })

    //back to  top  效果实现  页面滑动显示隐藏效果
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 621) {
            $("#back_top").fadeIn(200);
        } else {
            $("#back_top").fadeOut(200);
        }
        //当window滑动到floor1
        var scrollTop = $(window).scrollTop();
        if (scrollTop < 768) {
            $("#skip_ul").fadeOut(200);
        } else if (768 < scrollTop && scrollTop < 1268) {
            $("#skip_ul").find(".fl_name").addClass("vis_hid");
             $("#skip_ul").find("li").removeClass("hover_css");
               $("#skip_ul").find(".fl_num").removeClass("vis_hid");
            $("#skip_ul").fadeIn(200);
            $("#skip_ul").find("li").eq(0).addClass("hover_css").find("span").removeClass("vis_hid").eq(0).addClass("vis_hid");
        }else if (768 < scrollTop && scrollTop < 1768) {
            $("#skip_ul").find(".fl_name").addClass("vis_hid");
             $("#skip_ul").find("li").removeClass("hover_css");
             $("#skip_ul").find(".fl_num").removeClass("vis_hid");
            $("#skip_ul").fadeIn(200);
            $("#skip_ul").find("li").eq(1).addClass("hover_css").find("span").removeClass("vis_hid").eq(0).addClass("vis_hid");
        }else if (1768 < scrollTop && scrollTop < 2268) {
            $("#skip_ul").find(".fl_name").addClass("vis_hid");
             $("#skip_ul").find("li").removeClass("hover_css");
             $("#skip_ul").find(".fl_num").removeClass("vis_hid");
            $("#skip_ul").fadeIn(200);
            $("#skip_ul").find("li").eq(2).addClass("hover_css").find("span").removeClass("vis_hid").eq(0).addClass("vis_hid");
        }else if (2268 < scrollTop && scrollTop < 2768) {
            $("#skip_ul").find(".fl_name").addClass("vis_hid");
             $("#skip_ul").find("li").removeClass("hover_css");
             $("#skip_ul").find(".fl_num").removeClass("vis_hid");
            $("#skip_ul").fadeIn(200);
            $("#skip_ul").find("li").eq(3).addClass("hover_css").find("span").removeClass("vis_hid").eq(0).addClass("vis_hid");
        }else {
            $("#skip_ul").find(".fl_name").addClass("vis_hid");
             $("#skip_ul").find("li").removeClass("hover_css");
             $("#skip_ul").find(".fl_num").removeClass("vis_hid");
             $("#skip_ul").fadeOut(200);
        }




    });

    $("#back_top").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    $(".lli1").each(function(k, img) {
        new JumpObj(img, 10);
    });
}

myAnimate.purchase.normalChange();
