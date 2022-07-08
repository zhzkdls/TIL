## 📝 section - 01 - 션택자의 용도와 사용법

## 📍 01 - 가장 기초적인 스타일일 적용하기

`HTML` 페이지에 `CSS` 를 사용해 꾸밀 수 있습니다. `CSS`로 작성된 코드를 **스타일시트라**고 하며, `CSS`를 사용해 위치를 지정하고, 색상을 추가하고, 택스트를 이동하고, 블록 수준 요소에 대한 및 테두리를 설정할 수 있습니다. `CSS3`에서 특징 `HTML` 태그를 선택할 때는 선택자를 사용합니다. 선택자를 사용해 특정 `HTML` 태그를 선택하면, 선택한 태그에 원하는 스타일이나 스크립트를 적용할 수 있습니다. 선택자를 사용해 `h1` 태그를 선택하고, 선택한 `h1` 태그의 color 스타일 속성에 `red` 값을 적용한 `CSS` 블록입니다.

 * [CSS 선택자 종류 ->](https://github.com/zhzkdls/TIL/blob/main/Assets/CSS/Step01/Selector%20Type.html)

```html
<head>
    <title>CSS3 Selector Basic Page</title>
    <!-- 가장 기초적인 스타일일 적용하기 -->
    <style>
        h1 {
             color: red;
             background-color: orange; 
            }
    </style>
</head>
<body>
    <h1>CSS3 선택자 기본</h1>
</body>
```

---
## 📍 02 - 전체 선택자와 태그 선택자

**전체 선택자 적용하기** 👉  전체 선택자를 사용해 모든 태그의 `color` 스타일 속성을 `red` 값으로 변경합니다. `*`은 `전체 선택자`이고 구체적으로는 HTML 페이지 내부의 태그를 모두 선택입니다. 


```html
<head>
    <title>CSS3 Selector Basic Page</title>
    <!-- 전체 선택자 적용하기 -->
    <style>
        * { color: red; }
    </style>
</head>
<body>
    <h1>제목 글자 태그</h1>
    <p>고통 그 자체가 사랑, 주 저장 시스템이다.</p>
</body>
```

**태그 선택자 적용하기** 👉  태그 선택자를 선택해 h1 태그의 `color` 스타일 속성을 `red` 값을 적용하고, p 태그의 `color` 스타일 속성에 `blue` 값을 적용합니다. 


```html
<head>
    <title>CSS3 Selector Basic Page</title>
    <!-- 태그 선택자 적용하기 -->
    <style>
        h1 { color: red; }
        p  { color: blue; }
    </style>
</head>
<body>
    <h1>제목 글자</h1>
    <p> Praesent semper consectetur mi eget auctor. Nulla facilisi. Duis bibendum massa in dui interdum sed tincidunt massa eleifend.</p>
    <p>Nullam consectetur nibh at sem luctus mollis.</p>
</body>
```

---
## 📍 03 - 아이디 선택자

공간 분할 태그에 아이디 선택자를 사용해 `id` 속성을 적용하고 레이아웃을 구성합니다.  또한 `id` 중복 선택이 가능하다 


```html
<head>
    <title>CSS3 Selector Basic Page</title>
    <style>
        #header {
            width: 800px; margin: 0 auto;
            background: red;
        }
        #wrap {
            width: 800px; margin: 0 auto;
            overflow: hidden;
        }
        #aside {
            width: 200px; float: left;
            background: blue;
        }
        #content {
            width: 600px; float: left;
            background: green;
        }
    </style>

    <!-- id 속성 중복 -->
    <style>
        #rint { color: red;  }
    </style>

</head>
<body>
    <div id="header">
        <h1>#header 태그</h1>
    </div>
    <div id="wrap">
        <div id="aside">
            <h1>#aside 태그</h1>
        </div>
        <div id="content">
            <h1>#content 태그</h1>
        </div>
        <h2 id="rint"">콩이</h2>
        <h3 id="rint"">콩이</h3>
        <h4 id="rint"">콩이</h4>
    </div>
</body>
```

---




