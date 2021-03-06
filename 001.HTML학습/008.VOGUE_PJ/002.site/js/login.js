/// 보그코리아 로그인 페이지 JS - login.js ///

$(function(){ // jQB //////////////////////////

    // 서브밋 버튼 클릭시 아이디, 비번 입력확인하기
    // 이벤트 대상 : #sbtn
    // 체크 대상 : #mid, #mpw


    // 아이디요소
    let mid = $("#mid");
    // 비번요소
    let mpw = $("#mpw");


    $("#sbtn").click(function(e){

        // 기본기능막기 : 서브밋 기능막기!
        //               submit의 원래기능은 날아가는건데 그걸 막음 (여기서는 오류창뜨는거 막기위함)
        e.preventDefault();


        /* 두값이 모두 빈값인지 체크함 */
       /*  
            val()은 선택요소의 값을 읽거나 / 값을쓰는(소괄호에 쓰면됨) 메서드 ▶ (양식(form)의 값을 가져오거나 값을 설정하는 메소드)
            trim()은 문자앞뒤의 공백을 제거하는 메서드 -> 공백만 넣으면 공백자체를 제거함! 
       */
        if(mid.val().trim() === "" || mpw.val().trim() === ""){ /* "" 은 빈칸(아무값도 없는 상태) | .trim() 스페이스바같은 쓸때없는거 제거해줌 */

            alert("아이디와 비밀번호 모두 입력해야합니다!");
            /* 아이디만 입력하거나 비번만 입력하면 해당 얼럿창이 뜸! 
               둘다 입력하면 아무것도 안뜸 */

            mid.val(""); // 기존값 지우기
            mpw.val(""); // 기존값 지우기
            mid.focus(); // 아이디 입력창에 포커스 주기 (입력안했으니 아이디에 다시 입력하라고 커서 표시해주는것임)
            // focus() 메서드 : 선택요소에 포커스 이동

        } ///// if ///////
        else{ /* 아이디와 비번을 모두 입력한 경우 엘스로 들어옴 */

            // 아이디와 비번을 모두 입력한 경우
            // 원래는 DB에 회원정보를 조회하여 로그인을 해야함!
            alert("로그인에 성공하였습니다!"); // 임시

        }


    }); //// click ///////////////


}); //////////// jQB /////////////////////////