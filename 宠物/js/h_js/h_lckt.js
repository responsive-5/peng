/**
 * Created by Administrator on 2017/4/18 0018.
 */
$(function(){
    $('.jiantou img').click(function(){
        if(parseInt($('.h_nav').css('width'))){
            $('.h_nav').animate({'width':0},300);
            $('.jiantou img').attr('src','img/h_img/jiant_04.png')
        }else{
            $('.h_nav').animate({'width':'40%'},300);
            $('.jiantou img').attr('src','img/h_img/jiant_03.png')
        }

    })
})