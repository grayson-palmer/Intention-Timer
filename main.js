var catError = document.querySelector('#cat-error');
var category = '';
var descError = document.querySelector('#desc-error');
var descField = document.querySelector('#desc-field');
var exerciseBtn = document.querySelector('#exercise-btn');
var interval;
var invalidChars = ["e", "."];
var meditateBtn = document.querySelector('#meditate-btn');
var minError = document.querySelector('#min-error');
var minVal = document.querySelector('#min-val');
var newActivity = document.querySelector('#new-activity');
var secError = document.querySelector('#sec-error');
var secVal = document.querySelector('#sec-val');
var startActivity = document.querySelector('#start-activity');
var startButton = document.querySelector('#start-button');
var studyBtn = document.querySelector('#study-btn');
var timeLeft = 0;
var timerBox = document.querySelector('#timer-box');
var timerDesc = document.querySelector('#timer-desc');
var timerDisplay = document.querySelector('#timer-display');
var timerVal = document.querySelector('#timer-val');
var btnWrapper = document.querySelector('.btn-wrapper');
var activityCards = document.querySelector('.activity-card-section');
var logActivity = document.querySelector('#log-activity');
var prevActivity = document.querySelector('#prev-activity');
var prevActivityText = document.querySelector('#prev-activity-text');
var cardCategory = document.querySelector('.card-cat');
var catButton = document.querySelector('.cat-button');
var formReset = document.querySelector('#form-reset');
var newActivityBtn = document.querySelector('#create-new-activity-btn');
var formTime = document.querySelector('.form-time');


minVal.addEventListener('keydown', charCheck);
secVal.addEventListener('keydown', charCheck);
startActivity.addEventListener('click', submit);
startButton.addEventListener('click', countdown);
btnWrapper.addEventListener('click', buttonHandler);
logActivity.addEventListener('click', createCard);
newActivityBtn.addEventListener('click', resetForm);




function buttonHandler(event) {
  if (event.target.innerText.includes('Study')) {
    studyBtn.classList.add('study-on');
    meditateBtn.classList.remove('meditate-on');
    exerciseBtn.classList.remove('exercise-on');
  
  }
  if (event.target.innerText.includes('Meditate')) {
    meditateBtn.classList.add('meditate-on');
    studyBtn.classList.remove('study-on');
    exerciseBtn.classList.remove('exercise-on');
  }
  
  if (event.target.innerText.includes('Exercise')) {
    exerciseBtn.classList.add('exercise-on');
    meditateBtn.classList.remove('meditate-on');
    studyBtn.classList.remove('study-on');

  }
}




function validateDesc() {
  if (descField.value === '') {
    descError.classList.add('reveal');
  } else {return true;}
}

function validateMin() {
  if (minVal.value === '') {
    minError.classList.add('reveal');
  } else {return true;}
}

function validateSec() {
  if (secVal.value === '') {
    secError.classList.add('reveal');
  } else {return true;}
}

function validateCat() {
  if (studyBtn.classList.contains('study-on') || 
  meditateBtn.classList.contains('meditate-on') ||
  exerciseBtn.classList.contains('exercise-on')) {
    return true;
  } else {
    catError.classList.add('reveal');
  }
}

function validateBulk() {
  validateCat();
  validateDesc();
  validateMin();
  validateSec();
}

function validateAll() {
  validateBulk();
  if (validateCat() === true &&
    validateDesc() === true &&
    validateMin() === true &&
    validateSec() === true)
    {
    return true;
    } else {return false;}
  }

function submit() {
  if (validateAll() === true) {
  newActivity.classList.remove('reveal');
  newActivity.classList.add('hidden');
  timerBox.classList.add('reveal');
  timerDesc.innerText = descField.value;
  var minPres = minVal.value < 10 ? "0" + minVal.value : minVal.value;
  var secPres = secVal.value < 10 ? "0" + secVal.value : secVal.value;
  timerDisplay.innerText = minPres + ":" + secPres;
  startButtonColor();
  } 
}

function charCheck(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

// ********** TIMER LOGIC ***********

function convertSec(mVal, sVal) {
  console.log(mVal);
  console.log(sVal);
  var sec = parseInt(Math.floor(mVal * 60)) + parseInt(sVal);
  timeLeft = sec;
  console.log(timeLeft);
}

function timerAppearance(s) {
  var min = Math.floor(s / 60);
  var sec = s % 60;
  var minPres = 0;
  var secPres = 0;
  minPres = min < 10 ? "0" + min : min;
  secPres = sec < 10 ? "0" + sec : sec;
  return minPres + ":" + secPres;
};

function timerLogic() {
  timeLeft--;
  timerDisplay.innerText = timerAppearance(timeLeft);
  if (timeLeft < 0) {
    startButton.innerText = 'COMPLETE!'
    clearInterval(interval);
    timerDisplay.innerText = "CONGRATULATIONS!";
    logActivity.classList.add('reveal');

    };
  };

function countdown() {
  convertSec(minVal.value, secVal.value);
  interval = setInterval(timerLogic, 1000);
};

function startButtonColor() {
  if (studyBtn.classList.contains('study-on')) {
    startButton.classList.add('start-btn-study');
  }
  if (meditateBtn.classList.contains('meditate-on')) {
    startButton.classList.add('start-btn-meditate');
  }
  if (exerciseBtn.classList.contains('exercise-on')) {
    startButton.classList.add('start-btn-exercise');
  }
}

function cardCategorySelector() {
  if (studyBtn.classList.contains('study-on')) {
    return 'study'
  }
  if (meditateBtn.classList.contains('meditate-on')) {
    return 'meditate'
  }
  if (exerciseBtn.classList.contains('exercise-on')) {
    return 'exercise'
  }
}

function createCard() {
  activityCards.insertAdjacentHTML('afterbegin',
  `<section class="activity-card">
    <p class="card-cat ${cardCategorySelector()}">${cardCategorySelector()}</p>
    <p class="card-time">${minVal.value} MIN ${secVal.value} SECONDS</p>
    <p class="card-desc">${descField.value}</p>
  </section>`);
  prevActivityText.remove();
  timerBox.classList.remove('reveal');
  formReset.classList.add('reveal');
  }

function resetForm() {
  formReset.classList.remove('reveal');
  newActivity.classList.remove('hidden');
  studyBtn.classList.remove('study-on');
  meditateBtn.classList.remove('meditate-on');
  exerciseBtn.classList.remove('exercise-on');
  startButton.innerText = 'START!'
  formTime.reset();
}