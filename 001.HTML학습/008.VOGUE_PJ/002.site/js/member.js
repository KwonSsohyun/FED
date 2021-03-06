/// 보그코리아 회원가입 페이지 JS - member.js ///

$(function () { //// jQB : 요소를 선택해서 쓸거니까 로딩해야된다음에 해야하기 때문 /////////

    /* 
        [ 입력폼의 유효성 검사 ]
          ◆ 검사원리
             : 입력창에 클릭 또는 탭하여 입력가능상태 (커서깜빡)를
               포커스 상태라 함 
               이벤트로는 focus 이벤트임!

               이 포커스 상태에서 다른 부분을 클릭(탭)되면 
               포커스가 풀리게 된다.
               이 상태를 블러(blur) 상태라고 함!

               이렇게 이벤트가 블러로 발생할 때
               유효성 검사를 시행함!


          ◆ 이벤트 대상 선정
             : 입력요소중 input type이 
               text, password

               input[type=text], input[type=password]
               -> 뜻 : member.html 들어가서
                       input 태그 중 그 안에 type=text 과
                       input 태그 중 그 안에 type=password 들어가있는것 모두 선택한거임

               ※ 유의사항
                  type=text 인 요소 중에서 
                  아이디가 email2인 요소는 검사는 제외함!

                  왜냐?
                  이메일주소 직접입력은 제외해야함. (값이 없어서임. 이메일쪽에서 자체적 따로 체크)
                  + 모바일검색 input 요소 제외 추가

                  ▶ 제외하기 위한 선택자
                     input[type=text][id!=email2][class!=search]
                     -> != 선택연산자는 제이쿼리 전용 (아닌것)


          ◆ 제이쿼리 사용 메서드 
             : blur() 메서드
            
    */

    $("input[type=text][id!=email2][class!=search],input[type=password]") /* 자꾸 걸려서 [class!=search] 추가함 */
        .blur(function () {
            /* 찍었다 빠졌을때 blur */

            console.log("블러써?");

            // 1. 블러가 발생한 아이디 알아오기
            let cid = $(this).attr("id");
            /* 
                [ 코드풀이 ]
                  ▶ $("input[type=text][id!=email2],input[type=password]")
                  ▷ <input 중에
                      type="text" 쓰는 Html 코드는 가져오고,
                      id="email2" 은 제외하고,
                      -
                      type="password" 쓰는 코드 가져와라


                  ▶ .blur(function(){  
                  ▷  위에서 선택한 것중에 
                      해당하는 해당칸에 커서찍고,
                      다른데를 찍었을때 
                      펑셩 실행
                     
                  ▶ $(this).attr("id");
                  ▷ 위에서 input으로 선택한 애들 중
                     빈칸을 찍고, 커서를 다른데로 나갔을때
                     해당 칸의 id값을 가져와라.
                     (그래서 cid로 변수로 담았기에 아래서 불러올때 #안붙히고 소환할 수 있다.)
            */

            console.log("아이디:" + cid)

            // 2. 입력된 값 알아오기 : val() 메서드
            let cv; // 현재읽어온값 (current value)


            //////////////////////////////////////////////////
            // 공백제거 함수! : val은 값 전달변수
            /////////////////////////////////////////////////
            // let groSpace = function(val){};
            // let groSpace = (val) => {};
            // 이렇게 줄여씀
            let groSpace = val => {

                return val.replace(/\s/g, "");
                /* replace 함수 (앞에거를 뒤에거로 바꿔라) */
                /*
                    정규식 -> /\s/g
                    정규식은 슬러쉬 사이에 쓴다!
                    \s (역슬래쉬s)는 >> 스페이스바 누른것을 뜻함 (빈공간을 뜻함)
                    g는 모두 찾으라는 뜻
                
                */

            }; /// groSpace 함수 //////


            /* ▶ "mnm" 왜 이렇게만 썼을까? 
                : html에서 보면 id="mnm" 써있어서 왠지 #으로 불러와야할거 같은데
                  이렇게 쓴이유는 위에서 "1. 블러가 발생한 아이디 알아오기" 에서
                  let cid = $(this).attr("id"); ->> 아이디의 값만 가져왔기 떄문에
                  그러는 것임
        */
            if (cid === "mnm") // 이름일 경우만!! 앞뒤 공백만 제거(왜냐면 영어이름시에는 성을 띄어야하니까)
                cv = $(this).val().trim();
            /* {cv = $(this).val().trim();} -> {} 생략함 > 명령문이 하나여서 */
            // trim() 메서드 : 앞뒤공백제거 + 공백만 있어도 제거 (공백만 넣어도 필수입력 나오게 하려고 씀)

            else // 그밖의 경우는 모든공백제거 (이름빼고는 공백 모두 없앰)
                cv = groSpace($(this).val());



            //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

            // 제거된 공백 입력창에 반영하기 
            $(this).val(cv) /*  앞뒤에 공백이 제거함 */
            /* 이걸가지고 검사하는것임!!! cv가 아래로 내려감 
               위에서 if이름의 경우나 그밖에 모든경우가 둘중 맞는 값이 cv에 담김
            */

            console.log("현재값:" + cv);
            /*  
                비밀번호 입력창에 값 적은거는 원래 안보이는게 
                정상인데 DB넘어가기 전까지는 콘솔에서는 보임
            */


            // 3. 빈값일 경우 "필수입력" 메시지 출력
            // ------------------------- ◆ if : 빈값으로 썼을때 ◆ -------------------------
            if (cv === "") {
                $(this).siblings(".msg").text("필수입력!")
                .removeClass("on"); // 글자색 복원!
                // siblings(필터) -> 선택요소 이외의 형제들 중 특정요소

                // ******* 통과여부 false *******
                pass = false;
                // 빈칸으로 적었을때는 거짓!

                /* [ 분석! 3가지코드 중 왜 맨 아래만 썼는가? ]
                     ▷ $(".msg").text("필수입력!");
                        -> 하나만 빈값으로 하고 입력창 바깥을 클릭해보면
                           다른 항목에도 다 같이 조금만한 글씨고 필수입력이라고 뜸
                           나는 해당 항목에만 보이게 하고 싶다.

                     ▷ $(this).next().text("필수입력!");
                        -> this가 가르키고 있는 
                           <input 의 동등한 형제중 바로 다음인데 나머지는 잘 나오나,
                           문제는 이메일은 안나옴 <input 바로 다음에 <span class="msg"> 없어서임

                     ▶▶ $(this).siblings(".msg").text("필수입력!");
                         -> this뒤에 .siblings(".msg") 로 쓰면
                            <input 바로 뒤에  <span class="msg"> 없어도,
                            형제들 중에 있어도 잡아줌
                            그래서 시블링 채택!!!
                */

            } //// if문 : 빈값일때 ////////


            // ------------------------- ◆ else if : 해당영역별로 세부조정 ◆ --------------------
            // JQB(제이쿼리 코드블록) 아래 선언적함수에 정규표현식으로 제어함 ------------------------
            // **** 4. 아이디일때 검사하기 ***********************
            else if (cid === "mid") {

                // 유효성 검사 결과
                let res = vReg(cv, cid);
                console.log("검사결과:" + res);
                /* 
                    [ 코드풀이 ]
                      콘솔로 찍어서 보면 
                      cv -> 입력한 값 (공백 자동적으로 빠짐) 이
                      아래 선언적함수인  vReg함수안에
                      switch (cid) 안에
                      case "mid" 의 조건들을 충족해 입력창에 기입하면 true,
                      불충족하면 false 를 확인할 수 있다.
                */

                // 검사가 false일 경우 메시지 띄우기
                if (!res) { // ! (NOT 연산자)로 결과 반대로!

                    $(this).siblings(".msg")
                        .text("영문자로 시작하는 6~20글자 영문자/숫자")
                        .removeClass("on"); // 글자색 변경 제거

                    // ******* 통과여부 false *******
                    pass = false;
                    // 빈칸으로 적었을때는 거짓!

                } ////// if문 : 결과가 false 일때 ///
                else {

                    $(this).siblings(".msg")
                        .text("훌륭한 아이디네요~!")
                        .addClass("on"); // 글자색 변경 class

                } /// else문 : 결과가 true 일때 ///

            } /////// else if문 : 아이디일때 //////


            // **** 5. 비밀번호일때 검사하기 ***********************
            else if (cid === "mpw") {

                // 유효성 검사결과
                let res = vReg(cv, cid);
                console.log("검사결과:" + res);

                // 결과가 false 일 경우 메시지 띄우기
                if (!res) { // !(NOT연산자)로 결과반대로
                    $(this).siblings(".msg")
                        .text("특수문자,문자,숫자포함 형태의 5~15자리");

                    // ******* 통과여부 false *******
                    pass = false;
                    // 빈칸으로 적었을때는 거짓!

                } ////// if문 : 결과가 false 일때 ///
                else { // 통과시 내용비우기 : empty()
                    $(this).siblings(".msg").empty(); // 메세지 지우기
                } /// else문 : 결과가 true 일때 ///


            } ////// else if : 비밀번호 일때 ////////


            // **** 6. 비밀번호 확인 검사하기 ***********************
            else if (cid === "mpw2") {

                // 비밀번호입력값과 비밀번호 확인값이 불일치하면 메세지 출력
                if (cv !== $("#mpw").val()) {

                    $(this).siblings(".msg")
                        .text("비밀번호가 일치하지 않습니다!");

                    // ******* 통과여부 false *******
                    pass = false;
                    // 빈칸으로 적었을때는 거짓!

                } //// if문 : 결과가 같지 않으면 true ///
                else { // 통과시 내용비우기 : empty()
                    $(this).siblings(".msg").empty(); // 메세지 지우기
                } /// else문 : 결과가 false 일때 ///

            } ////////// else if문 : 비밀번호 확인일때 /////


            // **** 7. 이메일 입력창일 경우 이메일 검사하기 ***********************
            else if (cid === "email1") {

                // 이메일 주소 만들기
                let comp = eml1.val() + "@" +
                    (seleml.val() === "free" ? eml2.val() : seleml.val()); /* 3덩어리 합침 */
                /* 
                    [ 코드리뷰 ]
                      (seleml.val() === "free" ? eml2.val() : seleml.val());
                       
                       ▶ 이메일 뒷주소
                          삼합연산자 사용 -> 비?집:놀이동산;
                          한단위여서 구분하려고 ()로 묶어줌
                       
                       ▷ 선택박스 value값이 "free"이면 직접입력(eml2) 값을
                          아니면 선택박스의 선택값을 넣어준다!

                       ▷ seleml.val() === "free" ? 이거냐?
                          맞으면 eml2.val()
                          아니면 seleml.val()

                       ▶ 정리하면,
                          아래서 변수로 담은 let seleml = $("#seleml") 이
                          이메일 박스를 눌러서 선택을 할때 free인 "직접입력"을 선택했어?

                          응 선택했어
                          eml2.val() 실행됨
                          아래서 변수로 담은 let eml2 = $("#email2"); 인
                          이메일 뒷주소인 내가 직접 값을 넣는 칸인 값

                          아니 직접입력 선택안했어
                          seleml.val() 실행됨
                          아래서 변수로 담은 let seleml = $("#seleml") 각이메일 주소 선택한값
                 */
                console.log("결과:" + comp);

                // 이메일 검사처리함수 호출!
                resEml(comp); // 커서 빠질때도 한번더 검사하라고...(안전대책) / 아래서는 실시간으로 검사하라고 호출여러번함
                /* 사용자가 입력한 이메일주소가 true / false 확인 
                   -> 아래서 다 세부적으로 검사돌림 여긴 호출만함 */
                /* 
                    blur 함수안이니까
                    읽기만하고 메모리 바로 실행은 안함 
                    resEml 함수는 아래서 만들었음 
                */


            } ///////// else if문 : 이메일 항목일때 /////



            // ------------------------- ◆ else : 빈값이 아닐때 ◆ -------------------------
            // **** 8. 별도의 검사가 필요없는 경우 빈값 메시지 지우기 ***********************
            else {
                $(this).siblings(".msg").empty();
            } ////////// else문 : 빈값이 아닐때 /////





        }); ////////////// blur 함수 //////////////////////////
    ///////////////////////////////////////////////////////



    // ■■■■■■  계속 쓸거니까 밖에 함 ■■■■■
    // 할당형 함수 (변수가 함수)
    /* 바로 호출해서 쓸거면 아래서 쓰겠지만 메모리에 있다가 검사할때 호출함(위에서 호출함) */
    // ***************************************************
    // *********** 이메일 검사 결과 처리 함수 **************
    // ***************************************************
    // let resEml = function(comp){};  -> 아래랑 같은거임(생략만안함) -> 호출해서 쓸때는 resEml(comp);  
    let resEml = comp => { // "7. 이메일 입력창일 경우 이메일 검사하기" 위에서 호출함. + 물론, 아래서도 호출해서 쓰려고 여기다씀

        // console.log("결과처리함수:"+comp);

        // 1. 이메일 정규식 검사하기!
        let res = vReg(comp, "eml"); /* 맨아래 정규식 내려감! */
        console.log("이메일검사결과:" + res);

        // 2. 이메일 검사결과 메시지 출력하기!
        if (res) { // 통과시 ///

            eml1.siblings(".msg")
                .text("적합한 이메일 형식입니다!")
                .addClass("on"); // 글자색변경 class (css에 있음)

        } ///// if문 : 결과가 true 일때 ////
        else { // 불통과시 ///
            eml1.siblings(".msg")
                .text("맞지않는 이메일 형식입니다.")
                .removeClass("on"); // 글자색 복원

            // ******* 통과여부 false *******
            pass = false;
            // 빈칸으로 적었을때는 거짓!

        } ///// else문 : 결과가 false 일때 ////

    }; /////////////////// resEml 함수 ////////////




    // ***************************************************
    // *********** 키보드 입력시 이메일 체크하기 ***********
    // 키보드 관련 이벤트 종류 : keypress, keyup, keydown
    // 1. keypress : 키가 눌려졌을때 (눌려지는 자체 미완이기 때문에 한템포 늦다.)
    // 2. keyup : 키가 눌렸다가 올라올때 (작동이 끝난 이후)(키 입력 후 발생되는 이벤트)
    // 3. keydown : 키가 눌러져 내려갈때 (키 입력 시 발생되는 이벤트)
    // ▶ 과연 글자가 입력되는 순간은 어떤 키보드 이벤트를 써야할까?
    //    ->> keyup 이벤트가 바로 입력된 글자가 전달됨!

    // 이메일 앞주소
    let eml1 = $("#email1");
    // 이메일 뒷주소
    let eml2 = $("#email2");
    // 이메일 선택박스
    let seleml = $("#seleml")

    // 이벤트 대상 : #email1, #email2
    $("#email1, #email2").on("keyup", function () {

        // 1. 현재 이벤트 대상 아이디 읽어오기
        let cid = $(this).attr("id");
        /* #email1, #email2는 광범위하기 때문에 둘 중에 뭘 찍어오는지 정확하게 값을 파악하기 위해 해당코드씀 */
        console.log("현재아이디:" + cid);

        // 2. 현재 입력된 값 읽어오기
        let cv = $(this).val(); /* cv 여기서는 지역단위변수 function 안에서 씀 밖에서 쓰면 블록킹 */
        console.log("입력값:" + cv);

        // 3. 이메일 뒷주소 셋팅하기
        let backeml = cid === ("email1" ? seleml.val() : eml2.val());
        /* cid가 "email1"이냐? 
           -> 맞으면 seleml.val() : 셀렉트박스 값
           -> 틀리면 eml2.val() : 직접입력 값
        */
        /* 대상이 */
        /* cid가 왜 있냐면 직접선택하는것을 찍었는지 선택하는 것을 찍었는지를 구분 */
        // 조건연산자로 선택박스값 또는 직접입력값을 할당한다!
        // 비? 집 : 놀이동산;  >>  "email1" ? seleml.val() : eml2.val();

        // 4. 선택박스의 선택값이 "free(직접입력)" 이면 이메일 뒷주소 변경
        if (seleml.val() === "free") backeml = eml2.val(); /* {} 생략한거임 {backeml = eml2.val()} */
        /* if만약에 free이면 eml2.val() 덮어쓰고, 
           아니면 나가주시고요. 그래서 따로 else안씀 

           셀렉트선택을 "free"로 하면 
           backeml 변수의 값을 직접입력창 으로!
           
        */

        // 5. 이메일 전체주소 조합하기!
        let comp = eml1.val() + "@" + backeml;
        console.log("이멜주소:" + comp);

        // 6. 이메일 검사 결과함수 호출!
        resEml(comp); /* 쓰는 즉시 표시됨 가능한 형식인지 아닌지 조금한 글자나옴 */

    }); //////// keyup /////////


    ///////////////////////////////////////////
    // 선택박스 변경시 이메일 검사하기
    ///////////////////////////////////////////
    // 검사시점 : 선택박스 변경할때
    // 이벤트 : change
    // 이벤트 대상 : #seleml -> seleml 변수
    seleml.change(function () {

        // 1. 선택박스 변경된 값 읽어오기
        let cv = $(this).val();
        console.log("선택값:" + cv);

        // 2. 선택옵션별 분기문
        if (cv === "init") { // "선택해주세요" 선택시

            // 메시지 출력
            eml1.siblings(".msg")
                .text("이메일 옵션 선택필수!")
                .removeClass("on"); // 글자색 복원

            // 직접입력창 숨기기 (직접입력을 했다가 다시 첫번째 눌렀을때도 사라지게 하기위함)
            eml2.fadeOut(300);

        } // if문 : init 일때 /////////
        else if (cv === "free") {

            // 1. 직접입력창 보이기 fadeIn() + 값초기화 val("") + 커서가게 포커스 주기 focus() 
            eml2.fadeIn(300).val("").focus();

            // 2. 이메일주소 만들기
            let comp = eml1.val() + "@" + eml2.val();

            // 3. 이메일 검사처리함수 호출
            resEml(comp); /* 어떤사항이든 다 검사함 각각에 넣음*/

        } // else if문 : free 일때 /////////
        else { // 기타 이메일 선택시

            // 1. 직접입력창 숨기기 (직접입력을 했다가 다시 다른버튼 눌렀을때도 사라지게 하기위함)
            eml2.fadeOut(300);

            // 2. 이메일 전체주소 조합하기
            let comp = eml1.val() + "@" + cv;

            // 3. 이메일 검사 결과처리함수 호출!
            resEml(comp); /* 어떤사항이든 다 검사함 각각에 넣음*/

        } // else : 기타 이메일 선택시 /////////

    }); ///////////// change 함수 /////////////
    //////////////////////////////////////////



    //*******************************************************/
    /////  최종!! 가입하기(submit) 버튼 클릭시 처리하기  ///////
    //******************************************************/
    // 전체검사의 원리
    // 전역변수 pass (깃발과 같은역활 - 중간에 한번이라도 false나오면 false)
    // -> 전역변수 pass를 설정하여 true를 할당하고,
    //    검사 중간에 불통과 사유발생시 false로 변경!
    //    유효성검사 통과 여부를 판단한다! 

    // 검사방법 : 기존의 이벤트함수인 blur 이벤트를 강제발생시킨다!
    // 이벤트 발생메서드 : trigger(이벤트명)
    /////////////////////////////////////////////////////
    let pass; // 검사용 변수
    $("#btnj").click(function (e) { // 서브밋버튼 클릭시

        // 1. 서브밋 기능막기
        e.preventDefault();

        // 2. pass 통과여부 변수에 true 할당! (처음시작)
        pass = true;


        // 3. 입력창 blur 이벤트 발생시키기(전체검사)
        //    대상 : input[type=text][id!=email2][class!=search],input[type=password]
        //    이벤트발생 메서드 : trigger(이벤트명) -> blur이벤트 발생!(이벤트명을 똑같이 적어야 한다.)
        $("input[type=text][id!=email2][class!=search],input[type=password]")
            .trigger("blur"); /* 위에 똑같이 이미 만들어져있는( 이미 설정되있는 애가 발생) 블러함수를 트리거이벤트 반응해서 실행 */
            /* 
               .trigger()
                : 강제로 이벤트 발생시키는 제이쿼리에서만 쓸 수 있는 메서드
                  위에서는 이벤트가 하나하나될때마다 됬는데, 
                  trigger를 적용하면 대상 한꺼번에 내부적으로 for문 돌린것처럼 
                  순서대로 발생시킨다. (이벤트만 발생시킨다)(이벤트명을 똑같이 적어야 한다.)
            */

        console.log("통과여부" + pass);

        // ******* 통과여부 false *******
        /*  pass = false;
            ▶ 이것을 빈칸을 입력(잘못적어서 오류메세지 뜨는곳) 했을시에 각각찾아서 복붙하기!!!!!
        */

        // 4. 검사결과에 따라 메시지 보이기 및 처리
        if(pass){ // 통과시!

            // 메시지 띄우기
            alert("회원가입을 축하드립니다! 짝짝짝!");
            // 원래는 post 방식으로 DB에 회원정보 입력후
            // 입력완료시에 위의 메시지를 띄워준다!


            // 로그인페이지로 이동하기
            // location.href = "login.html" -> 이걸로 쓰면 이전페이지로 회원가입했던 정보로 돌아가져서 안됨;
            location.replace("login.html");
            /* 
                location.replace 는 뒤로가기시
                history가 살아있어서 보안상 위험하다!
                ▶ .replace()히스토리가 지워진다. (보안상 중요한 페이지면 이걸 씀)

                따라서 현재 페이지에 그대로 덮어쓰기로 위치 이동을 하는 방법을 쓴다.

                ▶ location.replace(이동주소);
                   -> 현재 페이지 history가 덮어써져서 사라진다.
                      이전페이지 돌아가기 안된다.
            */

        } ///// if //////

        else { // 불통과시!
            alert("입력을 수정하세요!");
        }////////////// else ////



    }); /////// click ////////////////


}); ////// jQB /////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////




// ■■■■■■■■■■■■■■■■■■ 선언적함수 ■■■■■■■■■■■■■■■■■■■■■■■■■■
// tip! 전역변수(위에적는걸 선호) / 선언적함수(밑에적는걸 선호)
//      위에 적건 아래 적건 상관없음 VO에 적제 된다는게 그말 필요한 걔만 뽑아다씀
/*////////////////////////////////////////////////////////
    함수명: vReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
    ex) reg = /^[a-z]{1}[a-z0-9]{5,19}$/g; 
        -> reg = "/^[a-z]{1}[a-z0-9]{5,19}$/g"; 망하는것임!!!
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값(전달변수 : 갖고들어옴), cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함  >> 아래서 검사를 해서 리턴해줌!!! (정규식 검사 메서드!!)
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////