// 보그 코리아 공통 기능 JS - common.js //


////////////////////////////// 제이쿼리 로드구역 ////////////////////////////////
$(function(){//////// jQB (제이쿼리 코드블록) //////////////////

    /* 페이지 새로 고침시 스크롤이 중간에 있으면
       브라우저 스크롤위치 캐싱(즉, 위치기억)에 의해서
       그 위치에 있게 되므로
       강제로 위로 보내는 코드를 넣어준다!
       CSS로 넣어주면 캐싱 덮어써서 소용이 없다!

       그래서 animate로 넣어줌 (스크롤이 중간에 있건 새로고침하면 다시 스크롤 위로 올라가게 하는 설정)
    */
   $("html,body").animate({
       scrollTop: "0px"
   }, 100);
       



    /* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

        [ 스크롤 이벤트 처리구역 설정하기 ]

          1. 스크롤이벤트는 스크롤바가 움직일때 발생한다.
             (마우스휠 이벤트와 다름!)

          2. 제이쿼리에서 scroll() 메서드로 구현함
          3. 스크롤 위치값은 scrollTop() 메서드로 알아낸다!

       ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
    */


    // ■■■■■■■■■■■■■■■■■■■■■■ 공용 저장공간 ■■■■■■■■■■■■■■■■■■■■■■

    // 스크롤 위치 변수(바깥에 하고 할당만 하게끔 바깥에 하자)
    let scTop;

    // 스크롤 실행상태 변수 (상단GNB 영역)
    let scSts = 1; //  실행전 1  /  실행후 0


    // 스크롤 실행상태 변수 2 (탑버튼임! 위로올라가기버튼) 
    let scSts2 = 1; //  실행전 1  /  실행후 0

    // 상단영역 요소 
    let tm = $("#top");


    //// 위로 이동버튼 요소 ////
    //   대상 : .tbtn
    let tbtn = $(".tbtn"); /* $(".tbtn") >>> html .tbtn 선택한거임 제이쿼리로 */
    // tbtn.hide(); // 숨기기인데 안하는 이유는 페이지 새로고침하면 짧은 사이에 보여서임 (common.css에서 걍 .tbtn 에다가 display: none;)

    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


    ////////////// 전체 스크롤의 대상은 화면이므로 window 객체(그래서 따옴표 안쌈) 사용한다!
    $(window).scroll(function(){

       /*****************************************************
         1. 전체 스크롤 위치값 알아내기 
              1) scrollTop() 메서드 : 세로스크롤 위치값
              2) scrollLeft() 메서드 : 가로스크롤 위치값
       ******************************************************/
       scTop = $(this).scrollTop();
       console.log("스크롤위치: "+scTop);

       // 1. 상단영역(#top)이 스크롤위치값 100px 이상일때
       //    -> #top에 .on을 넣어서 상단영역 디자인 변경하기
       //    대상 : #top -> 변수 tm에 할당!
       if(scTop >= 100 && scSts === 1 ){ /* 스크롤 위치가 100px보다 크거나 같거나(이상), scSts값이 1이면 들어올 수 있음 */ /* && 둘다 트루나야함 들어올 수 있음 */
            /* 실행1이 한번만 실행되면되지, 계속 실행이 될필요는 없으니 추가로 해준다.
               (위에서 "스크롤 실행상태 변수(공용저장공간 / 펑셩밖)" 처리하고, 그변수값 1이 해당코드에서 scSts === 1 이니 동일한 1이라서 들어오고, 들어오면 값 0으로 바꿈 ) */ 
            
            scSts = 0; // 한번밖에 못들어옴! (1이 0으로 바꿨기 때문에.)
            console.log("실행1"); /* 스크롤 100px 내려왔을때 - 작은 GNB 영역 보이는 상태 */
            tm.addClass("on")

       } /////////////// if ///////////
       else if(scTop < 100 && scSts === 0 ) { // 스크롤 위치가 100px 미만이고, scSts값이 0이면 들어올 수 있음
            /* 실행2가 계속 실행되니, 이것또한 같이 설정하자. 
               그럼 위에서 0으로 값바꾼게 내려오고 (scSts === 0 이것은 위에서 if문에서 scSts = 0; 을 했기 때문에 0으로 바꾼 값이 반대경우니까 해당되서 내려옴)
               이게 한번밖에 못들어오게 1로 바꿔서 잠궈줌
            */

            scSts = 1; // 한번밖에 못들어옴! (0을 1로 바꿈!)
            console.log("실행2"); /* 처음에 GNB 영역 다 보이는 상태 */
            tm.removeClass("on")
       } /////////////// else //////


       // 2. 상단이동버튼 보이기 숨기기 
       //    대상 : .tbtn -> tbtn 변수에 할당! (펑셩밖에 변수할당함 -> 위로 이동버튼 요소)
       //    기준위치 : 300px 스크롤 위치 
       if(scTop >= 300 && scSts2 === 1 ){ // 스크롤 위치가 300px보다 크거나 같고(이상), scSts2값이 1이면 들어올 수 있음
           scSts2 = 0; // 한번만 쓰려고 값 바꿈!
           console.log("탑버튼 보여!");

           tbtn.show(); 

       } ///////////// if //////////
       else if(scTop < 300 && scSts2 === 0 ){ // 스크롤 위치가 300px 미만이고, scSts2값이 0이면 들어올 수 있음
           scSts2 = 1; // 한번만 쓰려고 값 바꿈!
           console.log("탑버튼 숨겨!");

           tbtn.hide(); 
       } ///////////// else if //////////


    }); /////////////// scroll //////////////////


}); ////////// jQB ///////////////////////////////////////////////////////////////