let ad = "Burak";
let soyad = "Parçal";
let yas = 19;
let sehir = "Giresun";

// let mesaj = "Benim adim " + ad + " ve soyadim " + soyad + ". " + sehir + "'da yasiyorum." + " Emekliliğe" + (65 - yas) + "yil kaldi."

let mesaj = `Benim adim ${ad} ve soyadim ${soyad} . ${sehir}'da yasiyorum. Emekliliğe ${65 - yas} yilim kaldi.`;

console.log(mesaj);

let emeklilik = (65 - yas > 0 );
if (emeklilik) {
    console.log(65-yas + "yiliniz kaldi")
}
else {
    console.log("Zaten emekli olmus")
}

// String Methods

let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase();
sonuc = kursAdi.toUpperCase();
sonuc = kursAdi.length;
sonuc = kursAdi[1];
sonuc = kursAdi.slice(0, 6);
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6);
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu");
sonuc = kursAdi.trim();
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);