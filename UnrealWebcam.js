const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const strip = document.querySelector('.strip');
const ctx = canvas.getContext('2d');
function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(LocalMediastream => {
            console.log(LocalMediastream);
            video.srcObject = LocalMediastream;
            video.play();
        });
}
getVideo();
function hide() {
    printtocanvas(false);
}

function show() {
    printtocanvas(true);
}
var data = null;
function printtocanvas(isVisible) {
    const height = video.videoHeight;
    const width = video.videoWidth;
    canvas.width = width;
    canvas.height = height;
    if (isVisible) {
        data = setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 1);
    }
    else {
        ctx.clearRect(0, 0, width, height);
        clearInterval(data);
    }
}

