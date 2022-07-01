## 📝 section - 01 - 입력 양식 태그

## 📍 01 - 입력 양식 개요

입력 양식은 `form` 태그로 영역을 생성하고, 내부에 `input` 태그를 넣어 만듭니다. 입력 양식에 데이터를 입력하고 **제출**`submit` 버튼을 누르면 지정된 방식으로 지정된 장소에 데이터를 전달합니다. 이러한 방식과 장소는 속성으로 지정합니다.

```html
<body>
    <form>
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

 **`form` 태그는 `method` 속성의 방식으로 `action` 속성 장소에 데이터를 전달**합니다.

```html
<body>
    <form action="전송 위치" method="전송 방식">
        
    </form>
</body>
```

```html
<body>
    <form>
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

---
## 📍 02- 음악 삽입하기

음악을 삽입을 하기위해선 `audio` 태그를 사용해야 합니다. `audio` 태그는 HTML5에 추가된 기능이므로 **인터넷 익스플로러 8** 이하에서는 사용 할 수 없습니다. 그리고 `audio` 태그와 `video` 태그는 내용물을 가질 수 있는 태그입니다.

```html
<body>
   <audio src="Kalimba.mp3" controls="controls"></audio>
</body>
```

---
## 📍 03- 동영상 삽입하기

동영상을 삽입을 하기위해선 `video` 태그를 사용해야 합니다.

```html
<body>
    <video width="320" controls="controls" poster="http://placehold.it/320x180">
        <source src="Wildlife.mp4" type="video/mp4">
        <source src="Wildlife.webm" type="video/webm">
    </video>
</body>
```

---