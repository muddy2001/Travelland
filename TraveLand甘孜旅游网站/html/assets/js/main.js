$(function () {
  "use strict";

  //一个简单的预加载动画，并在窗口加载完毕后将其从 DOM 树中移除。

  $(window).on('load', function (event) {
    //获取到具有 “ .preloader ” CSS 类名 的元素并利用 $() 方法返回 jQuery 元素
    $('.preloader').delay(500).fadeOut(500);
    //调用 delay(500) 函数使 #preloader 动画停留0.5秒（即500毫秒）不关闭，
    //并随后使用 fadeOut(500) 图片淡出效果动画渐隐操作来使其逐渐消失。
  });



  $(window).on('scroll', function (event) {   //屏幕滚动事件
    var scroll = $(window).scrollTop();  //获取当前窗口根据文档顶部的高度值

    if (scroll < 20) {  //当滚动条距离窗口顶部小于20像素时
      $(".header_navbar").removeClass("sticky");  //移除 .sticky 类来取消头部导航条的固定状态
      $(".header_navbar img").attr("src", "assets/images/logo.svg");  //并设置 logo 图片为普通版本
    }
    else {
      $(".header_navbar").addClass("sticky");//当滚动条距离窗口顶部超过20像素，
      //将.sticky CSS类添加到 header_navbar 元素上，从而使其始终显示在网页视图中

      $(".header_navbar img").attr("src", "assets/images/logo-2.svg");  //并设置 logo 图片为特殊版本。
    }
  });



  //用于创建单页网站（single page application）中的滚动导航。
  //该代码监听屏幕滚动事件，并根据页面元素的位置，
  //自动更新页面导航菜单的状态以进行高亮显示。
  var scrollLink = $('.page-scroll');     //创建一个选择所有的.page-scroll类的元素对象
  $(window).scroll(function () {      //$(window).scroll() 方法创建屏幕滚动事件监听器
    //使用 $(this).scrollTop() 方法从滚动条获得当前位置的大小，并将其保存在变量 scrollbarLocation 中。
    var scrollbarLocation = $(this).scrollTop();
    //使用 .each() 方法遍历所有的 .page-scroll 元素
    scrollLink.each(function () {

      //并获取其各自绑定的目标位置和与浏览器窗口的偏移值
      //(其中 $(this.hash) 选择器获取了链接元素的哈希值，即锚点链接中 # 后面的部分， )

      //(然后再使用 .offset() 方法来获取其在文档中的位置，并以对象形式返回该元素相对于文档顶部和左侧边缘的坐标。)

      //(最后代码将目标位置减去一个固定偏移值 73，原因是这个偏移值通常等于需要从窗口顶部扣除的固定元素高度，
      //如固定在头部或导航栏中不可移动的区域。
      //这样可以确保导航条能够准确地指向每个锚点距离屏幕顶部的正确位置，而不会被这些顶部元素挡住。)
      var sectionOffset = $(this.hash).offset().top - 73;

      //判断当前所在区间是否已经移过去，并根据需要动态设置 CSS 类名 active 表示选中状态。
      if (sectionOffset <= scrollbarLocation) {

        //最后，使用 .addClass('active') 和 .removeClass('active') 方法来修改菜单项的样式，
        //为其添加或删除 active 类名以更改样式效果。
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  $(".navbar-nav a").on('click', function () {
    $(".navbar-collapse").removeClass("show");
  });
  $(".navbar-toggler").on('click', function () {
    $(this).toggleClass("active");
  });
  $(".navbar-nav a").on('click', function () {
    $(".navbar-toggler").removeClass('active');
  });
  $('.counter').counterUp({ delay: 10, time: 3000 });
  $('.video-popup').magnificPopup({ type: 'iframe' });
  $('.image-popup').magnificPopup({ type: 'image', gallery: { enabled: true } });
  $('.testimonial_active').slick({
    dots: true, infinite: true,
    arrows: false, speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, } }, {
      breakpoint: 576, settings: { slidesToShow: 1, }
    }]
  });


  //滚动回到顶部的按钮当页面向下滚动一定距离后，动态显示该按钮。
  //在用户点击该按钮时，它将使用平滑动画回到页面的顶部。
  $(window).on('scroll', function (event) { //滚动事件监听器
    if ($(this).scrollTop() > 600) { //获取当前滚动条所在位置大小
      $('.back-to-top').fadeIn(200) // >600 200毫秒后出来
      $('#mini-btn').fadeOut(200)
    }
    else {
      $('.back-to-top').fadeOut(200)// <=600 200毫秒后隐藏
      $('#mini-btn').fadeIn(200)
    }
  });


  //在按钮上添加功能 
  $('.back-to-top').on('click', function (event) {//创建点击事件
    event.preventDefault();//防止浏览器默认操作
    $('html, body').animate({ scrollTop: 0, }, 1500);
    // animate()方法 以流畅地滚动回到页面顶部。
  });


  $('select').niceSelect();
  var wow = new WOW({ boxClass: 'wow', mobile: false, })
  wow.init();
});