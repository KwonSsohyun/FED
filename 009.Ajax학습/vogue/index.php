<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>보그 코리아에 오신 것을 환영합니다!</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon">
    <!-- 파비콘(favicon) 이미지 로고 : 탭메뉴 아이콘 넣기(.ico 확장자로 이미지 쓰기도 함)-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <!-- 아이콘 툴킷 : 정해진 문자코드형식으로 적으면, 아이콘으로 보여지게 하는 것 -->
    <!-- [ 아이콘툴킷 : fontisto 사용함 ]
           적용예시 : https://www.fontisto.com/get-started
           아이콘 툴킷은 아래 "1-1-1. SNS 박스" ▶ class="fi fi-instagram" 식으로 클래스로 적용함 

           main.css보다 위에 있는 이유는 같은 설정이 있을때 덮어쓰려고. (예를들면 아이콘 색상을 변경하거나 하기 때문)
    -->
    <link rel="stylesheet" href="./css/main.css"> <!-- 내가 작성한 CSS를 아래쪽에 써야 같은 설정일 경우 우선적용 (덮어쓴다.) -->
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
</head>

<body>
    <!-- /////////// 1. 상단 영역 /////////// -->
    <div id="top">

    </div> <!-- #top 끝나는 부분 -->

    <!-- /////////// 2. 메인 영역 /////////// -->
    <div class="bgc">
        <!-- bgc = 백그라운드 컬러 + 하단영역에도 클래스이름 같이줌 -->
        <main class="cont ibx">
            <section class="pt1 rbx">
                <!-- rbx는 비율유지박스 설정한 css -->
                <div class="rbxIn">
                    <!-- rbxIn 속박스 -->
                    <div class="cbx bgi bg1">
                        <!-- cbx 컨텐츠(실제내용들어가는) 박스 (코어css설정)-->
                        <!-- bgi : 이미지 꽉차게 들어가는 것 (코어css설정) -->
                        <!-- bg1 : 각각 이미지 설정 (main.css설정) -->
                        <h2>복싱과 맺은 모델 수주의 이야기</h2>
                    </div>
                </div>
            </section>
            <section class="pt2 rbx">
                <div class="rbxIn">
                    <!-- bg2/3/4 : 각각의 들어갈 이미지 셋팅 (main.css설정) -->
                    <div class="cbx bgi bg2">
                        <h2>안현모,홍지민,강주은 써마지 더 리얼 인터뷰</h2>
                    </div> <!-- 옆으로 흐르게 설정 -->
                    <div class="cbx bgi bg3">
                        <h2>손 번쩍! 잘 때 ‘만세 자세’가 해로운 이유</h2>
                    </div>
                    <div class="cbx bgi bg4">
                        <h2>아미(Ami)와 장폴구드(Jean-Paul Goude)의 컬래버레이션</h2>
                    </div>
                </div>
            </section>

            <section class="pt1 rbx">
                <!-- pt1과 같은 형식이기 때문에 복붙! -->
                <div class="rbxIn">
                    <div class="cbx bgi bg5">
                        <h2>&lt;퀸스 갬빗&gt; 이후 엄청난 신작을 준비 중인 안야 테일러 조이</h2> <!-- &lt; → <  |  &gt; → > -->
                    </div>
                </div>
            </section>

            <section class="pt2 rbx">
                <div class="rbxIn">
                    <!-- pt2과 같은 형식이기 때문에 복붙! -->
                    <div class="cbx bgi bg6">
                        <h2>마리아 그라치아 치우리의 디올 크루즈 2022 컬렉션 쇼</h2>
                    </div> <!-- 옆으로 흐르게 설정 -->
                    <div class="cbx bgi bg7">
                        <h2>약, 그렇게 버리면 되돌아옵니다</h2>
                    </div>
                    <div class="cbx bgi bg8">
                        <h2>셀럽들이 하는 여름 주얼리</h2>
                    </div>
                </div>
            </section>

            <section class="pt1 rbx">
                <!-- pt1과 같은 형식이기 때문에 복붙! -->
                <div class="rbxIn">
                    <div class="cbx bgi bg9">
                        <h2>김여진이 감행하는 변화에 대하여</h2>
                    </div>
                </div>
            </section>

            <section class="pt2 rbx">
                <div class="rbxIn">
                    <!-- pt2과 같은 형식이기 때문에 복붙! -->
                    <div class="cbx bgi bg10">
                        <h2>모델 아이린이 선택한 여름 원피스 Best</h2>
                    </div> <!-- 옆으로 흐르게 설정 -->
                    <div class="cbx bgi bg11">
                        <h2>김여진이 감행하는 변화에 대하여</h2>
                    </div>
                    <div class="cbx bgi bg12">
                        <h2>샛노란 ‘자무 주스’가 뜬다!</h2>
                    </div>
                </div>
            </section>

            <section class="pt2 rbx">
                <div class="rbxIn">
                    <!-- pt2과 같은 형식이기 때문에 복붙! -->
                    <div class="cbx bgi bg13">
                        <h2>체커보드의 색다른 매력</h2>
                    </div> <!-- 옆으로 흐르게 설정 -->
                    <div class="cbx bgi bg14">
                        <h2>‘손꾸’의 끝, 핑거 타투와 네일의 조합</h2>
                    </div>
                    <div class="cbx bgi bg15">
                        <h2>지속 가능한 변화를 이끄는 백 브랜드 6</h2>
                    </div>
                </div>
            </section>
        </main>
    </div>




    <!-- /////////// 3. 하단 영역 /////////// -->
    <div class="bgc">

    </div>

    
</body>

</html>