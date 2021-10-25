<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP 첫페이지</title>
    <!-- ?php ? : PHP 코딩영역 -->
    <?php 
    
        // 주석
        /* 주석 */
        # 주석

        // 변수
        // php변수는 문자앞에 $를 씀
        $link = "<a href='vogue/'>보그바로가기</a>"; 
        $link2 = "<a href='PHP_include'>인클루드</a>"; /* 확장자 없어도, 폴더명으로 인식함 */


        // 화면출력 -> echo 메시지
        echo "<h1>나의 첫 PHP페이지!</h1>"; 
        /* http://creative103.dothome.co.kr/ ▶ 닷홈에서  기본 제공 도메인에 주소 붙혀서 들어가면 원래 안나왔는데, 해당 PHP 파일 만드니 첫화면 나옴 
           http://creative103.dothome.co.kr/vogue/ ▶ 원래 이렇게 뒤에 써야 나왔다.
        */

        // 쌍따옴표안에 php변수를 바로 쓸 수 있음!
        echo "<h2>$link</h2>"; /* 변수 넣음 
        ▶ 이제 "보그바로가기" 누르면 보그제작한 페이지로 이동됨 
           http://creative103.dothome.co.kr/vogue/ ▶ 해당페이지로 이동됨 */

           
        echo "<h2>$link2</h2>";

    
    ?>
</head>
<body>
    
</body>
</html>