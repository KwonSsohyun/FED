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
    let snum = 0;


    ////// 오른쪽 버튼 클릭시
    // 내용 : 슬라이드가 오른쪽으로 이동하여 다음 슬라이드가 보임!
    abtn[1].onclick = ()=>{

        // 1. 호출확인
        console.log("오른쪽이야!");

        // 2. 슬라이드 번호 증가하기!
        snum++;
        // ★한계값 체크 (슬라이드 개수 이상이면!)
        if(snum >= scnt) snum = 0; // 옵션1 : snum = 0; (무한돌림 - 처음 슬라이드로 가기)
        // if(snum >= scnt) snum = scnt - 1; // 옵션2 : 끝번호에 고정 ->> snum = scnt - 1; 


        // 3. 슬라이드 이동하기
        //    이동원리 : -100% 이면 두번째 슬라이드 -> -100 × 슬라이드 순번(0부터)
        slide.style.left = (-100*snum)+"%";
        slide.style.transition = "left .8s ease-in-out";


    };////////// click 함수 //////////

    /*////////////////////////////////
        함수명 : goSlide
        기능 : 슬라이드 이동하기
    
    */////////////////////////////////











});//////////////////// load 구역 //////////////////// 
/////////////////////////////////////////////////////