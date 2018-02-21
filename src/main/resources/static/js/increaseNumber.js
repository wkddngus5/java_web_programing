class IncreaseNumber {
  constructor() {
    this.init();
  }

  init() {
    this.increaseAnimation(document.querySelector('.ex1'));
    this.increaseAnimation(document.querySelector('.ex2'));
    this.increaseAnimation(document.querySelector('.ex3'));
  }

  increaseAnimation(target) {
    let h2 = target.querySelector('h2');
    let bar = target.querySelector('.bar');

    let go = setInterval(() => {
      h2.innerHTML = parseInt(h2.innerHTML) + 1;
      bar.style.width = parseInt(h2.innerHTML) + 'px';

      if(h2.innerHTML === h2.getAttribute('data-id')) {
        this.stopAnimation(go);
      }
    }, 15);
  }

  stopAnimation(fun) {
    clearInterval(fun);
  }
}

new IncreaseNumber();
