$(function () {
  /*visual*/
  $(".lp_imge img").addClass("on");
  $(".first_wrap .bg_left").addClass("on");
  $(".first_wrap .bg_right").addClass("on");
  $(".first_wrap .bg .note").addClass("on");
  $(".first_wrap .bg .note01").addClass("on");
  $(".first_wrap .bg .note02").addClass("on");
  $(".first_wrap .bg .note03").addClass("on");
  $(".first_wrap .bg").addClass("on");


  $(".visual_wrap").addClass("on");
  Splitting();

  /*con2*/
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $("#con2 .swiper-slide > div").on("click", function () {
    let i = $(this).closest(".swiper-slide").index();

    $("#imge img").removeClass("active");
    $("#imge img").eq(i).addClass("active");

    $("#modalBox").addClass("on");
  });

  $("#xmark").on("click", function () {
    $("#modalBox").removeClass("on");
  });

  /*con3*/
  let total = $(".con3_wrap > ul > li").length;
  console.log(total);

  let j = 0;
  start();

  function start() {
    stop = setInterval(function () {
      if (j == total - 1) {
        j = 0;
      } else {
        j++;
      }
      fade();
    }, 3000);
  }

  $(".con3_wrap .right").on("click", function () {
    clearInterval(stop);
    if (j == total - 1) {
      j = 0;
    } else {
      j++;
    }
    fade();
    start();
  });

  $(".con3_wrap .left").on("click", function () {
    clearInterval(stop);
    if (j == total - 1) {
      j = 0;
    } else {
      j--;
    }
    fade();
    start();
  });

  $(".con3_wrap .stop").on("click", function () {
    clearInterval(stop);
    $(".con3_wrap .play").show()
    $(".con3_wrap .stop").hide()

  });

  $(".con3_wrap .play").on("click", function () {
    $(".con3_wrap .stop").show()
    $(".con3_wrap .play").hide()

    start();
  });

  function fade() {
    $(".con3_wrap > ul > li").fadeOut();
    $(".con3_wrap > ul > li").eq(j).fadeIn();
  }

  let visual = $("#visual").offset().top;
  let con1 = $("#con1").offset().top;
  let con2 = $("#con2").offset().top;
  let con3 = $("#con3").offset().top;
  let con4 = $("#con4").offset().top;

  console.log(visual, con1, con2, con3, con4);

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();
    console.log(sc);

    if (sc >= 50) {
      $("#header").addClass("in");
    } else {
      $("#header").removeClass("in");
    }

    if (sc >= visual && sc < con1) {
      $(".con1_left ").addClass("on");
      $(".con1_right ").addClass("on");
      $(".con1_lp").addClass("in");

    }

    if (sc >= con1 && sc < con2) {
      $("#con2 .swiper-wrapper").addClass("on");

    }
    if (sc >= con2 && sc < con3) {

    }

    if (sc >= con3 && sc < con4) {
      $(".con3_wrap").addClass("on");

    }

    if (sc >= con4) {

    }

    $("#header li").on("click", function () {
      let i = $(this).index();
      // console.log(i);
      let target = $("#wrap > div").eq(i).offset().top;
      console.log(target);
      $("html").stop().animate({ scrollTop: target });
    });
  });


});
