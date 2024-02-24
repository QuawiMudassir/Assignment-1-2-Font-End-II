function getRandomWord() {
    const words = ['اتخليقي مرڪزة', 'Creative Hub', 'Centre créatif', 'क्रिएटिव हब', 'Creative Hub', '创意中心', 'クリエイティブハブ', '크리에이티브 허브', 'క్రియేటివ్ హబ్', 'Творческий центр', 'Yaratıcı Merkez'];
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