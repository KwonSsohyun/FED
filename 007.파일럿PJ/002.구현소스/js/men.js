// 남자패션페이지 JS - men.js

// 페이지번호(컨텐츠의 위치를 페이지로 생각함!)
let pno = 0;

// 남성 신상품 정보
let sinsang = {
  "m1": "[남성]카모전판프린트 PQ 티셔츠^DMTS7K731-MG^99,000원",
  "m2": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-BK ^89,000원",
  "m3": "[남성]빅로고 컬러 블럭 PQ 티셔츠^DMTS7G731-WH ^89,000원",
  "m4": "[남성]부분 스트라이프 PQ 티셔츠^DMTS77731-NY ^99,000원",
  "m5": "[남성]웰딩포인트 트레이닝 하프팬츠^DMTB61731-MD ^89,000원",
  "m6": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-GR ^99,000원",
  "m7": "[남성]블럭형 풀집업 래쉬가드^DMSW21731-KA ^99,000원",
  "m8": "[남성]베이직 솔리드 래쉬가드^DMSW15731-BK ^49,000원",
  "m9": "[남성]남성 루즈핏 슬리브리스^DMSL6C731-MG ^59,000원"
};

$(function () { /// jQB ////////////////////////////

  // 메뉴 a요소 기본이동 막기!
  $(".gnb a,.indic a").click(function (e) {
    e.preventDefault();
  }); ///////////// click ////////////////

  //// GNB메뉴 클릭시 해당 페이지 위치로 이동 애니메이션
  // 이벤트 대상: .gnb li + .indic li
  // 변경 대상: html,body
  $(".gnb li,.indic li").click(function (e) {

    // 클릭시 스크롤 메뉴변경 안되게끔 상태값 변경
    mchg = 1; // 변경금지 상태!!!
    //->스크롤이동 애니후 해제!(mchg=0)

    // 0. 클릭된 li순번 구해오기
    let idx = $(this).index();
    //console.log("순번:" + idx);

    // 1. 하위a요소의 href값 읽어오기
    let idnm = $("a", this).attr("href");
    //console.log("href값:" + idnm);

    // 2. 아이디값에 해당하위 top값 위치구하기
    // top값을 구해서 스크롤 애니메이션 이동에 사용함!
    let pos = $(idnm).offset().top;
    // offset() 메서드 : 요소의 기본 셋팅 정보를 리턴함
    // - top,left,width,height 등 을 알수 있다!

    console.log("위치값:" + pos);


    // 3. 스크롤 애니메이션으로 페이지 이동하기
    // 세로스크롤 이동속성: scrollTop
    // 참고: 가로스크롤 이동속성: scrollLeft
    // 스크롤 이동대상: html,body
    // -> 범용브라우저에서 사용하는 스크롤대상
    $("html,body").animate({
      scrollTop: pos + "px"
    }, 1200, "easeOutQuint", () => { // 애니후
      mchg = 0; //스크롤메뉴변경 허용!
    }); //// animate /////


    // 4. 클릭된 li요소에 class="on" 넣기
    $(".gnb li").eq(idx).addClass("on")
      .siblings().removeClass("on");
    $(".indic li").eq(idx).addClass("on")
      .siblings().removeClass("on");
    //다른 형제 li들 class="on" 지움

    // 6. li순번과 pno와 일치하기! /////////////////////
    pno = idx;
    //console.log("페이지번호:" + pno);

    // 7. 이동위치값을 부드러운 스크롤위치값과 일치하기!
    sc_pos = pos;

    // console.log("부스:"+sc_pos);


  }); ///////////// click ///////////////

  /// 로고 버튼 클릭시 맨위로 가기 ////
  $("#logo a").click(function (e) {
    // 1. 기본이동막기
    e.preventDefault();

    // 2. 맨위로 가기
    $("html,body").animate({
      scrollTop: "0"
    }, 800, "easeOutQuint");

    // 3. 부드러운 스크롤 변수 일치하기
    sc_pos = 0;

  }); ////////// click ///////////////



  /// ★★★★★ 부드러운 스크롤 호출!(제이쿼리 아님!)
  startSS();


  /////////////////////////////////////
  // 배너에 스와이퍼 플러그인 적용하기 /// 
  /////////////////////////////////////
  var swiper = new Swiper(".mySwiper",{

    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }

    /* 
      https://swiperjs.com/demos#autoplay
      1) 홈페이지 들어가서 맘에 드는 거 찾고,

      2) 조금한 글씨로
         "Open in new window" 클릭

      3) 오른쪽 마우스 
         "페이지 소스보기"

      4) 그러면 코드가 쫙 나오는데
         다 긁는게 아니라
         쭉 내리면 <script> 구역 나오는데 
         분석해서 필요한 소스 
         같다 붙히면 된다.

         ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
         
          <!-- Initialize Swiper -->
          <script>
          var swiper = new Swiper(".mySwiper", {
            pagination: {
              el: ".swiper-pagination",
            },
          });
          </script>
      
      
    
    
    */

  }); //////// swiper /////


  /// 스크롤 등장 플러그인 적용 : 스크롤리빌 ////


  //// 남자 스페셜 영역에 패럴렉스 플러그인 적용하기 ////

  ////////////////////////////////////////////////
  //////////////// 신상품 움직이기 ////////////////
  ////////////////////////////////////////////////
  



}); ///////////// jQB ////////////////////////////