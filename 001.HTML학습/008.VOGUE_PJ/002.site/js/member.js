/// 보그코리아 회원가입 페이지 JS - member.js ///

$(function(){ //// jQB : 요소를 선택해서 쓸거니까 로딩해야된다음에 해야하기 때문 /////////

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

               ※ 유의사항
                  type=text 인 요소 중에서 
                  아이디가 email2인 요소는 검사는 제외함!

                  왜냐?
                  이메일주소 직접입력은 제외해야함. (값이 없어서임 이메일쪽에서 자체적 따로 체크)

                  ▶ 제외하기 위한 선택자
                     input[type=text][id!=email2]
                     -> != 선택연산자는 제이쿼리 전용 (아닌것)

          ◆ 제이쿼리 사용 메서드 
             : blur() 메서드
            
    */

    $("input[type=text][id!=email2],input[type=password]")
    .blur(function(){ /* 찍었다 빠졌을때 blur */

        console.log("블러써?");

        // 1. 블러가 발생한 아이디 알아오기
        let cid = $(this).attr("id");
        /* 
            [ 코드풀이 ]
              ▶ $("input[type=text][id!=email2],input[type=password]")
              ▷ <input 중에
                  type="text" 쓰는 Html 코드는 가져오고
                  id="email2" 은 제외하고
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
                 
        */

        console.log("아이디:"+cid)

    }); ///////////////////////// blur 함수 /////
    ///////////////////////////////////////////









}); ////// jQB /////////////////////////////////////////////////