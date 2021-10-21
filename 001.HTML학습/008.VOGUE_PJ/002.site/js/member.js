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
               -> 뜻 : member.html 들어가서
                       input 태그 중 그 안에 type=text 과
                       input 태그 중 그 안에 type=password 들어가있는것 모두 선택한거임

               ※ 유의사항
                  type=text 인 요소 중에서 
                  아이디가 email2인 요소는 검사는 제외함!

                  왜냐?
                  이메일주소 직접입력은 제외해야함. (값이 없어서임. 이메일쪽에서 자체적 따로 체크)

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
                 (그래서 아래서 불러올때 #안붙히고 소환할 수 있다.)
        */

        console.log("아이디:"+cid)

        // 2. 입력된 값 알아오기 : val() 메서드
        let cv; // 현재읽어온값 (current value)
        

        //////////////////////////////////////////////////
        // 공백제거 함수! : val은 값 전달변수
        /////////////////////////////////////////////////
        // let groSpace = function(val){};
        // let groSpace = (val) => {};
        // 이렇게 줄여씀
        let groSpace = val => {

            return val.replace(/\s/g,"");
            /* replace 함수 (앞에거를 뒤에거로 바꿔라) */
            /*
                정규식 -> /\s/g
                정규식은 슬러쉬 사이에 쓴다!
                \s (역슬래쉬s)는 스페이스를 뜻함
                g는 모두 찾으라는 뜻
            
            */

        }; /// groSpace 함수 //////


         /* "mnm" 왜 이렇게만 썼을까? 
            html에서 보면 id="mnm" 써있어서 왠지 #으로 불러와야할거 같은데
            이렇게 쓴이유는 위에서 "1. 블러가 발생한 아이디 알아오기" 에서
            let cid = $(this).attr("id");  -> 값만 가져왔기 떄문에
            그러는 것임
        */
        if(cid === "mnm") // 이름일 경우만!! 앞뒤 공백만 제거(왜냐면 영어이름시에는 성을 띄어야하니까)
            cv = $(this).val().trim(); 
            /* {cv = $(this).val().trim();} -> {} 생략함 명령문이 하나여서 */

        else // 그밖의 경우는 모든공백제거 (이름빼고는 공백 모두 없앰)
            cv = groSpace($(this).val());



        
        // trim() 메서드 : 앞뒤공백제거 + 공백만 있어도 제거 (공백만 넣어도 필수입력 나오게 하려고 씀)

        // 제거된 공백 입력창에 반영하기 
        $(this).val(cv)  /*  앞뒤에 공백이 제거함 */

        console.log("현재값:"+cv);
        /*  
            비밀번호 입력창에 값 적은거는 원래 안보이는게 
            정상인데 DB넘어가기 전까지는 콘솔에서는 보임
        */

        
        // 3. 빈값일 경우 "필수입력" 메시지 출력
        if(cv === ""){
            $(this).siblings(".msg").text("필수입력!");
            // siblings(필터) -> 선택요소 이외의 형제들 중 특정요소

            /* [ 3가지 코드풀이 ]
               ▶ $(".msg").text("필수입력!");
                  -> 하나만 빈값이어도 다른 항목에도 다 같이 필수입력이라고 뜸
                     나는 해당 항목에만 보이게 하고 싶다.

                ▶ $(this).next().text("필수입력!");
                   -> 동등한 형제중 바로 다음인데
                      이메일은 안나옴 바로 다음에 <span class="msg"> 없어서임

                ▶ $(this).siblings(".msg").text("필수입력!");
                   -> .siblings(".msg")
                      <input 바로 뒤에  <span class="msg"> 없고
                      형제들 중에 있어도 잡아줌
            */

        }//// if문 : 빈값일때 ////////

        // 4. 아이디일때 검사하기 ///////////////////////
        else if(cid === "mid"){

            // 유효성 검사 결과
            let res = vReg(cv,cid);
            console.log("검사결과:"+res);

            // 검사가 false일 경우 메시지 띄우기
            if(!res){ // ! (NOT 연산자)로 결과 반대로!

                $(this).siblings(".msg")
                .text("영문자로 시작하는 6~20글자 영문자/숫자")
                .removeClass("on"); // 글자색 변경 제거

            } ////// if문 : 결과가 false 일때 ///

            else {

                $(this).siblings(".msg")
                .text("훌륭한 아이디네요~!")
                .addClass("on"); // 글자색 변경 class

            } /// else문 : 결과가 true 일때 ///

        } /////// else if문 : 아이디일때 ////



    }); ////////////// blur 함수 //////////////
    ///////////////////////////////////////////


}); ////// jQB /////////////////////////////////////////////////




// ■■■■■■■■■■■■■■■■■■ 선언적함수 ■■■■■■■■■■■■■■■■■■■■■■■■■■
// tip! 전역변수(위에적는걸 선호) / 선언적함수(밑에적는걸 선호)
/*////////////////////////////////////////////////////////
    함수명: vReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값(전달변수 : 갖고들어옴), cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
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