window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults=true;

const p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);
//this is for printing content

//events
recognition.addEventListener('result',e => {
    const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    console.log(transcript);
    document.write(transcript);
    //p.innerHTML = transcript;
    if (e.results[0].isFinal) {
        var p = document.getElementsByClassName('p')[0];
        words.appendChild(p);
        p.textContent = transcript;
    }
});

recognition.addEventListener('end', recognition.start);
recognition.start();


