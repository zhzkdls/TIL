## 📝 section - 01 - HTML5

## 📍 01 - HTML5 페이지 구조

* 웹 브라우저에 HTML5 문서라는 것을 알리기 위해 반드시 첫행에 나와야 하고, 모든 HTML 페이지의 기본 요소로, 모든 태그는 이 `HTML` 태그 내부에 작성합니다. `head` 태그에 필요한 스타일시트와 자바스크립트를 제공, `title` 태그는 웹 브라우저에 표시하는 제목을 지정, `body`사용자에게 실제로 보니는 부분을 작성하는 곳입니다.

```html

<!DOCTYPE html>
<html lang="ko">
    <head>
        <title>HTML5 Basic</title>
    </head>
    <body>
        <h1>Hello World..!</h1>
    </body>
</html>
```

---
## 📍 02 - 내부 스타일시트 작성과 실행

* 앞서 작성한 `head`태그에 `Style` 태그를 사용하여 `h1` 태그에 색깔과 바탕 색깔을 사용하였다.

```html
<head>
<title>HTML5 Basic</title>
    <style>
        h1 {
            color: rgb(28, 127, 46);
            background: wheat;
        }
    </style>
</head>
<body>
    <h1>Hello World..!</h1>
</body>
```

---

## 📍 03 - 외부 스타일시트 작성과 실행

* `head`태그에 `link` 태그를 사용해 외부 스타일시트를 불러오도록 수정합니다. 

```html
<head>
    <title>HTML5 Basic</title>
    <link rel="stylesheet" href="Style.css">
</head>
<body>
    <!-- 속성이름, 속성블록, 속성 값, 내부 문자  -->
    <h1 title="header">안녕하세요</h1> 
    <img src="image.png" alt="">
</body>

```
* `Style.css`파일

```css
h1 {
    color: rgb(28, 127, 46);
    background: wheat;
}
```

---
## 📍 04 - 내부 자바스크립트 작성과 실행

* 첫번째 `script`는 화면에 바로 Hello JavaScript .. !가 출혁하게 되고, 두번째 `script`는 `alert`태그를 사용하여 화면에 경고창이 뜨게 된다.

```html

<head>
    <title>HTML5 Basic</title>
    <script>
        // 경고 창을 출력합니다.
        document.write('Hello JavaScript .. !');
    </script>

    <script>
        // 경고 창을 출력합니다.
        alert('안녕하세요 콩이 입니다.')
    </script>
</head>

```
