// 파일럿 PJ 공통기능 JS - common.js

$(function () { //////// jQB //////////////////////
    
    // 햄버거 버튼 클릭시 전체메뉴 보이기
    // class "on" 넣고 닫기버튼(X)으로 변경
    // class "on" 빼고 복귀
    // 클래스 넣고 빼기 토글 -> toggledClass("on")
    // 대상 : .ham
    $(".ham").click(function(){

        // 1. 햄버거 버튼에 class "on" 넣기/빼기
        $(this).toggleClass("on");

        // 2. 전체메뉴(.mbox) 페이드 효과로 보이기/숨기기
        //    -> fadeToggle() -> 페이지효과 전환!
        $(".mbox").fadeToggle(400);

        // 3. 비디오 재생/멈춤
        //    대상 : .bgm

        /*   
            비디오 객체는 get(0)으로 선택후
            ▶ play() 메서드는 재생
            ▶ pause() 메서드는 멈춤 
        */

        /* 
            선택요소에 어떤 class가 있는지 알고 싶을때
            ▶ $(선택자).is(필터) -> 필터가 있으면 true / 없으면 false 

               ex) ($(this).is(".on")); 
                   .on 클래스 있으면 OOOOO -> "true" 나옴
                   .on 클래스 없으면 xxxxx -> "false" 나옴       

            -----------------------------------------------------------
            ▶ 구분방법은? -> .ham에 .on이 있는지 여부
                              ▶ .on 있으면 >> play()
                              ▶ .on 없으면 >> pause()
        */
       
        if($(this).is(".on")){ // .on이 있으면 재생
            $(".bgm").get(0).play();
        } 
        else{ // .on이 없으면 멈춤
            $(".bgm").get(0).pause()
        }


        // console.log($(this).is(".on"));

    }); /////// click //////

}); ////////////////// jQB /////////////////////