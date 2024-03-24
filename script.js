"use strict";
const imgEl = document.getElementById("bg_img");
const imgCoverEl = document.getElementById("cover");
const musicTitleEl = document.getElementById("music_title");
const musicArtistEl = document.getElementById("musric_artist");
const playerProgressEl = document.getElementById("player_progress");
const progressEl = document.getElementById("progress");
const currentTimeEl = document.getElementById("current_time");
const durationEl = document.getElementById("duration");
const prevBtnEl = document.getElementById("prev");
const playvBtnEl = document.getElementById("play");
const nextvBtnEl = document.getElementById("next");
const songs = [
  
  {
    path: "song91.mp3",
    displayName: "Dil Ibaadat",
    cover: "anni81.jpg",
    artist: "Pritam, KK",
  },
  {
    path: "song92.mp3",
    displayName: "EK DILRUBA HAI",
    cover: "anni82.jpg",
    artist: "Udit Narayan",
  },
  {
    path: "song93.mp3",
    displayName: "Haule Haule",
    cover: "anni83.jpg",
    artist: "Sukhwinder Singh",
  },
  {
    path: "song94.mp3",
    displayName: "Humko Humise Chura Lo",
    cover: "anni84.jpg",
    artist: "Udit Narayan, Lata Mangeshkar",
  },
  {
    path: "song95.mp3",
    displayName: "Hum Tumko Nigahon Mein",
    cover: "anni85.jpg",
    artist: " Shreya Ghoshal, Udit Narayan",
  },
  {
    path: "song96.mp3",
    displayName: "Ik Mulaqaat",
    cover: "anni86.jpg",
    artist: "Altamash F, Palak M",
  },
  {
    path: "song97.mp3",
    displayName: "Ishq Mein",
    cover: "anni87.jpg",
    artist: "Meet Bros",
  },
  {
    path: "song98.mp3",
    displayName: "Jeene Laga Hoon",
    cover: "anni88.jpg",
    artist: "Atif Aslam, Shreya Ghoshal ",
  },
  {
    path: "song99.mp3",
    displayName: "Khamoshiyan",
    cover: "anni89.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song100.mp3",
    displayName: "Kitna Bechain Hoke",
    cover: "anni90.jpg",
    artist: "Rahul Jain",
  }, {
    path: "song101.mp3",
    displayName: "Kiya Kiya",
    cover: "anni91.jpg",
    artist: "Anjaan Sagari",
  },
  {
    path: "song102.mp3",
    displayName: "Kyun Khuda Tune",
    cover: "anni92.jpg",
    artist: "Rahat Fateh Ali Khan",
  },
  {
    path: "song103.mp3",
    displayName: "Lambiyaan Si Judaiyaan",
    cover: "anni93.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song104.mp3",
    displayName: "Hamein Tumse Hua Hai",
    cover: "anni94.jpg",
    artist: "Alka Yagnik, Udit Narayan",
  },
  {
    path: "song105.mp3",
    displayName: "Maahi (Slowed Reverb)",
    cover: "anni95.jpg",
    artist: "Toshi Shabri",
  },
  {
    path: "song106.mp3",
    displayName: "Mai Agar",
    cover: "anni96.jpg",
    artist: "Pritam, Atif Aslam, Kabir Khan",
  },
  {
    path: "song107.mp3",
    displayName: "Maine Tera Naam Dil",
    cover: "anni97.jpg",
    artist: "Aamir Shaikh",
  },
  {
    path: "song108.mp3",
    displayName: "Sohni Meri Sohni",
    cover: "anni98.jpg",
    artist: "Mani  Superstar",
  },
  {
    path: "song109.mp3",
    displayName: "Rab Kare Tujhko Bhi",
    cover: "anni99.jpg",
    artist: "Divyanshu",
  },
  {
    path: "song110.mp3",
    displayName: "Tera Yun",
    cover: "anni100.jpg",
    artist: "Anupama, Saaj, Danish",
  },
  {
    path: "song111.mp3",
    displayName: "Lat Lag Gayee (Slowed)",
    cover: "anni101.jpg",
    artist: " Benny Dayal ",
  }, {
    path: "song112.mp3",
    displayName: "Udaarian",
    cover: "anni102.jpg",
    artist: " Satinder Sartaaj, Jatinder",
  },
  {
    path: "song113.mp3",
    displayName: "Jeeta Tha Jiske Liye ",
    cover: "anni103.jpg",
    artist: "Kumar Sanu, Yalka Yagnik",
  },
  {
    path: "song114.mp3",
    displayName: "Kitna Haseen Chehra",
    cover: "anni104.jpg",
    artist: "Kumar Sanu",
  },
  {
    path: "song115.mp3",
    displayName: "Saaton Janam Main Tere",
    cover: "anni105.jpg",
    artist: "Kumar Sanu, Yalka Yagnik",
  },
  {
    path: "song117.mp3",
    displayName: "Falak Dekhun",
    cover: "anni106.jpg",
    artist: "Sonu Nigam",
  },
  {
    path: "song116.mp3",
    displayName: "Mujhse Mohabbat Ka",
    cover: "anni107.jpg",
    artist: "Kumar Sanu, Yalka Yagnik",
  },
  {
    path: "song118.mp3",
    displayName: "Tu Hi Hai Aashiqui",
    cover: "anni108.jpg",
    artist: "Arijit Singh",
  },
  {
    path: "song119.mp3",
    displayName: "Chal Tere Ishq Mein",
    cover: "anni109.jpg",
    artist: "Vishal M,Mithoon,Neeti,Sayeed",
  },
  {
    path: "song120.mp3",
    displayName: "SIMROON TERA NAAM",
    cover: "anni110.jpg",
    artist: "Sachet, Radhika",
  },
  {
    path: "song121.mp3",
    displayName: "Maharani",
    cover: "anni111.jpg",
    artist: "Arpit Bala, ReVo LEKHAK",
  },
];
const music = new Audio();
let musicIndex = 0;
let isPlaying = false;
//================== Play Song  True or False====================
function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}
//================== Play Music====================
function playMusic() {
  isPlaying = true;
  playvBtnEl.classList.replace("fa-play", "fa-pause");
  playvBtnEl.setAttribute("title", "pause");
  music.play();
}
//================== Pause Music====================
function pauseMusic() {
  isPlaying = false;
  playvBtnEl.classList.replace("fa-pause", "fa-play");
  playvBtnEl.setAttribute("pause", "title");
  music.pause();
}
//================== Load Songs ====================
function loadMusic(songs) {
  music.src = songs.path;
  musicTitleEl.textContent = songs.displayName;
  musicArtistEl.textContent = songs.artist;
  imgCoverEl.src = songs.cover;
  imgEl.src = songs.cover;
}
//================== Change Music ====================
function changeMusic(direction) {
  musicIndex = musicIndex + direction + (songs.length % songs.length);
  loadMusic(songs[musicIndex]);
  playMusic();
}
//================== Set Progress ====================
function setProgressBar(e) {
  const width = playerProgressEl.clientWidth;
  const xValue = e.offsetX;
  music.currentTime = (xValue / width) * music.duration;
}
//================== Set Progress ====================
function updateProgressBar() {
  const { duration, currentTime } = music;
  const ProgressPercent = (currentTime / duration) * 100;
  progressEl.style.width = `${ProgressPercent}%`;
  const formattime = (timeRanges) =>
    String(Math.floor(timeRanges)).padStart(2, "0");
  durationEl.textContent = `${formattime(duration / 60)} : ${formattime(
    duration % 60,
  )}`;
  currentTimeEl.textContent = `${formattime(currentTime / 60)} : ${formattime(
    currentTime % 60,
  )}`;
}
//================= Btn Events========================
const btnEvents = () => {
  playvBtnEl.addEventListener("click", togglePlay);
  nextvBtnEl.addEventListener("click", () => changeMusic(1));
  prevBtnEl.addEventListener("click", () => changeMusic(-1));
  //========= Progressbar===========================
  music.addEventListener("ended", () => changeMusic(1));
  music.addEventListener("timeupdate", updateProgressBar);
  playerProgressEl.addEventListener("click", setProgressBar);
};
//================= Btn Events========================
document.addEventListener("DOMContentLoaded", btnEvents);
//============ Calling Load Music
loadMusic(songs[musicIndex]);

alert("Happy Holi, Anni! 🎉 May the rhythm of this festive occasion bring a symphony of laughter and cheer into your life. May each color that adorns your day represent the beauty of friendship, the melody of love, and the harmony of success. Here's to a joyous celebration filled with unforgettable moments and melodies that resonate in your heart forever! 🌈🎶");

