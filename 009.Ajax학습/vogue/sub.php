<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fashion | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 파비콘(favicon) 이미지 로고 : 탭메뉴 아이콘 넣기(.ico 확장자로 이미지 쓰기도 함)-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <!-- 아이콘 툴킷 : 정해진 문자코드형식으로 적으면, 아이콘으로 보여지게 하는 것 -->
    <!-- [ 아이콘툴킷 : fontisto 사용함 ]
           적용예시 : https://www.fontisto.com/get-started
           아이콘 툴킷은 아래 "1-1-1. SNS 박스" ▶ class="fi fi-instagram" 식으로 클래스로 적용함 

           main.css보다 위에 있는 이유는 같은 설정이 있을때 덮어쓰려고. (예를들면 아이콘 색상을 변경하거나 하기 때문)
    -->
    <link rel="stylesheet" href="./css/sub.css"> <!-- 내가 작성한 CSS를 아래쪽에 써야 같은 설정일 경우 우선적용 (덮어쓴다.) -->
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
    <script src="js/common.js"></script>
    <script src="js/sub.js"></script> <!-- sub페이지에만 들어간 js -->
</head>

<body>

    <!-- 로그인 세션처리 인클루드 -->
    <?php include "inc/login_session.inc" ?>
    <!-- ▶ FED\009.Ajax학습\vogue\inc >> "login_session.inc" -->
    <!-- 이제 로그인하면 상단에 ~님 환영합니다. 뜨고 상단작은 메뉴 로그아웃 뜸 
         권한이 관리자인(A 나 S) 어드민(A)이나, 슈퍼어드민(S) 주면, 작은 메뉴에 관리자뜸 -->


    <!-- /////////// 1. 상단 영역 /////////// -->
    <div id="top">
        <?php include "inc/top.inc" ?> <!-- 이렇게 안에 잘라낸 코딩 inc폴더 안에 작업한거 연결한다. --> 
    </div> <!-- #top 끝나는 부분 -->




    <!-- /////////// 2. 메인 영역 /////////// -->
    <div class="bgc">
        <!-- bgc = 백그라운드 컬러 + 하단영역에도 클래스이름 같이줌 -->
        <main class="cont ibx">
            <!-- 1. 타이틀 -->
            <h2 class="stit"></h2>

            <!-- 2. 서브메뉴(LNB-Local Navigation Bar) -->
            <nav class="lnb">
                <!-- 아래를 주석처리한 것은 "sub.html" -> "2-2. 서브메뉴(LNB) 넣기" 셋팅함-->
                <!--  <ul> 
                    <li>
                        <a href="#">전체</a>
                    </li>
                    <li>
                        <a href="#">트렌드</a>
                    </li>
                    <li>
                        <a href="#">아이템</a>
                    </li>
                    <li>
                        <a href="#">피플</a>
                    </li>
                    <li>
                        <a href="#">화보</a>
                    </li>
                </ul> -->
            </nav>

            <!-- 3. 서브컨텐츠박스 -->

            <section class="pt2 rbx">
                <div class="rbxIn">
                    <div class="cbx bgi bg1-1">
                        <h2>
                            <!-- &lt;고양이를 부탁해&gt;의 20주년 기획전 -->
                        </h2>
                    </div> <!-- 옆으로 흐르게 설정 -->
                    <div class="cbx bgi bg1-2">
                        <h2>
                            <!-- 패션계에서 가장 주목받는 신인 디자이너, 자크무스 -->
                        </h2>
                    </div>
                    <div class="cbx bgi bg1-3">
                        <h2>
                            <!-- 서울국제여성영화제 장편 경쟁 한국 영화 4편 -->
                        </h2>
                    </div>
                </div>
            </section>

            <section class="pt2 rbx">
                <div class="rbxIn">
                    <div class="cbx bgi bg2-1">
                        <h2>
                            <!-- 드라마 &lt;알고 있지만&gt;의 나비가 유행이라고? -->
                        </h2>
                    </div>
                    <div class="cbx bgi bg2-2">
                        <h2>
                            <!-- 홍콩 누아르 영화 주인공으로 변신한 민주 -->
                        </h2>
                    </div>
                    <div class="cbx bgi bg2-3">
                        <h2>
                            <!-- MSG워너비여, 영원하라! -->
                        </h2>
                    </div>
                </div>
            </section>
        </main>
    </div>




    <!-- /////////// 3. 하단 영역 /////////// -->
    <div class="bgc">
        <?php include "inc/info.inc" ?> <!-- 이렇게 안에 잘라낸 코딩 inc폴더 안에 작업한거 연결한다. -->
    </div>


</body>

</html>