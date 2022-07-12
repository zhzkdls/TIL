## 📝 section - 01 - 박스 속성

`width` 속성과 `height` 속성은 글자를 감싸는 영역 크기를 지정하고, `border` 속성은 테두리 두께를 지정합니다. `padding` 속성은 테두리와 글자 사이 간격을 지정하고, `margin` 속성은 테두리와 다른 태그 간격을 지정하며, `padding` 속성은 테두리 바깥쪽 여백을 지정합니다.

## 📍 01 - 박스 크기와 패딩 조정

**width 와 heigh 속성 적용하기** 👉 `div` 태그로 만든 박스의 너비와 높이가 `100px`로 지정합니다.

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

**margin 와 padding 속성 적용하기** 👉 `margin` 속성에 `100px`을 적용하고, `padding` 속성에 `30px`을 적용합니다.

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

**네 방향 속성 지정하기** 👉 순서대로 크기 단위를 띄어쓰기로 구분하면 각 너비를 별도로 지정할 수 있습니다.

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

**두 방향 속성 지정하기** 👉 margin과 padding 속성에 값을 2개 입력해서 네 방향을 2개씩 묶어 지정할 수 있습니다. 

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
