## π section - 01 - μλ ₯ μμ νκ·Έ

## π 01 - μλ ₯ μμ κ°μ

* μλ ₯ μμμ `form` νκ·Έλ‘ μμ­μ μμ±νκ³ , λ΄λΆμ `input` νκ·Έλ₯Ό λ£μ΄ λ§λ­λλ€. μλ ₯ μμμ λ°μ΄ν°λ₯Ό μλ ₯νκ³  **μ μΆ**`submit` λ²νΌμ λλ₯΄λ©΄ μ§μ λ λ°©μμΌλ‘ μ§μ λ μ₯μμ λ°μ΄ν°λ₯Ό μ λ¬ν©λλ€. μ΄λ¬ν λ°©μκ³Ό μ₯μλ μμ±μΌλ‘ μ§μ ν©λλ€.

```html
<body>
    <form>
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

 * **`form` νκ·Έλ `method` μμ±μ λ°©μμΌλ‘ `action` μμ± μ₯μμ λ°μ΄ν°λ₯Ό μ λ¬**ν©λλ€.

```html
<body>
    <form action="μ μ‘ μμΉ" method="μ μ‘ λ°©μ">
        
    </form>
</body>
```

* **`GET` λ°©μμ μ£Όμμ λ°μ΄ν°λ₯Ό μλ ₯ν΄μ μ λ¬**, **`POST` λ°©μμ `GET` λ°©μκ³Ό λ¬λ¦¬ λΉλ°μ€λ½κ² λ°μ΄ν°λ₯Ό μ λ¬ν©λλ€**. `GET`μ μ£Όμμ λ°μ΄ν°λ₯Ό μλ ₯νλ―λ‘ ν¬κΈ°κ° νμ λμ΄ μλλ°, `POST` λ°©μμ λ¬Όκ±΄μ νλ°°λ₯Ό λΆμΉλ―μ΄ λ°μ΄ν°λ₯Ό λ³λλ‘ μ μ‘νκΈ° λλ¬Έμ μ©λμ μ νμ΄ μμ΅λλ€.

```html
<!-- GET μ μ‘ λ°©μ -->
<body>
    <form method="get">
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

```html
<!-- POST μ μ‘ λ°©μ -->
<body>
    <form method="post">
        <input type="text" name="search">
        <input type="submit">
    </form>
</body>
```

---
## π 02- κΈ°λ³Έ μλ ₯ μμ νκ·Έ

* `input` νκ·Έμ `type` μμ±μ μ§μ ν΄μ λ€μν μ’λ₯μ κΈ°λ³Έ μλ ₯ μμμ μμ± ν  μμμ΅λλ€.

```html
<body>
    <form>
        <!-- μ¬μ©μκ° μλ ₯νλ μλ ₯ μμ -->
        <input type="text" name="text" value="text"><br>
        <input type="password" name="password" value="password"><br>
        <input type="file" name="file" value="file"><br>
        <input type="checkbox" name="checkbox" value="checkbox"><br>
        <input type="radio" name="radio" value="radio"><br>

        <!-- λ³΄μ΄μ§ μλ μλ ₯ μμ -->
        <input type="hidden" name="hidden" value="hidden"><br>

        <!-- λ²νΌ -->
        <input type="button" value="button"><br>
        <input type="reset" value="reset"><br>
        <input type="submit" value="submit"><br>
        <input type="image" src="https://placehold.it/100x100">
    </form>
</body>
```

---
## π 03- κ°λ¨ν μλ ₯ μμ μμ±

* λΌλμ€ λ²νΌμ `name` μμ±μ μ¬μ©νλ©΄ μ¬λ¬ λμ μ€ νλλ§ μ ννλ ννλ₯Ό κ΅¬νν  μ μμ΅λλ€. μ½λλ₯Ό μ€ννκ³  λΌλμ€ **λ²νΌ 2κ°**λ₯Ό λ²κ°μ κ°λ©° ν΄λ¦­ν©λλ€. ν λ²μ **νλλ§** μ νν μ μλκ²μ μ μ μμ΅λλ€.

```html
<body>
    <form>
        <table>
            <tr>
                <td><label for="username">μ΄λ¦</label></td>
                <td><input id="username" type="text" name="username"></td>
            </tr>
            <tr>
                <td>μ±λ³</td>
                <td>
                    <input id="man" type="radio" name="gender" value="m">
                    <label for="man">λ¨μ</label>
                    <input id="woman" type="radio" name="gender" value="w">
                    <label for="woman">μ¬μ</label>
                </td>
            </tr>
        </table>  
        <input type="submit" value="κ°μ">
    </form>
</body>
```

---
## π 04- μ ν κ°λ₯ν μλ ₯ μμ

* **ν ν­λͺ©λ§ μ ννκΈ°** π `select` νκ·Έλ λͺ©λ‘μΌλ‘ λ³΄μ¬ μ£Όλ ν­λͺ© μ€ νλ λλ μ¬λ¬ κ°λ₯Ό μ νν  λ μ¬μ©νλ μλ ₯ μμ μμμλλ€.

```html
<body>
    <!--ν ν­λͺ©λ§ μ ννκΈ°-->
    <select>
        <option>κΉλ°₯</option>
        <option>λ‘λ³Άμ΄</option>
        <option>μλ</option>
        <option>μ΄λ¬΅</option>
    </select>
</body>>
```
* **μ¬λ¬ ν­λͺ© μ ννκΈ°** π μ¬λ¬ ν­λͺ©μ μ ννλ €λ©΄ `select` νκ·Έμ `multiple` μμ±μ μ¬μ©ν©λλ€. μ€λ§νΈν°μμ μ΄λ μ λ μμκ² λμ€μ§λ§ μΌλ° λ°μ€ν¬ν μΉ νμ΄μ§μμλ μ μ¬μ©νμ§ μμ΅λλ€.

```html
<body>
    <!--μ¬λ¬ ν­λͺ© μ ννκΈ°-->
    <select multiple="multiple">
        <option>κΉλ°₯</option>
        <option>λ‘λ³Άμ΄</option>
        <option>μλ</option>
        <option>μ΄λ¬΅</option>
    </select>
</body>>
```

* **μ ν μ΅μ λ¬ΆκΈ°** π `optgroup` νκ·Έλ₯Ό μ¬μ©ν΄ μ ν μ΅μμ κ·Έλ£ΉμΌλ‘ λ¬Άμ μ μμ΅λλ€.

```html
<body>
    <!--μ ν μ΅μ λ¬ΆκΈ°-->
    <select>
        <optgroup label="HTML5">
            <option>νκ·Έ</option>
            <option>μμ±</option>
            <option>μ΅μ</option>
        </optgroup>
        <optgroup label="CSS3">
            <option>λ§μ§</option>
            <option>ν¨λ©</option>
            <option>μ»¬λ¬</option>
        </optgroup>
    </select>
</body>
```

---
## π 05- μ°κ΄ μλ μλ ₯ μμ κ·Έλ£ΉμΌλ‘ λ¬ΆκΈ°

* `fieldset` νκ·Έμ `legend` νκ·Έλ₯Ό μ¬μ©νλ©΄ μλ ₯ μμμ κ·Έλ£ΉμΌλ‘ λ¬Άκ³  μ΄λ¦μ μ§μ ν  μ μμ΅λλ€. `legend` νκ·Έλ `fieldset` νκ·Έ λ΄λΆμ μ¬μ©ν©λλ€.

```html
<body>
    <form>
        <fieldset>
            <legend>μλ ₯ μμ</legend>
            <table>
                <tr>
                    <td><label for="name">μ΄λ¦</label></td>
                    <td><input id="name" type="text"></td>
                </tr>
                <tr>
                    <td><label for="mail">μ΄λ©μΌ</label></td>
                    <td><input id="mail" type="email"></td>
                </tr>
            </table>
            <input type="submit">
        </fieldset>
    </form>
</body>
```

* **`textarea` νκ·Έ μ£Όμ μ¬ν­** π κΈμλ₯Ό μ¬λ¬ μ€ μλ ₯ν  λ μ¬μ©νλ `textarea` νκ·Έλ₯Ό μμκ² μ λ ¬νλ €κ³  λ€μ **μ²« λ²μ§Έ μ)** μ²λΌ μμ±νλ κ²½μ°κ° λ§μ΅λλ€. νμ§λ§ μ΄λ κ² μλ ₯νλ©΄ μΌμͺ½μ λ€μ¬μ°κΈ°κ° μλ ₯ μμ λ΄λΆμ μΆλ ₯λ©λλ€. **λλ²μ§Έ μ)** μ³λΌ μμ±ν΄μΌ μ μμ μΌλ‘ μΆλ ₯μ΄ λ©λλ€.

```html
<body>
    <h4>μλͺ»λ νν</h4>
        <textarea>
            Textarea νκ·Έ
            Textarea νκ·Έ
        </textarea>

    <h4>μ¬λ°λ₯Έ νν</h4>
        <textarea>Textarea νκ·Έ
    Textarea νκ·Έ</textarea>
</body>
```

---
## π section - 02 - κ³΅κ° λΆν  νκ·Έ

## π 01 - κ³΅κ° λΆν  λ°©λ²

* **κ³΅κ°μ λΈλ‘ νμμΌλ‘ λΆν νκΈ°** ππ½ div νκ·Έλ₯Ό μ¬μ©ν΄ κ³΅κ°μ λΆν νλ©΄ κ° νκ·Έκ° ν νμ λͺ¨λ μ°¨μ§ν©λλ€. μ΄λ₯Ό λΈλ‘ νμμ΄λΌκ³  ν©λλ€.

```html
<body>
    <div>div νκ·Έ - block νμ</div>
    <div>div νκ·Έ - block νμ</div>
    <div>div νκ·Έ - block νμ</div>
    <div>div νκ·Έ - block νμ</div>
    <div>div νκ·Έ - block νμ</div>
</body>
```

* **κ³΅κ°μ μΈλΌμΈ νμμΌλ‘ λΆν νκΈ°** ππ½ μ½λλ₯Ό μ€ννλ©΄ κ° νκ·Έλ μμ μ **κΈμ ν¬κΈ°**λ§νΌ μμ­μ μ°¨μ§νλ©΄, `μΌμͺ½`μμ `μ€λ₯Έμͺ½`μΌλ‘ μμλλ€. μ΄λ₯Ό  μΈλΌμΈ νμμ΄λΌκ³  ν©λλ€.

```html
<body>
    <span>span νκ·Έ - inline νμ</span>
    <span>span νκ·Έ - inline νμ</span>
    <span>span νκ·Έ - inline νμ</span>
    <span>span νκ·Έ - inline νμ</span>
    <span>span νκ·Έ - inline νμ</span>
</body>
```

---
## π 02- μλ§¨ν± νκ·Έλ₯Ό μ¬μ©ν λ μ΄μμ κ΅¬μ±

* `header` νκ·Έλ λ¨Έλ¦¬λ§(νμ΄μ§ μ λͺ©, νμ΄μ§ μκ°), `nav` νκ·Έλ νμ΄νΌλ§ν¬λ€μ λͺ¨μ λ λ΄λΉκ²μ΄μ, `aside` νκ·Έλ λ³Έλ¬Έ νλ¦μ λ²μ΄λλ λΈνΈλ ν, `section` νκ·Έλ λ¬Έμμ μ₯μ΄λ μ μ ν΄λΉνλ λ΄μ©, `article` νκ·Έλ λ³Έλ¬Έκ³Ό λλ¦½μ μΈ μ½νμΈ  μμ­, `footer` νκ·Έλ κΌ¬λ¦¬λ§(μ μλ μ μκΆ μ λ³΄)λ₯Ό μλ ₯ν©λλ€.

```html
<body>
    <header>
        <h1>HTML5 κΈ°λ³Έ</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#">λ©λ΄ - 1</a></li>
            <li><a href="#">λ©λ΄ - 2</a></li>
            <li><a href="#">λ©λ΄ - 3</a></li>
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
        <address>μμΈνΉλ³μ κ°μκ΅¬ λ΄λ°μ°λ</address>
    </footer>
</body>
```

---
## π section - 03 - λΈλ‘κ·Έ λ§λ€κΈ°

## π 01- λ μ΄μμ κ΅¬μ±

* μΌλ° λΈλ‘κ·Έμ λ μ΄μμμ λ¨μνμν€κ³  κΈ°λ₯λ³λ‘ μμ­μ λΆλ¦¬ν©λλ€. κ·Έλ° λ€μ νμ κΈ°μ€μΌλ‘ μμ­μ λΆλ¦¬ν©λλ€. νμ λΆλ¦¬ν  λλ κ°λ‘λ‘ μ μ κ·Έλ¦΄ μ μλ λΆλΆμ λΆλ¦¬ν©λ©΄ λ©λλ€.

```html
<body>
    <!-- μ μ²΄λ₯Ό κ°μΈλ νκ·Έ -->
    <div id="page-wrapper">
        <!-- ν€λ -->
        <header id="main-header"></header>
        <!-- λ΄λΉκ²μ΄μ -->
        <nav id="main-navigation"></nav>
        <!-- λ³Έλ¬Έ -->
        <div id="content">
            <!-- λ³Έλ¬Έ μ’μΈ‘ μμ­ -->
            <section id="main-section"></section>
            <!-- λ³Έλ¬Έ μ°μΈ‘ μμ­ -->
            <aside id="main-aside"></aside>
        </div>
        <!-- νΈν° -->
        <footer id="main-footer"></footer>
    </div>
</body>
```

* μμμ μ΄λ―Έ λ§λ€μ΄μ§ κ΅¬μ±μ λ΄μ©μ **μΆκ°**νμμ΅λλ€.  νμ§λ§ νλ©΄μ λ³΄λ©΄ μμ§ λ λ§λ€μ΄μ§ λͺ¨μ΅μ΄ λ³΄μΌ κ²μ΄λ€. μ€λ§νμ§ λ§κ³  μ΄μ    cssλ₯Ό λ°°μμ μ΄ κ΅¬μ±μ **cssλ₯Ό μΆκ° νλ©΄ μ’μ μΉ μ¬μ΄νΈκ° μμ±**μ΄ λλ€.

```html
<body>
    <div id="page-wrapper">
        <header id="main-header">
            <hgroup>
                <h1 class="master-title">μ’ν©μμ 01</h1>
                <h2 class="master-description">μ΄λ§μμΉ΄λ°μ΄</h2>
            </hgroup>
        </header>
        <nav id="main-navigation">
            <div class="pull-left">
                <ul class="outer-menu">
                    <li class="outer-menu-item">
                        <span class="menu-title">μ΄μ½</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                        </ul>
                    </li>
                    <li class="outer-menu-item">
                        <span class="menu-title">νλ§</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                        </ul>
                    </li>
                    <li class="outer-menu-item">
                        <span class="menu-title">μ΄μ½νλ§</span>
                        <ul class="inner-menu">
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                            <li class="inner-menu-item"><a href="#">λ°μ΄ν°</a> </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="pull-left">
                <div class="search-bar">
                    <form>
                        <input type="text" class="input-search">
                        <input type="submit" class="input-search-submit" value="κ²μ" />
                    </form>
                </div>
            </div>
        </nav>
        <div id="content">
            <section id="main-section">
                <article>
                    <div class="article-header">
                        <h1 class="article-title">κ°μμ ν μ©</h1>
                        <p class="article-date">2022λ 06μ 19μΌ</p>
                    </div>
                    <div class="article-body">
                        <img src="http://placehold.it/420x280" alt="μ¬μ§"> 
                        <br>
                        <p>μλνμ~!!!</p>
                        <br>
                        <p>λ°κ°μ΅λλ€~!!!</p>
                    </div>
                </article>
            </section>
            <aside id="main-aside">
                <div class="aside-list">
                    <h3>μΉ΄νκ³ λ¦¬</h3>
                    <ul>
                        <li><a href="#">λ°μ΄ν°</a></li>
                        <li><a href="#">λ°μ΄ν°</a></li>
                        <li><a href="#">λ°μ΄ν°</a></li>
                        <li><a href="#">λ°μ΄ν°</a></li>
                        <li><a href="#">λ°μ΄ν°</a></li>
                    </ul>
                </div>
            </aside>
        </div>
        <footer id="main-footer">
            <a href="#">ITκ°λ°μ</a>
        </footer>
    </div>
</body>
```

---
