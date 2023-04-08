// variables
const btnPlay = document.querySelectorAll('.playing');
const video = document.querySelector('#video');
const adelantarAtrasar = document.querySelector('#adelanterAtrasar');
const pause = document.querySelector('#pause');
const progress = document.querySelector('#progress');
const replay = document.querySelector('.replay');
const sound = document.querySelector('#sound');
const soundIcon = sound.querySelector('i');
const minimizer = document.querySelector('#minimizer');
const minimizerIcon = minimizer.querySelector('i');
const layout = document.querySelector('.layout');
const videoTime = document.querySelector('#time');

// declaracion de funciones

const PlayPause = () => {
    if (video.paused) {
        video.play();
        adelantarAtrasar.classList.remove('segundos-container--active');
        pause.classList.remove('fa-play')
        pause.classList.add('fa-pause');
    } else {
        video.pause();
        adelantarAtrasar.classList.add('segundos-container--active');
        pause.classList.add('fa-play')
        pause.classList.remove('fa-pause');
    }
}

const progreso = ()=>{
    video.currentTime = Number((progress.value * video.duration) / 100);
}
const changeVideoProgress = ()=>{
    progress.value = +(video.currentTime / video.duration) * 100;
    if(progress.value == 100){
        replay.classList.add('replay--active');
        adelantarAtrasar.classList.add('segundos-container--active');
        pause.classList.add('fa-play');
    }
    // videoTime.textContent = Math.floor(video.currentTime);
    let videoTimeFloor = Math.floor(video.currentTime);
    if(video.currentTime <= 60){
        videoTime.textContent = `00:${videoTimeFloor} `;
    }else if(video.currentTime >= 60){
        videoTime.textContent = `01:${videoTimeFloor}`;
    }
}

const recargar = ()=>{
    video.currentTime = 0;
    progress.value = 0;
    PlayPause();
    replay.classList.remove('replay--active');
}

const videoMute = ()=>{
    video.volume = !video.volume;
    soundIcon.classList.toggle('fa-volume-xmark');
}
const videoMinMax = ()=>{
    layout.classList.toggle('layout--active');
    video.classList.toggle('video--active');
    minimizerIcon.classList.toggle('fa-minimize');
}

btnPlay.forEach((e) => {
    e.addEventListener('click', PlayPause);
})
// Invocacion de funciones
video.addEventListener('click', PlayPause);
video.addEventListener('timeupdate', changeVideoProgress);
progress.addEventListener('change', progreso);
replay.addEventListener('click', recargar)
sound.addEventListener('click', videoMute)
minimizer.addEventListener('click', videoMinMax)

