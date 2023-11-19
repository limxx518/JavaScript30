document.addEventListener('keydown', (e) => {
    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const elem = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio || !elem) return;
    audio.currentTime = 0;
    elem.classList.add('playing');
    audio.addEventListener('ended', () => {
      elem.classList.remove('playing');
    })
    audio.play();
  })

// function removeTrans(e) {
//   if (e.propertyName !== 'transform') return;
//   console.log(this);
//   this.classList.remove('playing');
// }

// let keys = document.querySelectorAll('.key');
// keys.forEach((key) => {
//   key.addEventListener('transitionend', removeTrans);
// });