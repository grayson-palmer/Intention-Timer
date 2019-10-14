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
var minValTwo = document.querySelector('#minValTwo');
var newActivity = document.querySelector('#new-activity');
var secError = document.querySelector('#sec-error');
var secVal = document.querySelector('#sec-val');
var secValTwo = document.querySelector('#secValTwo');
var startActivity = document.querySelector('#start-activity');
var startButton = document.querySelector('#start-button');
var studyBtn = document.querySelector('#study-btn');
var timeLeft = 0;
var timerBox = document.querySelector('#timer-box');
var timerDesc = document.querySelector('#timer-desc');
var timerDisplay = document.querySelector('#timer-display');
var timerVal = document.querySelector('#timer-val');
 

exerciseBtn.addEventListener('click', toggleExercise);
meditateBtn.addEventListener('click', toggleMeditate);
minVal.addEventListener('keydown', charCheck);
secVal.addEventListener('keydown', charCheck);
startActivity.addEventListener('click', submit);
startButton.addEventListener('click', countdown);
studyBtn.addEventListener('click', toggleStudy);


function toggleStudy() {
  if (studyBtn.classList.contains('study-off')) { 
    studyBtn.classList.remove('study-off');
    studyBtn.classList.add('study-on');
    meditateBtn.classList.remove('meditate-on');
    meditateBtn.classList.add('meditate-off');
    exerciseBtn.classList.remove('exercise-on');
    exerciseBtn.classList.add('exercise-off');
  }
  else {
    studyBtn.classList.remove('study-on');
    studyBtn.classList.add('study-off');
  }
}

function toggleMeditate() {
  if (meditateBtn.classList.contains('meditate-off')) { 
    meditateBtn.classList.remove('meditate-off');
    meditateBtn.classList.add('meditate-on');
    studyBtn.classList.remove('study-on');
    studyBtn.classList.add('study-off');
    exerciseBtn.classList.remove('exercise-on');
    exerciseBtn.classList.add('exercise-off');
  }
  else {
    meditateBtn.classList.remove('meditate-on');
    meditateBtn.classList.add('meditate-off');
  }
}

function toggleExercise() {
  if (exerciseBtn.classList.contains('exercise-off')) { 
    exerciseBtn.classList.remove('exercise-off');
    exerciseBtn.classList.add('exercise-on');
    studyBtn.classList.remove('study-on');
    studyBtn.classList.add('study-off');
    meditateBtn.classList.remove('meditate-on');
    meditateBtn.classList.add('meditate-off');
  }
  else {
    exerciseBtn.classList.remove('exercise-on');
    exerciseBtn.classList.add('exercise-off');
  }
}

function validateDesc() {
  if (descField.value === '') {
    descError.classList.remove('hidden');
    descError.classList.add('reveal');
  } else {return true;}
}

function validateMin() {
  if (minVal.value === '') {
    minError.classList.remove('hidden');
    minError.classList.add('reveal');
  } else {return true;}
}

function validateSec() {
  if (secVal.value === '') {
    secError.classList.remove('hidden');
    secError.classList.add('reveal');
  } else {return true;}
}

function validateCat() {
  if (studyBtn.classList.contains('study-on') || 
  meditateBtn.classList.contains('meditate-on') ||
  exerciseBtn.classList.contains('exercise-on')) {
    return true;
  } else {
    catError.classList.remove('hidden');
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
  timerBox.classList.remove('hidden');
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
    alert("TIMER IS DONE!");
    clearInterval(interval);
    timerDisplay.innerText = "00:00";
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
};