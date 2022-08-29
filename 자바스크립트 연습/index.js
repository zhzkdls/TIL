// 1. 연산자

// # 계산기

// 더하기라는 함수를 호출하면 내부에선  콘솔로그를 이용해서 출력하게 된다.
// (콘솔 로그를 하는데 뭘 출력을 하냐?  이 두 값을 뺀것(a + b)을 출력해라.)

// 더하기라는 함수(10, 5)라고적고 엔터하면 
// 15라는 숫자가 나타난다

// 나머지는 숙제

// 요약 
// 1.  + - * /
// 2. 함수 (정의 및 호출)
// 3. 출력 (console.log



// function 더하기(a, b) {
//     console.log(a + b);
// };

// 더하기(10, 5);  // 15

// function 빼기(a, b) {
//     console.log(a - b);
// };

// 빼기(40, 10); // 30

// function 나누기(a, b) {
//     console.log(a / b);
// };

// 나누기(10, 5); // 2

// function 곱하기(a,  b){
//     console.log(a * b);
// };

// 곱하기(10, 5); // 50





// 2. 조건문 

// # 체온계 만들기

// 체온계라는 함수를 만들고 소갈로 안에 a라는 조건을 넣습니다 그리고 if라는 조건을 걸어서 a이가 34도보다 낮으면 저온, a가 34도 보다 높고 37도보다 낮으면 정상, 그리고 37도 보다 높으면 고온으로 설정했다.  

// 체온계라는 함수에 (원하는 숫자를 넘으면) 정상 고온 저온이 라는 글자가 나온다.

// 요약 
// 1. IF을 사용해서 조건문을 만든다

// function 체온계(a) {
//     if (a < 34.0) {
//         console.log("저온");
//     }if(34.0 < a && a < 37.0) {
//         console.log("정상");
//     }if(37.0 < a) {
//         console.log("고온");
//     } 
// };

// 체온계 (20); // 저온
// 체온계 (40); // 고온
// 체온계 (35); // 정상


//3. 반복문

// # 구구단 만들기
// 이 함수의 단점은 2단 밖에 못한다 
// function 구구단() {
//     console.log(2 * 1);
//     console.log(2 * 2);
//     console.log(2 * 3);
//     console.log(2 * 4);
//     console.log(2 * 5);
//     console.log(2 * 6);
//     console.log(2 * 7);
//     console.log(2 * 8);
//     console.log(2 * 9);
// }
// 구구단(); 

//호출하게 되면 
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18 식으로 나오게 된다.

// 구구단 함수()소갈로안에 a라는 값을 넣고 콘솔()소갈로 안에 앞 숫자만 a으로 변경하고,구구단()소갈로 안에 원하는 숫자 넣으면 원한는 구구단을 얻을수 있다.
// function 구구단(a) {
//     console.log(a * 1);
//     console.log(a * 2);
//     console.log(a * 3);
//     console.log(a * 4);
//     console.log(a * 5);
//     console.log(a * 6);
//     console.log(a * 7);
//     console.log(a * 8);
//     console.log(a * 9);
// }
// 구구단(4); 

//하지만 이렇게 하면 너무 재미가 없다 그리서 한가지 기능을 더 추가하기로 하자!! 
// 반복문 이라고 하는데 예시로 바로 보여줄께!!

// for (let i = 1; i < 10; i++) {
//     console.log(i)
// }
// i 가 1 부터 10보다 작으면 1을 더하기를 해라..그러면 1부터 9까지 순서대로 나온다.
// 처음에는 반복되는 수를 지정해준다 두번째로는 조건이 들어간다 i이는 10보다 작을때 까지 세번째로는 i를 증가시키는 ++을 사용한다.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// <= 이것은 같거나 작거나라서 10이라는 숫자이하까지만 나오게 된다(에시 1~10)


//다시 본론으로 돌아와서 아까 구구단에서 for 을 사용해서 반복문을 적용하자~! 뒷 숫자란에 i를 넣으면 간단하게 구구단을 사용할수 잇다. 

// function 구구단(a) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(a * i);
//     }
    
// }
// 구구단(45);

// 중첩된 구구단을 만들기 응용문제(1)

// function 구구단(n){  //n:고정값
//     for(var i=1;i<10;i++) {  //i:가변값
//         console.log(n + "x" + i + "=" + n*i);
//     }
// }

// 구구단(2);  //2단 출력
// 구구단(3);  //3단 출력

// 중첩된 for문으로 학급반 만들기 응용문제(2)

// function 학급반 () {
//     for(let i = 1; i <= 6; i++){
//         for(let k = 1; k <=5; k++){
//             console.log(i + "학년" + k + "반");
//         }
//     }
// }
// 학급반();


//중첩 for문을 이용한 구구단 출력 응용문제(3)
// function 구구단(){
//     for(let i = 2; i <= 9; i++){
//         console.log(i + '단');
//         for(let k =1; k <= 9; k++){
//             let sum = i * k;
//             console.log(i + "*" + k + "=" + sum);
//         }
//     }
// }
// 구구단();


// 4. 변수 / 객체

// # 명함 만들기(1)

// 명함이라는 함수를 호출한다. 그리고 함수안에 명함에 필요한 내용을 입력을 해주는데 이름이라는 변수값을 따로 설정해준다 이렇게 해주는 이유는 나중에 이름만 변경하고 싶을 때 사용하기가 편하기 때문이다. 또 나이을 변수로 값을 지정해준다 하면 아까 했던 방식을 해주면 된다. 얼마든지 사용하면된다

// function 명함() {
//     let 이름 = "콩이"
//     let 나이 = "3살"

//     console.log("이름:" + 이름);
//     console.log("직업: 반려견");
//     console.log("나이:" + 나이);
//     console.log(이름 + "는 강아지 이름입니다.");
// }
// 명함();

// # 명함 만들기(2)

// 객체는 속성과 행위를 담고 있다.
// 자 객체를 담아서 출력하게 되면 {안에 객체안에 속성이 담아서 출력이 되는 것을 볼수있다}
// 행위는 뭘까요>? 명합을 출력하는것이다

// 객체밑에 어떤 접근을 하려면 . 점을 사용하면된다.  근데 에러나 난다?? 이름이 정의 하지 않았다고 한다 왤까?? 이름이라는 변수를 지정해주지 않아서 에러가 나는것이였다, 그러면 어떻게 하죠? this라는 단어와 . 을 사용해서 에러를 수정을 할수 있다.  this는 뭘까>>?? this는 이름이라는 것을 접근을 할꺼라는 뜻이다. 마찬가지로 나이에도 적용해주자.. 짠~!! 에러가 안나고 잘 되는것을 볼수가 있다..

// let 명함 = {
//     이름: "콩이",
//     나이: "2 살",
//     직업: "반려견",
//     출력(){
//         console.log("이름 : " + this.이름);
//         console.log("나이 : " + this.나이);
//         console.log("직업 : " + this.직업);
//     }
// }

// console.log(명함);
// 명함.출력();

// 요약
//1.  명합이라는것을 만들기 위해 처음에는 변수를 선언하고 출력을 했습니다.
//2. 근데 변수들과 출력하는 행위 이 두가지를 한번에 감싸고 있는 객체라는 것을 사용함으로써 더 간편하게 만듬



// 5. 배열

// # 수산 시장

//보통 물고기에 g수를 제 해서 가격을 얘기죠 그걸 한번 만들어보겠습니다 그러면 무게를 담고 있는 변수를 만들어 볼까요 무겐데 저는 광어를 좋아하니까 광어 100g 을 이렇게 선언을 할께요

// let 광어 = 100;

// console.log(광어);


//자 그러면 이제 가격을 측정 해야겠죠 가격을 측정한다는 행위는 볼까요 가격 측정이 란 함수를 만듭시다 그리고 이 함수에는 입력이 뭐가 필요하죠 광어가 필요하죠 그런데 우리가 지금까지 보통의 이라고 a 라고 간단하게 표기를 했잖아요 근데 이러면 은 이 함수 안에서 a 가 무슨 이 함수 안에서 a 라는 입력이 몰리면 인지 유추하기 가 너무 어려워요 그래서 코드를 읽는 입장에서 굉장히 난해한 되요 그래서 이제부터 함수에 입력한 에 의미 있는 이름을 지어 주겠습니다

//광어 라고 해보게 광어 든 심플하게 가볼까요 가격 측정 한수는 입력을 하나 봤는데 방어는 입력 하나 봤는데 그 입력 받은걸 그대로 출력을 한다

// function 가격측정 (광어) {
//     console.log(광어);
// }

//가격 책정 하고 첫번째 입력의 저희가 가장 처음에 선언했던 이 광어 라는 변수를 넣어 볼게요 
// 가격측정(광어); // 100

//왜냐 이 콘솔을 로그가 제 함수로 부터 입력 받은 광어 라는걸 출력을 했으니까요

//이제 배열에 대해서 알아보겠습니다 배열이란 동일한 특성을 가지며 일정한 규칙에 따라 여러 요소가 나열되어 있는 데이터들의 집합이다

// 광어들이라는 변수를 지정해주고 속성을 배열합니다 그리고 반복문으로 i가 4보다 작으면 하나씩 올라가게 만들고 

// 가격측정(광어들[i])라고 하면 순서대로 100, 150, 200, 250 으로 나온다..

// let 광어들 = [100, 150, 200, 250] 

// for (var i = 0; i < 4; i++) {
//     가격측정(광어들[i])
// }

// 심화(배열)

// 스택

// 택배 상하차 하기 

// 택배중에 중간에 있는 값을 먼저 빼려면 어떻게 해야 될까>?? 일단 하나씩 다 넣어보다 push라는 함수를 사용해서 않으로 넣는다. 

// let 택배들 = []

// 택배들.push("아이패드")

// console.log(택배들)

// 택배들.push("콩이")

// console.log(택배들)

// 택배들.push("맥북")

// console.log(택배들)

// 택배들.push("아이폰")

// console.log(택배들)

// 택배들.pop()

// console.log(택배들)

// 택배들.pop()

// console.log(택배들)

// 이번에 택배들에 함수를 택배에 넣겠다는 말이다. 택배들함수를 적으면 당연히 아이패드만 나온다 하지만 
// 함수에 반환 값을 변수에 저장을 한거라서 택배라는 변수에 콩이가 있다는것이다.

// let 택배 = 택배들.pop()

// console.log(택배들)

// console.log(택배)

// 심화(배열)

// 큐

// 공항 검색대 만들기

// 공황에서 내 박스만 받아보기를 해보겠습니다 .shift함수를 사용하면 맨 처음에 들어간 박스가 검색대에 먼저 나오게 된다. 이때 1번 박스가 내박스로 지정할려면 읿단 내_박스라는 변수를 지정하고 박스들.shift함수를 내_박스변수에 값을 저장을 한다 그리고 콘솔로그 내_박스를 하면 내 손에 1번 박스가 들어오게 된다.

// let 박스들 = ["박스1", "박스2"]

// console.log(박스들)

// let 내_박스 = 박스들.shift()

// console.log(박스들)

// console.log(내_박스)

//알고리즘

// 가장 큰 수 찾기

//먼저 숫자들이라는 변수에 숫자를 배열을 하고 가장큰수라응 함수 소갈로안에는 숫자들 배열을 받는다. 그리고 반복문을 사용해서 0분터 5까지 반복하게 한다. 그리고 숫자 변수를 0이라고 선언한다.

// 조건문 : 숫자변수보다 숫자들에[i]보다 더 크냐? 참이면 if에 중갈로를 실행한다.
//숫자는 0이다. 
// i 가 0이면 1이고 , i 가 1이면 5이고 , i 가 2이면 -10이고 , i 가 3이면 200이고 ,i 가 4이면 40이다 

// let 숫자들 = [1, 5, -10, 200, 40]

// function 가장큰수(숫자들) {
//     let 숫자 = 0;

//     for (let i = 0; i < 5; i++) {

//         if (숫자 < 숫자들[i]) {
//             숫자 = 숫자들[i];
//         }
//     }
//     console.log(숫자)
// }
// 가장큰수(숫자들)


// 01. 숫자가 0이고 숫자들[i]은 0이 되면서 배열에 두번째인 1가 된다 즉 0이 1보다 작은수 이기 때문에 참이다. 그래서 if에 중갈로가 실행되면서 숫자들의 "1"이 숫자에 저장이 되면서 위에 숫자가 "1" 업데이트가 된다. 

// 02. 숫자가 1이고 숫자들[i]은 1이 되면서 배열에 두번째인 5가 된다 즉 1이 5보다 작은수 이기때문에 참이다. 그래서 if에 중갈로가 실행되면서 숫자들의 "5"이 숫자에 저장이 되면서 위에 숫자가 "5" 업데이트가 된다. 

// 03. 숫자가 5이고 숫자들[i]은 2이 되면서 배열에 세번째인 -10가 된다 즉 5가 -10보다 작은수가 아니기때문에 거짓이다. 그래서 if에 중갈로가 실행되지 않으면서 업데이트가 되지않고 다시 반복문을 실행한다. 

// 04. 숫자가 5이고 숫자들[i]은 3이 되면서 배열에 세번째인 200가 된다 즉 5가 200보다 작은수 이기때문에 참이다. 그래서 if에 중갈로가 실행되면서 숫자들의 "200"이 숫자에 저장이 되면서 위에 숫자가 "200" 업데이트가 된다. 

// 05. 숫자가 200이고 숫자들[i]은 4이 되면서 배열에 세번째인 40가 된다 즉 200이 40보다 작은수가 아니기때문에 거짓이다. 그래서 if에 중갈로가 실행되지 않는다. 

//엄첨나게 많은 숫자를 배열을 했을때 일일이 숫자를 지정해서 해주는게 아니라 숫자들.length 라는 함수를 이용

let 숫자들 = [1, 5, 10, 15, 40, 3, 4, 7, 8, 9, 20, 50, 2, 10, 6, 12, 13]

function 가장큰수(숫자들) {
    let 숫자 = 0;

    for (let i = 0; i < 숫자들.length; i++) {

        if (숫자 < 숫자들[i]) {
            숫자 = 숫자들[i];
        }
    }
    console.log(숫자)
}
가장큰수(숫자들)





