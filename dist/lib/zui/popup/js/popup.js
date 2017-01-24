;
/**
 * [description]
 * ##############################################
 *
 * @Author                                                                             Copyright    xianfei
 * @Title                                         ######
 * @DateTime                                               2016-11-16T11:10:09+0800
 * @description           for hg  develop   公共组件   弹出框组件  简单版本
 *
 * ##############################################
 * @param       {[type]} $          [description]
 * @param       {[type]} document   [description]
 * @return      {[type]}            [description]
 */
// 分类
//   confirm   /  alert  /tip                              --------->  type
//    success  /fail  /warn /                           --------->  theme
//    alertConfirm  ------>callback
//    confirm
(function($, document) {
    var Popup = $.Popup = function(options) {
        var _ = this;
        _.init(options);
    }
    Popup.prototype = {
        init: function(options) {
            var _ = this;
            _.opts = $.extend({}, {
                type: "confirm",
                theme: "warn",
                content: "xxx",
                expressNameArray:[],
                confirm: function() {},
                cancel: function() {},
                timeout: 1000
            }, options);

            var domBuffer = ""
            if (_.opts.type == "tip") {
  domBuffer += '<div class="zui-ui-shade" id="zui-ui-shade"></div><div class="zui-ui-warn-tip  zui-ui-tip">\
                                                                <p id="zui-ui-tip-title">支付提示</p>\
                                                                <p>' + _.opts.content + '</p><br>\
                                                                <span id="zui-confirm-input">支付成功</span>\
                                                        </div>'
                var _confirm = $(domBuffer).appendTo($("body"))
                _.confirm = _confirm
                _.bindConfirmCallback()

            } else if (_.opts.type == "alert") {
                domBuffer += '<div class="zui-ui-shade" id="zui-ui-shade"></div><div class="zui-ui-warn-tip  zui-ui-tip">\
                                                                <p id="zui-ui-tip-title">商城提示</p>\
                                                                <p>' + _.opts.content + '</p><br>\
                                                                <span id="zui-confirm-input">确定</span>\
                                                        </div>'
                var _confirm = $(domBuffer).appendTo($("body"))
                _.confirm = _confirm
                _.bindConfirmCallback()

            } else if (_.opts.type == "confirm") {
                domBuffer += '<div class="zui-ui-shade" id="zui-ui-shade"></div><div class="zui-ui-success-confirm  zui-ui-confirm">\
                        <span class="zui-ui-head-' + _.opts.theme + '"></span><br>\
                        <p>' + _.opts.content + '</p><br>\
                        <span id="zui-confirm-input"></span><span id="zui-cancel-input"></span>\
                        </div>'
                var _confirm = $(domBuffer).appendTo($("body"))
                _.confirm = _confirm
                _.bindConfirmCallback()
            } else if (_.opts.type == "setAddress") {
                var addrArr = _.opts.expressNameArray;
                var addrOpsStr = "";
                for(var i=0;i<addrArr.length;i++){
                        addrOpsStr += '<option value="'+addrArr[i]+'">'+addrArr[i]+'</option>';
                }
                domBuffer += '<div class="zui-ui-shade" id="zui-ui-shade"></div><div class="zui-ui-success-confirm  zui-ui-confirm2">\
                        <p id="zui-ui-tip-title">商城提示</p>\
                       <p class="zui-ui-express" id="zui-ui-addr-name"><label>快递公司：</label><select id="expressName" class="" >' +addrOpsStr+ '</select></p>\
                       <p class="zui-ui-express" id="zui-ui-addr-id"><label>货运单号：</label><input type="text" id="expressNumber"></p>\
                        <span id="zui-confirm-input">确定</span><span id="zui-cancel-input">取消</span>\
                        </div>'

                var _confirm = $(domBuffer).appendTo($("body"))
                _.confirm = _confirm
                _.bindConfirmCallback()
            } else if (_.opts.type == "alertAddress") {
                domBuffer += ' <div class="zui-ui-shade "></div>\
  <div class="zui-ui-address  zui-ui-address">\
    <p class="address-head  ">\
      <span>请填写新的收货地址</span>\
      <a id="address-close">×</a>\
    </p>\
    <p class="address-name  address-cont">\
      <label for="consigneeName " class="zui-address-Pleft ">\
        <span class="font_hotred">*</span>收  货  人：\
      </label>\
      <input type="text" name="consigneeName" id="consigneeName" placeholder="请输入用户昵称" >\
      <span  id="consigneeNameEmg"  class="errorMsg">收货人不能为空</span>\
    </p>\
    <p class="address-addr  address-cont">\
                <label for="address " class="font_desc1 ct2_r1_left "><span class="font_hotred">*</span>所在地区：</label>\
                    <select id="provinceDiv" class="" onchange="loadCity()">\
                        <option>请选择</option>\
                        <option value="北京市">北京市</option>\
                        <option value="上海市">上海市</option>\
                        <option value="天津市">天津市</option>\
                        <option value="重庆">重庆</option>\
                        <option value="河北省">河北省</option>\
                        <option value="山西省">山西省</option>\
                        <option value="河南省">河南省</option>\
                        <option value="辽宁省">辽宁省</option>\
                        <option value="吉林省">吉林省</option>\
                        <option value="黑龙江省">黑龙江省</option>\
                        <option value="内蒙古">内蒙古</option>\
                        <option value="江苏省">江苏省</option>\
                        <option value="山东省">山东省</option>\
                        <option value="安徽省">安徽省</option>\
                        <option value="浙江省">浙江省</option>\
                        <option value="福建省">福建省</option>\
                        <option value="湖北省">湖北省</option>\
                        <option value="湖南省">湖南省</option>\
                        <option value="广东省">广东省</option>\
                        <option value="广西壮族">广西壮族</option>\
                        <option value="江西省">江西省</option>\
                        <option value="四川省">四川省</option>\
                        <option value="海南省">海南省</option>\
                        <option value="贵州省">贵州省</option>\
                        <option value="云南省">云南省</option>\
                        <option value="西藏">西藏</option>\
                        <option value="陕西省">陕西省</option>\
                        <option value="甘肃省">甘肃省</option>\
                        <option value="青海省">青海省</option>\
                        <option value="宁夏">宁夏</option>\
                        <option value="新疆">新疆</option>\
                        <option value="台湾省">台湾省</option>\
                        <option value="香港">香港</option>\
                        <option value="澳门">澳门</option>\
                        <option value="海外">海外</option>\
                    </select>\
                    <select id="cityDiv" class="sele" onchange="loadCounty()">\
                        <option value="0">请选择</option>\
                    </select>\
                    <select id="countyDiv" class="sele" >\
                        <option value="0">请选择</option>\
                    </select>\
                    <span id="addrEmg"  class="errorMsg" >请您填写完整的地区信息</span>\
    </p>\
    <p class="addressDetail  address-cont">\
      <label for="addressDetail " class="zui-address-Pleft ">\
        <span class="font_hotred">*</span>详细地址：\
      </label>\
      <input type="text" name="addressDetail" id="addressDetail" placeholder="请输入用户昵称" >\
      <span  id="addressDetailEmg"  class="errorMsg">收货地址不能为空</span>\
    </p>\
    <p class="address-tel  address-cont">\
      <label for="tel " class="zui-address-Pleft ">\
        <span class="font_hotred">*</span>手机号码：\
      </label>\
      <input type="text" name="tel" id="tel" placeholder="请输入用户昵称" >\
      <span  id="telEmg"  class="errorMsg">请您填写正确的手机号码</span>\
    </p>\
    <p class="address-homeTel  address-cont">\
      <label for="homeTel " class="zui-address-Pleft ">\
        电话号码：\
      </label>\
      <input type="text" name="homeTel" id="homeTel" placeholder="请输入电话号码" >\
      <span  id="homeTelEmg"  class="errorMsg">请您填写正确的电话号码</span>\
    </p>\
    <p class="address-postcode  address-cont">\
      <label for="postcode " class="zui-address-Pleft ">\
        邮政编码：\
      </label>\
      <input type="text" name="postcode" id="postcode" placeholder="请输入邮政编码" >\
      <span  id="postcodeEmg"  class="errorMsg">请您填写正确的邮政编码</span>\
    </p>\
    <p id="addrSubmit">保存</p>\
  </div>'


                var _address = $(domBuffer).appendTo($("body"))
                _.address = _address
                _.bindAddressCallback()

            }


        },

        close: function() {
            var _ = this
            _.address.remove()
        },
        //绑定回调
        bindConfirmCallback: function() {
            var _ = this
            $("#zui-confirm-input").unbind().bind("click", function() {
                _.confirm.remove()
                _.opts.confirm()

            })
            $("#zui-cancel-input").unbind().bind("click", function() {
                _.confirm.remove()
                _.opts.cancel()
            })
        },
        //绑定地址组件的回调
        bindAddressCallback: function() {
            var _ = this
            $("#address-close").unbind().bind("click", function() {
                _.address.remove()
            })
            $("#addrSubmit").unbind().bind("click", function() {
                $(".errorMsg").hide()
                var consigneeName = $("#consigneeName").val().trim() == ""
                var address1 = $("#provinceDiv").val().trim() == "请选择"
                var address2 = $("#cityDiv").val().trim() == "0"
                var address3 = $("#countyDiv").val().trim() == "0"
                var addressDetail = $("#addressDetail").val().trim() == ""
                var tel = $("#tel").val().trim() == ""
                var homeTel = $("#homeTel").val().trim() == ""
                var postcode = $("#postcode").val().trim() == ""

                if (consigneeName) {
                    $("#consigneeNameEmg").show()
                } else {
                    if (address1 || address2 || address3) {
                        $("#addrEmg").show()
                    } else {
                        if (addressDetail) {
                            $("#addressDetailEmg").show()
                        } else {
                            if (tel) {
                                $("#telEmg").text("请输入手机号码").show()
                            } else {
                                if (!validate.checkTel($("#tel").val().trim())) {
                                    $("#telEmg").text("手机号码非法").show()
                                } else {
                                    //校验全部过  电话 邮编没填
                                    if (homeTel && postcode) {
                                        // alert("校验全部过  电话 邮编没填")
                                        _.opts.submit()
                                    } else {
                                        //分三种情况  电话填了  邮编填了  都填了

                                        if (!homeTel && !postcode) {
                                            //都填了
                                            var flag = true
                                            if (!validate.checkHomeTel($("#homeTel").val().trim())) {
                                                $("#homeTelEmg").show()
                                                flag = false
                                            }
                                            if (!validate.checkPostCode($("#postcode").val().trim())) {
                                                $("#postcodeEmg").show()
                                                flag = false
                                            }
                                            if (flag) _.opts.submit()

                                        } else if (!homeTel && postcode) {
                                            //只有座机填了
                                            if (!validate.checkHomeTel($("#homeTel").val().trim())) {
                                                $("#homeTelEmg").show()
                                            } else {
                                                _.opts.submit()
                                            }
                                        } else if (homeTel && !postcode) {
                                            //只有邮编填了
                                            if (!validate.checkPostCode($("#postcode").val().trim())) {
                                                $("#postcodeEmg").show()
                                            } else {
                                                _.opts.submit()
                                            }
                                        }

                                    }

                                }
                            }
                        }
                    }
                }

            })
        },


    }
})($, document);


function loadCity() {
    $("#cityDiv").find(".city").remove()
    var provinceId = $("#provinceDiv").val().trim()
    var cityHtml = ''
    cityData3.forEach(function(item) {

        if (item.text == provinceId) {
            var citys = item.children
            citys.forEach(function(city) {
                cityHtml += '<option value="' + city.text + '" class="city">' + city.text + '</option>'
            })
            $("#cityDiv").append(cityHtml)

        }
    });

};

function loadCounty() {
    $("#countyDiv").find(".county").remove()
    var provinceId = $("#provinceDiv").val().trim()
    var cityId = $("#cityDiv").val().trim()
    var countyHtml = ''
    cityData3.forEach(function(item) {
        if (item.text == provinceId) {
            var citys = item.children
            citys.forEach(function(city) {
                if (city.text == cityId) {
                    var countys = city.children
                    countys.forEach(function(county) {
                        countyHtml += '<option value="' + county.text + '" class="county">' + county.text + '</option>'
                    })
                }
            })
        }
    });
    $("#countyDiv").append(countyHtml)

};

var validate = {

    checkTel: function(value) {
        var reg = /^0?1[3|4|5|8][0-9]\d{8}$/
        return reg.test(value)
    },
    checkHomeTel: function(value) {
        var reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
        return reg.test(value)
    },
    checkPostCode: function(value) {
        var reg = /^[1-9]\d{5}$/
        return reg.test(value)
    }


}
