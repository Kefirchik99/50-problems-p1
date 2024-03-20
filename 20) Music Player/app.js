let controls = document.getElementById('controls');
let playButton = document.getElementById('play');
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let repeatButton = document.getElementById('repeat');
let shuffleButton = document.getElementById('shuffle');
let progress = document.getElementById('progress');
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');
let volume = document.getElementById('volume');
let muteButton = document.getElementById('mute');
let unmuteButton = document.getElementById('unmute');
let currentSongIndex = 0;
let songs = [
    {
        title: 'The 1',
        artist: 'John Williams',
        duration: '3:23'
    },
    {
        title: 'The 2',
        artist: 'The Stogies',
        duration: '3:56'
    },
    {
        title: 'The 3',
        artist: 'Alabama',
        duration: '1:40'
    },
    {
        title: 'The 4',
        artist: 'DeFo',
        duration: '6:34'
    },
    {
        title: 'The 5',
        artist: 'DJ Pudding',
        duration: '4:20'
    }
]

//Functions
let isPlaying = false;  

const playTrack = () => {
    if (!isPlaying) {
        let currentSong = songs[currentSongIndex];
        document.getElementById('song-title').textContent = currentSong.title;
        document.getElementById('song-artist').textContent = currentSong.artist;
        document.getElementById('song-duration').textContent = currentSong.duration;

        console.log("Now playing:", currentSong.title, "by", currentSong.artist, "Duration:", currentSong.duration);
        
        playButton.textContent = "Pause";  
        isPlaying = true;
    } else {
        pauseTrack();  
    }
};

const pauseTrack = () => {
     
    console.log("Music paused");
    playButton.textContent = "Play";  
    isPlaying = false;  
};

const nextTrack = () => {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;  
    }
    playTrack();
};

const previousTrack = () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; 
    }
    playTrack();
};

const repeatTrack = () => {
    
};
















 

//Event-Listeners

playButton.addEventListener('click', playTrack);

pauseButton.addEventListener('click', pauseTrack);

nextButton.addEventListener('click', nextTrack);

previousButton.addEventListener('click', previousTrack);

repeatButton.addEventListener('click', repeatTrack);

shuffleButton.addEventListener('click', shuffleTrack);

muteButton.addEventListener('click', muteTrack);

unmuteButton.addEventListener('click', unmuteTrack);


