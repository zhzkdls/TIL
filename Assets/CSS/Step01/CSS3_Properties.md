## 📝 section - 01 - 박스 속성

* `width` 속성과 `height` 속성은 글자를 감싸는 영역 크기를 지정하고, `border` 속성은 테두리 두께를 지정합니다. `padding` 속성은 테두리와 글자 사이 간격을 지정하고, `margin` 속성은 테두리와 다른 태그 간격을 지정하며, `padding` 속성은 테두리 바깥쪽 여백을 지정합니다.

## 📍 01 - 박스 크기와 패딩 조정

* **width 와 heigh 속성 적용하기** 👉 `div` 태그로 만든 박스의 너비와 높이가 `100px`로 지정합니다.

 * **소스코드**[ ✍ ](https://github.com/zhzkdls/TIL/blob/main/Assets/CSS/Step01/Margin_and_padding_Properties.html)
 
    #### margin 속성과 padding 속성의 방향 적용 
    |속성|설명|
    |------|---|
    |margin-left|왼쪽 여백|
    |margin-right|오른쪽 여백|
    |margin-top|위쪽 여백|
    |margin-bottom|아래쪽 여백|
    |margin-left|왼쪽 패딩|
    |margin-right|오른쪽 패딩|
    |margin-top|위쪽 패딩|
    |margin-bottom|아래쪽 패딩|

```html
<head>
    <style>
        div {
            width: 100px; height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
</body>
```

* **margin 와 padding 속성 적용하기** 👉 `margin` 속성에 `100px`을 적용하고, `padding` 속성에 `30px`을 적용합니다.

```html
<style>
    div {
        width: 100px; height: 100px;
        background-color: red;

        border: 20px solid black;
        margin: 10px; padding: 30px;
    }
</style>
```

---
## 📍 02 - 박스 여백 부분 조정

* **네 방향 속성 지정하기** 👉 순서대로 크기 단위를 띄어쓰기로 구분하면 각 너비를 별도로 지정할 수 있습니다.

```html
  <style>
        div {
            width: 100px; height: 100px;
            background-color: red;

            /* margin: 위 오른쪽 아래 왼쪽 */
            /* padding: 위 오른쪽 아래 왼쪽 */
            margin: 0 30px 0 30px;
            padding: 0 30px 0 30px;
        }
    </style>
```

* **두 방향 속성 지정하기** 👉 margin과 padding 속성에 값을 2개 입력해서 네 방향을 2개씩 묶어 지정할 수 있습니다. 

```html
  <style>
        div {
            width: 100px; height: 100px;
            background-color: red;

            /* margin: 위아래 왼쪽오른쪽 */
            /* padding: 위아래 왼쪽오른쪽 */
            margin: 0 30px; 
            padding: 0 30px;
        }
    </style>
```

---
## 📍 03 - 박스 테두리 조정

* **박스 테두리 만들기** 👉 `border` 속성을 사용해 박스 테두리를 만듭니다.

```html
  <head>
    <style>
        .box {
            border-width: thick;
            border-style: dashed;
            border-color: black;
        }
    </style>
</head>
<body>
    <div class="box">
        <h1>Lorem ipsum dolor amet</h1>
    </div>
</body>
```

* **둥근 테두리 만들기** 👉 `border-radius` 속성을 적용하면 모서리가 둥근 박스 테두리를 만듭니다.

```html
<style>
    .box {
        border-width: thick;
        border-style: dashed;
        border-color: black;

        border-radius: 20px;
    }
</style>
```

* **모서리마다 둥글기를 다르게 적용하기** 👉 `border-radius` 속성에 크기 단위 4개를 입력하면 각 테두리에 서로 다른 둥글기가 적용됩니다. 

```html
<style>
    .box {
        border-width: thick;
        border-style: dashed;
        border-color: black;

        /* border-radius: 왼쪽위 오른쪽위 오른쪽아래 왼쪽아래 */
        border-radius: 50px 40px 20px 10px;
    }
</style>
```

---
## 📝 section - 02 - 가시 속성

## 📍 01 - display 속성

* **none 키워드 적용하기** 👉 `display` 속성에 none 키워드를 적용하면 태그가 화면에서 보이지 않습니다. 즉 중간에 있는 div 태그 전체가 화면에서 사라집니다.

```html
<head>
    <title>Display</title>
    <style>
        #box {
            display: none;
        }
    </style>
</head>
<body>
    <span>더미 객체</span>
    <div id="box">대상 객체</div>
    <span>더미 객체</span>
</body>
```

* **block 키워드 적용하기** 👉 `#box` 태그의 `display` 속성을 `black` 키워드로 바꿉니다. 실행 후 검사에게 각 태그를 클릭하면 해당 요소가 선택합니다. 

```html
<style>
    #box {
        display: block;
    }
</style>
```

* **inline과 inline-block 키워드 비교하기** 👉 `div` 태그의 `display` 속성에 `inline`과 `inline-block`키워드를 지정합니다.

```html
<style>
    #box {
        display: inline;
    }
</style>
```

```html
<style>
    #box {
        display: inline-block;
    }
</style>
```
인라인 형식과 인라인-블록 형식이 차이가 없어 보이지만 `width` 속성, `height` 속성, `margin` 속성을 사용하면 차이를 확인할 수 있습니다. 


---
## 📝 section - 03 - 글자 속성

## 📍 01 - 글자 크기와 글꼴 지정

* **글자 크기와 글꼴 지정** 👉 `.a b c d` 속성을 사용하여 `p` 태그안에 `class="a"` 속성에 해당하는 **알파벳**을 입력하면 각각 해당하는 글자가 다양하게 변경된 것을 확인할 수 있습니다.

```html
<head>
    <style>
        .a { font-size: 32px; }
        .b { font-size: 2em; }
        .c { font-size: large; }
        .d { font-size: small; }
    </style>
</head>
<body>
    <h1>Lorem ipsum</h1>
    <p class="a">Lorem ipsum</p>
    <p class="b">Lorem ipsum</p>
    <p class="c">Lorem ipsum</p>
    <p class="d">Lorem ipsum</p> 
</body>
```

* **글꼴 1개 지정하기** 👉 일반적으로 한 단어로 된 글꼴 이름은 따옴표를 사용하지 않지만 두 단어 이상으로 된 글꼴 이름은 따옴표 사용을 추천합니다.

```html
<head>
    <style>
        .font_arial { font-family: Arial; }
        .font_roman { font-family: 'Times New Roman'; }
    </style>
</head>
<body>
    <h1 class="font_arial">Lorem ipsum</h1>
    <p class="font_roman">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada felis id massa adipiscing eget pellentesque ipsum lacinia. In orci massa, venenatis quis ultrices ac, accumsan vitae nunc. Sed eget pellentesque enim. Maecenas eros risus, hendrerit eget lacinia nec, mollis nec velit. Mauris sem mi, molestie sed bibendum eu, blandit et ante. Pellentesque vel mauris et mauris ornare pharetra. Etiam scelerisque pulvinar diam posuere ultrices. Duis et enim at velit ultricies cursus a at felis. Phasellus sit amet est hendrerit lorem convallis consequat ac ut massa. Aliquam luctus porttitor lacus id hendrerit. Nulla facilisi. Aliquam dictum tempus augue, eu tempor dui varius et. In pretium ultricies dapibus.</p>
</body>
```

---
## 📍 02 - 글자 정렬 지정

* **글자 정렬** 👉 `text-align` 속성은 글자 정렬을 지정합니다.

```html
<head>
    <title>CSS3 Font Property</title>
    <style>
        .font_big { font-size: 2em; }
        .font_italic { font-style: italic; }
        .font_bold { font-weight: bold; }
        .font_center { text-align: center; }
        .font_right { text-align: right; }
    </style>
</head>
<body>
    <p class="font_big font_italic font_bold font_center">Lorem ipsum dolor amet</p>
    <p class="font_bold font_right">2019.07.10</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada felis id massa adipiscing eget pellentesque ipsum lacinia. In orci massa, venenatis quis ultrices ac, accumsan vitae nunc. Sed eget pellentesque enim. Maecenas eros risus, hendrerit eget lacinia nec, mollis nec velit. Mauris sem mi, molestie sed bibendum eu, blandit et ante. Pellentesque vel mauris et mauris ornare pharetra. Etiam scelerisque pulvinar diam posuere ultrices. Duis et enim at velit ultricies cursus a at felis. Phasellus sit amet est hendrerit lorem convallis consequat ac ut massa. Aliquam luctus porttitor lacus id hendrerit. Nulla facilisi. Aliquam dictum tempus augue, eu tempor dui varius et. In pretium ultricies dapibus.</p>
</body>
```

---
## 📍 03 - 글자를 수직 중앙 정렬

* **글자 높이를 지정하는 line-height 속성**을 사용해 글자를 수직 중앙 정렬합니다.
* **간단한 버튼 만들기** 👉 글자가 수평으로는 중앙 정렬되지만 수직으로는 중앙 정렬되지 않습니다. **CSS**에는 `block`속성이 있는 태그에 수직 정렬을 지정할 수 있는 스타일 속성이 없기 떄문입니다.

```html
<head>
    <style>
        .font_big { font-size: 2em; }
        .font_italic { font-style: italic; }
        .font_bold { font-weight: bold; }
        .font_center { text-align: center; }

        .button {
            width: 150px;
            height: 70px;
            background-color: #FF6A00;
            border: 10px solid #FFFFFF;
            border-radius: 30px;
            box-shadow: 5px 5px 5px #A9A9A9;
        }

        .button > a {
            display: block;
        }
    </style>
</head>
<body>
    <div class="button">
        <a href="#" class="font_big font_italic font_bold font_center">Click</a>
    </div>
</body>
```

* **글자를 수직 중앙 정렬하기** 👉 글짜를 감싸는 박스의 높이와 크기가 같은 `70px`로 `line-height`속성을 지정하면 실행 결과처럼 글자가 수직으로 중앙 정렬됩니다.

```html
<head>
    <style>
        .font_big { font-size: 2em; }
        .font_italic { font-style: italic; }
        .font_bold { font-weight: bold; }
        .font_center { text-align: center; }

        .button {
            width: 150px;
            height: 70px;
            background-color: #FF6A00;
            border: 10px solid #FFFFFF;
            border-radius: 30px;
            box-shadow: 5px 5px 5px #A9A9A9;
        }

        .button > a {
            display: block;
            line-height: 70px;
        }
    </style>
</head>
<body>
    <div class="button">
        <a href="#" class="font_big font_italic font_bold font_center">Click</a>
    </div>
</body>
```

---