class ReactiveSlider {
    constructor() {
        this.init();
    }

    init() {
        this.slider = document.querySelector('.mdl-js-slider');
        this.box = document.querySelector('.reactive-box');
        this.boxWidth = this.box.offsetWidth;
        this.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100;

        this.cellList = document.querySelectorAll('td');
        this.cellCount = 4;
        this.cellWidth = 125;

        this.slider.addEventListener('input', e => {
            this.sliderEvent();
        });
        this.setCells();
    }

    setCells() {
        this.boxWidth = this.box.offsetWidth;
        this.vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100;
        console.log(this.boxWidth, this.vw);

        if(this.boxWidth > 0 && this.boxWidth < 20 * this.vw) {
            console.log('case1');
            for(let i = 0 ; i < this.cellList.length ; i++) {
                if(this.cellList[i].classList.contains('col1')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth - 2 * this.vw) + 'px';
                } else {
                    this.cellList[i].classList.remove('is-visible');
                }
            }
        } else if(this.boxWidth > 20 * this.vw && this.boxWidth < 40 * this.vw) {
            console.log('case2');
            for(let i = 0 ; i < this.cellList.length ; i++) {
                if(this.cellList[i].classList.contains('col1') ||
                    this.cellList[i].classList.contains('col3')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 2 - 2 * this.vw) + 'px';
                } else {
                    this.cellList[i].classList.remove('is-visible');
                }
            }
        } else if(this.boxWidth > 40 * this.vw && this.boxWidth < 60 * this.vw) {
            console.log('case3');
            for(let i = 0 ; i < this.cellList.length ; i++) {
                if(this.cellList[i].classList.contains('col1')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 2 - 2 * this.vw) + 'px';
                } else if(this.cellList[i].classList.contains('col3') ||
                        this.cellList[i].classList.contains('col5')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 4 - 2 * this.vw) + 'px';
                } else {
                    this.cellList[i].classList.remove('is-visible');
                }
            }
        } else if(this.boxWidth > 60 * this.vw && this.boxWidth < 80 * this.vw) {
            console.log('case4');
            for(let i = 0 ; i < this.cellList.length ; i++) {
                if(this.cellList[i].classList.contains('col1')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 4 - 2 * this.vw) + 'px';
                } else if(this.cellList[i].classList.contains('col2')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 4 - 2 * this.vw) + 'px';
                } else if(this.cellList[i].classList.contains('col3') ||
                    this.cellList[i].classList.contains('col5')) {
                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 4 - 2 * this.vw) + 'px';
                } else {
                    this.cellList[i].classList.remove('is-visible');
                }
            }
        } else if(this.boxWidth > 80 * this.vw && this.boxWidth < 100 * this.vw) {
            console.log('case5');
            for(let i = 0 ; i < this.cellList.length ; i++) {
                console.log(this.cellList[i]);
                if(this.cellList[i].classList.contains('col1') ||
                    this.cellList[i].classList.contains('col2') ||
                    this.cellList[i].classList.contains('col5')) {

                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 4 - 2 * this.vw) + 'px';
                } else if(this.cellList[i].classList.contains('col3') ||
                    this.cellList[i].classList.contains('col4')) {

                    this.cellList[i].classList.add('is-visible');
                    this.cellList[i].style.width = (this.boxWidth / 8 - 2 * this.vw) + 'px';
                }
            }
        }
    }
    sliderEvent() {
        let sliderValue = this.slider.value;
        let boxColor = Math.floor(sliderValue / 100 * 200) + 100;

        let boxColorString = 'rgb(' + '0' + ',' + boxColor + ',' + boxColor + ')';

        this.box.style.width = sliderValue + 'vw';
        // this.box.style.backgroundColor = boxColorString;
        this.setCells();
    }

}

new ReactiveSlider();