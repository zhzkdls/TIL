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

**`GET` 방식은 주소에 데이터를 입력해서 전달**, **`POST` 방식은 `GET` 방식과 달리 비밀스럽게 데이터를 전달합니다**. `GET`은 주소에 데이터를 입력하므로 크기가 한정되어 있는데, `POST` 방식은 물건을 택배를 부치듯이 데이터를 별도로 전송하기 떄문에 용량에 제한이 없습니다.

```html
<!-- GET 전송 방식 -->
<body>
    <form method="get">
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

```html
<!-- POST 전송 방식 -->
<body>
    <form method="post">
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

---
## 📍 02- 기본 입력 양식 태그

`input` 태그에 `type` 속성을 지정해서 다양한 종류의 기본 입력 양식을 생성 할 수있습니다.

```html
<body>
    <form>
        <!-- 사용자가 입력하는 입력 양식 -->
        <input type="text" name="text" value="text"><br>
        <input type="password" name="password" value="password"><br>
        <input type="file" name="file" value="file"><br>
        <input type="checkbox" name="checkbox" value="checkbox"><br>
        <input type="radio" name="radio" value="radio"><br>

        <!-- 보이지 않는 입력 양식 -->
        <input type="hidden" name="hidden" value="hidden"><br>

        <!-- 버튼 -->
        <input type="button" value="button"><br>
        <input type="reset" value="reset"><br>
        <input type="submit" value="submit"><br>
        <input type="image" src="https://placehold.it/100x100">
    </form>
</body>
```

---
## 📍 03- 간단한 입력 양식 생성

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