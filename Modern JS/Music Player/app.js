const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector(".title");
const singer = document.querySelector(".singer");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const currentTime = document.querySelector("#current-time");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBar = document.querySelector("#volume-bar");
const playBtn = document.querySelector("#playBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const ul = document.querySelector("ul");    



const player = new MusicPlayer(musicList);

let music = player.getMusic();
console.log(music.getName());

window.addEventListener("load", () => {
    let music = player.getMusic();
    displayMusic(music);
    displayMusicList(player.musicList);
    isPlayingNow();
})

function displayMusic(music) {
    title.innerText = music.getName();
    singer.innerText = music.singer;
    image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file;
    
}

playBtn.addEventListener("click", () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
})

prevBtn.addEventListener("click", () => {
    prevmusic();
})

const prevmusic = () => {
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    isPlayingNow();
    playMusic();
}

nextBtn.addEventListener("click", () => {
    nextmusic();
})

const nextmusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    isPlayingNow();
    playMusic();
}

function pauseMusic() {
    container.classList.remove("playing");
    play.classList = "fa-solid fa-play";
    audio.pause();
}

function playMusic() {
    container.classList.add("playing");
    play.classList = "fa-solid fa-pause";
    audio.play();
}

const calculationTime = (toplamSaniye) => {
    const dakika = Math.floor(toplamSaniye / 60);
    const saniye = Math.floor(toplamSaniye % 60);
    const guncellenenSaniye = saniye < 10 ? `0${saniye}` : `${saniye}`
    const sonuc = `${dakika}:${guncellenenSaniye}`;
    return sonuc;
} 

audio.addEventListener("loadedmetadata", ()=> {
    duration.textContent = calculationTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
    progressBar.step = 1;
})

audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculationTime(progressBar.value);
})

progressBar.addEventListener("input", () => {
    currentTime.textContent = calculationTime(progressBar.value);
    audio.currentTime = progressBar.value;
})

let sesDurumu = "sesli" ; 

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
    if(value == 0) {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = true;
        sesDurumu = "sesli"
        volume.classList = "fa-solid fa-volume-high";
    }
})

volume.addEventListener("click", () => {
    if(sesDurumu === "sesli") {
        audio.muted = true;
        sesDurumu = "sessiz";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    } else {
        audio.muted = true;
        sesDurumu = "sesli"
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
})

const displayMusicList = (list) => {
    for (let i = 0; i < list.length; i++) {
        let liTag = `
            <li li-index='${i}' onclick="selectedMusic(this)"  class="list-group-item d-flex justify-content-between align-items-center" style="cursor: pointer;">
                <span> ${list[i].getName()} </span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
                <audio class="music-${i}" src="mp3/${list[i].file}"
            </li>
        `
        ul.insertAdjacentHTML("beforeend", liTag);

        let liAudioDuration = document.querySelector(`#music-${i}`);
        let liAudioTag = document.querySelector(`.music-${i}`);

        liAudioTag.addEventListener("loadeddata", () => {
            liAudioDuration.innerText = calculationTime(liAudioTag.duration)
        })

    }
}

const selectedMusic = (li) => {
    player.index = li.getAttribute("li-index");
    displayMusic(player.getMusic());
    playMusic();
    isPlayingNow();
}

const isPlayingNow = () => {
    for( let li of ul.querySelectorAll("li")) {
        if(li.classList.contains("playing")) {
            li.classList.remove("playing"); 
        }

        if (li.getAttribute("li-index") == player.index) {
            li.classList.add("playing")
        }
    } 
}

audio.addEventListener("ended", () => {
    nextmusic();
})