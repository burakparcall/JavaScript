function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap == this.dogruCevap
}


let sorular = [
    new Soru("1- Hangisi JavaScript paket yönetim uygulamasıdır", {a: "Node.js",b: "Typescript",c: "Npm"}, "c"),
    new Soru("2- Hangisi JavaScript paket yönetim uygulamasıdır", {a: "Node.js",b: "Typescript",c: "Npm"}, "b"),
    new Soru("3- Hangisi JavaScript paket yönetim uygulamasıdır", {a: "Node.js",b: "Typescript",c: "Npm"}, "b"),
    new Soru("4- Hangisi JavaScript paket yönetim uygulamasıdır", {a: "Node.js",b: "Typescript",c: "Npm"}, "b"),
]