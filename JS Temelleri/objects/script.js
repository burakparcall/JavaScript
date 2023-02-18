let kullanici = {
    "ad": "Burak",
    "soyad": "Parçal",
    "yas": 19,
    "adres": {
        "sehir": "Giresun",
        "ilce": "Bulancak"
    },
    "hobiler": ["müzik", "spor"]
}

console.log(kullanici.ad);
console.log(kullanici.soyad);
console.log(kullanici.yas);
console.log(kullanici["adres"]["ilce"]);
console.log(kullanici.adres.sehir);
console.log(kullanici.hobiler[0]);


let urunler = [
    {
        "urun_adi": "iPhone 13",
        "urun_fiyat": 32000,
    },
    {
        "urun_adi": "iPhone 14",
        "urun_fiyat": 40000
    }
]

console.log(urunler[0].urun_adi);
console.log(urunler[0].urun_fiyat);
console.log(urunler[1].urun_adi);
console.log(urunler[1].urun_fiyat);