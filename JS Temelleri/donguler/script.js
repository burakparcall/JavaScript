let sayilar = [1,5,7,15,3,25];

// 1- Sayilar listesindeki her bir elemanın karesini yazdırınız.

// for (let sayi of sayilar) {
//     console.log(sayi*sayi);
// }

for (let i in sayilar) {
    sonuc = sayilar[i]**2;
    console.log(sonuc);
}

// 2- Sayilar listesindeki hangi sayılar 5'in katidir? 

// for (let sayi of sayilar) {
//     sonuc = sayi%5
//     if (sonuc == 0) {
//         console.log(sayi);
//     }
// }

for (let i in sayilar) {
    sonuc = sayilar[i]%5
    if (sonuc == 0) {
        console.log(sayilar[i]);
    }
}

// 3- Sayilar listesindeki çift sayıların toplamını bulunuz

let toplam = 0;
for (let i in sayilar) {
    sonuc = sayilar[i]%2
    if (sonuc == 0 ) {
        toplam = toplam + sayilar[i];
    }
}
console.log(toplam);


// 4- Ürünler listesindeki tüm ürünleri büyük harfleri yazdırınız.

let urunler = ["iPhone 12", "Samsung S22", "iPhone 13", "Samsung S23"]

for (let i of urunler) {
    console.log(i.toUpperCase())
}

// 5- Ürünler listesinde Samsung geçen kaç ürün vardır.
let adet = 0;

for (let urun of urunler) {
    if (urun.includes("Samsung"))
    adet++;
}
console.log(adet)

let kelime = "selam";

for (let i = 0; i < 5; i++) {
    console.log(kelime);
}