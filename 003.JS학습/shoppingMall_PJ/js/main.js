// 메인페이지 JS - main.js

///////////////// html 로드구역 /////////////////
//// html 태그요소보다 위에 있는 JS를 요소 로딩 후 실행 구역 ////
// load이벤트 / DOMContentLoaded 이벤트 ////
window.addEventListener("load",()=>{

    // 로딩완료 확인
    console.log("로딩완료!");

    // [ 구현 내용 ]
    //   버튼 클릭시 배너를 다음or이전으로 이동함
    //   이벤트 대상 : .abtn(이동버튼 2개)
    let abtn = document.querySelectorAll(".abtn");
    console.log("버튼개수:"+abtn.length);

    //   변경대상 : #slide
    let slide = document.querySelector("#slide");
    // 슬라이드 개수(마지막번호 계산에 사용!)
    let scnt = slide.querySelectorAll("li").length; /* 위에서 slide를 정의했기 때문에 .slide의 내부의 li갯수(메모리상 유리) */
    console.log("슬라이드개수:"+scnt);

    // 슬라이드 순번변수(click함수 바깥!)
    let snum = 0; /* 주소지만 바깥에 놓은거임 
    2번째 이미지 부터 왼쪽으로 이동을 해야하니까
    2번째 이미지 1 × -100%
    3번째 이미지 2 × -100%

    length 기준으로 곱하기
    */


    ////// 오른쪽 버튼 클릭시
    // 내용 : 슬라이드가 오른쪽으로 이동하여 다음 슬라이드가 보임!
    abtn[1].onclick = ()=>goSlide(1); 
    // goSlide함수 호출: 전달값 1로 오른쪽 확인!
    ////////// click 함수 //////////


    ////// 왼쪽 버튼 클릭시
    // 내용 : 슬라이드가 왼쪽으로 이동하여 이전 슬라이드가 보임!
    abtn[0].onclick = ()=>goSlide(0); 
    // goSlide함수 호출: 전달값 0로 왼쪽 확인!
    ////////// click 함수 //////////


    /*////////////////////////////////
        함수명 : goSlide
        기능 : 슬라이드 이동하기
    */////////////////////////////////
    let goSlide = dir=>{ /* 줄여서 디렉션 (dir) -> 하나니까 줄여서 중괄호 생략 
        dir : 버튼방향(1->오른쪽, 0->왼쪽)
              ->> 1은 true와 같으므로 if문에 편리하다! (0은 false)
        */
       /* 익명함수 abtn[1].onclick 온클릭이기 때문에 나중에 호출됬기 때문에 상관이 없다.*/
  
        // 1. 호출확인, 전달값 확인
        console.log("나야나!"+dir);

        // 2. 방향에 따른 분기
        // dir === 1이면 오른쪽 / dir === 0 이면 왼쪽


        // ◆◆◆◆◆◆ 2-1. 슬라이드 번호 증가하기!
        if(dir){
            snum++;
            // ★한계값 체크 (슬라이드 개수 이상이면!)
            if(snum >= scnt) snum = 0; // 옵션1 : snum = 0; (무한돌림 - 처음 슬라이드로 가기)
            // if(snum >= scnt) snum = scnt - 1; // 옵션2 : 끝번호에 고정 ->> snum = scnt - 1; 
        }///////////// if문 /////////////


        // ◆◆◆◆◆◆ 2-2. 슬라이드 번호 감소하기!
        else { // dir===0을 else로 처리!
            snum--;
            // 한계값 체크 (0 미만이면!)
            if(snum < 0) snum = scnt-1; // 끝번호에 돌아가기 
        }///////////// else문 /////////////
        


        // 3. 슬라이드 이동하기
        //    이동원리 : -100% 이면 두번째 슬라이드 -> -100 × 슬라이드 순번(0부터)
        slide.style.left = (-100*snum)+"%";
        slide.style.transition = "left .8s ease-in-out";




    };////////// goSlide 함수 //////////











});//////////////////// load 구역 //////////////////// 
/////////////////////////////////////////////////////