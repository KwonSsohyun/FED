<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Member | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 파비콘(favicon) 이미지 로고 : 탭메뉴 아이콘 넣기(.ico 확장자로 이미지 쓰기도 함)-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <!-- 아이콘 툴킷 : 정해진 문자코드형식으로 적으면, 아이콘으로 보여지게 하는 것 -->
    <!-- [ 아이콘툴킷 : fontisto 사용함 ]
           적용예시 : https://www.fontisto.com/get-started
           아이콘 툴킷은 아래 "1-1-1. SNS 박스" ▶ class="fi fi-instagram" 식으로 클래스로 적용함 

           main.css보다 위에 있는 이유는 같은 설정이 있을때 덮어쓰려고. (예를들면 아이콘 색상을 변경하거나 하기 때문)
    -->
    <link rel="stylesheet" href="./css/member.css"> <!-- 내가 작성한 CSS를 아래쪽에 써야 같은 설정일 경우 우선적용 (덮어쓴다.) -->
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
    <script src="js/member.js"></script> <!-- sub페이지에만 들어간 js -->
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
            <h2 class="stit">Member</h2>


            <!-- 2. 로그인 컨텐츠박스 -->
            <section class="scont">
                <div id="meminfo">
                    <form action="process.php" method="POST">
                        <ul>
                            <li>
                                <label for="mid">아이디</label>
                                <input type="text" id="mid" name="mid" maxlength="25" placeholder="영문자로 시작하는 6~20글자 영문자/숫자">
                                <span class="msg"></span> <!-- 항목아래에 조금만한 글씨로 안내하는 문구 ex) 다시 입력하십시오. -->
                            </li>
                            <li>
                                <label for="mpw">비밀번호</label>
                                <input type="password" id="mpw" name="mpw" maxlength="20"
                                    placeholder="특수문자,문자,숫자포함 형태의 5~15자리">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mpw2">비밀번호확인</label>
                                <input type="password" id="mpw2" name="mpw2" maxlength="20" placeholder="비밀번호 확인을 입력해 주세요">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="mnm">이름</label>
                                <input type="text" id="mnm" name="mnm" maxlength="20" placeholder="이름을 입력해 주세요">
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="gen1">성별</label>
                                남성
                                <input type="radio" name="gen" id="gen1" value="m"> <!-- value="m" -->
                                여성
                                <input type="radio" name="gen" id="gen2" value="w" checked> <!-- value="w" -->
                                <!-- 라디오버튼은 name속성값을 같은
                                     이름으로 하면 하나만 선택되는
                                     그룹핑이된다.
                                     checked속성은 미리선택되게 함

                                     value값을 넣어야 선택값을 보낼 수 있다! 
                                     ▶ 남성은 value="m"
                                     ▶ 여성은 value="w"
                                -->
                            </li>
                            <li>
                                <label for="email1">이메일</label>
                                <input type="text" id="email1" name="email1" placeholder="이메일앞주소">
                                @
                                <select name="seleml" id="seleml">
                                    <option value="init">선택해주세요</option>
                                    <option value="naver.com">naver.com</option>
                                    <option value="daum.net">daum.net</option>
                                    <option value="hotmail.com">hotmail.com</option>
                                    <option value="hanmail.net">hanmail.net</option>
                                    <option value="gmail.com">gmail.com</option>
                                    <option value="free">직접입력</option>
                                </select>
                                <span class="msg"></span>
                            </li>
                            <li>
                                <label for="email2"></label>
                                <input type="text" id="email2" name="email2" placeholder="이메일뒷주소">
                            </li>
                            <li>
                                <!-- 서브밋버튼 -->
                                <input type="submit" value="가입하기" id="btnj">
                            </li>
                        </ul>
                    </form>
                </div>
            </section>






    <!-- /////////// 3. 하단 영역 /////////// -->
    <div class="bgc">
        <?php include "inc/info.inc" ?> <!-- 이렇게 안에 잘라낸 코딩 inc폴더 안에 작업한거 연결한다. -->
    </div>


</body>

</html>