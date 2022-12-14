const cross = document.querySelectorAll('.cross')
const circle = document.querySelectorAll('.circle')
const block = document.querySelectorAll('.block')

const wrapper = document.querySelector('.wrapper');
const again = document.querySelector('.button');

const blockOne = document.querySelector('#block_one');
const blockTwo = document.querySelector('#block_two');
const blockTree = document.querySelector('#block_tree');
const blockFour = document.querySelector('#block_four');
const blockFive = document.querySelector('#block_five');
const blockSix = document.querySelector('#block_six');
const blockSeven = document.querySelector('#block_seven');
const blockEight = document.querySelector('#block_eight');
const blockNine = document.querySelector('#block_nine');

const circleTitle = document.querySelector('.circle_title');
const crossTitle = document.querySelector('.cross_title');

const crossOne = document.querySelector('#cross_one_one');
const crossTwo = document.querySelector('#cross_one_two');
const crossTree = document.querySelector('#cross_one_tree');
const crossFour = document.querySelector('#cross_two_one');
const crossFive = document.querySelector('#cross_two_two');
const crossSix = document.querySelector('#cross_two_tree');
const crossSeven = document.querySelector('#cross_tree_one');
const crossEight = document.querySelector('#cross_tree_two');
const crossNine = document.querySelector('#cross_tree_tree');

const circleOne = document.querySelector('#circle_one_one');
const circleTwo = document.querySelector('#circle_one_two');
const circleTree = document.querySelector('#circle_one_tree');
const circleFour = document.querySelector('#circle_two_one');
const circleFive = document.querySelector('#circle_two_two');
const circleSix = document.querySelector('#circle_two_tree');
const circleSeven = document.querySelector('#circle_tree_one');
const circleEight = document.querySelector('#circle_tree_two');
const circleNine = document.querySelector('#circle_tree_tree');

again.addEventListener('click', function(event){ 
    const crossWin = document.querySelector('.cross_win');
const circleWin = document.querySelector('.circle_win');

    block.forEach(block => {
        block.style = 'pointer-events: auto;';;
      });

    cross.forEach(cross => {
        cross.classList.remove('active');
      });

      circle.forEach(circle => {
        circle.classList.remove('active');
      });

      crossWin.classList.remove('active');
      circleWin.classList.remove('active');
      circleTitle.classList.remove('active');
      crossTitle.classList.add('active');
});

function winCross() {
    const crossWin = document.querySelector('.cross_win');

    crossWin.classList.add('active');
    circleTitle.classList.remove('active');
    crossTitle.classList.remove('active');
}

function winCircle() {
    const circleWin = document.querySelector('.circle_win');

    circleWin.classList.add('active');
    circleTitle.classList.remove('active');
    crossTitle.classList.remove('active');
}

function draw() {
    const fix = document.querySelector('.cross_win').classList.contains('active');
    const fixTwo = document.querySelector('.circle_win').classList.contains('active');

    const draw = document.querySelector('.draw');

const blockOne = document.querySelector('#block_one');
const blockTwo = document.querySelector('#block_two');
const blockTree = document.querySelector('#block_tree');
const blockFour = document.querySelector('#block_four');
const blockFive = document.querySelector('#block_five');
const blockSix = document.querySelector('#block_six');
const blockSeven = document.querySelector('#block_seven');
const blockEight = document.querySelector('#block_eight');
const blockNine = document.querySelector('#block_nine');

if (getComputedStyle(blockOne).pointerEvents == 'none' & 
    getComputedStyle(blockTwo).pointerEvents == 'none' &
    getComputedStyle(blockTree).pointerEvents == 'none' &
    getComputedStyle(blockFour).pointerEvents == 'none' &
    getComputedStyle(blockFive).pointerEvents == 'none' &
    getComputedStyle(blockSix).pointerEvents == 'none' &
    getComputedStyle(blockSeven).pointerEvents == 'none' &
    getComputedStyle(blockEight).pointerEvents == 'none' &
    getComputedStyle(blockNine).pointerEvents == 'none'&
    fix == false & 
    fixTwo == false ){

    draw.classList.add('active');
    circleTitle.classList.remove('active');
    crossTitle.classList.remove('active');
    }};

blockOne.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossOne.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleOne.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockTwo.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossTwo.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleTwo.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockTree.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossTree.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleTree.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockFour.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossFour.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleFour.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockFive.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossFive.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleFive.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockSix.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossSix.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleSix.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockSeven.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossSeven.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleSeven.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockEight.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossEight.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleEight.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

blockNine.addEventListener('click', function(event) {

    const cross = document.querySelector('.cross_title').classList.contains('active');
    const circle = document.querySelector('.circle_title').classList.contains('active');

    if (cross == true) {
        crossNine.classList.add('active');
        circleTitle.classList.add('active');
        crossTitle.classList.remove('active');
        this.style = 'pointer-events: none;';

      } else if (circle == true) {
        circleNine.classList.add('active');
        circleTitle.classList.remove('active');
        crossTitle.classList.add('active');
        this.style = 'pointer-events: none;';
      }
});

// вывод надписи победа

// победа крестиков

function winnerCr13() {
    const crOne = document.querySelector('.cr_one').classList.contains('active');
    const crTwo = document.querySelector('.cr_two').classList.contains('active');
    const crTree = document.querySelector('.cr_tree').classList.contains('active');

    if (crOne == true & crTwo == true & crTree == true) {
        winCross()
    }};

function winnerCr46() {
    const crFour = document.querySelector('.cr_four').classList.contains('active');
    const crFive = document.querySelector('.cr_five').classList.contains('active');
    const crSix = document.querySelector('.cr_six').classList.contains('active');

    if (crFour == true & crFive == true & crSix == true) {
        winCross()
    }};

function winnerCr79() {
    const crSeven = document.querySelector('.cr_seven').classList.contains('active');
    const crEight = document.querySelector('.cr_eight').classList.contains('active');
    const crNine = document.querySelector('.cr_nine').classList.contains('active');

    if (crSeven == true & crEight == true & crNine == true) {
        winCross()
    }};

function winnerCr17() {
    const crOne = document.querySelector('.cr_one').classList.contains('active');
    const crFour = document.querySelector('.cr_four').classList.contains('active');
    const crSeven = document.querySelector('.cr_seven').classList.contains('active');

    if (crSeven == true & crOne == true & crFour == true) {
        winCross()
    }};

function winnerCr28() {
    const crTwo = document.querySelector('.cr_two').classList.contains('active');
    const crFive = document.querySelector('.cr_five').classList.contains('active');
    const crEight = document.querySelector('.cr_eight').classList.contains('active');

    if (crTwo == true & crFive == true & crEight == true) {
        winCross()
    }};

function winnerCr39() {
    const crTree = document.querySelector('.cr_tree').classList.contains('active');
    const crSix = document.querySelector('.cr_six').classList.contains('active');
    const crNine = document.querySelector('.cr_nine').classList.contains('active');

    if (crTree == true & crSix == true & crNine == true) {
        winCross()
    }};

function winnerCr19() {
    const crOne = document.querySelector('.cr_one').classList.contains('active');
    const crFive = document.querySelector('.cr_five').classList.contains('active');
    const crNine = document.querySelector('.cr_nine').classList.contains('active');

    if (crOne == true & crFive == true & crNine == true) {
        winCross()
    }};

function winnerCr37() {
    const crTree = document.querySelector('.cr_tree').classList.contains('active');
    const crFive = document.querySelector('.cr_five').classList.contains('active');
    const crSeven = document.querySelector('.cr_seven').classList.contains('active');

    if (crSeven == true & crTree == true & crFive == true) {
        winCross()
    }};

// выполнение

  wrapper.addEventListener('click', function(event) {
  winnerCr13();});
  wrapper.addEventListener('click', function(event) {
  winnerCr46();});
  wrapper.addEventListener('click', function(event) {
  winnerCr79();});
  wrapper.addEventListener('click', function(event) {
  winnerCr17();});
  wrapper.addEventListener('click', function(event) {
  winnerCr28();});
  wrapper.addEventListener('click', function(event) {
  winnerCr39();});
  wrapper.addEventListener('click', function(event) {
  winnerCr19();});
  wrapper.addEventListener('click', function(event) {
  winnerCr37();});

  // победа ноликов 

  function winnerCi13() {
    const ciOne = document.querySelector('.ci_one').classList.contains('active');
    const ciTwo = document.querySelector('.ci_two').classList.contains('active');
    const ciTree = document.querySelector('.ci_tree').classList.contains('active');

    if (ciOne == true & ciTwo == true & ciTree == true) {
        winCircle()
    }};

function winnerCi46() {
    const ciFour = document.querySelector('.ci_four').classList.contains('active');
    const ciFive = document.querySelector('.ci_five').classList.contains('active');
    const ciSix = document.querySelector('.ci_six').classList.contains('active');

    if (ciFour == true & ciFive == true & ciSix == true) {
        winCircle()
    }};

function winnerCi79() {
    const ciSeven = document.querySelector('.ci_seven').classList.contains('active');
    const ciEight = document.querySelector('.ci_eight').classList.contains('active');
    const ciNine = document.querySelector('.ci_nine').classList.contains('active');

    if (ciSeven == true & ciEight == true & ciNine == true) {
        winCircle()
    }};

function winnerCi17() {
    const ciOne = document.querySelector('.ci_one').classList.contains('active');
    const ciFour = document.querySelector('.ci_four').classList.contains('active');
    const ciSeven = document.querySelector('.ci_seven').classList.contains('active');

    if (ciSeven == true & ciOne == true & ciFour == true) {
        winCircle()
    }};

function winnerCi28() {
    const ciTwo = document.querySelector('.ci_two').classList.contains('active');
    const ciFive = document.querySelector('.ci_five').classList.contains('active');
    const ciEight = document.querySelector('.ci_eight').classList.contains('active');

    if (ciTwo == true & ciFive == true & ciEight == true) {
        winCircle()
    }};

function winnerCi39() {
    const ciTree = document.querySelector('.ci_tree').classList.contains('active');
    const ciSix = document.querySelector('.ci_six').classList.contains('active');
    const ciNine = document.querySelector('.ci_nine').classList.contains('active');

    if (ciTree == true & ciSix == true & ciNine == true) {
        winCircle()
    }};

function winnerCi19() {
    const ciOne = document.querySelector('.ci_one').classList.contains('active');
    const ciFive = document.querySelector('.ci_five').classList.contains('active');
    const ciNine = document.querySelector('.ci_nine').classList.contains('active');

    if (ciOne == true & ciFive == true & ciNine == true) {
        winCircle()
    }};

function winnerCi37() {
    const ciTree = document.querySelector('.ci_tree').classList.contains('active');
    const ciFive = document.querySelector('.ci_five').classList.contains('active');
    const ciSeven = document.querySelector('.ci_seven').classList.contains('active');

    if (ciSeven == true & ciTree == true & ciFive == true) {
        winCircle()
    }};

// выполнение

  wrapper.addEventListener('click', function(event) {
  winnerCi13();});
  wrapper.addEventListener('click', function(event) {
  winnerCi46();});
  wrapper.addEventListener('click', function(event) {
  winnerCi79();});
  wrapper.addEventListener('click', function(event) {
  winnerCi17();});
  wrapper.addEventListener('click', function(event) {
  winnerCi28();});
  wrapper.addEventListener('click', function(event) {
  winnerCi39();});
  wrapper.addEventListener('click', function(event) {
  winnerCi19();});
  wrapper.addEventListener('click', function(event) {
  winnerCi37();});

  wrapper.addEventListener('click', function(event) {
    draw();});
