// 자동스크롤 기능 JS - autoScroll.js


// ■■■■■■■■■■■■■■■■■■■■■ 전역변수 구역(공용게시판공간) ■■■■■■■■■■■■■■■■■■■■■■■■■■■
// 현재페이지 번호
let pno = 0; 

// 전체 페이지 개수 (상수로 설정하여 변경불가)
const totnum = 7;

// 광스크롤막기 상태변수 (0 허용 / 1 불허용)
let psts = 0

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


////////////////////////////// 제이쿼리 로드구역 ////////////////////////////////
$(function(){ //////// jQB (제이쿼리 코드블록) //////////////////

    /* 
        [ 자동스크롤 구현! ]

          1. 기능 : 마우스 휠을 위나 아래로 작동시킬 떄
                    페이지가 위나 아래로 자동으로 애니메이션 되는 기능

          2. 이벤트 : 마우스 휠을 움직일 때 발생하는 이벤트는?
                     ◆ mousewheel (오리지널 이벤트)
                        -> 파이어폭스 지원안함!
                           onmousewheel W3C 들어가서 보면 파이어폭스만 안되서
                           onwheel 들어가보니 엣지랑 사파리가 또 안되서
                           걍 onmousewheel 쓰고 파이어폭스 따로 설정한다.

                     ◆ wheel (신규이벤트-벤더사의 웹표준이 아직아님!)
                        -> 사파리 지원안함!
                        ★ DOMMouseScroll (파이어폭스 전용이벤트)
                        
                     ->> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
                         mousewheel + DOMMouseScroll 을 같이 사용할 것임!

                         $(document).on("mousewheel DOMMouseScroll")


          3. 마우스 휠 이벤트와 함수를 연결하는 방법
             - on(이벤트명,함수)
             -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
                (참고로 bind(이벤트명,함수) 제이쿼리 버전3부터 지원중단!) 

          4. 마우스 휠 이벤트 대상
             ▶ 보통 document에 적용함!

          ★ 중요한 업데이트 유의사항!!!
             ▶ document, body, window 객체는 이벤트를 막을 수 없다!
               - 2019년도에 위의 세가지 중요객체에 대하여 기본기능 막기를
                 할 수 없도록 브라우저 소스가 업데이트 되었는데

                 이유는 "모바일에서 에러가 발생하는 문제의 원인"으로 지목되어
                 본 3가지 중요객체에 대해서는 e.preventDefault() 또는
                 return false를 사용한 기능막기를 못하도록 하였다!

                 예) 안되는 케이스
                 $(document).on("click",function(e)){
                     e.preventDefault();  ->> 에러!!!
                 });

                 $(window).on("scroll",function(e)){
                     return false;  ->> 에러!!!
                 });

                 $("body").on("mousewheel",function(e)){
                     e.preventDefault();  ->> 에러!!!
                 });

             ▶ 에러를 우회하는 방법은 
                window, document, body 대신에
                내부에 전체부모박스를 하나 만들고, 사용하는 방법이 있다!
    
    */

    /////////////////////// 자동스크롤 구현 //////////////////////////////
    // 사용메서드 : on(이벤트명, 함수)
    // 이벤트명에 띄어쓰기로 여러개의 이벤트를 사용할 수 있다.
    // 이벤트명에 일반용(mousewheel)과 파이어폭스용(DOMMouseScroll) 이벤트를 모두 쓴다! 해당되는 이벤트가 적용된다!
    // 대상 : document
    $(document).on("mousewheel DOMMouseScroll", /* DOMMouseScroll을 지우면 파이어폭스에서 콘솔이 안찍히는걸 볼수있다. */
    function(e){

        // e.preventDefault();
        // return false; /* 돌아갈때 불꺼 */
        /* 위에 2가지 해보면 기본막기시 에러발생! (e.preventDefault() / return false)
           왜? document 니까! ->>  $(document) 로 잡아줬기 때문 (왜 안되는지는 위에 설명 적혀있지만 모바일 오류중 원인이라서 막아놈)

           스크롤 안되게 하려고,
           html,body에 CSS로 "overflow: hidden;"" 줘서 기본기능을 대신 막는다. 
           (스크롤안되게 하려고 overflow: hidden; 한거임 그리고 한 화면에 해당컨텐츠만 꽉차게 보이게 하려고 100%설정함)

           ▶▶  html,body{overflow: hidden;} ▶ CSS에서 설정함 (스크롤 안되게 하려고 설정)
           ▶▶  CSS에서 한페이지 보이는 화면 채우기 ▶ .page{width: 100%; height: 100%;} 이거의 기준점은 ▶ html,body{width: 100%;height: 100%; overflow: hidden;}

           ->> 원래 원페이지 자동스크롤 사이트는 스크롤바트랙 대신 별도의 표시자(인디케이터)를 구현해준다!
               인디케이터는 왜 화면보면은 PC나 모바일이나 내가 해당페이지 어디에 있는지 표시해주는것 -> 예를들면 땡떙떙 점 이라던지 선이라던지 등등
        */

        // console.log("마우스휠~!");


        ///////////////////////////////////////////////////////////////////////////////////////
        // 0. 광스크롤 막기
        ///////////////////////////////////////////////////////////////////////////////////////

        if(psts) return; // 1이면 나가!(0만 들어올 수 있음) (0은 거짓이고 / 1은 참이니까 - 1은 나감! 0이 거짓이니까 내려옴)
        psts = 1; // 막기
        setTimeout(() => {
            psts = 0; // 해제
        }, 800); /// 타임아웃 ////
        // 스크롤 이동시간만큼 막아준다! 


        
        /////////////////////////////////////////////////////
        // 1. 마우스휠 방향 알아내기 /////////////////////////
        ///////////////////////////////////////////////////
        // ★★★ e 변수로 들어오는 이벤트전달값으로 알아낸다! (브라우저에서 e가 잘 전달안될까봐 다시 재설정 /에러안나게 하는거임 window.event || e; 옵션 두개 준거임)
        e = window.event || e; /* 둘중에 참인게 왼쪽 e로 들어간다.  window.event나 e 둘다 거짓이면 오류 */ /* (e)를 위에서 썼기때문에 || e; 똑같이 적는다. e변수에 담아줫다. */
        // 이벤트 전달값이 window 오리지널 이벤트(자바스크립트 원래 이벤트 .event인데 원래 window를 생략)가 유효하면
        // 사용할 수 있도록 보완코드를 작성해야한다!
        // 변수 = 경우1 || 경우2;
        // 변수에 경우1과 경우2 중 true(유효한것)이 먼저 할당됨!

        /* 
            [ "마우스휠 방향" 알아내기 위한 값 -> wheelDelta ]
              - 휠델타란?
                : 마우스 이벤트에 따라 발생하는
                  이벤트 횟수 및 방향, 이동거리 등의 정보를 제공함
              - ie, chrome 브라우저 공용

              - opera 브라우저는 detail을 사용함 (아래서 보면 삼항연산자로 씀)
        */
        let delta = e.detail ? e.detail : e.wheelDelta; /* detail이냐? 맞으면 e.detail // 아니면 e.wheelDelta (둘중에 하나) */
        // delta 변수에 유효한 설정이 적용되어 할당된다!
        // 조건연산자(삼항연산자) -> 비?집:놀이동산; -> 비오면 집 / 비안내리면 놀이동산 

        // console.log("휠델타정보:"+delta);
        /* 파이어폭스에서 반대로 나온다. 원래는 스크롤 위로 올리면 + / 내리면 - 이다. (파이어폭스는 반대 ㅠㅠ) */


        /////////////////////////////////////////////////////
        // ★ 파이어폭스 일때 델타값 반대로 하기 ///////
        ///////////////////////////////////////////////////
        /* 
            방법 
            : JS의 내장함수 test()를 사용하여
              브라우저 정보를 읽어오는 navigator.userAgent 를 이용!

              브라우저 정보안에 "Firefox" 라는 정보가 있으면
              test()에서 true를 리턴함! 
              파이어폭스인지 알 수 있음!

         */
         console.log("브라우저정보:"+navigator.userAgent);
         /* Chrome/94.0.4606.81 Safari/537.36 -> 콘솔창을 보면 파이어폭스빼고 저렇게 다 참조했다고 찍혀있당! */
         console.log("정보여부:"+/Firefox/i.test(navigator.userAgent))
         /* 
            .test(navigator.userAgent)
            브라우저 정보 찍을때 쓴다. 
            ex) 브라우저정보:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36 라고 나옴

            ex) ("정보여부:"+/mm/i.test(mm))
                 쉽게 생각해서 /mm/ 이라는 글자가 (mm) 에 있으면 트루임

            --------------------------------------------------------------------------------------------------------------------------------------------------

                 [ 코드풀이 ]
                 그러니까 여기서는 
                 ▶▶ /Firefox/i.test(navigator.userAgent)
                 ▷   (navigator.userAgent)는 콘솔창에서 보면 브라우저 정보가 찍혀져서 나온다.

                      파이어폭스 브라우저에서 창 띄어서 콘솔창 보면
                      브라우저정보:Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0  ▶ 이렇게 브라우저 정보 나옴
                      저 정보 맨 뒤에 Firefox/93.0 "파이어폭스"가 찍힌다.

                 ▷   /Firefox/i : 대소문자구분없이(i의 뜻) Firefox라는 글자 찾아(/Firefox/ 의 뜻)

                 ▶▶  최종적으로 정리하면
                       /Firefox/ 문자가 (navigator.userAgent)에 보면 바로 위에서 말한대로 브라우저 정보내용 안에 파이어폭스 문자 나오니까 true 임!!

                       파이어폭스만 >> 정보여부:true 
                       나머지 브라우저는 >> 정보여부:false니까 (왜냐? 뒤에 Firefox라고 안적혀있고 ▶ 브라우저정보:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36)
                       자기 해당브라우저 워딩만 찍히기 때문에 파이어폭스 브라우저만 해당
                       그래서 true 가 나오는 파이어폭스만 해당코드로 들어오고, 나머지는 false니까 아래로 걍 내려감

                 ▶▶ 파이어폭스는 스크롤 + - 가 반대니까 이제 바꿔준다.     
                      if(/Firefox/i.test(navigator.userAgent)){ 
                          delta = -delta;
                      }
                      ▶ if문을 써서 위에서 설명한 해당사항이 되면
                         delta 변수 값을 반대로 바꿔준다. (음수를 양수로 / 양수를 음수로)
                         - × - = +
                         + × + = +

                         let delta = e.detail ? e.detail : e.wheelDelta; 위에서 delta 변수 정의해줌

            --------------------------------------------------------------------------------------------------------------------------------------------------
         */
         /* 
            [ test() 정규식 메서드 ]
              정규식.test(값) -> 값에 정규식 문자가 있으면, true를 리턴함!
              ▶ 참조 : FED\003.JS학습>JS007.html >> 정규표현식 확인할것

            [ 간단한 정규식 표현기호 ]
              1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬 사이에 쓴다. /ㅇㅇㅇ/
              2. 모든 패턴 문자열은 찾을때 g라는 플래그 문자를 씀 (g는 글로벌 라는 뜻)
              3. 대소문자 구분없이 찾을때는 i라는 플래그

              예) 
              /,/g 
              ->> 모든 컴마를 찾아라!

              /fierfox/i
              ->> 대소문자 관계없이 "fierfox" 문자를 찾아라!

              /my/gi
              ->> 대소문자 관계없이 "my"라는 모두 찾아라!

         */
         /// 파이어폭스 브라우저이면 델타값 부호를 반대로 한다!!!
         if(/Firefox/i.test(navigator.userAgent)){ /* 대소문자 구분없이 파이어폭스라고 써진 글자면 그 문자열 안에서 테스트해봐라 */
            delta = -delta; // 변수 앞에 마이너스를 쓰면 부모반대! (-delta 를 썻기때문에 아까 반대로 나오는게 -3 >> 3 이렇게 바꼈다!!!)
         } ///////////// 파이어폭스여부 if문 /////////////




        /////////////////////////////////////////////////////
        // 2. 마우스휠 방향에 따라 페이지번호 증감하기! ///////
        ///////////////////////////////////////////////////
        // 전역변수에 페이지번호 변수가 필요하다! -> pno (위에 전역변수구간에 변수 정의함)

        if(delta < 0) { // -120(아까 휠델타정보 콘솔로 봤을때 120을 기준으로 스크롤위로 했을때가 + / 스크롤 아래로 했을때가 -) 아랫방향 스크롤(다음페이지)
            pno++; /* 페이지번호 증가! */

            // 한계수 설정 : 끝번호에 고정
            if(pno === totnum) pno = totnum -1; /* === 동등비교 / = 할당 */
            /* pno가 해당 if문을 돌면서 7이 될때 
               위에서 const totnum = 7; 으로 정했기때문에
               pno가 7이 되면 (마지막 번호) 그러면 -1뺀다. -> 마지막 슬라이드인 순번 6번이 보이고 끝나라 */

        } ///////////// if ///////////
        else{ // 120 윗방향 스크롤(이전페이지)
            pno--; /* 페이지번호 감소! */

            // 한계수 설정 : 첫번호(0)에 고정
            if(pno === -1) pno = 0;

        } /////////// else ///////////

        console.log("페이지번호:" + pno);


        /////////////////////////////////////////////////////
        // 3. 전체 윈도우(window)화면 높이값 단위로 이동위치 만들기 ///////////
        ///////////////////////////////////////////////////
        /* 
            .page의 top값으로 구하면 되지만
            새로운 버전의 제이쿼리에서 씽크 불일치가 발생! (하나씩 밀림!)

            ▷ let pos = $(".page").eq(pno).offset().top;  
               ->> offset().top은 현재 선택요소의 top위치값
               기존에 이렇게 적었던걸 변경해준다. 
               : 왜 변경하나요?
                 하나씩 밀려서요!!! ▷ 이것을 버그 사항을 아래의 코드로 변경해준다!

            ▶ let pos = $(window).height()*pno;
               아까 css에서 보이는 화면에 맞췄기 때문에 100%였기 때문에
               보이는 화면 값(윈도우) 높이값 을 구해오고, 
               거기에 pno는 각각의 페이지 번호니까

               보이는 화면에 (곱하기 0을 = pno) 하면 1번째 페이지일꺼고
               보이는 화면에 (곱하기 1을 = pno) 하면 2번째 페이지일꺼고 ... 
               이걸 활용한것임
        */
        let pos = $(window).height() * pno;  
        // $(window).height() 윈도우 높이값

        console.log("이동위치:"+pos);



        /////////////////////////////////////////////////////
        // 4. 실제 위치로 페이지 이동하기 ////////////////////
        ///////////////////////////////////////////////////
        // 전체 스크롤 이동대상 : html,body 
        //                      ->> 두개 다 잡는게 브라우저 공통임!!!
        $("html,body").animate({
            scrollTop: pos + "px"
        }, 800, "easeInOutQuint"); /* easeInOutQuint : 이징 가속도 */


        
        /////////////////////////////////////////////////////
        // 5. 현재 GNB메뉴의 li에 class 넣기 (페이지스크롤 내리면, 위에 메뉴에 해당하는게 형광색으로 영역에 맞게 표시됨)
        ///////////////////////////////////////////////////
        // 대상 : .gnb li
        $(".gnb li").eq(pno).addClass("on")
        .siblings().removeClass("on");
        /* 
           ▷ 참고자료 : 004.jQuery학습\001.기본사용법\002.선택자메서드연습\jQuery-01.선택자연습 >> 27.siblings.html
              siblings() 메서드
              : 선택요소를 제외한 나머지 형제요소를 선택함
                 
           (시블링스 안적었으면 다 li가 눌려져서 보이는데 나는 하나만 보이고 나머지는 안보이게 하고 싶으니까) 
           .siblings() 붙히고 그 뒤에 .removeClass("on")

           선택자가 바뀐거임
           $(".gnb li").eq(pno) 의 선택자가 .addClass("on") 먹은거고 
           .siblings() 의 선택자가 .removeClass("on") 먹은거다 ->> 선택한 나머지가(시블링) 클래스 on 리무브 된다.
        */

        /* 인티케이터 */
        $(".indic li").eq(pno).addClass("on")
        .siblings().removeClass("on"); 
 
        
    });///////////////// mousewheel 이벤트 함수 /////////////////
    ///////////////////////////////////////////////////////////






}); ////////////// jQB /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////