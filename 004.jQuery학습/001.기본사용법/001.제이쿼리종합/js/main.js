// 제이쿼리 기본 JS - main.js

////////////////////////////// 제이쿼리 로드구역 ////////////////////////////////
$(function () { //////// jQB (제이쿼리 코드블록) //////////////////

    /// 타이틀 오버시 글자색, 배경색 변경
    //  대상 : .tit (여러번 쓸거면 변수에 할당)
    let tit = $(".tit");

    //  mouseover() 메서드 - 오버시 함수연결
    tit.mouseover(function () {

        // 변경대상 : .tit -> 나 자신 this 키워드
        $(this).css({
            color: "red",
            background: "yellow"
        }); ///// css /////

    }); /////// mouseover 시 ///////////////

    // 마우스 아웃시 원상복귀
    // mouseout(함수) - 마우스 아웃시 함수연결
    tit.mouseout(function () {

        // 변경대상 : .tit -> 나 자신 this 키워드
        $(this).css({
            color: "yellow",
            background: "pink"
        }); ///// css /////

    }); /////// mouseout 시 ///////////////


    ////////////////////////////////////////////////////
    // 1. 대상선정 변수할당 //////////////////////////////
    ////////////////////////////////////////////////////

    // 대상 1 : 버튼 - btns button
    let btns = $(".btns button");

    // 대상 2 : 미니언즈 - .mi
    let mi = $(".mi");

    // 대상 3 : 빌딩 - .building li
    let bd = $(".building li");

    // 대상 4 : 메시지 - .msg
    let msg = $(".msg");

    // 좀비 태그 셋업
    let mz1 = '<img src="images/mz1.png" alt"좀비1" class="mz">';
    let mz2 = '<img src="images/mz2.png" alt"좀비2" class="mz">';
    let zom = '<img src="images/zom.png" alt"좀비들" class="mz">';

    // 주사기 태그 셋업
    let inj = '<img src="images/inj.png" alt"주사기" class="inj">';

    // 미니언즈 가로크기 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width() * 0.05; 
    /* 
        [ $(window).width() * 0.05 ▶ 분석! ]
          : 보이는 화면의 가로의 5%를 구해와 
        ----------------------------------------------------------------------------------
          ▶ $(window) -> 괄호쳐서 window 적은 이유는 -> 제이쿼리 함수한테, 윈도우를 보낸거다.

          ▶ .width() -> 가로값 구해오는 메서드

          ▶ * 0.05 -> "백분율" 계산법 ->> 0.05 × 100 = "5%"
                       (%를 픽셀로 변환할때 백분율 계산을 쓴다.)
          
                       ex)
                       1은 window 보이는 화면 원사이즈 
                       (150% → "1.5") = 1.5 × 100 
                       (10% → "0.1") = 0.1 × 100 
        ----------------------------------------------------------------------------------
          · 윈도우 : 보이는 화면 객체 (보이는 화면)

          · width() 선택요소의 가로크기 구하기
          · height() 선택요소의 세로크기 구하기
            -> 단위없는 px값 
        ----------------------------------------------------------------------------------
        
    */

    // console.log("가로크기5%:"+win5);

    ////////////////////////////////////////////////////
    // 2. 초기화 셋팅 ///////////////////////////////////
    ////////////////////////////////////////////////////

    // 2-1. 모든 버튼 숨기고, 첫번째만 보이게 하기
    btns.hide().first().show() /* btns.hide(); // hide : 숨긴다. */
    // 버튼들을 .숨겨() . 첫번째()는 . 보여()
    // 주어는 하나! 뒤에 메서드 체인! (계속 붙여서 코딩할 수 있게 해준!)

    /* ()->함수 / hide() -> hide함수를 만든거임 */

    // 2-2. 모든 빌딩 li를 순서대로 돌면서 순번넣기 + 좀비넣기
    /* 
        each(function(idx,ele){구현부})
        -> 선택요소를 순서대로 돌면서 구현부를 실행하는 메서드
        -> each : 각각의 뜻

        idx -> index 에서 나온말로 변수명 사용(인덱스 줄여씀)
        -> idx 전달변수는 순번이 전달됨(0부터) 

        ele -> element 에서 나온말로 변수명 사용(엘러먼트 요소자신 줄여씀)
        -> ele 전달변수는 요소자신(this 키워드와 동일) 

        - 참고로 idx, ele변수명은 변경가능. 변수의 순서중요! 
        
        - 이 메서드를 사용하면 for문을 안써도 됨!
    */
    bd.each(function (idx, ele) {

        // console.log(idx);

        // 1. 각 li요소에 글자 넣기(순번)
        $(ele).text(idx); /* text를 썼기에 글자 써짐  */ /* ele와 this 같아서 어느거써도 나옴 */

        // 2. 좀비+주사기 넣기 
        if (idx === 9)
            $(ele).append(mz1); /* append 추가 */
        if (idx === 7)
            $(ele).append(mz2);
        if (idx === 1)
            $(ele).append(zom);
        if (idx === 2)
            $(ele).append(inj);

    }); ///////// each /////////////

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide(); /* 알아서 갯수만큼 내부적으로 for문 돌아간거임 */
    // 선택요소 여러개이면, for문을 돌듯이 모두 셋팅됨!


    ////////////////////////////////////////////////////
    // 3. 버튼별 순서대로 클릭 이벤트 함수 만들기 /////////
    ////////////////////////////////////////////////////

    // 3-1. '들어가기' 버튼 /////////////////
    btns.first().click(function () {

        console.log("들어가기 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* 접어지게 하는 것 */


        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐!



        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        /*  
           offset() 메서드 위치나 크기정보를 알려줌
           offset().top - top값
           offset().left - left값 
        */

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(8); // 8번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            /* 속성:값, */
            left: lval + "px"
        }, 1000, function () {
            /* 콜백함수 (애니후 실행!) */

            // 5. 메시지 변경
            // 메시지 요소
            msg
                // 메시지 넣기
                .text("와~! 아늑하다! 옆방으로 가보자!")
                // 나타나기
                .fadeIn(200);
            // 한번 선택하고, 이어서 메서드를 계속 쓰는 방법을 "메서드 체인" 이라함!
            // 중간에 이어서 쓸땐, 세미콜론 없어야함!


            // 6. 다음변경 버튼 보이기 (this를쓰면 function을 담고 있는 대상이 this 이 함수하고 연결된걸 봐야한다.(가장 가까이 잡고있는게 this로 잡힘) -> 여기서는 mi가 잡힘)
            btns.eq(1).slideDown(400);

        }); ///////////// animate ///////////////

    }); ////////////// 3-1. '들어가기' 버튼 click //////////


    // 3-2. '옆방으로!' 버튼 /////////////////
    btns.eq(1).click(function () {
        console.log("옆방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* 접어지게 하는 것 */ /* this는 여기서 btns.eq 를 가르킴 */


        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐!



        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(9); // 9번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            /* 속성:값, */
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

            /* 
                [ setTimeout(함수,시간) ]
                  ->> JS내장 타이밍 함수 
                      : 일정시간 뒤 함수 한번 실행

                  setTimeout(()=>{////},1/1000초)  
                  : 1초 후 함수 안에 내용이 실행됨
                    ()=>{} 이게 함수
            
            */
            // 5. 좀비 나타나기! (콜백에서 2초후 setTimeout)
            setTimeout(() => {
                // 현재 li(tg변수)에 있는 좀비만 보여라!
                tg.find(".mz").fadeIn(300); /* find(요소) 하위 중 자손요소 찾기! */ /* 0.3초 */

                // 6. 메시지 변경
                 msg.html("악!;;; 좀비!<br>어서피하자!")
                 .css({left: "-90%"})
                 .delay(500).fadeIn(200); /* 0.5초 뒤에 0.2동안 나타나 */
                 /* delay(시간) - 애니메이션 앞에서 지연시간 주가 */

                // 7. 다음변경 버튼 보이기 (this를쓰면 function을 담고 있는 대상이 this 이 함수하고 연결된걸 봐야한다.(가장 가까이 잡고있는게 this로 잡힘) -> 여기서는 mi가 잡힘)
                btns.eq(2)
                .delay(700).slideDown(400); /* 0.4동안 슬라이드 다운해 */ // 700은 위에 500+200 초 후에 나오게 하려고 700임!
                // 0.5초 기다리고 0.2초 나타난 메시지 기다린 후 (0.7초) 실행

            }, 2000); // 콜백 후 2초 후 실행 (setTimeout): 타임아웃함수 //////////
            
        }); ///////////// animate ///////////////

    }); ////////////// 3-2. '옆방으로!' 버튼 click //////////




    // 3-3. '윗층으로 도망가!' 버튼 /////////////////
    btns.eq(2).click(function () {
        console.log("윗층으로 도망가! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* 접어지게 하는 것 */ /* this는 여기서 btns.eq 를 가르킴 */


        // 2. 메시지 지우기
        msg.fadeOut(200);
        // fadeOut(시간) - opacity로 서서히 사라짐!



        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(7); // 7번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            /* 속성:값, */
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

              // 5. 메시지 변경
              msg.text("여긴 없겠지?...")
              .delay(500).fadeIn(200); /* 0.5초 뒤에 0.2동안 나타나 */

            // 6. 좀비 나타나기! (콜백에서 2초후 setTimeout)
            setTimeout(() => {

                // 현재 li(tg변수)에 있는 좀비만 보여라!
                tg.find(".mz").fadeIn(300); /* find(요소) 하위 중 자손요소 찾기! */ /* 0.3초 */

                // 5. 메시지 변경
                msg.text("악! 여기도...");

                // 7. 다음변경 버튼 보이기 (this를쓰면 function을 담고 있는 대상이 this 이 함수하고 연결된걸 봐야한다.(가장 가까이 잡고있는게 this로 잡힘) -> 여기서는 mi가 잡힘)
                btns.eq(3)
                .delay(700).slideDown(400); /* 0.4동안 슬라이드 다운해 */ // 700은 위에 500+200 초 후에 나오게 하려고 700임!
                // 0.5초 기다리고 0.2초 나타난 메시지 기다린 후 (0.7초) 실행

            }, 2000); // 콜백 후 2초 후 실행 (setTimeout): 타임아웃함수 //////////
            
        }); ///////////// animate ///////////////

    }); ////////////// 3-3. '윗층으로 도망가!' 버튼 click //////////


    // 3-4. '다시 옆방으로!' 버튼 /////////////////
    btns.eq(3).click(function () {
        console.log("다시 옆방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* ★★★ slideUp은 제이쿼리 자체 문법이기에, $로 옷 입히는 것임 */

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(6); // 6번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

              // 5. 메시지 변경
              msg.text("여긴 없겠지?...")
              .css({left:"100%"})
              .delay(500).fadeIn(200); 

              // 6. 다음메세지 : 2초후 변경하기
              setTimeout(() => {
                  msg.html("그래도 무서<br>우니까 윗층으로 가자!"); /* 5번 메세지에 말만 덮어씀 */

                  // 7. 다음 버튼 보이기
                  btns.eq(4).fadeIn(200);

              }, 2000); /// 타임아웃 /////* 2초 후 안에 {/그래도 무서우니까~/} 내용 나옴 */

        }); ///////////// animate ///////////////

    }); ////////////// 3-4. '다시 옆방으로!' 버튼 click //////////


    // 3-5. '무서우니 윗층으로!' 버튼 /////////////////
    btns.eq(4).click(function () {
        console.log("무서우니 윗층으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* ★★★ slideUp은 제이쿼리 자체 문법이기에, $로 옷 입히는 것임 */

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(4); // 4번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

              // 5. 메세지 변경 : 1초후
              setTimeout(() => {
                  msg.empty() /* .empty() 선택요소 텍스트 데이터 지우기 */
                  /*    msg.text("") -> 이렇게 내용을 안지우면, 밑에 텍스트가 보인다. 그 다음에 다음말 보임
                        === 안에 있는 텍스트 지울때 쓰는 .empty() 
                  */
                  .fadeIn(200,()=>{msg.text("무.");}) /* 200,()=>{} : 시간,이징,함수*/
                  .delay(1500).fadeIn(200,()=>{msg.text("무.서.");})  /* .delay 쓰려고 fadeIn씀(또 나오게하고 한 설정함) */
                  .delay(1500).fadeIn(200,()=>{msg.text("무.서.워...");});
                  /* 
                    msg요소 뒤에 delay와 fadeIn 애니메이션을 이어서 하면
                    순서대로 msg에 애니메이션이 쌓여서 하나씩 실행된다!
                    (이것을 애니메이션 큐에 쌓인다고 함!) 

                    큐(Queue)는 브라우저 프로그램 실행 메모리 저장소 
                    큐는 애니메이션 전용 메모리 저장소
                    
                */
              }, 1000); /* 1초 후 안에 {///} 내용 나옴 *///// 타임아웃 /////

              // 6. 아랫층 좀비 올라와서 달려들기!
              setTimeout(() => {
                
                // 좀비는? -> 7번방의 좀비
                bd.eq(7).find(".mz")
                // 윗층으로 올라오기 -> 타겟의 높이만큼(li 하나높이)
                .animate({
                    top: -tg.height() + "px" /* -tg.height() : -tg의 높이값 구해와 // -는 올라가야 하니까 기준의 위니까 마이너스 */
                },500)
                // 주인공에게 달려들기 -> 타겟의 가로값의 1.5배
                .animate({
                    right: tg.width()*1.5+"px"
                },3000,"easeOutBounce",function(){ /* 이징명이 정확해야함 */

                    // 애니 후 주인공 이미지 변경하기
                    mi.find("img").attr("src","images/mz1.png");
                    /* 
                        attr(속성명,값) - 선택요소의 속성 "바꾸기"
                        attr(속성명) - 선택요소의 속성값 "가져오기"

                        ex) 
                        mi.find("img").attr("src","images/mz1.png");
                        -> src 이미지 소스를 바꿈
                        ->> html에 가서 보면 
                            <div class="mi">
                                <img src="images/m1.png" alt="미니언즈">
                            이 해당 이미지가
                            m1.png ->>> mz1.png 바꿈!
                    */


                    // 메시지 변경하기
                    msg.html("나도좀비!;;;<br>어서 치료주사를!");

                    // 다음버튼 보이기
                    btns.eq(5).fadeIn(200);
                    

                });
                /* 
                ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼

                    [ 가속도 easing 주기 ]

                      jQuery UI를 "라이브러리 아래" 추가함! 

                      이징기능
                      ▶ https://jqueryui.com/easing/ 

                      이징미리보기 : 구글에서 "easing" 검색
                      ▶ https://easings.net/ko
                      
                      가속도 뿐만 아니라
                      드래그 / 드롭, 달력, 아코디언, 이징, 컬러애니 등 다양하다.  
                      jQuery UI는 제이쿼리 원본개발자들이 추가개발하여 배포한 플러그인이다!
                    ____________________________________________________________________________________________
                      
                      [ 하는 법 ]
                        1) https://jqueryui.com/
                        2) 메인배너영역에 있는 Download jQuery UI 1.13.0 아래에 있는
                           Quick Downloads 에 있는 "Stable" 클릭하면
                        3) jquery-ui-1.13.0 알집폴더가 내려받아진다.
                        4) 압축풀고 보면, "jquery-ui.min.js" 해당 파일만 복사  
                        5) E:\MyGit\FED\004.jQuery학습\001.기본사용법\001.제이쿼리종합\js ->> 폴더 안에 붙혀넣고
                        6) 해당 작업하고 있는 HTML <head> 영역 안에
                           <script src="js/jquery-3.6.0.min.js"></script>   
                           <script src="js/jquery-ui.min.js"></script>  ->>> 붙혀넣는다. (jQuery UI를 "라이브러리 아래" 추가함!)

                        7) 이제서야 우리는 가속도 이징을 적용해 줄 수 있다!
                           https://easings.net/ko 에 들어가서,
                           easing 괜찮은거보고 맘에 들면 이징명 이름 복사해서
                           가속도 주고 싶은데에서 가서, 이징명 그대로 복붙!
                           (이징명이 정확해야함!)

                        ex)  .animate({
                                right: tg.width()*1.5+"px"
                             },3000,"easeInQuint")

                             ->> "easeInQuint" 줌!
                                 easeOutBounce 등등 다른거 줘도됨~

                ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
                */

              }, 4000); ///// 타임아웃 /////

        }); ///////////// animate ///////////////

    }); ////////////// 3-5. '무서우니 윗층으로!' 버튼 click //////////



    // 3-6. '치료주사방으로!' 버튼 /////////////////
    btns.eq(5).click(function () {
        console.log("치료주사방으로!! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* ★★★ slideUp은 제이쿼리 자체 문법이기에, $로 옷 입히는 것임 */

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(2); // 2번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

            // 1. 주사기 돌기! (주사기는 하나뿐)
            /* 
                ※ 주의 : transform은 animate 지원불가!
                          ->> css의 transition설정으로 애니메이션 할것!
            */
           /* 
                주사기 태그 셋업
                let inj = '<img src="images/inj.png" alt"주사기" class="inj">';
                if (idx === 2)
                    $(ele).append(inj);
                ->> 위에서 주사기 이미지 셋팅 다 줬음.
           */
            $(".inj").css({
                transform:"rotate(-150deg)",
                transition: ".5s ease-out 1s", // 속시이지 (지연시간 1초)
                zIndex: "9999" //주인공 보다 위!
            }); ////////////// css ////////////

            // 주사 놓은 후 (1.5초 후) 다시 미니언즈2 (후유증)
            setTimeout(() => {

                // 미니언즈 이미지 변경하기
                mi.find("img").attr("src","images/m2.png");

                // 메시지 넣기
                msg.text("치료완료!").fadeIn(200)
                .delay(1000).fadeIn(200,
                    ()=>{
                        msg.html("이제, 조금만 더<br>가면 탈출이닷!");
                    }); ///////// fadeIn ////////////

                // 주사기 없애기
                $(".inj").remove(); /* 주사기 이미지 자체가 사라짐! src="images/inj.png" */
                /* 
                    remove()
                    : 선택요소 삭제하기
                */

                // 다음버튼 보이기
                btns.eq(6).fadeIn(200);

            }, 1500); ////// 타임아웃 ////////

        }); ///////////// animate ///////////////

    }); ////////////// 3-6. '치료주사방으로!' 버튼 click //////////



    // 3-7. '3번방으로!' 버튼 /////////////////
    btns.eq(6).click(function () {
        console.log("3번방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* ★★★ slideUp은 제이쿼리 자체 문법이기에, $로 옷 입히는 것임 */

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(3); // 3번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

            // 메시지 보이기
            msg.text("어서 윗층으로 가자!").fadeIn(200);

            // 다음버튼 보이기
            btns.eq(7).fadeIn(200);

        }); ///////////// animate ///////////////

    }); ////////////// 3-7. '3번방으로!' 버튼 click //////////



    // 3-8. '1번방으로!' 버튼 /////////////////
    btns.eq(7).click(function () {
        console.log("1번방으로! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* ★★★ slideUp은 제이쿼리 자체 문법이기에, $로 옷 입히는 것임 */

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(1); // 1번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

            // 메시지 보이기
            msg.text("이제 곧 탈출이닷!").fadeIn(200);

            // 다음버튼 보이기
            btns.last().fadeIn(200);

        }); ///////////// animate ///////////////

    }); ////////////// 3-8. '1번방으로!' 버튼 click //////////



    // 3-9. '헬기를 호출!' 버튼 /////////////////
    btns.last().click(function () {
        console.log("헬기를 호출! 버튼!");

        // 1. 자기자신 버튼 없애기
        $(this).slideUp(400); /* ★★★ slideUp은 제이쿼리 자체 문법이기에, $로 옷 입히는 것임 */

        // 2. 메시지 지우기
        msg.fadeOut(200);

        // 3. 이동할 빌딩 li의 위치정보 알아내기!
        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(0); // 0번방  /* 몇번째 0부터 : eq(순번) */
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값 // win5는 미니언즈를 left값 보정함! (화면의 5%)
        console.log(tval + "/" + lval);


        // 4. 미니언즈 이동하기
        // 대상 : .mi -> mi 변수에 할당!
        // [animate 메서드]  animate({CSS설정},시간,이징,함수) 
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        }, 1000, function () { /* 1초뒤에 -> 콜백함수 (애니후 실행!) */

            // 메시지 보이기
            msg.text("도와줘요~!!!").fadeIn(200);

            // 좀비들 최종추적!!!
            // 좀비는? bd.eq(1) 1번방에 있는 좀비들
            bd.eq(1).find(".mz").fadeIn(200,function(){ // 콜백함수 (애니 후 실행)

                // 좀비들 움직이기
                // this키워드 === bd.eq(1).find(".mz")
                $(this).animate({
                    right: tg.width()*1.3 + "px"
                    // li하나의 width크기의 1.3배만큼 right에서 이동
                }, 5000); //// animate //////

                // 헬기 등장
                $(".heli").animate({
                    left: "20%"
                }, 2000, function(){// 콜백함수(애니후)
                    // 주인공이 헬기에 탄 이미지로 변경!
                    $(this).attr("src","images/heli2.png");

                    // 주인공 지우기 (헬기에 탔으니까)
                    mi.hide(); /* display:none 처리! */
                })
                .delay(1000) // 1초 지연
                .animate({
                    // 조금 이동하기
                    left:"70%"
                },2000, function(){// 콜백함수(애니후)
                    // 헬기조정사 좀비로 바뀐 이미지 변경!
                    $(this).attr("src","images/heli3.png");
                }) /// animate ////
                .animate({// 마지막 화면밖으로 10초간 천천히 나감 (10000 = 10초)
                    left: "100%"
                }, 10000, function(){ //콜백함수 (애니후)
                    // 미리 지정한 class를 타이틀에 줘서 간판 떨어짐
                    // 대상 : .tit -> tit변수
                    tit.addClass("on"); /* 클래스 tit에 css에서 설정한 "on"클래스 들어갔다. */
                    /* 
                        addClass(클래스명) - 선택요소에 class 넣기

                    */
                    // 3초후에 class "on2" 넣기
                    setTimeout(() => { 
                        tit.addClass("on2");
                    }, 3000);
                }) 

            });/////////// fadeIn ////////////////////




        }); ///////////// animate ///////////////

    }); ////////////// 3-9. '헬기를 호출!' 버튼 click //////////






















}); /////////////////////// jQB(제이쿼리 코드 블록) /////////////////////////////
///////////////////////////////////////////////////////////////////////////////