$(document).ready(function () {

    $(".left li").click(function () {
        $(".left .active ").removeClass("active");
        $(this).addClass("active");
         $(".right .active ").removeClass("active");
          $(".right .item").eq($(this).index()).addClass("active");

    })








})
