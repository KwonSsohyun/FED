<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 파비콘(favicon) 이미지 로고 : 탭메뉴 아이콘 넣기(.ico 확장자로 이미지 쓰기도 함)-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <!-- 아이콘 툴킷 : 정해진 문자코드형식으로 적으면, 아이콘으로 보여지게 하는 것 -->
    <!-- [ 아이콘툴킷 : fontisto 사용함 ]
           적용예시 : https://www.fontisto.com/get-started
           아이콘 툴킷은 아래 "1-1-1. SNS 박스" ▶ class="fi fi-instagram" 식으로 클래스로 적용함 

           main.css보다 위에 있는 이유는 같은 설정이 있을때 덮어쓰려고. (예를들면 아이콘 색상을 변경하거나 하기 때문)
    -->
    <link rel="stylesheet" href="./css/login.css"> <!-- 내가 작성한 CSS를 아래쪽에 써야 같은 설정일 경우 우선적용 (덮어쓴다.) -->
    <link rel="stylesheet" href="./css/media.css">
    <!-- 
         미디어쿼리는 별도의 파일로 불러와야한다. (기존파일에 @import하면 적용하면 안됨!) 
         : 이게 무슨 소리냐면 "main.css" 열어보면 ->> "외부CSS 합치기" 가 있다.
           @import url(reset.css);  @import url(core.css);  @import url(common.css); ->> 이런식으로 외부 CSS를 "main.css"에서 합쳐서
           "index.html" 에서 메인 CSS 하나만 가져왔다.
           
           이때 "main.css"에서 외부 CSS합치기에 미디어쿼리 CSS(media.css)를 가져오면 오류가 난다는 뜻.
           
           뭐 "main.css" 맨밑에다가 "@media only screen and (max-width:500px)" 써도 되겠지만
           누가 그렇게 쓰겠는가. 분리를 시키자.
           ▶ "media.css" 폴더를 만들어서 거기서 미디어쿼리 코드를 작성한 후
               Html 파일에 붙혀넣는다. (main.css) 아래에 붙혀넣는다. (먼저 보여지고, 가로폭이 조절됬을때 미디어쿼리가 보이는 것이기 떄문)
    -->

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <!-- <script src="js/common.js"></script> -->
    <script src="js/login.js"></script> <!-- sub페이지에만 들어간 js -->
</head>

<body>
    <!-- /////////// 1. 상단 영역 /////////// -->
    <div id="top">
        <?php include "inc/top.inc" ?> <!-- 이렇게 안에 잘라낸 코딩 inc폴더 안에 작업한거 연결한다. --> 
    </div> <!-- #top 끝나는 부분 -->




    <!-- /////////// 2. 메인 영역 /////////// -->
    <div class="bgc">
        <!-- bgc = 백그라운드 컬러 + 하단영역에도 클래스이름 같이줌 -->
        <main class="cont ibx">
            <!-- 1. 타이틀 -->
            <h2 class="stit">Log In</h2>


            <!-- 2. 로그인 컨텐츠박스 -->
            <section class="scont">
                <div id="login">
                    <form action="process.php" method="POST" class="logF"> <!-- 아래서 입력한 내용들이 "process.php"로 날아간다. -->
                        <!-- 아이디박스 -->
                        <div class="minput">
                            <label for="mid">아이디</label>
                            <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디를 입력해 주세요"> <!-- 독자적이어서 id씀 -->
                        </div>
                        <!-- 비밀번호박스 -->
                        <div class="minput mi2">
                            <label for="mpw">비밀번호</label>
                            <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호를 입력해 주세요">
                        </div>
                        <!-- 버튼영역 -->
                        <div class="btnbx">
                            <input type="submit" id="sbtn" value="LOGIN"> <!-- submit : 싸서 보내는 역할 -->
                            <!-- 설명쓸게 필요없기 때문에 label for 없는것임 -->
                        </div>
    
                        <!-- 기타체크링크 -->
                        <div class="addbx">
                            <span>
                                <input type="checkbox" id="chkbx" name="chkbx">
                                <label for="chkbx">아이디저장</label> 
                            </span>
                            <a href="#">아이디찾기</a> | 
                            <a href="#">비밀번호찾기</a> | 
                            <a href="#">회원가입</a>
                        </div>
                    </form>
                </div>
            </section>

            <!--    _________________________________________________________________________________________________________

                    [ form 요소 ]
                      : 입력된 데이터를 묶어서 서버로 전송하는 역할

                      ◆ action 속성 : 서버전송 페이지 주소
                                       ex) <form action="process.php" 

                      ◆ method 속성 : 전송방식 2가지 중 선택 (get/post)
                                       ▶ get 방식은 url로 데이터로 전달하는 방식
                                       ▶ post 방식은 페이지로 숨겨서 데이터를 전달하는 방식
                                       ▷ 보안성은 post 방식이 좋다.

                                       ex) <form action="process.php" method="POST"

                    ----------------------------------------------------------------------------------------------------------

                    [ input 요소 ]
                      : 사용자가 입력할 수 있도록 입력양식을 제공하는 요소
                        ex) <input type="text" 

                      - type 속성 : 여러가지 입력양식을 선택함 
                                    1) text : 글자 입력
                                    2) password : 비밀번호 입력 (쓰는게 보여지지 않도록 땡떙떙 감쳐지는것) (입력시 글자숨김)
                                                  -> 비밀번호는 영역복사도 안됨!

                                    3) radio : 라디오버튼 (보통 "단일 선택시" 사용) | ex) 남성 or 여성 선택
                                    4) checkbox : 체크박스 버튼 (보통 "다중 선택시" 사용)

                                    5) button : 버튼 형식의 입력폼 (날아가지는 않지만 기능을 줄수 있다.)

                                    6) submit : form 요소의 입력값을 전송하는 기능
                                                -> (form요소의 action 속성값에 셋팅된 페이지로 감!)

                                                    위 코드에서는  
                                                    버튼영역에서 쓴
                                                    <input type="submit" 을 썼기에 누르면,
                                                    상단에 적혀있는 <form action="process.php" 인 여기로 날아감


                                    7) reset : 폼양식 데이터를 초기화함 (쓴 값들 모두 지움)
                                    8) hidden : 데이터를 숨겨서, 페이지에 저장할 목적으로 사용

                                    9) 기타 html5 에서 새로 등장한 type 들
                                       <text와 연관된 것들 : 형식에 맞는지 검사하려고 세부적 나옴>
                                        · search : 검색
                                        · tel : 전화번호
                                        · email : 이메일 주소
                                        · url : 웹페이지 주소
                                          ->> 기존에 text 하나만 있었으나, 데이터 유효성 검사를 
                                              브라이우저 자체 내장 유효성 검사를 할 수 있게 제공함!

                                       <특이한 것들>
                                        · color : 컬러피커가 뜸 (색상 정보)
                                        · date : 달력이 뜸 (날짜 입력)
                                        · file : 파일선택창 뜸 (파일경로 정보)
                                        · number : 입력숫자 범위 지정
                                        · range : 지정된 범위값을 버튼 드래그로 설정 
                                        · time : 시간선택창 뜸 (시간 입력)
                                        · week : 주단위 선택창 뜸 (주단위 입력)
                            
                                       ->> 참고 페이지
                                           https://www.w3schools.com/html/html_form_input_types.asp

                    ----------------------------------------------------------------------------------------------------------

                    [ input 공통속성 ]
                      1. maxlenght 속성 : 최대 입력 글자수지정 (ex maxlength="10")
                      2. placeholder 속성 : 입력창에 안내문구를 출력 (입력순간 글자는 사라짐!)
                      3. value 속성 : 미리 입력하고자 하는 텍스트를 넣음 (ex 버튼이름, 010, http ... ) 고정되야하는 텍스트시 씀
                                      (버튼일 경우 버튼 글자로 출력됨!)
                      4. disabled 속성 : 값없이 바로 속성명만 사용해서 입력 금지 상태 (디져버림~) (ex 회원정보 수정시 - 아이디 변경금지)

                    ----------------------------------------------------------------------------------------------------------

                    [ input 요소에 name속성을 쓰는 이유는? ]
                      ->> action에 지정된 서버전송 페이지에서 입력값을 읽을 때
                          name으로 지정된 입력양식 요소의 값을 읽어간다.
                          ★ 따라서 name속성을 꼭 지정할것! 
                             (아이디명과 동일해도 상관없음!)

                          ex) <label for="mid">아이디</label>
                                  <input type="text" name="mid" id="mid"

                              ※ 꼭 name 줘야함! ->> name="mid"
                              ※ name속성과 아이디명과 동일해도 상관없음! ->> name="mid" / id="mid"
                              ※ 꼭 아이디로 써야만함(클래스X) 그래야 for가 먹음 ->> id="mid"

                          ---------------------------------------------------------

                          "동기"는 전체페이지만 움직인다.
                          "비동기"는 한부분만 움직이고(ex 날씨섹션만 움직인다던지),
                          
                          (동기) name과 id 가 필요
                          (비동기) name 없이 id만 가지고도 값을 날라갈 수도 있다. 

                    ----------------------------------------------------------------------------------------------------------

                    [ label 요소 ]
                      - input 요소의 설명을 표시함
                      - 라벨요소는 웹접근성의 필수 요소임! 반드시 표시할것!
                      - for속성 : input 요소의 id명과 같아서, 라벨클릭시 입력요소로 포커스가 자동으로 들어간다!
                                  이게 무슨 소리냐면 아래서 예시로 설명했듯이 
                                  <label for="mid"> 의 이름인 "mid" 와 <input ... id="mid" 의 이름이 같아야 들어간다는 뜻
                                 ※ 꼭 아이디로 써야만함(클래스X) 그래야 for가 먹음 ->> id="mid"

                        ex) <label for="mid">
                               <input type="text" name="mid" id="mid"
                            
                            -> 이렇게 label for의 이름과 id이름을 똑같이 해야한다.
                            ※ 꼭 아이디로 써야만함(클래스X) 그래야 for가 먹음 ->> id="mid"
                            ++ 디자인을 하고 싶으면 <label for=에다가 디자인해라. <input type에다가 값만 준다.
                    _________________________________________________________________________________________________________

                    [ ★★★ 정리를 하면 ]
                      <form action="process.php" 
                          <label for="mid">   
                          <input type="text" name="mid" id="mid"
                          
                      >> name="mid"는 <form action> 때문에 꼭 써야하고
                         id="mid"는 <label for="mid"> 때문에 꼭 써야하고
                         input type="text" 어떤 타입으로 할건지 정해야해서 꼭 써야한다.   
                    _________________________________________________________________________________________________________
             -->

    
    
    
    
    <!-- /////////// 3. 하단 영역 /////////// -->
    <div class="bgc">
        <?php include "inc/info.inc" ?> <!-- 이렇게 안에 잘라낸 코딩 inc폴더 안에 작업한거 연결한다. -->
    </div>



</body>

</html>