//Random heading
function getRandomWord() {
    const words = ['.اتخليقي مرڪزة', 'Creative Hub.', 'Centre créatif.', 'क्रिएटिव हब.', '创意中心.', 'クリエイティブハブ.', '크리에이티브 허브.', 'క్రియేటివ్ హబ్.', 'Творческий центр.', 'Yaratıcı Merkez.'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function changeTextOnHover() {
    const headerText = document.querySelector('header h1');
    headerText.addEventListener('mouseenter', function() {
        const randomWord = getRandomWord();
        headerText.textContent = randomWord;
    });
    
}

//Youtube video styles
const video = document.getElementById('youtube-video');
    const muteBtn = document.getElementById('mute-btn');

    muteBtn.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteBtn.innerText = 'Mute';
        } else {
            video.muted = true;
            muteBtn.innerText = 'Unmute';
        }
    });
