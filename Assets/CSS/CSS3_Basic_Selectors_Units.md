## 📝 section - 01 - 션택자의 용도와 사용법

## 📍 01 - 가장 기초적인 스타일일 적용하기

* `HTML` 페이지에 `CSS` 를 사용해 꾸밀 수 있습니다. `CSS`로 작성된 코드를 **스타일시트라**고 하며, `CSS`를 사용해 위치를 지정하고, 색상을 추가하고, 택스트를 이동하고, 블록 수준 요소에 대한 및 테두리를 설정할 수 있습니다. `CSS3`에서 특징 `HTML` 태그를 선택할 때는 선택자를 사용합니다. 선택자를 사용해 특정 `HTML` 태그를 선택하면, 선택한 태그에 원하는 스타일이나 스크립트를 적용할 수 있습니다. 선택자를 사용해 `h1` 태그를 선택하고, 선택한 `h1` 태그의 color 스타일 속성에 `red` 값을 적용한 `CSS` 블록입니다.

 * [CSS 선택자 종류 ->](https://github.com/zhzkdls/TIL/blob/main/Assets/CSS/Step01/Selector_Type.html)

```html
<head>
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
## 📝 section - 02 - 기본 선택자

## 📍 01 - 전체 선택자와 태그 선택자

* **전체 선택자 적용하기** 👉  전체 선택자를 사용해 모든 태그의 `color` 스타일 속성을 `red` 값으로 변경합니다. `*`은 `전체 선택자`이고 구체적으로는 HTML 페이지 내부의 태그를 모두 선택입니다. 


```html
<head>
    <style>
        * { color: red; }
    </style>
</head>
<body>
    <h1>제목 글자 태그</h1>
    <p>고통 그 자체가 사랑, 주 저장 시스템이다.</p>
</body>
```

* **태그 선택자 적용하기** 👉  태그 선택자를 선택해 h1 태그의 `color` 스타일 속성을 `red` 값을 적용하고, p 태그의 `color` 스타일 속성에 `blue` 값을 적용합니다. 


```html
<head>
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
## 📍 02 - 아이디 선택자

* 공간 분할 태그에 아이디 선택자를 사용해 `id` 속성을 적용하고 레이아웃을 구성합니다.  또한 `id` 중복 선택이 가능하다 


```html
<head>
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
## 📍 03 - 클래스 선택자

* **클래스 사용자를 1개 사용하기** 👉 클래스 선택자는 특정한 클래스가 있는 태그를 선택할 때 사용합니다. 웹 페이지를 개발할 때 가장 많이 사용합니다. 


```html
<head>
    <style>
        .select { color: red; }
    </style>
</head>
<body>
    <ul>
        <li class="select">사과</li>
        <li>바나나</li>
        <li class="select">오렌지</li>
        <li>감</li>
    </ul>
</body>
```

* **클래스 선택자를 여러 개 사용하기** 👉 공백으로 구분해 클래스를 여러 개 사용할 수 있는데, `item`과 `header` 클래스가 함께 적용됩니다.

```html
<head>
    <style>
        .item { color: red; }
        .header { background-color: blue; }
    </style>
</head>
<body>
    <h1 class="item header">동해물과 백두산이</h1>
</body>
```

* **클래스 속성 중복** 👉 `class` 속성은 중복될 수 있으며, `clss` 속성을 서로 다른 태그에 적용할 때는 **태그 선택자**와 **클래스 선택자**를 함께 사용해서 태그를 더 정확하게 선택할 수 있습니다.

```html
<head>
    <!-- 정확하게 태그를 선택해서 사과만 빨간색으로 표시합니다. -->
    <style>
        li.select { color: red; }  
    </style>
</head>
<body>
    <h1 class="select">제목 글자</h1>
    <ul>
        <li class="select">사과</li>
        <li>바나나</li>
        <li>오렌지</li>
        <li>감</li>
    </ul>
</body>
```

---
## 📝 section - 03 - 속성 선택자

## 📍 01 - 속성 선택자

* 특정 속성과 값이 있는 태그를 선택할 때 사용합니다. 속성과 같은 **대괄호([])**를 사용해 입력합니다. `imput` 태그는 이름이 모두 같지만 `type` 속성에 따라 형태가 다릅니다. 그래서 `input` 태그를 선택할 때 속성 선택자를 많이 사용합니다. 속성 선택자를 사용해 `imput` 태그를 선택합니다.

```html
<head>
    <style>
        input[type="text"] { background: red; }
        input[type="password"] { background: blue; }
    </style>
</head>
<body>
    <form>
        <input type="text">
        <input type="password">
    </form>
</body>
```

---
## 📝 section - 04 - 후손 선택자와 자손 선택자

## 📍 01 - 후손 선택자

* 후손 선택자는 특정한 태그의 후손을 선택할 때 사용합니다.  후손 선택자를 사용해 특정한 대상의 후손이라는 것을 구별합니다. #header 태그 아래에 위치한 h1 태그에는 빨간색을 적용하고, #section 태그 아래에 위치한 h1 태그에는 주황색을 적용합니다. 

```html
<head>
    <style>
        #header h1  { color: red; }
        #section h1 { color: orange; }
    </style>
</head>
<body>
    <div id="header">
        <h1 class="title">Lorem ipsum</h1>
        <div id="nav">
            <h1>Navigation</h1>
        </div>
    </div>
    <div id="section">
        <h1 class="title">Lorem ipsum</h1>
        <p> Duis bibendum massa in dui interdum sed tincidunt massa eleifend.</p>
    </div>
</body>
```

* 선택자 여러 개를 함께 사용할 경우, 후손 선택자를 **첫 번째** 활용할 때가 있습니다. 어떤 태그에 빨간색을 적용할까요?? 이 선택자는 `header` 태그의 후손인 `h1` 태그의 일반적인 `h2` 태그를 선택합니다. `header` 태그의 후손인 `h1` 태그와 `header` 태그의 후손인 `h2` 태그를 선택하고 싶다면 **두 번째** 사용해야 합니다. 

```html
<!-- 첫 번째 -->
<style>
    #header h1, h2 { color: red; }
</style>
```

```html
<!-- 두 번째 -->
<style>
    #header h1, #header h2 { color: red; }
</style>
```

---
## 📍 02 - 자손 선택자

* 자손 선택자는 특정한 태그의 자손을 선택할 때 사용합니다. 앞서 살펴본 후손 선택자 코드 구성이 같습니다 . **다만** `#nav` 태그 아래에 있는 `h1` 태그는 후손이기 때문에 스타일이 적용되지 않습니다.

```html
<head>
	<style>
		#header > h1 { color: red; }
		#section > h1 { color: orange; }
	</style>
</head>
<body>
	<div id="header">
		<h1 class="title">Lorem ipsum</h1>
		<div id="nav">
			<h1>Navigation</h1>
		</div>
	</div>
	<div id="section">
		<h1 class="title">Lorem ipsum</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</div>
</body>
```

* `table` 태그의 요소를 선택할 떄는 **자손** 선택자 사용을 추천하지 않습니다. 코드를 실행하게 되면 대부분 `tr` 태그에 빨간색이 적용된다고 예상하지만, 스타일 속성은 적용되지 않습니다. 색상을 적용하려먼 선택자 **table > tbody > tr > th** 를 입력해야 합니다. 

```html
<head>
	<style>
		table > tr > th {
            color: red;
        }
	</style>
</head>
<body>
	<table border="1">
		<tr>
            <td>이름<td>    
            <td>지역<td>    
		</tr>
            
		<tr>
            <td>펭수<td>    
            <td>부산광역시 해운대구<td> 
		</tr>
	</table>
</body>
```

---
## 📝 section - 05 - 반응 * 상태 * 구조 선택자

## 📍 01 - 반응 선택자

* 반응 선택자는 사용자 반응으로 생성되는 특정한 상태를 선택합니다. 사용자가 특정 태그 위에 **마우스 커서를 올리면** `hover`가 상태고, 특정한 태그를 마우스로 **클릭**하면 `action` 상태입니다.

```html
<head>
    <style>
        h1:hover { color: red; }
        h1:active { color: blue; }
    </style>
</head>
<body>
    <h1>반응 선택자</h1>
</body>
```

---
## 📍 02 - 상태 선택자

* 상태 선택자는 입력 양식의 선택할 때 사용합니다. `HTML5`에서 주석을 `<!-- 주석 -->` 형태로 작성했지만, 스타일시트에서는 `/*주석*/` 형태로 작성합니다. 이후에 나오는 자바스크립트의 여러 행 주석과 형태가 갑습니다. 하지만 자바스크립트의 한 줄 주석은 스타일시트에서는 사용할 수 없으므로 주의해야 합니다.

```html
<head>
    <style>
        /* input 태그가 사용 가능할 경우에
           background-color 속성에 white 키워드를 적용합니다. */
        input:enabled { background-color: white; }

        /* input 태그가 사용 불가능할 경우에
           background-color 속성에 gray 키워드를 적용합니다. */
        input:disabled { background-color: gray; }

        /* input 태그에 초점이 맞추어진 경우에
           background-color 속성에 orange 키워드를 적용합니다. */
        input:focus { background-color: orange; }
    </style>
</head>
<body>
    <h2>사용 가능</h2>
    <input>
    <h2>사용 불가능</h2>
    <input disabled="disabled"/>
</body>
```

---
## 📍 03 - 구조 선택자

* 구조 선택자를 사용해 **홀수**와 **짝수** 위치를 판별하고 스타일을 적용합니다. 처음 태그와 마지막 태그에는 `둥근 테두리`가 적용되고, 홀수와 짝수 번째에는 `각각 다른 색상`의 스타일이 적용됩니다. `first-child`은 형제 관계에서 첫 번째롤 등장하는 태그 선택, `last-child`은 형제 관계에서 마지막으로 등장하는 태그 선택, `nth-child(수열)` 형제 관계에서 앞으로 수열 번째 등장하는 태그 선택, `nth-last-child(수열)` 형제 관계에서 뒤에서 수열 번째 등장하는 태그 선택입니다.

```html
<head>
    <style>
        ul { overflow: hidden; }
        li {
            list-style: none;
            float:left; padding: 15px;
        }

        li:first-child { border-radius: 10px 0 0 10px; }
        li:last-child { border-radius: 0 10px 10px 0; }

        li:nth-child(2n) { background-color: #FF0003; }
        li:nth-child(2n+1) { background-color:#800000; }
    </style>
</head>
<body>
    <ul>
        <li>첫 번째</li>
        <li>두 번째</li>
        <li>세 번째</li>
        <li>네 번째</li>
        <li>다섯 번째</li>
        <li>여섯 번째</li>
        <li>일곱 번째</li>
    </ul>
</body>
```

`li > a:first-child { color: green; }`은 전체에 스타일을 적용학고, `li:first-child > a { color: red; }`은 특정한 부분을 적용합니다.  

```html
<head>
    <style>
        li:first-child > a { color: red; }
    </style>

    <!-- <style>
        li > a:first-child { color: green; }
    </style> -->
</head>
<body>
    <ul>
        <li><a href="#">주의 사항</a></li>
        <li><a href="#">주의 사항</a></li>
        <li><a href="#">주의 사항</a></li>
        <li><a href="#">주의 사항</a></li>
        <li><a href="#">주의 사항</a></li>
    </ul>
</body>
```

---
## 📝 section - 06 - CSS와 SASS 비교

## 📍 01 - 스타일시트 컴파일 엔진

* **SASS 스타일시트** 괄호를 입력할 필요가 없으며, 변수는 물론 선택자도 선택자 내부에 입력할 수 있습니다. 스타일시트 컴파일 엔진을 이용하면 **첫 번째** 처럼 작성된 `SASS` 스타일시트를 **두 번째** 처럼 일반 스타일시트로 변경할 수 있습니다.

```css
/* 첫 번쨰*/
$gray: #fff
$margin: 10px;
$logo-image: url("logo.png");

.header
    .logo
         background-image $logo.png"
    .navigation
        overflow: hidden
        .menu
            float: left;

.article 
    margin: $margin
```

```css
/* 두 번쨰*/
.header .logo {
    background-image: url("logo.png");
}

.header .navigation {
    overflow: hidden;
}

.header .navigation .menu {
    float: left;
}

.article {
    margin: 10px;
}
```

---
## 📝 section - 07 - CSS3 단위

## 📍 01 - 다양한 크기의 단위 적용

* **2 % 단위 적용하기** 👉 `style` 태그 안에 `font-size` 를 사용하여 입력합니다. **% 단위**는 기본으로 설정된 크기를 기준으로 상대적인 크기를 지정합니다. 이떄 `100%` 초기에 설정된 크기입니다

```html
<head>
	<title>Document</title>
	<style>
		p:nth-child(1) {}
		p:nth-child(2) { font-size: 100%; }
		p:nth-child(3) { font-size: 150%; }
		p:nth-child(4) { font-size: 200%; }
	</style>
</head>
<body>
	<p>Lorem ipsum dolor sit amet</p>
	<p>Lorem ipsum dolor sit amet</p>
	<p>Lorem ipsum dolor sit amet</p>
	<p>Lorem ipsum dolor sit amet</p>
</body>
```

* **em 단위 적용하기** 👉 em은 배수를 나타내는 단위입니다. `1배=1em=100%`고, `1.5배=1.5em=150%`입니다

```html
<head>
	<title>Document</title>
	<style>
		p:nth-child(1) {}
		p:nth-child(2) { font-size: 1.0em; }
		p:nth-child(3) { font-size: 1.5em; }
		p:nth-child(4) { font-size: 2.0em; }
	</style>
</head>

```

* **px 단위 적용하기** 👉 `%`와 `em` 단위는 크기를 상대적으로 지정하지만, `px` 단위는 크기를 절대적으로 지정합니다. 지금 살펴본 `font-size` 속성을 포함해 `width` 속성과 `height` 속성 등에 크기 단위를 적용할 수 있습니다.

```html
<head>
	<title>Document</title>
	<style>
		p:nth-child(1) {}
		p:nth-child(2) { font-size: 16px; }
		p:nth-child(3) { font-size: 24px; }
		p:nth-child(4) { font-size: 32px; }
	</style>
</head>
```

---
