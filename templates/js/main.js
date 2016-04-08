var scene3dArray = [];
$(document).ready(function() {
    var pattern = new RegExp("\\\"(.| )+?\\\"", "igm");
    if ($('#psycho').height() != 0) {
        $('#my-options').css('top', $('#psycho').height() - $('#my-options').height());
        $('#my-options').css('visibility', 'visible');
    } else {
        $('#psycho').load(function() {
            $('#my-options').css('top', $('#psycho').height() - $('#my-options').height());
            $('#my-options').css('visibility', 'visible');
        })
    }
    $(window).resize(function() {
        $('#my-options').css('top', $('#psycho').height() - $('#my-options').height());
    });


    var imgimac = $('#imac');
    src = imgimac.css('background-image');
    if (typeof(src) != "undefined") {
        var img = new Image();
        img.onload = function() {
            imgimac.css('height', img.height * (imgimac.width() / img.width));
            var padding = new Array(38, 38, 253, 38);
            var paddiing_str = "";
            for (item in padding) {
                padding[item] = padding[item] * (imgimac.width() / img.width);
                paddiing_str = paddiing_str + padding[item] + 'px ';
            }
            imgimac.css('padding', paddiing_str);
            $('#carousel').css('height', imgimac.height());
        }
        $(window).resize(function() {
            imgimac.css('height', img.height * (imgimac.width() / img.width));
        });
        var a = pattern.exec(src);
        img.src = eval(a[0]);
    }



    // 这部分是用来在打开和关闭模态框时使用不同的背景图片
    var modal = new Array('#myModal1', '#myModal2', '#myModal3', '#myModal4')
    for (x in modal) {
        $(modal[x]).on('hide.bs.modal', function(e) {
            $('#psycho')[0].src = "/templates/img/image1_u1.gif";
        })
        $(modal[x]).on('show.bs.modal', function(e) {
            $('#psycho')[0].src = "/templates/img/image1_u3.gif";
            $('#desire-step1').show();
            $('#desire-step2').hide();
            $('#desire-step2').children().hide();
            $('#mydesirelabel')[0].innerHTML = '我的需求<span><img src="/templates/img/customer_who/me.png"></span>';
        })
    }


    //我的需求
    $("select").select2({ dropdownCssClass: 'dropdown-inverse' });
    $(".btn-confirm-order").click(function() {
        $(this).toggleClass("btn-primary");
        $(this).toggleClass("btn-danger");
        if (this.textContent == "确认订单") {
            this.textContent = "取消订单";
        } else {
            this.textContent = "确认订单";
        }
    })
    $('#desire-step1').show();
    $('#desire-step2').hide();
    $('#desire-step2').children().hide();
    $('#microphone a').click(function() {
        var desireType = this.dataset.desireType;
        $('#desire-step1').hide();
        $('#desire-step2').show();
        $('#desire-step2').children('#' + desireType).show();
        switch (desireType) {
            case 'individual':
                $('#mydesirelabel')[0].innerHTML = '我的需求——个性化定制<span><img src="/templates/img/customer_who/me.png"></span>';
                break;
            default:
                // statements_def
                break;
        }

        for (key3d in scene3dArray) {
            scene3dArray[key3d]();
        }
    })


    $('#cloth-size').change(function() {})

    //我的供给显示和隐藏
    $('.items-sold').click(function() {
        var cloth = this.dataset.clothType;
        this.href="home_customer_supply_step2_"+cloth+".html";
    })
    $('#mytab a[href="#cloth"]').tab('show');




    // $('iframe').load(function(event) {
    //     $(this).height(this.contentDocument.body.scrollHeight)
    // });
    // $('iframe').click(function(event) {
    //     /* Act on the event */
    // });;
    // $('.collapse').on('shown.bs.collapse', function() {
    //     $(this).children('iframe').height($(this).children('iframe')[0].contentDocument.body.scrollHeight);
    // })
    // $('.modal').on('shown.bs.modal', function() {
    //     $(this).find('.modal-body').children('iframe').height($(this).find('.modal-body').children('iframe')[0].contentDocument.body.scrollHeight);
    // })
});
