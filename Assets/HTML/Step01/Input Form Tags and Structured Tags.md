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

라디오 버튼의 `name` 속성을 사용하면 여러 대상 중 하나만 선택하는 형태를 구현할 수 있습니다. 코드를 실행하고 라디오 **버튼 2개**를 번갈아 가며 클릭합니다. 한 번에 **하나만** 선택할수 있는것을 알 수 있습니다.

```html
<body>
    <form>
        <table>
            <tr>
                <td><label for="username">이름</label></td>
                <td><input id="username" type="text" name="username"></td>
            </tr>
            <tr>
                <td>성별</td>
                <td>
                    <input id="man" type="radio" name="gender" value="m">
                    <label for="man">남자</label>
                    <input id="woman" type="radio" name="gender" value="w">
                    <label for="woman">여자</label>
                </td>
            </tr>
        </table>  
        <input type="submit" value="가입">
    </form>
</body>
```

---
## 📍 04- 선택 가능한 입력 양식

**한 항목만 선택하기** 👉 `select` 태그는 목록으로 보여 주는 항목 중 하나 또는 여러 개를 선택할 떄 사용하는 입력 양식 요소입니다.

```html
<body>
    <!--한 항목만 선택하기-->
    <select>
        <option>김밥</option>
        <option>떡볶이</option>
        <option>순대</option>
        <option>어묵</option>
    </select>
</body>>
```
**여러 항목 선택하기** 👉 여러 항목을 선택하려면 `select` 태그의 `multiple` 속성을 사용합니다. 스마트폰에서 어느 정도 예쁘게 나오지만 일반 데스크탑 웹 페이지에서는 잘 사용하지 않습니다.

```html
<body>
    <!--여러 항목 선택하기-->
    <select multiple="multiple">
        <option>김밥</option>
        <option>떡볶이</option>
        <option>순대</option>
        <option>어묵</option>
    </select>
</body>>
```

**선택 옵션 묶기** 👉 `optgroup` 태그를 사용해 선택 옵션을 그룹으로 묶을 수 있습니다.

```html
<body>
    <!--선택 옵션 묶기-->
    <select>
        <optgroup label="HTML5">
            <option>태그</option>
            <option>속성</option>
            <option>옵션</option>
        </optgroup>
        <optgroup label="CSS3">
            <option>마진</option>
            <option>패딩</option>
            <option>컬러</option>
        </optgroup>
    </select>
</body>
```

---
## 📍 05- 연관 있는 입력 양식 그룹으로 묶기

`fieldset` 태그와 `legend` 태그를 사용하면 입력 양식을 그룹으로 묶고 이름을 지정할 수 있습니다. `legend` 태그는 `fieldset` 태그 내부에 사용합니다.

```html
<body>
    <form>
        <fieldset>
            <legend>입력 양식</legend>
            <table>
                <tr>
                    <td><label for="name">이름</label></td>
                    <td><input id="name" type="text"></td>
                </tr>
                <tr>
                    <td><label for="mail">이메일</label></td>
                    <td><input id="mail" type="email"></td>
                </tr>
            </table>
            <input type="submit">
        </fieldset>
    </form>
</body>
```

**`textarea` 태그 주의 사항** 👉 글자를 여러 줄 입력할 때 사용하는 `textarea` 태그를 예쁘게 정렬하려고 다음 **첫 번째 예)** 처럼 작성하는 경우가 많습니다. 하지만 이렇게 입력하면 왼쪽의 들여쓰기가 입력 양식 내부에 출력됩니다. **두번째 예)** 쳐럼 작성해야 정상적으로 출력이 됩니다.

```html
<body>
    <h4>잘못된 형태</h4>
        <textarea>
            Textarea 태그
            Textarea 태그
        </textarea>

    <h4>올바른 형태</h4>
        <textarea>Textarea 태그
    Textarea 태그</textarea>
</body>
```

---
## 📝 section - 02 - 공간 분할 태그

## 📍 01 - 공간 분할 방법

**공간을 블록 형식으로 분할하기** 👉🏽 div 태그를 사용해 공간을 분할하면 각 태그가 한 행을 모두 차지합니다. 이를 블록 형식이라고 합니다.

```html
<body>
    <div>div 태그 - block 형식</div>
    <div>div 태그 - block 형식</div>
    <div>div 태그 - block 형식</div>
    <div>div 태그 - block 형식</div>
    <div>div 태그 - block 형식</div>
</body>
```

**공간을 인라인 형식으로 분할하기** 👉🏽 코드를 실행하면 각 태그는 자신의 **글자 크기**만큼 영역을 차지하면, `왼쪽`에서 `오른쪽`으로 쌓입니다. 이를  인라인 형식이라고 합니다.

```html
<body>
    <span>span 태그 - inline 형식</span>
    <span>span 태그 - inline 형식</span>
    <span>span 태그 - inline 형식</span>
    <span>span 태그 - inline 형식</span>
    <span>span 태그 - inline 형식</span>
</body>
```

---
## 📍 02- 시맨틱 태그를 사용한 레이아웃 구성

`header` 태그는 머리말(페이지 제목, 페이지 소개), `nav` 태그는 하이퍼링크들을 모아 둔 내비게이션, `aside` 태그는 본문 흐름에 벗어나는 노트나 팁, `section` 태그는 문서의 장이나 절에 해당하는 내용, `article` 태그는 본문과 독립적인 콘텐츠 영역, `footer` 태그는 꼬리말(저자나 저작권 정보)를 입력합니다.

```html
<body>
    <header>
        <h1>HTML5 기본</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">메뉴 - 1</a></li>
            <li><a href="#">메뉴 - 2</a></li>
            <li><a href="#">메뉴 - 3</a></li>
        </ul>
    </nav>
    <section>
        <article>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum pretium elit, at iaculis dui congue facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lectus, sagittis quis commodo commodo, congue a nibh. Donec ornare leo in ipsum consectetur euismod. Sed lorem urna, adipiscing eget pharetra ullamcorper, facilisis id sapien. Phasellus ac pellentesque odio. Curabitur quis tortor vel odio dignissim congue ac sit amet nisl. Nulla placerat nibh quis mi tincidunt pretium.</p>
        </article>
        <article>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum pretium elit, at iaculis dui congue facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue lectus, sagittis quis commodo commodo, congue a nibh. Donec ornare leo in ipsum consectetur euismod. Sed lorem urna, adipiscing eget pharetra ullamcorper, facilisis id sapien. Phasellus ac pellentesque odio. Curabitur quis tortor vel odio dignissim congue ac sit amet nisl. Nulla placerat nibh quis mi tincidunt pretium.</p>
        </article>
    </section>
    <footer>
        <address>서울특별시 강서구 내발산동</address>
    </footer>
</body>
```

---
## 📝 section - 03 - 블로그 만들기

## 📍 01- 레이아웃 구성

일반 블로그의 레이아웃을 단순화시키고 기능별로 영역을 분리합니다. 그런 다음 행을 기준으로 영역을 분리합니다. 행을 분리할 때는 가로로 선을 그릴 수 있는 부분을 분리합면 됩니다.

```html
<body>
    <!-- 전체를 감싸는 태그 -->
    <div id="page-wrapper">
        <!-- 헤더 -->
        <header id="main-header"></header>
        <!-- 내비게이션 -->
        <nav id="main-navigation"></nav>
        <!-- 본문 -->
        <div id="content">
            <!-- 본문 좌측 영역 -->
            <section id="main-section"></section>
            <!-- 본문 우측 영역 -->
            <aside id="main-aside"></aside>
        </div>
        <!-- 푸터 -->
        <footer id="main-footer"></footer>
    </div>
</body>
```

앞에서 이미 만들어진 구성에 내용을 **추가**하였습니다.  하지만 화면을 보면 아직 덜 만들어지 모습이 보일 것이다. 실망하지 말고 이젠  css를 배워서 이 구성에 **css를 추가 하면 좋은 웹 사이트가 완성**이 된다.

```html
<body>
    <div id="page-wrapper">
        <header id="main-header">
            <hgroup>
                <h1 class="master-title">종합예제01</h1>
                <h2 class="master-description">초마아카데이</h2>
            </hgroup>
        </header>
        <nav id="main-navigation">
            <div class="pull-left">
                <ul class="outer-menu">
                    <li class="outer-menu-item">
                        <span class="menu-title">초코</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                        </ul>
                    </li>
                    <li class="outer-menu-item">
                        <span class="menu-title">하마</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                        </ul>
                    </li>
                    <li class="outer-menu-item">
                        <span class="menu-title">초코하마</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                            <li class="inner-menu-item"><a href="#">데이터</a> </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="pull-left">
                <div class="search-bar">
                    <form>
                        <input type="text" class="input-search">
                        <input type="submit" class="input-search-submit" value="검색" />
                    </form>
                </div>
            </div>
        </nav>
        <div id="content">
            <section id="main-section">
                <article>
                    <div class="article-header">
                        <h1 class="article-title">개요와 할용</h1>
                        <p class="article-date">2022년 06월 19일</p>
                    </div>
                    <div class="article-body">
                        <img src="http://placehold.it/420x280" alt="사진"> 
                        <br>
                        <p>안녕하셈~!!!</p>
                        <br>
                        <p>반갑습니다~!!!</p>
                    </div>
                </article>
            </section>
            <aside id="main-aside">
                <div class="aside-list">
                    <h3>카테고리</h3>
                    <ul>
                        <li><a href="#">데이터</a></li>
                        <li><a href="#">데이터</a></li>
                        <li><a href="#">데이터</a></li>
                        <li><a href="#">데이터</a></li>
                        <li><a href="#">데이터</a></li>
                    </ul>
                </div>
            </aside>
        </div>
        <footer id="main-footer">
            <a href="#">IT개발자</a>
        </footer>
    </div>
</body>
```

---
