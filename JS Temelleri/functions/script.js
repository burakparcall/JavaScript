// function yasHesapla(dogumYili) {
//     return new Date().getFullYear() - dogumYili;
// }

// let yasAhmet = yasHesapla(1985);
// let yasAyse = yasHesapla(1946);

// console.log(yasAhmet, yasAyse);


// function emeklilik(dogumYili, isim) {
//     let yas = yasHesapla(dogumYili);
//     let kalan_sene = 65 - yas;

//     if (kalan_sene > 0) {
//         console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
//     }
//     else {
//         console.log("Zaten emeklisiniz.")
//     }
// }

// emeklilik(1979, "Ali");
// emeklilik(1945, "Burak");

// -------------------------------------------------------------------------------------------------------------------------------

// Uygulama

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

function kelimeyiYazdir(kelime, adet) {
    
    for (let i = 0; i < adet; i++) {
        console.log(kelime);
    }
}

kelimeyiYazdir("selam", 5);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function dikdortgen() {
    let uzunKenar = 10;
    let kısaKenar = 8;
    
    let alan = (uzunKenar*kısaKenar);
    let cevre = ((uzunKenar*2) + (kısaKenar*2));

    console.log(`Dikdörtgenin alanı ${alan} ve çevresi ${cevre}'dir`);
}

dikdortgen();

// function dikdortgen(uzunKenar, kısaKenar) {
//     let alan = (uzunKenar*kısaKenar);
//     let cevre = ((uzunKenar*2) + (kısaKenar*2));

//     return `Dikdörtgenin alanı ${alan} ve çevresi ${cevre}'dir`;
// }

// let sonuc = dikdortgen(8,5);
// sonuc = dikdortgen(15,8);

// console.log(sonuc);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTura() {
    let random = Math.random(); // 0 -1
    if (random < 0.5) {
        console.log("Yazı");
    }
    else {
        console.log("Tura");
    }

    console.log(random);
}

yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyon yazınız.

function tamBolenler(sayi) {
    let sayilar = [];
    for (let i = 2; i < sayi ; i++) {
        if (sayi % i == 0 ) {
            sayilar.push(i);
        }
    }
    return sayilar;
}

console.log(tamBolenler(18));
console.log(tamBolenler(24));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
    let sonuc = 0;

    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    return sonuc;
}

console.log(toplam(2,5));
console.log(toplam(2,5,9));