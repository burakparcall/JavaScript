// let urun1 = "iPhone 12";
// let urun2 = "iPhone 13";
// let urun3 = "iPhone 13 Pro";

// let urunler = ["iPhone12", "iPhone 13", "iPhone 13 Pro"];
// let fiyatlar = [20000, 30000, 40000];
// let renkler = ["gray", "purple", "black"];

// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);

// console.log(`${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`);
// console.log(`${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`);
// console.log(`${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`);

// console.log(urun1[5]);

// Dizi Metotları 

// let ogrenciler = ["burak", "melike", "ahmet"];
// console.log(ogrenciler);

// Array to String

// console.log(ogrenciler.toString());
// console.log(ogrenciler.join("-"));

// Eleman Silme

//console.log(ogrenciler.pop()); // son elemanı siler ve silinen eleman geri döndürülür.
// console.log(ogrenciler.shift()); // ilk eleman silinir.

// Eleman Ekleme

// console.log(ogrenciler.push("sena")); // dizinin sonuna eleman ekler.
// console.log(ogrenciler.unshift("sena")); // dizinin başına eleman ekler.    
// console.log(ogrenciler);

// Diziye dizi ekleme
let markalar1 = ["nissan", "toyota"];
let markalar2 = ["audi", "bmw"];
let markalar3 = ["peugeot"];

console.log(markalar1.concat(markalar2, markalar3));
// console.log(markalar1.splice(0,1,"mercedes"));
// console.log(markalar1.splice(0,1));
console.log(markalar1.splice(0,markalar2));
console.log(markalar1);