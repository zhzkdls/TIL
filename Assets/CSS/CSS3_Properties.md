## π section - 01 - λ°μ€ μμ±

* `width` μμ±κ³Ό `height` μμ±μ κΈμλ₯Ό κ°μΈλ μμ­ ν¬κΈ°λ₯Ό μ§μ νκ³ , `border` μμ±μ νλλ¦¬ λκ»λ₯Ό μ§μ ν©λλ€. `padding` μμ±μ νλλ¦¬μ κΈμ μ¬μ΄ κ°κ²©μ μ§μ νκ³ , `margin` μμ±μ νλλ¦¬μ λ€λ₯Έ νκ·Έ κ°κ²©μ μ§μ νλ©°, `padding` μμ±μ νλλ¦¬ λ°κΉ₯μͺ½ μ¬λ°±μ μ§μ ν©λλ€.

## π 01 - λ°μ€ ν¬κΈ°μ ν¨λ© μ‘°μ 

* **width μ heigh μμ± μ μ©νκΈ°** π `div` νκ·Έλ‘ λ§λ  λ°μ€μ λλΉμ λμ΄κ° `100px`λ‘ μ§μ ν©λλ€.

 * **μμ€μ½λ**[ β ](https://github.com/zhzkdls/TIL/blob/main/Assets/CSS/Margin_and_padding_Properties.html)
 
    #### margin μμ±κ³Ό padding μμ±μ λ°©ν₯ μ μ© 
    |μμ±|μ€λͺ|
    |------|---|
    |margin-left|μΌμͺ½ μ¬λ°±|
    |margin-right|μ€λ₯Έμͺ½ μ¬λ°±|
    |margin-top|μμͺ½ μ¬λ°±|
    |margin-bottom|μλμͺ½ μ¬λ°±|
    |margin-left|μΌμͺ½ ν¨λ©|
    |margin-right|μ€λ₯Έμͺ½ ν¨λ©|
    |margin-top|μμͺ½ ν¨λ©|
    |margin-bottom|μλμͺ½ ν¨λ©|

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

* **margin μ padding μμ± μ μ©νκΈ°** π `margin` μμ±μ `100px`μ μ μ©νκ³ , `padding` μμ±μ `30px`μ μ μ©ν©λλ€.

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
## π 02 - λ°μ€ μ¬λ°± λΆλΆ μ‘°μ 

* **λ€ λ°©ν₯ μμ± μ§μ νκΈ°** π μμλλ‘ ν¬κΈ° λ¨μλ₯Ό λμ΄μ°κΈ°λ‘ κ΅¬λΆνλ©΄ κ° λλΉλ₯Ό λ³λλ‘ μ§μ ν  μ μμ΅λλ€.

```html
  <style>
        div {
            width: 100px; height: 100px;
            background-color: red;

            /* margin: μ μ€λ₯Έμͺ½ μλ μΌμͺ½ */
            /* padding: μ μ€λ₯Έμͺ½ μλ μΌμͺ½ */
            margin: 0 30px 0 30px;
            padding: 0 30px 0 30px;
        }
    </style>
```

* **λ λ°©ν₯ μμ± μ§μ νκΈ°** π marginκ³Ό padding μμ±μ κ°μ 2κ° μλ ₯ν΄μ λ€ λ°©ν₯μ 2κ°μ© λ¬Άμ΄ μ§μ ν  μ μμ΅λλ€. 

```html
  <style>
        div {
            width: 100px; height: 100px;
            background-color: red;

            /* margin: μμλ μΌμͺ½μ€λ₯Έμͺ½ */
            /* padding: μμλ μΌμͺ½μ€λ₯Έμͺ½ */
            margin: 0 30px; 
            padding: 0 30px;
        }
    </style>
```

---
## π 03 - λ°μ€ νλλ¦¬ μ‘°μ 

* **λ°μ€ νλλ¦¬ λ§λ€κΈ°** π `border` μμ±μ μ¬μ©ν΄ λ°μ€ νλλ¦¬λ₯Ό λ§λ­λλ€.

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

* **λ₯κ·Ό νλλ¦¬ λ§λ€κΈ°** π `border-radius` μμ±μ μ μ©νλ©΄ λͺ¨μλ¦¬κ° λ₯κ·Ό λ°μ€ νλλ¦¬λ₯Ό λ§λ­λλ€.

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

* **λͺ¨μλ¦¬λ§λ€ λ₯κΈκΈ°λ₯Ό λ€λ₯΄κ² μ μ©νκΈ°** π `border-radius` μμ±μ ν¬κΈ° λ¨μ 4κ°λ₯Ό μλ ₯νλ©΄ κ° νλλ¦¬μ μλ‘ λ€λ₯Έ λ₯κΈκΈ°κ° μ μ©λ©λλ€. 

```html
<style>
    .box {
        border-width: thick;
        border-style: dashed;
        border-color: black;

        /* border-radius: μΌμͺ½μ μ€λ₯Έμͺ½μ μ€λ₯Έμͺ½μλ μΌμͺ½μλ */
        border-radius: 50px 40px 20px 10px;
    }
</style>
```

---
## π section - 02 - κ°μ μμ±

## π 01 - display μμ±

* **none ν€μλ μ μ©νκΈ°** π `display` μμ±μ none ν€μλλ₯Ό μ μ©νλ©΄ νκ·Έκ° νλ©΄μμ λ³΄μ΄μ§ μμ΅λλ€. μ¦ μ€κ°μ μλ div νκ·Έ μ μ²΄κ° νλ©΄μμ μ¬λΌμ§λλ€.

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
    <span>λλ―Έ κ°μ²΄</span>
    <div id="box">λμ κ°μ²΄</div>
    <span>λλ―Έ κ°μ²΄</span>
</body>
```

* **block ν€μλ μ μ©νκΈ°** π `#box` νκ·Έμ `display` μμ±μ `black` ν€μλλ‘ λ°κΏλλ€. μ€ν ν κ²μ¬μκ² κ° νκ·Έλ₯Ό ν΄λ¦­νλ©΄ ν΄λΉ μμκ° μ νν©λλ€. 

```html
<style>
    #box {
        display: block;
    }
</style>
```

* **inlineκ³Ό inline-block ν€μλ λΉκ΅νκΈ°** π `div` νκ·Έμ `display` μμ±μ `inline`κ³Ό `inline-block`ν€μλλ₯Ό μ§μ ν©λλ€.

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
μΈλΌμΈ νμκ³Ό μΈλΌμΈ-λΈλ‘ νμμ΄ μ°¨μ΄κ° μμ΄ λ³΄μ΄μ§λ§ `width` μμ±, `height` μμ±, `margin` μμ±μ μ¬μ©νλ©΄ μ°¨μ΄λ₯Ό νμΈν  μ μμ΅λλ€. 


---
## π section - 03 - κΈμ μμ±

## π 01 - κΈμ ν¬κΈ°μ κΈκΌ΄ μ§μ 

* **κΈμ ν¬κΈ°μ κΈκΌ΄ μ§μ ** π `.a b c d` μμ±μ μ¬μ©νμ¬ `p` νκ·Έμμ `class="a"` μμ±μ ν΄λΉνλ **μνλ²³**μ μλ ₯νλ©΄ κ°κ° ν΄λΉνλ κΈμκ° λ€μνκ² λ³κ²½λ κ²μ νμΈν  μ μμ΅λλ€.

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

* **κΈκΌ΄ 1κ° μ§μ νκΈ°** π μΌλ°μ μΌλ‘ ν λ¨μ΄λ‘ λ κΈκΌ΄ μ΄λ¦μ λ°μ΄νλ₯Ό μ¬μ©νμ§ μμ§λ§ λ λ¨μ΄ μ΄μμΌλ‘ λ κΈκΌ΄ μ΄λ¦μ λ°μ΄ν μ¬μ©μ μΆμ²ν©λλ€.

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
## π 02 - κΈμ μ λ ¬ μ§μ 

* **κΈμ μ λ ¬** π `text-align` μμ±μ κΈμ μ λ ¬μ μ§μ ν©λλ€.

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
## π 03 - κΈμλ₯Ό μμ§ μ€μ μ λ ¬

* **κΈμ λμ΄λ₯Ό μ§μ νλ line-height μμ±**μ μ¬μ©ν΄ κΈμλ₯Ό μμ§ μ€μ μ λ ¬ν©λλ€.
* **κ°λ¨ν λ²νΌ λ§λ€κΈ°** π κΈμκ° μνμΌλ‘λ μ€μ μ λ ¬λμ§λ§ μμ§μΌλ‘λ μ€μ μ λ ¬λμ§ μμ΅λλ€. **CSS**μλ `block`μμ±μ΄ μλ νκ·Έμ μμ§ μ λ ¬μ μ§μ ν  μ μλ μ€νμΌ μμ±μ΄ μκΈ° λλ¬Έμλλ€.

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

* **κΈμλ₯Ό μμ§ μ€μ μ λ ¬νκΈ°** π κΈμ§λ₯Ό κ°μΈλ λ°μ€μ λμ΄μ ν¬κΈ°κ° κ°μ `70px`λ‘ `line-height`μμ±μ μ§μ νλ©΄ μ€ν κ²°κ³Όμ²λΌ κΈμκ° μμ§μΌλ‘ μ€μ μ λ ¬λ©λλ€.

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
## π section - 04 - μμΉ μμ±

## π 01 - Position μμ±

* **absolut ν€μλ μ μ©νκΈ°** π `box` ν΄λμ€λ₯΄ κ°μ§λ `div` νκ·Έμ `position` μμ±μ `absolut` ν€μλλ₯Ό μ μ©ν΄μ μ½λλ₯Ό μμ±ν©λλ€. μ€ν κ²°κ³Όλ μΉ λΈλΌμ°μ μ λ°λΌ μ½κ° λ€λ₯΄κ² λνλ©λλ€. λ―ΈμΈν λ²μ  μ°¨μ΄μ λ°λΌ **νλμ μμλ§** λ³΄μ΄κ±°λ **μμ 3κ°**κ° λͺ¨λ λ³΄μλλ€.

#### position μμ±κ³Ό ν€μλ 
    |ν€μλ|μ€λͺ|
    |-----|-----------|
    |absolut|μ λ μμΉ μ’ν μ€μ |
    |fixed|νλ©΄μ κΈ°μ€μΌλ‘ μ λ μμΉ μ’ν μ€μ |
    |relative|μ΄κΈ° μμΉμμ μνμ’μ°λ‘ μμΉ μ΄λ|
    |static|μμͺ½μμ μλμͺ½μΌλ‘ μμλλ‘ λ°°μΉ|

```html
<head>
    <style>
        .box { 
            width: 100px; height: 100px; 
            position: absolute;
        }
        .box:nth-child(1) { background-color: red; }
        .box:nth-child(2) { background-color: green; }
        .box:nth-child(3) { background-color: blue; }
    </style>
</head>
<body>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</body>
```

* **left μμ±κ³Ό top μμ± μ μ©νκΈ°** π λͺ¨λ  μΉ λΈλΌμ°μ μ μΆλ ₯ λ°©μμ λμΌνλ €λ©΄ `left` μμ±κ³Ό `top` μμ±μ μ μ©ν΄μΌ ν©λλ€. μ€νν κ²°κ³Όλ₯Ό μ΄ν΄λ³΄λ©΄ `λΉ¨κ°μ μμ`κ° **λ§¨ λ€μͺ½**μ μκ³ , `νλμ μμ`κ° **λ§¨ μμͺ½**μ μμ΅λλ€. κΈ°λ³Έμ μΌλ‘ λ€μͺ½μ μμ±ν μ½λ νκ·Έκ° μμμ μ¬λΌκ°λλ€.

```html
<style>
        .box { 
            width: 100px; height: 100px;
            position: absolute;
        }
        .box:nth-child(1) {
            background-color: red;
            left: 10px; top: 10px;
        }
        .box:nth-child(2) {
            background-color: green;
            left: 50px; top: 50px;
        }
        .box:nth-child(3) {
            background-color: blue;
            left: 90px; top: 90px;
        }
</style>
```

* **z-index μμ± μ μ©νκΈ°** π μ€νν κ²°κ³Όμμ λν μμλ₯Ό λ³κ²½νκ³  μΆμ λλ `z-index` μμ±μ μ¬μ©ν©λλ€. `z-index` μμ±μ μ«μλ₯Ό μλ ₯νλ©΄ μ«μκ° ν΄μλ‘ μμ μμΉν©λλ€. 


```html
<style>
        .box { 
            width: 100px; height: 100px; 
            position: absolute;
        }
        .box:nth-child(1) {
            background-color: red;
            left: 10px; top: 10px;

            z-index: 100;
        }
        .box:nth-child(2) {
            background-color: green;
            left: 50px; top: 50px;

            z-index: 10;
        }
        .box:nth-child(3) { 
            background-color: blue;
            left: 90px; top: 90px;

            z-index: 1;
        }
</style> 
```

---
## π 02 - Overflow μμ±

* **hidden ν€μλ μ μ©νκΈ°** π μ€ν κ²°κ³Όλ₯Ό λ³΄λ©΄ μμμ΄ μ μ©λ μ¬κ°νμ΄ λΆλͺ¨μ λ²μλ₯Ό λ²μ΄λ μμ΅λλ€. μ΄λ¬ν `div` νκ·Έμ `overflow` μμ±μ hidden ν€μλλ₯Ό μλ ₯νλ©΄ λΆλͺ¨ μμ­μ λ²μ΄λ λΆλΆμ μλΌ λͺ¨λ κ°μΆ€λλ€.

#### Overflow μμ±κ³Ό ν€μλ 
    |ν€μλ|μ€λͺ|
    |-----|-----------|
    |hidden|μμ­μ λ²μ΄λλ λΆλΆ κ°μΆ€|
    |scroll|μμ­μ λ²μ΄λλ λΆλΆμ μ€ν¬λ‘€λ‘ λ§λ¦|

```html
<head>
    <title>CSS3 Property Basic</title>
    <style>
        .box { 
            width: 100px; height: 100px; 
            position: absolute;
        }
        .box:nth-child(1) {
            background-color: red;
            left: 10px; top: 10px;

            z-index: 100;
        }
        .box:nth-child(2) {
            background-color: green;
            left: 50px; top: 50px;

            z-index: 10;
        }
        .box:nth-child(3) { 
            background-color: blue;
            left: 90px; top: 90px;

            z-index: 1; 
        }
        body > div {
            width: 400px; height: 100px;
            border: 3px solid black;
            
            position: relative;
            overflow: hidden;
        }
    </style>
</head>
<body>
    <h1>Lorem ipsum dolor amet</h1>
    <div>
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
    <h1>Lorem ipsum dolor amet</h1>
</body>
```

---
