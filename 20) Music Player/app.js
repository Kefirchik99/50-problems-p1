let controls = document.getElementById('controls');
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let stopButton = document.getElementById('stop');
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
let songs = [
    {
        title: 'The 1',
        artist: '<NAME1>',
        duration: '3:23'
    },
    {
        title: 'The 2',
        artist: '<NAME2>',
        duration: '3:56'
    },
    {
        title: 'The 3',
        artist: '<NAME3>',
        duration: '1:40'
    },
    {
        title: 'The 4',
        artist: '<NAME4>',
        duration: '6:34'
    },
    {
        title: 'The 5',
        artist: '<NAME5>',
        duration: '4:20'
    }
]

playButton.addEventListener('click', playTrack);
const playTrack = () => { };

pauseButton.addEventListener('click', pauseTrack);
const pauseTrack = () => { };

stopButton.addEventListener('click', stopTrack);
const stopTrack = () => { };

nextButton.addEventListener('click', nextTrack);

const nextTrack = () => { };

previousButton.addEventListener('click', previousTrack);

const previousTrack = () => { };

repeatButton.addEventListener('click', repeatTrack);

const repeatTrack = () => { };

shuffleButton.addEventListener('click', shuffleTrack);

const shuffleTrack = () => { };

muteButton.addEventListener('click', muteTrack);

const muteTrack = () => { };

unmuteButton.addEventListener('click', unmuteTrack);

const unmuteTrack = () => { };
