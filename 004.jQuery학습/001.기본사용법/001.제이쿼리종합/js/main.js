// 제이쿼리 기본 JS - main.js

////////////////////////////// 제이쿼리 로드구역 ////////////////////////////////
$(function () {

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
    let win5 = $(window).width() * 0.05; /* 보이는 화면의 가로/세로 크기 구해옴 (0.05% -> 5%) */
    // console.log("가로크기5%:"+win5);
    // width() 선택요소의 가로크기 구하기
    // height() 선택요소의 세로크기 구하기
    // -> 단위없는 px값


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

            // 5. 좀비 나타나기! (콜백에서 2초후 setTimeout)
            setTimeout(() => {
                // 현재 li(tg변수)에 있는 좀비만 보여라!
                tg.find(".mz").fadeIn(300); /* find(요소) 하위 중 자손요소 찾기! */ /* 0.3초 */

                // 6. 메시지 변경
                 msg.text("악!;;; 좀비! 어서피하자!")
                 .delay(500).fadeIn(200); /* 0.5초 뒤에 0.2동안 나타나 */
                 /* delay(시간) - 애니메이션 앞에서 지연시간 주가 */

                // 7. 다음변경 버튼 보이기 (this를쓰면 function을 담고 있는 대상이 this 이 함수하고 연결된걸 봐야한다.(가장 가까이 잡고있는게 this로 잡힘) -> 여기서는 mi가 잡힘)
                btns.eq(2)
                .delay(700).slideDown(400); /* 0.4동안 슬라이드 다운해 */ // 700은 위에 500+200 초 후에 나오게 하려고 700임!
                // 0.5초 기다리고 0.2초 나타난 메시지 기다린 후 (0.7초) 실행

            }, 2000); // 콜백 후 2초 후 실행 (setTimeout): 타임아웃함수 //////////
            
        }); ///////////// animate ///////////////

    }); ////////////// 3-2. '옆방으로!' 버튼 click //////////






















}); /////////////////////// jQB(제이쿼리 코드 블록) /////////////////////////////
///////////////////////////////////////////////////////////////////////////////