// 보그 코리아 공통 기능 JS - common.js //


////////////////////////////// 제이쿼리 로드구역 ////////////////////////////////
$(function(){//////// jQB (제이쿼리 코드블록) //////////////////

    /* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

        [ 스크롤 이벤트 처리구역 설정하기 ]

          1. 스크롤이벤트는 스크롤바가 움직일때 발생한다.
             (마우스휠 이벤트와 다름!)

          2. 제이쿼리에서 scroll() 메서드로 구현함
          3. 스크롤 위치값은 scrollTop() 메서드로 알아낸다!

       ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    */

    // 스크롤 위치 변수(바깥에 하고 할당만 하게끔 바깥에 하자)
    let scTop;


    // 전체 스크롤의 대상은 화면이므로 window 객체(그래서 따옴표 안쌈) 사용한다!
    $(window).scroll(function(){

       /*****************************************************
         1. 전체 스크롤 위치값 알아내기 
              1) scrollTop() 메서드 : 세로스크롤 위치값
              2) scrollLeft() 메서드 : 가로스크롤 위치값
       ******************************************************/
       scTop = $(this).scrollTop();
       console.log("스크롤위치: "+scTop);


    }); /////////////// scroll //////////////////


}); ////////// jQB ///////////////////////////////////////////////////////////////