// header部分
(function () {

    var $buy = $('#header .main .right .buy');
    var $cart = $buy.find('a.cart');
    var $hide = $buy.find('.hide');
    $buy.hover(function () {
        $cart.addClass('hover');
        $hide.stop().slideDown(300);
    },function (){
        $hide.stop().slideUp(300,function () {
            $cart.removeClass('hover');
        });
    })
})();
// nav-main
(function () {
    var $product = $('#nav .main .content ul li.product');
    var $hide = $('#nav .hide');
    var $ul = $hide.find('ul');
    $product.hover(function () {
        $hide.stop().slideDown();
        $ul.eq($(this).index()).show().siblings().hide();
    },function () {
        $hide.stop().slideUp()
    })

    $hide.hover(function () {
        $(this).stop().slideDown()
    },function () {
        $(this).stop().slideUp()
    })

})();
// nav-search
(function () {
    var $search = $('#nav .main .search');
    var $input = $('#nav .main .search .input input');
    var $shide =  $('#nav .main .search .input .shide');
    var $choose = $('#nav .main .search .input .choose');
    // $input.focus(function () {
    //     $search.addClass('focus');
    // }).blur(function () {
    //     $search.removeClass('focus')
    // })
    $input.on('focus blur',function () {
        $search.toggleClass('focus');
        $shide.fadeToggle(500);
        $choose.fadeToggle(500);
    })
})();

//banner-main
(function () {
    var $tab = $('#banner .tab ul li');
    var $btnL = $('#banner .btn .left');
    var $btnR = $('#banner .btn .right');
    var $mImage = $('#banner .main a');
    var index = 0;
    var timer = null;
    var $main = $('#banner .main');
    // console.log($tab);

    //阻止函数
    $main.hover(function () {
        clearInterval(timer)
    },auto)

    //轮播
    auto();
    function auto(){
        timer = setInterval(function () {
            index++;
            index = index%5;
            show(index)
        },2000)
    }

    //tab
    $tab.click(function () {
        clearInterval(timer)
        index = $(this).index();
        show(index);
    })

    //btn
    $btnL.click(function () {
        index--;
        if( index<0 ){
            index = 4;
        }
        show(index);
    })
    $btnR.click(function () {
        index++;
        if( index>4 ){
            index = 0;
        }
        show(index);
    })


    function show(index) {
        $($mImage[index]).addClass('on').siblings().removeClass('on');
        $($tab[index]).addClass('on').siblings().removeClass('on');
    }
})();
//banner-nav
(function () {
    var $hide = $('#banner .list .hide');
    var $list = $('#banner .list');
    var $nli = $list.find('.nav');
    // console.log($nli);

    $hide.each(function () {
        var $li = $(this).find('li');
        var width = $li.width();
        var height = $li.height();
        var length = $li.length;
        var col = Math.ceil(length/6);
        $(this).width(width*col);
        $li.each(function (i) {
            var x = Math.floor(i/6);
            var y = i%6;
            $(this).css({
                left:x*width+'px',
                top:y*height+'px'
            })
        })
    })
    $nli.hover(function () {
        $hide.eq($(this).index()/2).show();
    },function () {
        $hide.eq($(this).index()/2).hide();
    })
})();

//star-tab
(function () {
    var $content = $('#star .content');
    var $btn = $('#star .head .btn span');
    var $btnL = $('#star .head .btn span.left');
    var $btnR = $('#star .head .btn span.right');
    var timer=null;
    var index = 0;
    
    $btn.hover(function () {
        clearInterval(timer)
    },auto)
    $btnL.click(function () {
        index = 0;
        show(index);
    })
    $btnR.click(function () {
        index = 1;
        show(index);
    })
    auto();
    function auto() {
        timer = setInterval(function () {
            index = !index;
            show(index);
        },3000)
    };

    function show(index) {
        $btn.eq(!index).addClass('able').siblings().removeClass('able');
        $content.stop().animate({marginLeft : -index*1226+'px'},300)
    }
})();

//match-tab
(function () {
    var $tabLi = $('#part2 #fittings .head .right .tab li');
    var $ul = $('#part2 #fittings .content ul');

    $tabLi.hover(function () {
        // console.log($(this).index());
        $(this).addClass('on').siblings().removeClass('on');
        $ul.eq($(this).index()).addClass('on').siblings().removeClass('on');
    })
})();

//content-tab
(function () {
    var $box = $('#part2 #content .content .box');


    $box.each(function () {
        var $ul = $(this).find('.main');
        var $left = $(this).find('.arrow .left');
        var $right = $(this).find('.arrow .right');
        var $tli = $(this).find('.tab ul li');
        var index = 0;

        $left.click(function () {
            index--;
            if( index<0 ){
                index = 2;
            };
            show(index)
        })

        $right.click(function () {
            index++;
            if( index>2 ){
                index = 0;
            };
            show(index)
        })

        $tli.click(function () {
            index = $(this).index();
            show(index);
        })


        function show(index) {
            $tli.eq(index).addClass('on').siblings().removeClass('on');
            $ul.stop().animate({
                marginLeft: -index*296+'px'
            },300)

        }
    })
})();

//video
(function () {
    var $cover = $('#part2 #video .cover');
    var $play = $('#part2 #video .content ul li a.img');

    $play.click(function () {
        $cover.show();
        $cover.append('<div class="main">\n' +
            '                        <div class="head">\n' +
            '                            <p>'+$(this).parent().find('.title').html()+'</p>\n' +
            '                            <p class="close"> × </p>\n' +
            '                            <!--<video-->\n' +
            '                                    <!--src="http://player.youku.com/player.php/sid/XNDEwMzg0MTgwMA==/v.swf"-->\n' +
            '                                    <!--autoplay-->\n' +
            '                                    <!--muted-->\n' +
            '                                    <!--controls-->\n' +
            '                                    <!--width="800"-->\n' +
            '                                    <!--height="540"-->\n' +
            '                                    <!--loop-->\n' +
            '                                    <!--poster=""-->\n' +
            '                            <!--&gt;</video>-->\n' +
            '                            <embed src=\'https://player.youku.com/player.php/sid/XNDEwMzg0MTgwMA==/v.swf\' allowFullScreen=\'true\' quality=\'high\' width=\'800\' height=\'540\' align=\'middle\' allowScriptAccess=\'no\' type=\'application/x-shockwave-flash\'></embed>\n' +
            '                        </div>\n' +
            '                    </div>');
        $cover.find('.main').css({marginTop:'-600px',opacity:0}).stop().animate({
            marginTop:'-300px',
            opacity:1
        })

    })

    $cover.on('click','p.close',function () {
        var $main = $cover.find('.main');
        $main.stop().animate(
            {marginTop:'-600px'}
            ,300,function () {
                $cover.find('.main').remove();
                $cover.hide();
            })
    })
})();



