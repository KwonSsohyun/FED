// 구르미 갤러리 JS - main.js

////////////////////////////// 제이쿼리 로드구역 ////////////////////////////////
$(function(){ //////// jQB (제이쿼리 코드블록) //////////////////

    // 버튼 클릭시 이미지 이동하기 //
    // 대상 : .abtn -> .lb .rb 구분!
    // 변경대상 : .gbx - 이미지를 담은 박스
    let gbx = $(".gbx");

    // 광클금지 상태변수 ******************************************
    let prot = 0; //  0 허용  /  1 불허용 
    /* 
        (전역변수 (공용저장공간)) ▶ 아래 function에서 값을 바꿀 수도 있다. 
        ex) prot = 1; 아래서 1로 변경했기에 1로 된다. 
    */

    $(".abtn").click(function(){

        /**************************************************************************************************** 
            [ 광클 금지 설정! ]

              광클금지는 광클상태변수를 조정하여
              애니메이션이 그려지는 시간동안 코드실행을 막아준다!

              1) click(function) 밖에 
                 "전역변수" 로 변수를 선언해준다.
                 let prot = 0; ▶  0 허용 / 1 불허용  

              2) 클릭이 되면! 이니까 (광클도 클릭을 마구)
                 click(function) "함수 안" 에 작성한다.

                 if(prot) return;
                 ▶ prot변수에서 처음에 0이 내려오니, 리턴안되고 내려오면서 아랫쪽 코드 실행됨 (1은 돌아갓!)
                 ▷ 1은 true / 0은 false ▷ 원래 트루(1)면 리턴됨 (해당 성질을 이용한것임 : JS002.html > 6. 데이터 종류 에 있음) : 조건문에서만 사용가능
                 ▷ 그래서 0이 참이 아니기때문에, 리턴이 안되서 아래로 들어간것임.

              3) 그리고 바로 아래
                 prot = 1;
                 2번에서 내려온 0이 다른것들이 막 내려오면 안되니까 
                 1로 변수 값을 바꿔서 잠궈버린다.

              4) 근데 1로 계속 잠글 수 없으니
                 일정시간 뒤에 0으로 값을 바꿔준다.
                 
                 setTimeout(() => {prot = 0;}, 400);
                 ▶ setTimeout , 400 
                    0.4초 뒤에 다시 0으로 prot값이 바뀜
                    (css에보면 .gbx img 트랜지션을 0.4초를 줬기에 똑같이 시간적용함)
                 
              5) 이제 0으로 바뀐 값이 다시 전역변수에서 내려와서
                 0이 다른애들 마구 못 들어오게 1로 값을 변경해버리고
                 0.4초 후에 다시 값을 0으로 바꾼다. (계속 반복) 
        
        ****************************************************************************************************/
        if(prot) return; // prot가 1이면 돌아갓! 0만 들어올 수 있음. (1이면 트루 / 0이면 폴스) 원래 트루면 리턴됨 -> 이 성질을 이용한것임 (0이면 거짓이라서 들어가고, 1이면 참이라서 리턴됨)
        /* 
            if뒤에 괄호안이 ( )가 조건문이기 떄문에 ▶ 1/0을 써도 된다. /  트루/폴스를 써도 되고 / 뭐보다 크냐? 등 조건식을 쓰면 된다.
        */
        prot = 1; // 0이 들어오고, 1로 해서 잠궈버림 

        setTimeout(() => {
            prot = 0; //해제
        }, 400); // 타임아웃  -> 0.4초 후에 0으로 함
        // css에보면 .gbx img 트랜지션을 0.4초를 줬기에
        // 타임아웃 똑같이 0.4초함 


        //////////////////////////////////////////////////////////////////////////////////////////////////

        // 자동호출 지우기! ★★★★★★ -> 내가 직접 클릭하면 알아서 자동넘김 멈춤
        clearAuto();  /* 아래 적은 함수 호출된거임 let clearAuto = ()=>{ //// 호출된거임 ///// }*/
        /* $(".abtn").click(function() -> .abtn 클릭하면~ (위에 속한 함수를 봐라.) clearAuto 함수 실행! */

        //////////////////////////////////////////////////////////////////////////////////////////////////

        // console.log($(this).is(".rb"));
        // -> 여기서 오른쪽 버튼 클래스 여부 확인함!
        /* 
            [ is() 메서드 ]
              : is는 그야말로 "상태를 알아내는" 메서드 
                is() 메서드는 선택요소의 태그나 이름을 확인함
                맞을경우 true 를 리턴함!
        */

        if($(this).is(".rb")){ // 오른쪽 버튼일때
            console.log("오른쪽!");
            goSlide(1); // 오른쪽 이동 호출!

        } ///////////// if ////////////////

        else { // 왼쪽 버튼일때
            console.log("왼쪽!");
            goSlide(0); // 왼쪽 이동 호출!

        } ///////////// else //////////////
        
    }); ///////// click /////////////////////



    /*///////////////////////////////////////// 
        함수명 : goSlide
        기능 : 이미지 이동하기 (넘기는 기능만)
    *//////////////////////////////////////////
    let goSlide = (dir)=>{ // dir : 1이면 오른쪽 / 0 이면 왼쪽
        console.log("방향:"+dir);

        // 이미지박스의 이미지 읽어오기
        let gimg = gbx.find("img");

        // 오른쪽 방향
        if(dir){
            // 맨앞 이미지 -> 맨뒤로 이동
            gbx.append(gimg.first());
            // gbx.append(맨앞이미지)

        }///////////// if ///////////

        // 왼쪽 방향
        else{
            // 맨뒤 이미지 -> 맨앞으로 이동
            gbx.prepend(gimg.last());
            // gbx.prepend(맨뒤이미지)

        }//////////// else /////////

    };/////// goSlide 함수 //////////
    ////////////////////////////////


    // ■■■■■■■■■■■■■■■■■■■■■■ 공용 저장공간 (함수바깥에 있으니, 참조할 수 있음) ■■■■■■■■■■■■■■■■■■■■■■■■
    // 공용저장공간 : 완벽한 전역변수는 아니다. 왜냐하면 위로 올려보면 function안에 또 담겨있기 때문이다.
    //               하지만, 아래에서 봤을때는 바깥이니까 애매하지만 전역이라고 칭해줌


    // ★★★★★★ 인터발용 변수 (함수 바깥에 있어야 지울수도 쓸수도 있다.)(지금은 지우기 위함!)
    let autoI;
    /* 지우기 위해서 변수에 담아놓는다. 
       왜 그러냐면, 변수에 담아놓으면 이 변수만 딱 지정해서 손쉽게 지울 수 있기 때문이다. (이 해당구역안에서만 놀수있게 통제)
       뭔소리냐면 미국에 살고있는 소현을 찾기 힘드니까
       쉽게 통제하기 위해서 변수에 담궈놓고 감옥넣은것처럼 넣어는것 
    */

    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
       

    /*/////////////////////////////////////////////// 
        함수명 : autoSlide
        기능 : 자동넘기기 (실행되는 구간이 다르고, 기능이 다르면 함수를 따로만든다.)
    *////////////////////////////////////////////////
    let autoSlide = ()=>{  
        /*  이걸 크게 autoSlide에 담음 ▶ 변수지만 "함수"다. ()=>{}  

            왜 굳이 let autoSlide = ()=>{/////} 로 함수로 했을까?
            : 변수는 담아놓고 사용하는거고, 함수로 담은건 호출할 수 있기 때문에 함수로 담은것이다.
        */
        autoI = setInterval(()=>{ /* 위에서 공용 저장공간에 변수 선언한 "autoI"에 다시 담는다. */
            goSlide(1); // 오른쪽 이동 호출!
        },3000); /// 인터발 함수 /////* ★★★★★★  setInterval(함수,시간) -> 일정시간 간격으로 함수 호출해주는 것 (설정한 몇초 간격으로 계속 실행해) */

    }; ////////// autoSlide //////////


    // ■■■■■■■■■■■■■■■■■■■■■■ 공용 저장공간 (함수바깥에 있으니, 참조할 수 있음) ■■■■■■■■■■■■■■■■■■■■■■■■

    // ★★★★★★ 자동호출함수 최초 호출(함수 아래에서 호출할것! - 이제 3초간 이미지 움직임)
    autoSlide();

    // ★★★★★★ 타임아웃용 변수 (손쉽게 지우기 위해서 변수 담음 = let autoI; 위에서 변수 담은것과 같은 원리)
    let autoT;

    // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■


    /*/////////////////////////////////////////////////// 
        함수명 : clearAuto
        기능 : 자동호출지우기 + 일정시간뒤 다시자동 (실행되는 구간이 다르고, 기능이 다르면 함수를 따로만든다.)
    *////////////////////////////////////////////////////
    let clearAuto = ()=>{
        console.log("자동지우기");

        // ★★★★★★ 1. 인터발 지우기
        clearInterval(autoI); /* 아까 위에서 autoI에 setInterval 한 내용이 클리어됨 ▶ 3초마다 넘어가는사항 삭제! */
        // clearInterval() 인터발함수 지우는 메서드

        // 2. ★★★★★★ 타임아웃 지우기(안지우면 실행 쓰나미가 일어남!!!)
        clearTimeout(autoT); 
        // 지우고 넣고 하니까 하나만 남는다.
        // 결과적으로 타임아웃 셋팅이 "하나만 남는다"!!!
        /* 
            문제는 여러개를 클릭했을때, 그걸 브라우저 메모리가 그걸 기억하고, 클릭갯수만큼 쓰나미 처럼 파팍박 나온다. 
            ▶ 지우는 함수를 호출해서 아래서 지운다.

            여기서 꼭 지운다.
            ▶ clearTimeout(autoT);

            아래서 할당을 한다. (타임아웃이 하나만 남아서 실행쓰나미가 일어나지 않는다.)
            ▶ autoT = setTimeout(autoSlide,4000);
        */

        // 3. ★★★★★★ 일정시간 뒤 다시 자동호출하기 -> 내가 직접 클릭하고, 4초동안 아무런 움직임 없으면 다시 움직임 : 변수에 할당
        autoT = setTimeout(autoSlide,4000); /* 3초마다 돌아가는게(autoSlide 위에서 함수 정의함), 4초뒤 실행 */
        /* setTimeout -> 설정한 몇초 뒤 한번 실행 */


    }; ///////////////// clearAuto 함수 ///////////



}); /////////////////////// jQB //////////////////////////////////////////////
