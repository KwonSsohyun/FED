/// 보그코리아 서브페이지 JS - sub.js ///

/* ((((( jQB 밖에 있기때문에, html읽기도 전에 불러오짐 ))))) */
/******************************************************** 
           
    "파라미터 받기/가공" 왜? ▶ 로드구역 "밖"에 할까?
    ▶ URL을 읽기때문이다.(요소를 클릭안하기 때문에)
        
********************************************************/

// 파라미터 받기 ▶ get방식으로 데이터 받기 
let pm = location.href;
/* 
    [ 코드 풀이 ]
      = location.href; ▶ 오른쪽에 적었으니 URL 읽어오고
      let pm ▶ 변수에 할당
    
      ※ location.href 을 이퀄 오른쪽에 쓰면, url을 읽어옴
*/


/*  [ 물음표로 넘어오는 파라미터 체크하기 ]  
      왜 체크하나? 없으면 에러나니까!!!
      ▷ sub.html 에서 alt+L+O 해서 들어가보면 
         http://172.17.38.209:5500/001.HTML%ED%95%99%EC%8A%B5/008.VOGUE_PJ/002.site/sub.html
         뒤에 아무것도 없어서 에러난다. 이 페이지로 들어가는 것을 방지하기 위해

      무엇으로 체크하나?
      ▶ indexOf(문자열) -> 없으면 -1

      왜 이걸 하냐?
      /sub.html?cat=runway 우리는 해당카테고리를 누르면 해당 이름이 주소창에 찍히게 했다.
      그래서 ? 부터 시작하는 cat=runway 이것들이 정상 나오게 하는 것임

      tip) 원래 indexOf(문자열)은 찾는 문자열 위치 순번을 리턴함! (문자열안에 찾는거 넣었는데 그게 없으면 -1값을 뱉는다.)
      참고자료 -> Get02.html
*/
if(pm.indexOf("?") === -1){ // 물음표없으면!

    alert("비정상적인 접근입니다!");
    location.href = "index.html";
    // 첫페이지로 돌려보낸다!

} /////// if ///////////////////


// [ 파라미터값 가공하기 ]
//   -> ?로 자르고 뒤에것, =로 자르고 뒤에것
pm = pm.split("?")[1].split("=")[1]
/*  
    [1]을 왜 썼을까? 
    ★ split으로 자르면 "배열" 에 담긴다! 그 중에 1을 선택한것임 

    ▶ 콘솔로 찍어서보면
       ['cat', 'runway']
       0: "cat"
       1: "runway"
       length: 2

       이렇게 찍히는 것을 볼 수 있다.
       우리는 cat까지가 필요한 것이 아닌
       각각의 카테고리 해당이름이 필요한것이니
    ▶ 1번을 선택할 것. 
    
    ▷ 참고자료 JS007.html -> split [ 문자 자르기 함수 ] 보면된다.
*/
/* 
    http://172.17.38.209:5500/001.HTML%ED%95%99%EC%8A%B5/008.VOGUE_PJ/002.site/sub.html?cat=runway
    이 주소값이 원래는 출력되는데
    파리미터값을 가공해서
    runway 이런식으로 각 카테고리 해당 글자만 콘솔에 찍히는 것을 볼 수 있다.
*/

console.log(pm);




////////////////////////////// 제이쿼리 로드구역 ///////////////////////////////////////////////
$(function(){ ////////////// jQB (제이쿼리 코드블록) ///////////////////////////////////////////

    /* ▷▷ 연결작업파일 : FED\010.VueJS학습\003.응용연습\vogue >> "sub.html" 
       ▷▷ 연결작업파일 : FED\010.VueJS학습\003.응용연습\vogue\js >> "real.json" 
    */

    /// 뷰제이에스 데이터 바인딩 코드 ////////////
    new Vue({
        el: "#cont", // 바인딩할 대상(변경요소 포함 부모요소)
        data: {
            // 제이슨파일 ▷ FED\010.VueJS학습\003.응용연습\vogue\js >> "real.json" 

            items: {}, // json데이터 종류(빈객체형 셋팅)
            catName: pm // ▷ 파라미터로 넘어온 경로값 넣기!
        },

        // mounted 속성은 "읽어들여진"의 뜻으로 외부파일을 가져와서 셋팅하는 기능!
        mounted: function(){

            // axios는 외부파일을 읽어올 수 있는 라이브러리
            axios.get("./js/real.json") // 파일경로는 html위치에서 부터 찾아야함! html에 삽입되어있으니까 거기서부터 찾아라!
            .then(response => (this.items = response))
            /* 
                ▶ get() 메서드는 가져올 파일 경로를 셋팅함
                ▶ then() 메서드는 가져온 후 셋팅내용을 코딩함

                ▶ response => (this.items = response)

                   : 가져온 파일 내용을 response 변수로
                     함수 내부에 전달하여 이 값을 Vue JS에
                     셋팅된 this.items 
                     즉, 현재 변수 items에 집어넣어라!
                     ▷ then 바로뒤에 "response"는 ▷ (this.items = response) 해당 "response"로 들어가고 ▷ 이 "response"는 this.items 으로 들어감

                     ()=>{} 화살표함수 줄여쓴것
                     {중괄호} 생략됬고, 
                      ▶ 화살표 뒤에 중괄호 {} 없이 
                         명령문 하나만 있으면
                         그게 바로 return 문이다! 
                      ▶ then(response => (this.items = response))
                         ▷ then(response => {return this.items = response}) -> { return //// } ▷ 생략됨
                      ▶▶ 그러니까 리턴이니까 (this.items = response) 이게 리턴되서 ▶▶ then 으로 간다.
                           (this.items = response) 이렇게 소괄호로 묶은건 리턴될때 한덩이로 묶을라고 이다.


                     this.items = response 이거를 묶어주려고 () 쓴거임
                     오른쪽이 왼쪽으로 들어가니
                     response 가 this.items 으로 들어간것.
            */
        },


        // 브라우저 탭제목 각각 카테고리에 맞게 탭제목 보이게 하기
        methods : {
            chgTit: function(tit){
                document.querySelector("title").innerText =
                tit + " | 보그 코리아 (Vogue Korea)";
            } /// chaTit 함수 ////
        } ///// methods ////

    }); //////// Vue //////////

    
}); ///////////////////// jQB ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////