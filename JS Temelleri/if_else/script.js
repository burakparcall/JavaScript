// let username = "burakparcall";
// let password = "123456";

// if (username == "burakparcall") {
//     if (password == "123456") {
//         console.log("Giris basarili");
//     }
//     else {
//         console.log("Sifreniz yanlis");
//     }
// }
// else {
//     console.log("Kullanici adinizi kontrol ediniz.");
// }

// let yas = 18;
// let mezuniyet = "universite";

// if (yas >=18 && (mezuniyet == "lise" || mezuniyet == "universite" )) {
//     console.log("ehliyet alabilir");
// }
// else {
//     console.log("ehliyet alamaz");
// }

// uygulama

// 1 - Bir sayının 10 ile 50 arasında olup olmadığını kontrol ediniz

// let sayi = 5;
// if (10 < sayi < 50) {
//     console.log("10 ile 50 arasindadir");
// }
// else {
//     console.log("10 ile 50 arasinda degildir")
// }

// 2 - Bir sayinin pozitif tek sayi olup olmadığını kontrol ediniz.

// let sayi = -15;

// if (sayi > 0 && sayi%2!=0) {
//     console.log("Pozitif ve tek sayidir");
// }
// else if ( sayi > 0) {
//   console.log("Pozitif sayidir");
// }
// else if ( sayi < 0) {
//   console.log("Negatif sayidir");
// }
// else if ( sayi%2==1) {
//     console.log("Tek Sayidir");
// }

// 3 - x, y, z sayilarının büyüklük karsilastirmalarini  yapiniz.

// let x = 25;
// let y = 15;
// let z = 64;

// if (x > y && x > z) {
//     console.log("x en büyük");
// }

// if (y > x && y > z) {
//     console.log("y en büyük");
// }

// if (z > x && z > y) {
//     console.log("z en büyük");
// }

// 4 - 2 vize(40%) ve 1 final(60%) notuna göre hesaplanan ortalama için;
// a - Eğer ortalama 50 ve üstündeyse  geçti, değilse kaldı yazsın.
// b - Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c - Finalden 70 aldığında ortalama 50'nin altında olsa bile dersten geçilsin

// let vize1Not = 80;
// let vize2Not = 90;
// let finalNot = 40;

// let vize = 0.4;
// let final = 0.6;

// let vizeOrt = ((vize1Not + vize2Not)/2) * vize;
// console.log("Vize Ortalamanız: " + vizeOrt)
// let finalOrt = finalNot * final;
// console.log("Final Ortalamanız: " + finalOrt)

// let ortalama = vizeOrt + finalOrt;
// console.log("ortalamanız: " + ortalama)

// if ((ortalama >= 50 && finalNot >= 50) || finalNot >= 70) {
//   console.log("Dersten geçer");
// } else {
//   console.log("Dersten geçemez");
// }
