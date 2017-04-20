/**
 * Created by Administrator on 2017/4/20.
 */
$(document).ready(function () {
    $('.p-jiantou').click(function () {
        if (parseInt($(this).next().css('width'))){
            $(this).next().animate({width:0},500);
        }else{
            $(this).next().animate({width:'85%'},500);
        }
        $(this).toggleClass('glyphicon glyphicon-menu-right')
        $(this).toggleClass('glyphicon glyphicon-menu-left')

    })
});