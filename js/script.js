$(function(){
    let currentRegion = '';
    $(".menu").click(function(){
      const regions = ['울산', '부산', '거창', '남해', '창원', '진주'];
      const randomIndex = Math.floor(Math.random() * regions.length);
      currentRegion = `'${regions[randomIndex]}'`; // 랜덤 텍스트 저장
      $(".lnb_random span").text(currentRegion);
  
      $("#lnb_box").stop().animate({left: "0"}, 400); 
    });
  
    $(".menu_close a").click(function(e){
      e.preventDefault();
      $("#lnb_box").stop().animate({left: "-285px"}, 400);
    });
  });
// menu e
$(function () {
  $(".box3_slide li a img").click(function () {
    const imgSrc = $(this).attr("src");
    $("#popup_img").attr("src", imgSrc);
    $("#popup_wrap").fadeIn();
    $("body").addClass("scroll_none"); 
  });
  $("#popup_wrap").click(function () {
    $(this).fadeOut();
    $("#popup_img").attr("src", "");
    $("body").removeClass("scroll_none");
  });
});
// popup e




