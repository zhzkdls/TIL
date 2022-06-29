## 📝 section01 - 2 - HTML5 글자 태그

## 📍 01 - 제목 표현

여기서는 `h1`태그는 가장 큰 제목 이고, `h6`태그는 가장 작은 제목이라는 것만 기억하면 된다. 웹 브라우저에 따라 기본 글꼴이 달라서 출력되는 글꼴도 다릅니다.

```html

<body>
    <h1>제목 글자 태그 1</h1>
    <h2>제목 글자 태그 2</h2>
    <h3>제목 글자 태그 3</h3>
    <h4>제목 글자 태그 4</h4>
    <h5>제목 글자 태그 5</h5>
    <h6>제목 글자 태그 6</h6>
</body>
```

---
## 📍 02 - 본문 단락 구분

여기서는 `h1`태그는 본문이 되고 `p` 태그는 긴 글자를 사용 할 때 사용한다. 

```html
<body>
    <h1>제목 글자</h1>
    <p>Nulla placerat nibh quis mi tincidunt pretium.</p>
    <p>Integer nibh tellus, tristique quis blandit quis, consequat in nunc.</p>
</body>
```

---
## 📍 03 - 제목과 본문 태그의 활용

제목과 본문 태그를 모두 활용해서 간단한 문서를 작성해 보겠습니다. 주의 할 점은 `br`태그는 다른 글자 태그 내부에 삽입할 수 있지만 `hr`태그는 안 된다는 것입니다. 물론 `hr`태그가 다른 글자 태그 내부에 있어도 웹 브라우저가 유연하게 대쳐하므로 정상적으로 출력됩니다.  

```html
<body>
    <h1>홍차</h1>
    <hr>
    <h2>정의</h2>
    <p>홍차는 백차, 녹차, 우롱차보다 더 많이 발효된 차의 일종이다. 동양에서는 찻물의 빛이 붉기 때문에 홍차라고 부르지만, 서양에서는 찻잎의 색깔 때문에 'black tea'라고 부른다.</p>
    <br>
    <h2>등급</h2>
    <p>홍차는 여러 가지로 등급이 매겨진다. 일반적으로 찻잎의 모양에 따른 등급과 가공 상태에 따른 등급을 조합하여 표시한다.</p>
    <p>- 브로큰 페코</p>
    <p>- 브로큰 페코 수숑</p>
    <p>- 브로큰 오렌지 페코 패닝</p>
</body>

```

---
## 📍 04 - 공백이 있는 글자

HTML 태그 내부에 공백 3개를 연속으로 입력한 후 파일을 실행하면 연속된 공백을 1개로 인식하기에 공백 3개가 제대로 표시되지 않는다.

```html
<body>
    <h1>공백이&nbsp;&nbsp;&nbsp;있는&nbsp;&nbsp;&nbsp;글자</h1>
</body>

```

---
## 📍 05 - 특정 웹 페이지에 연결하기

`a`태그를 사용해 특정 웹 페이지나 웹 페이지 내부의 특정 위치로 이동하는 링크를 생성한 후 하이퍼링크를 설정한 글자를 클릭하면 해당 웹 페이지로 이동합니다.

```html
<body>
    <a href="http://hanb.co.kr">한빛미디어</a><br>
    <a href="http://naver.com/">네이버</a><br>
    <a href="http://daum.com/">다음</a><br>
</body>
```

---
## 📍 06 - 웹 페이지 내부에 연결하기

웹 페이지 내부의 특정 태그로 이동하려면 `id` 속성을 추가로 사용합니다. 우선 `h1` 태그에 `id` 속성을 입력합니다. 이어서 `a` 태그의 `href` 속성에 `#id 속성`형태의 문자열을 입력합니다. 파일을 실행해서 `Alpha` 부분 링크를 클릭하면 해당 내용으로 이동합니다. `p`태그에 입력되는 본문은 지면상 일부만 넣었습니다.

```html
<body>
    <a href="#alpha">Alpha 부분</a>
    <a href="#beta">Beta 부분</a>
    <a href="#gamma">Gamma 부분</a>
    <hr>
    <h1 id="alpha">Alpha</h1>
    <p> Donec ornare leo in ipsum consectetur euismod. Sed lorem urna, adipiscing eget pharetra ullamcorper, facilisis id sapien. Phasellus ac pellentesque odio. Curabitur quis tortor vel odio dignissim congue ac sit amet nisl. Nulla placerat nibh quis mi tincidunt pretium.</p>
    <h1 id="beta">Beta</h1>
    <p>Sed augue arcu, aliquet ut sagittis at, luctus eget orci. Proin tristique porta sagittis. Maecenas lorem dui, elementum ut bibendum id, ullamcorper non magna. Aenean iaculis congue quam, sed faucibus urna tempor at. Nulla facilisi.</p>
    <h1 id="gamma">Gamma</h1>
    <p>Aenean sollicitudin justo non nibh ullamcorper eget malesuada sapien facilisis. Mauris tempus rhoncus lectus non aliquam. In tincidunt volutpat euismod.</p>
</body>
```

---
## 📍 07 - 다양한 글자 모양

`b`태그는 굵은 글자, `i`태그는 기울어진 글자, `small`태그는 작은 글자, `sub`태그는 아래 첨자, `sup`태그는 위 첨자, `ins`태그는 밑줄 글자, `del`태그는 취소선이 그어진 글자입니다. 그리고 `hr`태그는 수평줄이고, `br`태그는 줄바꿈 입니다

```html
<body>
    <h1><b>Lorem ipsum dolor sit amet</b></h1>
    <h1><i>Lorem ipsum dolor sit amet</i></h1>
    <h1><small>Lorem ipsum dolor sit amet</small></h1>
    <h1>Lorem ipsum dolor <sub> sit amet</sub></h1>
    <h1>Lorem ipsum dolor <sup> sit amet</sup></h1>
    <h1><ins>Lorem ipsum dolor sit amet</ins></h1>
    <h1><del>Lorem ipsum dolor sit amet</del></h1>
    <hr>
    <b>Lorem ipsum dolor sit amet</b><br>
    <i>Lorem ipsum dolor sit amet</i><br>
    <small>Lorem ipsum dolor sit amet</small><br>
    Lorem ipsum dolor <sub> sit amet</sub><br>
    Lorem ipsum dolor <sup> sit amet</sup><br>
    <ins>Lorem ipsum dolor sit amet</ins><br>
    <del>Lorem ipsum dolor sit amet</del><br>
</body>
```

---

