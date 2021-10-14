/// 보그 코리아 - 링크시스템 JS : linksys.js ///
//               링크연결할거 있으면 사용하는 JS


////////////////////////////// 제이쿼리 로드구역 ///////////////////////////////////////////////
$(function(){ ////////////// jQB (제이쿼리 코드블록) ///////////////////////////////////////////

    console.log("링크시스템 로딩구역!");

    /// 1. 로고 클릭시 첫페이지로 가기
    //     대상 : .logo a
    $(".logo a").click(function(){
        location.href = "index.html";
    }); /////////// click ///////////




    /// 2. GNB 메뉴 링크 연결하기
    //     대상 : .gnb a
    //     이벤트 : click -> click() 메서드사용
    
    $(".gnb a").click(function(e){ 
        
        // 1. 기본 이동속성 막기
        /*    ★ a 기본속성이 아래로 조금이라도 스크롤내려서 메뉴같은거 누르면, 스크롤이 위로 자기맘대로 휙 올라간다. (기본이동속성 막기 -> 펑셩옆에 (e)쓰고 -> e.preventDefault(); */
        //    e - 이벤트 전달변수 : 여러가지 이벤트 관련 설정가능!
        
        e.preventDefault();
        /* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
            [ 기본 이벤트 발생을 막아준다! prevent : 막다 뜻 ]
              .preventDefault();

              + e라는 이벤트 전달변수를 꼭 써야 한다! (이벤트를 전달받아야 쓸수 있다.)
                (제이쿼리언어에서는 그렇게 써야 한다. 정했다.)
           ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
        */ 



        // 3. 클릭된 a요소의 텍스트 읽어오기 (this로 가져옴 = .gnb a)
        let mtxt = $(this).text().toLowerCase().trim(); 
        /* .toLowerCase() 왜 썼냐?
            메뉴가 현재는 대문자인데, Get방식으로 넘길때 소문자로 넘기고자함 (그래서 변환함)
            ▶ sub페이지에서 소문자로 넘긴 파라미터를 활용함! 
        */
        /* .trim() 왜 썼냐?
            마지막 검색아이콘 클릭시 앞뒤공백있는, "search"라는 글자 나온다! (이것을 앞뒤 공백 다 없애고, 순수 단어만 보이게 하려고!->"search")
            ▶ 이것이 앞뒤공백을 제거한다! (트름~) */

        /* ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
            [ 소문자 변환 : 메서드]
              .toLowerCase()

            [ 대문자 변환 : 메서드]
              .toUpperCase()

            [ 문자데이터 앞뒤공백제거 : 메서드 ]
              .trim()
           ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
        */
        console.log(mtxt);
 


        // 4. ★ 페이지 이동하기 (파라미터 생성/보내기)
        /* 
                 여기서 파라미터를 생성(보내기나 같은말)을 했기때문에
                 "sub.js"에서 >>> 
                  파라미터를 받고, 가공할 수 있는 것이다.
        */

        //    url뒤에 ?(물음표) 키=값 쌍으로 보냄
        //    cat 이라는 키이름은 내가 지은것이다! (카테고리 줄여서 cat이라 지음)
        //    키=값으로 데이터를 맞추기 위함!
        if(mtxt !== "search") // ★ 검색이 아닐때만 이동! ★ (검색 누르면 이제 새창 이동안됨) : 여기 안에서 검색할거지 새창으로 이동할게 아니라서 설정함
            location.href = "sub.html?cat="+mtxt;
            // 오른쪽에 적은 문자데이터값이 >>> 왼쪽으로 이동되서 페이지가 이동한다.
            // 핵심은 왼쪽이 오른쪽으로 넘어온다. 괄호안쪽에서 먼저 실행한다. JS005.html 참조
        /* 
           http://172.17.38.209:5500/001.HTML%ED%95%99%EC%8A%B5/008.VOGUE_PJ/002.site/sub.html 
           해당경로에서
           ▶ "sub.html" 뒤에 쓰려고 쓴거임 ▶ "sub.html?cat="+mtxt;
               참고자료 : 003.JS학습 > Get01.html
        */
        /* 
          해당코드를 썼더니, 메인 카테고리 눌러보니 해당 카테고리명에 맞는 url 나옴
          http://172.17.38.209:5500/001.HTML%ED%95%99%EC%8A%B5/008.VOGUE_PJ/002.site/sub.html?cat=people
          ▶ cat=fashion / cat=beauty / cat=people ... 
        */



    }); ///////// click ////////////


}); ///////////////////// jQB ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////