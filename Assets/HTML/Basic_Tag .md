## ๐ section - 01 - HTML5 ๊ธ์ ํ๊ทธ

## ๐ 01 - ์ ๋ชฉ ํํ

* ์ฌ๊ธฐ์๋ `h1`ํ๊ทธ๋ ๊ฐ์ฅ ํฐ ์ ๋ชฉ ์ด๊ณ , `h6`ํ๊ทธ๋ ๊ฐ์ฅ ์์ ์ ๋ชฉ์ด๋ผ๋ ๊ฒ๋ง ๊ธฐ์ตํ๋ฉด ๋๋ค. ์น ๋ธ๋ผ์ฐ์ ์ ๋ฐ๋ผ ๊ธฐ๋ณธ ๊ธ๊ผด์ด ๋ฌ๋ผ์ ์ถ๋ ฅ๋๋ ๊ธ๊ผด๋ ๋ค๋ฆ๋๋ค.

```html

<body>
    <h1>์ ๋ชฉ ๊ธ์ ํ๊ทธ 1</h1>
    <h2>์ ๋ชฉ ๊ธ์ ํ๊ทธ 2</h2>
    <h3>์ ๋ชฉ ๊ธ์ ํ๊ทธ 3</h3>
    <h4>์ ๋ชฉ ๊ธ์ ํ๊ทธ 4</h4>
    <h5>์ ๋ชฉ ๊ธ์ ํ๊ทธ 5</h5>
    <h6>์ ๋ชฉ ๊ธ์ ํ๊ทธ 6</h6>
</body>
```

---
## ๐ 02 - ๋ณธ๋ฌธ ๋จ๋ฝ ๊ตฌ๋ถ

* ์ฌ๊ธฐ์๋ `h1`ํ๊ทธ๋ ๋ณธ๋ฌธ์ด ๋๊ณ  `p` ํ๊ทธ๋ ๊ธด ๊ธ์๋ฅผ ์ฌ์ฉ ํ  ๋ ์ฌ์ฉํ๋ค. 

```html
<body>
    <h1>์ ๋ชฉ ๊ธ์</h1>
    <p>Nulla placerat nibh quis mi tincidunt pretium.</p>
    <p>Integer nibh tellus, tristique quis blandit quis, consequat in nunc.</p>
</body>
```

---
## ๐ 03 - ์ ๋ชฉ๊ณผ ๋ณธ๋ฌธ ํ๊ทธ์ ํ์ฉ

* ์ ๋ชฉ๊ณผ ๋ณธ๋ฌธ ํ๊ทธ๋ฅผ ๋ชจ๋ ํ์ฉํด์ ๊ฐ๋จํ ๋ฌธ์๋ฅผ ์์ฑํด ๋ณด๊ฒ ์ต๋๋ค. ์ฃผ์ ํ  ์ ์ `br`ํ๊ทธ๋ ๋ค๋ฅธ ๊ธ์ ํ๊ทธ ๋ด๋ถ์ ์ฝ์ํ  ์ ์์ง๋ง `hr`ํ๊ทธ๋ ์ ๋๋ค๋ ๊ฒ์๋๋ค. ๋ฌผ๋ก  `hr`ํ๊ทธ๊ฐ ๋ค๋ฅธ ๊ธ์ ํ๊ทธ ๋ด๋ถ์ ์์ด๋ ์น ๋ธ๋ผ์ฐ์ ๊ฐ ์ ์ฐํ๊ฒ ๋์ณํ๋ฏ๋ก ์ ์์ ์ผ๋ก ์ถ๋ ฅ๋ฉ๋๋ค.  

```html
<body>
    <h1>ํ์ฐจ</h1>
    <hr>
    <h2>์ ์</h2>
    <p>ํ์ฐจ๋ ๋ฐฑ์ฐจ, ๋น์ฐจ, ์ฐ๋กฑ์ฐจ๋ณด๋ค ๋ ๋ง์ด ๋ฐํจ๋ ์ฐจ์ ์ผ์ข์ด๋ค. ๋์์์๋ ์ฐป๋ฌผ์ ๋น์ด ๋ถ๊ธฐ ๋๋ฌธ์ ํ์ฐจ๋ผ๊ณ  ๋ถ๋ฅด์ง๋ง, ์์์์๋ ์ฐป์์ ์๊น ๋๋ฌธ์ 'black tea'๋ผ๊ณ  ๋ถ๋ฅธ๋ค.</p>
    <br>
    <h2>๋ฑ๊ธ</h2>
    <p>ํ์ฐจ๋ ์ฌ๋ฌ ๊ฐ์ง๋ก ๋ฑ๊ธ์ด ๋งค๊ฒจ์ง๋ค. ์ผ๋ฐ์ ์ผ๋ก ์ฐป์์ ๋ชจ์์ ๋ฐ๋ฅธ ๋ฑ๊ธ๊ณผ ๊ฐ๊ณต ์ํ์ ๋ฐ๋ฅธ ๋ฑ๊ธ์ ์กฐํฉํ์ฌ ํ์ํ๋ค.</p>
    <p>- ๋ธ๋กํฐ ํ์ฝ</p>
    <p>- ๋ธ๋กํฐ ํ์ฝ ์์</p>
    <p>- ๋ธ๋กํฐ ์ค๋ ์ง ํ์ฝ ํจ๋</p>
</body>

```

---
## ๐ 04 - ๊ณต๋ฐฑ์ด ์๋ ๊ธ์

* HTML ํ๊ทธ ๋ด๋ถ์ ๊ณต๋ฐฑ 3๊ฐ๋ฅผ ์ฐ์์ผ๋ก ์๋ ฅํ ํ ํ์ผ์ ์คํํ๋ฉด ์ฐ์๋ ๊ณต๋ฐฑ์ 1๊ฐ๋ก ์ธ์ํ๊ธฐ์ ๊ณต๋ฐฑ 3๊ฐ๊ฐ ์ ๋๋ก ํ์๋์ง ์๋๋ค.

```html
<body>
    <h1>๊ณต๋ฐฑ์ด&nbsp;&nbsp;&nbsp;์๋&nbsp;&nbsp;&nbsp;๊ธ์</h1>
</body>

```

---
## ๐ 05 - ํน์  ์น ํ์ด์ง์ ์ฐ๊ฒฐํ๊ธฐ

* `a`ํ๊ทธ๋ฅผ ์ฌ์ฉํด ํน์  ์น ํ์ด์ง๋ ์น ํ์ด์ง ๋ด๋ถ์ ํน์  ์์น๋ก ์ด๋ํ๋ ๋งํฌ๋ฅผ ์์ฑํ ํ ํ์ดํผ๋งํฌ๋ฅผ ์ค์ ํ ๊ธ์๋ฅผ ํด๋ฆญํ๋ฉด ํด๋น ์น ํ์ด์ง๋ก ์ด๋ํฉ๋๋ค.

```html
<body>
    <a href="http://hanb.co.kr">ํ๋น๋ฏธ๋์ด</a><br>
    <a href="http://naver.com/">๋ค์ด๋ฒ</a><br>
    <a href="http://daum.com/">๋ค์</a><br>
</body>
```

---
## ๐ 06 - ์น ํ์ด์ง ๋ด๋ถ์ ์ฐ๊ฒฐํ๊ธฐ

* ์น ํ์ด์ง ๋ด๋ถ์ ํน์  ํ๊ทธ๋ก ์ด๋ํ๋ ค๋ฉด `id` ์์ฑ์ ์ถ๊ฐ๋ก ์ฌ์ฉํฉ๋๋ค. ์ฐ์  `h1` ํ๊ทธ์ `id` ์์ฑ์ ์๋ ฅํฉ๋๋ค. ์ด์ด์ `a` ํ๊ทธ์ `href` ์์ฑ์ `#id ์์ฑ`ํํ์ ๋ฌธ์์ด์ ์๋ ฅํฉ๋๋ค. ํ์ผ์ ์คํํด์ `Alpha` ๋ถ๋ถ ๋งํฌ๋ฅผ ํด๋ฆญํ๋ฉด ํด๋น ๋ด์ฉ์ผ๋ก ์ด๋ํฉ๋๋ค. `p`ํ๊ทธ์ ์๋ ฅ๋๋ ๋ณธ๋ฌธ์ ์ง๋ฉด์ ์ผ๋ถ๋ง ๋ฃ์์ต๋๋ค.

```html
<body>
    <a href="#alpha">Alpha ๋ถ๋ถ</a>
    <a href="#beta">Beta ๋ถ๋ถ</a>
    <a href="#gamma">Gamma ๋ถ๋ถ</a>
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
## ๐ 07 - ๋ค์ํ ๊ธ์ ๋ชจ์

* `b`ํ๊ทธ๋ ๊ตต์ ๊ธ์, `i`ํ๊ทธ๋ ๊ธฐ์ธ์ด์ง ๊ธ์, `small`ํ๊ทธ๋ ์์ ๊ธ์, `sub`ํ๊ทธ๋ ์๋ ์ฒจ์, `sup`ํ๊ทธ๋ ์ ์ฒจ์, `ins`ํ๊ทธ๋ ๋ฐ์ค ๊ธ์, `del`ํ๊ทธ๋ ์ทจ์์ ์ด ๊ทธ์ด์ง ๊ธ์์๋๋ค. ๊ทธ๋ฆฌ๊ณ  `hr`ํ๊ทธ๋ ์ํ์ค์ด๊ณ , `br`ํ๊ทธ๋ ์ค๋ฐ๊ฟ ์๋๋ค

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
## ๐ section - 02 - HTML5 ๋ชฉ๋ก ํ๊ทธ

## ๐ 01 - ๋ฉ๋ด ๋ง๋ค๊ธฐ 

* ๋ชฉ๋ก ํ๊ทธ `ul`์ ์ฌ์ฉํด ์์๊ฐ **์๋** ๊ธฐ๋ณธ ๋ชฉ๋ก์ ์์ฑํฉ๋๋ค. 

```html
<body>
  <ul>
    <li>์ฌ๊ณผ</li>
    <li>๋ฐ๋๋</li>
    <li>์ค๋ ์ง</li>
  </ul>
</body>
```

* ๋ชฉ๋ก ํ๊ทธ `ul`์ `ol` ํ๊ทธ๋ก ๋ฐ๊พธ์ด ์์๊ฐ **์๋** ๊ธฐ๋ณธ ๋ชฉ๋ก์ ์์ฑํฉ๋๋ค. 

```html
<body>
  <ol>
    <li>์ฌ๊ณผ</li>
    <li>๋ฐ๋๋</li>
    <li>์ค๋ ์ง</li>
  </ol>
</body>
```

* ๋ชฉ๋ก ํ๊ทธ `ul`์ `ol` ํ๊ทธ๋ฅผ ์ฌ์ฉํ์ฌ **์ค์ฒฉ** ๋ชฉ๋ก์ ์์ฑํฉ๋๋ค. 

```html
<body>
  <ul>
    <!-- ์ฒซ ๋ฒ์งธ ๋ชฉ๋ก -->
    <li>
      <b>๊ณผ์ผ</b>
      <ol>
        <li>์ฌ๊ณผ</li>
        <li>๋ฐ๋๋</li>
        <li>์ค๋ ์ง</li>
      </ol>
    </li>
    <!-- ๋ ๋ฒ์งธ ๋ชฉ๋ก -->
    <li>
      <b>์ฑ์</b>
      <ol>
        <li>์์ถ</li>
        <li>์น์ปค๋ฆฌ</li>
        <li>์๋ฐฐ์ถ</li>
      </ol>
    </li>
  </ul>
</body>
```

---
## ๐ section - 03 - HTML5 ํ์ด๋ธ ํ๊ทธ

## ๐ 01 - ์๊ฐํ ๋ง๋ค๊ธฐ

* ํ๊ทธ์ ๋ํด ์ค๋ช๋๋ฆฌ๊ฒ ์ต๋๋ค. `table`์ ํ ์ฝ์์ด๊ณ , ํ์ ํ๋๋ฆฌ ๋๊ป๋ฅผ ์ง์ ํ๋ `border` ์์ฑ์ ๊ฐ์ง๊ณ  ์์ต๋๋ค. `tr`์ ํ์ ํ ์์, `th`์ ํ์ ์ ๋ชฉ ์ ์์ฑ, `td`์ ํ์ ์ผ๋ฐ ์ ์์ฑ์๋๋ค. 

```html
<body>
    <table border="1">
        <thead>
            <tr>
                <th></th>
                <th>์</th>
                <th>ํ</th>
                <th>์</th>
                <th>๋ชฉ</th>
                <th>๊ธ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1๊ต์</td>
                <td>์์ด</td>
                <td>๊ตญ์ด</td>
                <td>๊ณผํ</td>
                <td>๋ฏธ์ </td>
                <td>๊ธฐ์ </td>
            </tr>
            <tr>
                <td>2๊ต์</td>
                <td>๋๋</td>
                <td>์ฒด์ก</td>
                <td>์์ด</td>
                <td>์ํ</td>
                <td>์ฌํ</td>
            </tr>
        </tbody>
    </table>
</body>
```

---
## ๐ 02 - ํ * ์ด ๋ณํฉ ํ ์์ฑ

* `td` ํ๊ทธ๋ `colspan` ์์ฑ๊ณผ `rowspan` ์์ฑ์ ์ฌ์ฉํด ํ์์ ์ฐจ์งํ๋ ์์ญ์ ์กฐ์ ํ  ์ ์์ต๋๋ค. `colspan` ์์ฑ ์ฌ์ฉํ๋ฉด ์์ญ์ด ๊ฐ๋ก ๋ฐฉํฅ์ผ๋ก ๋์ด๋๊ณ , `rowspan` ์์ฑ์ ์ฌ์ฉํ๋ฉด ์์ญ์ด ์ธ๋ก ๋ฐฉํฅ์ผ๋ก ๋์ด๋ฉ๋๋ค. ์ด๊ฒ์ **์์ ๋ฑ ์คํ๋ ๋์ํธ์ ์๋ ์ ๋ณํฉ ๊ธฐ๋ฅ**๊ณผ ์ ์ฌํฉ๋๋ค.

```html
<body>
    <table border="1">
        <tr>
            <th colspan="2">์ง์ญ๋ณ ํ์ฐจ</th>
        </tr>
        <tr>
            <th rowspan="3">์ค๊ตญ</th>
            <td>์ ์ฐ์์ข</td>
        </tr>
        <tr><td>๊ธฐ๋ฌธ</td></tr>
        <tr><td>์ด๋จ</td></tr>
        <tr>
            <th rowspan="4">์ธ๋ ๋ฐ ์ค๋ฆฌ๋์นด</th>
            <td>์์ผ</td>
        </tr>
        <tr><td>์ค๋ก </td></tr>
        <tr><td>๋ค์ง๋ง</td></tr>
        <tr><td>๋๊ธฐ๋ฆฌ</td></tr>
    </table>
</body>
```

---
## ๐ section - 04 - HTML5 ๋ฏธ๋์ด ํ๊ทธ

## ๐ 01 - ์ด๋ฏธ์ง ์ฝ์ํ๊ธฐ

* ์ด๋ฏธ์ง๋ฅผ ์ฝ์ํ  ๋๋ `img`ํ๊ทธ๋ฅผ ์ฌ์ฉํฉ๋๋ค. `src`์ ์ด๋ฏธ์ง ๊ฒฝ๋ก ์ด๊ณ , ๊ทธ ๋ค์ `Penguins.jpg`์ด๋ฏธ์ง ํ์ผ์ ๊ฒฝ๋ก๋ฅผ ์ค์ ํฉ๋๋ค. ์ด๋ ๋จ์ด๊ฐ ํ๋ฆฌ๊ฒ ๋๋ฉด ๊ฒฝ๋ก๋ฅผ ์ฐพ์ง๋ฅผ ๋ชปํด์ ์ฌ์ง์ด ์๋์ค๊ฒ ๋๋๋ฐ ์ด๋ ์ด๋ฏธ์ง๊ฐ ์์๋ ๋์ค๋ ๊ธ์ ์ง์ ํ๊ฒ๋๋ `alt` ์์ฑ์ด ์์ต๋๋ค. ๋ํ ์ด๋ฏธ์ง ํฌ๊ธฐ๋ฅผ ์ค์ ํด์ฃผ๋ ํ๊ทธ๊ฐ ์์ต๋๋ค. ์ฐ์  `width`์ ์ด๋ฏธ์ง์ ๋๋น ์ง์ , `height`์ ์ด๋ฏธ์ง์ ๋์ด ์ง์ ํฉ๋๋ค.

```html
<body>
    <img src="Penguins.jpg" alt="ํญ๊ท" width="100" height="100">
    <img src="Nothing" alt="๊ทธ๋ฆผ์ด ์กด์ฌํ์ง ์์ต๋๋ค." width="150" height="100">
</body>
```

---
## ๐ 02- ์์ ์ฝ์ํ๊ธฐ

* ์์์ ์ฝ์์ ํ๊ธฐ์ํด์  `audio` ํ๊ทธ๋ฅผ ์ฌ์ฉํด์ผ ํฉ๋๋ค. `audio` ํ๊ทธ๋ HTML5์ ์ถ๊ฐ๋ ๊ธฐ๋ฅ์ด๋ฏ๋ก **์ธํฐ๋ท ์ต์คํ๋ก๋ฌ 8** ์ดํ์์๋ ์ฌ์ฉ ํ  ์ ์์ต๋๋ค. ๊ทธ๋ฆฌ๊ณ  `audio` ํ๊ทธ์ `video` ํ๊ทธ๋ ๋ด์ฉ๋ฌผ์ ๊ฐ์ง ์ ์๋ ํ๊ทธ์๋๋ค.

```html
<body>
   <audio src="Kalimba.mp3" controls="controls"></audio>
</body>
```

---
## ๐ 03- ๋์์ ์ฝ์ํ๊ธฐ

* ๋์์์ ์ฝ์์ ํ๊ธฐ์ํด์  `video` ํ๊ทธ๋ฅผ ์ฌ์ฉํด์ผ ํฉ๋๋ค.

```html
<body>
    <video width="320" controls="controls" poster="http://placehold.it/320x180">
        <source src="Wildlife.mp4" type="video/mp4">
        <source src="Wildlife.webm" type="video/webm">
    </video>
</body>
```

---
