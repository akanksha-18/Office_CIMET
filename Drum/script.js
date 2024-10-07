const drums = [
    { sound: 'assets/crash.mp3', image: 'assets/crash.png', key: 'A' },
    { sound: 'assets/kick.mp3', image: 'assets/kick.png', key: 'B' },
    { sound: 'assets/snare.mp3', image: 'assets/snare.png', key: 'C' },
    { sound: 'assets/tom.mp3', image: 'assets/tom.png', key: 'D' },
];

const rightDiv = document.getElementById('right');

function createDrumBox(drum) {
    const box = document.createElement('div');
    box.classList.add('box');
  

    const img = document.createElement('img');
    img.src = drum.image;
  
    
    const keyDiv = document.createElement('div');
    keyDiv.classList.add('key');
    keyDiv.textContent = drum.key;

    box.appendChild(img);
    box.appendChild(keyDiv);

    box.addEventListener('click', () => playSound(drum.sound));

    return box;
}

function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
}


drums.forEach(drum => {
    const drumBox = createDrumBox(drum);
    rightDiv.appendChild(drumBox);
});


document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); 

  
    const drum = drums.find(drum => drum.key === key);

    if (drum) {
        playSound(drum.sound);
    }
});