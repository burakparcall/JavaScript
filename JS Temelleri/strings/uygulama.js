let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Uygulamali Web Gelistirme Eğitimi";
let sonuc; 
// 1- url kaç karakterlidir?

sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor?

sonuc = url.startsWith("https");

// 4- kursAdi içerisinde Kursu kelimesi var mı?

if (kursAdi.indexOf("Kursu") > -1) {
    console.log("Evet var");
} else {
    console.log("Hayir yok");
}

// 5- url ve kursAdi değişkenlerini kullanarak  aşağıdaki string  bilgiyi  oluşturunuz
// https://www.sadikturan.com/komple-uygulamali-web-gelistirme-kursu

kursAdi = kursAdi.toLowerCase().replaceAll(" ", "-");

url = url.concat("", kursAdi);

console.log(url);

console.log(sonuc);



 