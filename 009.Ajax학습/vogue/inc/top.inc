
<!-- 최고외곽박스(상단 최상위 부모박스) - 메뉴하단 그림자 주려고 id 줌 -->
<header class="top ibx">

    <!-- 1-1. 상단메뉴 -->
    <div class="tmenu">
        <!-- 1-1-1. SNS 박스 -->
        <div class="sns">
            <a href="#" class="fi fi-instagram">
                <!-- 아이콘툴킷은 "클래스로!" 여기다가 적용함! -->
                <!-- 꾸미는 요소는 "common.css" 에서 설정함 -->
                <span class="ir">인스타그램</span>
                <!-- a태그는 뭔가를 싸놓고 링크를 걸어놔야 하는 특성이 있기 때문에, span으로 설명적고 설명안보이게한다. : core.css에 .ir 설정함-->
            </a>
            <a href="#" class="fi fi-facebook">
                <span class="ir">페이스북</span>
            </a>
            <a href="#" class="fi fi-twitter">
                <span class="ir">트위터</span>
            </a>
            <a href="#" class="fi fi-youtube-play">
                <span class="ir">유튜브</span>
            </a>
            <a href="#">
                <span class="ir">카카오스토리</span>
            </a>
        </div>

        <!-- 1-1-2. 사이드 메뉴 -->
        <div class="sideMenu">
            <ul class="smbx">
                <li>
                    <a href="#">SIDE MENU</a>
                    <!-- 서브메뉴 -->
                    <ol class="smsub">
                        <li>
                            <a href="#">회사 소개</a>
                        </li>
                        <li>
                            <a href="#">보그 로그인</a>
                        </li>
                        <li>
                            <a href="#">보그 회원가입</a>
                        </li>
                    </ol>
                </li>
                <li>
                    <a href="#">SUBSCRIBE</a>
                </li>
            </ul>
        </div>
    </div>

    <!-- 1-2. 로고 박스 -->
    <h1 class="logo">
        <!-- 큰 제목로고이기 때문에 h1도 블록태그이기 때문에 -->
        <a href="#">
            <img src="./images/mlogo.png" alt="vogue logo">
        </a>
    </h1>

    <!-- 1-3. GNB 박스 -->
    <nav class="gnb">
        <!-- nav도 블록태그 -->
        <ul>
            <li>
                <a href="#">FASHION</a>
            </li>
            <li>
                <a href="#">BEAUTY</a>
            </li>
            <li>
                <a href="#">LIVING</a>
            </li>
            <li>
                <a href="#">PEOPLE</a>
            </li>
            <li>
                <a href="#">VIDEO</a>
            </li>
            <li>
                <a href="#">RUNWAY</a>
            </li>
            <li>
                <a href="#">SHOPPING</a>
            </li>
            <li>
                <a href="#" class="fi fi-search">
                    <span class="ir">search</span>
                </a>
            </li>
        </ul>

    </nav>

    <!-- //// 써있으면 모바일용임 //// -->
    <!-- //// 모바일용 햄버거버튼 //// -->
    <a href="#" class="mobtn hbtn fi fi-nav-icon">
        <span class="ir">GNB button</span>
    </a>
    <!-- //// 모바일용 검색버튼 //// -->
    <a href="#" class="mobtn sbtn fi fi-search">
        <span class="ir">search</span>
    </a>

</header>

<!-- //// 1.4.모바일 검색박스 //// -->
<div class="mos">
    <div class="mwrap">
        <!-- 입력창박스 -->
        <div id="search">
            <input type="text">
        </div>
        <!-- 검색버튼 -->
        <button class="scbtn fi fi-search">
            <span class="ir">돋보기검색아이콘</span>
        </button>
    </div>
</div>

<!-- //// 1.5.모바일 전체메뉴 //// -->
<div id="mobx">
    <!-- //// 1.5-1.모바일 GNB 메뉴 //// -->
    <nav class="mognb">
        <ul>
            <li>
                <a href="#">FASHION</a>
            </li>
            <li>
                <a href="#">BEAUTY</a>
            </li>
            <li>
                <a href="#">LIVING</a>
            </li>
            <li>
                <a href="#">PEOPLE</a>
            </li>
            <li>
                <a href="#">VIDEO</a>
            </li>
            <li>
                <a href="#">RUNWAY</a>
            </li>
            <li>
                <a href="#">SHOPPING</a>
            </li>
        </ul>
    </nav>
    <!-- //// 1.5-2.모바일 sns 메뉴 //// -->
    <div class="mosns">
        <a href="#" class="fi fi-instagram">
            <span class="ir">인스타그램</span>
        </a>
        <a href="#" class="fi fi-facebook">
            <span class="ir">페이스북</span>
        </a>
        <a href="#" class="fi fi-twitter">
            <span class="ir">트위터</span>
        </a>
        <a href="#" class="fi fi-youtube-play">
            <span class="ir">유튜브</span>
        </a>
        <a href="#">
            <span class="ir">카카오스토리</span>
        </a>

    </div>
    <!-- //// 1.5-3.매거진박스 //// -->
    <figure class="magbox">
        <!-- 잡지커버이미지 -->
        <a class="mcover" href="#">
            <img src="./images/cover.jpg" alt="보그표지">
        </a>
        <!-- 잡지설명 -->
        <figcaption>
            정기구독을 신청하면 최대 30% 할인혜택을 드립니다!
        </figcaption>
        <!-- 정기구독버튼 -->
        <button class="magbtn">정기구독 신청</button>
    </figure>

    <!-- //// 하단링크박스 //// -->
    <ul class="moblink">
        <li>
            <a href="#">회사소개 /</a>
        </li>
        <li>
            <a href="#">광고 및 제휴 /</a>
        </li>
        <li>
            <a href="#">
                <strong>개인정보 처리방침</strong>
            </a>
        </li>
    </ul>
</div>
<!-- //// 모바일용 메뉴 끝 //// -->
