var ogrenci1Ad = "Ada";
var ogrenci1Soyad = "Bilgi";
var ogrenci1Dogum = "2012";
var ogrenci1Not1 = 70;
var ogrenci1Not2 = 70;
var ogrenci1Not3 = 80;

var ogrenci2Ad = "Yigit";
var ogrenci2Soyad = "Bilgi";
var ogrenci2Dogum = "2010";
var ogrenci2Not1 = 40;
var ogrenci2Not2 = 40;
var ogrenci2Not3 = 50;

var suankiYil = new Date().getFullYear();

var ogrenci1Yas = suankiYil - ogrenci1Dogum;
var ogrenci2Yas = suankiYil - ogrenci2Dogum;

console.log(ogrenci1Yas);
console.log(ogrenci2Yas);

var ogrenci1Ort = (ogrenci1Not1 + ogrenci1Not2 + ogrenci1Not3)/3;
var ogrenci2Ort = (ogrenci2Not1 + ogrenci2Not2 + ogrenci2Not3)/3;

console.log(parseInt(ogrenci1Ort))
console.log(parseInt(ogrenci2Ort))

var gecmeNot1 = ogrenci1Ort >= 50;
var gecmeNot2 = ogrenci2Ort >= 50;

console.log(gecmeNot1);
console.log(gecmeNot2);