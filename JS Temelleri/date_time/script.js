let simdi = new Date(); // şimdiki tarih - saat

sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();
sonuc = simdi.getMinutes();
sonuc = simdi.getMonth();
sonuc = simdi.getUTCDate();

// simdi.setFullYear(2025);
// simdi.setMonth(7);

sonuc = simdi;

let dogumTarihi = new Date(2003, 6, 21);

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gün = saat / 24 ;
let ay = gün / 30; 
let yil = ay / 12;

sonuc = yil;

console.log(sonuc);
console.log(typeof sonuc);

