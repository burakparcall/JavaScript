let sonuc;

sonuc = 10;
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("a10");

sonuc = isNaN("10");

let sayi = 15.1234567;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(3);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.3);
sonuc = Math.floor(2.2);
sonuc = Math.sqrt(16);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(10,5,1,8,4,9,7,2,6,);
sonuc = Math.max(10,5,1,8,4,9,7,2,6,);
sonuc = Math.ceil(Math.random() * 100) + 50;

console.log(typeof sonuc);
console.log(sonuc);