var saveScoreBtn = document.getElementById('saveScoreBtn');
saveScoreBtn.addEventListener('click', (e) => {
    new Game().saveHighScore(e);
});