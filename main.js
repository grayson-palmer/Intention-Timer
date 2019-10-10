var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.querySelector('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
var descField = document.querySelector('#desc-field');
var descFieldTwo = document.querySelector(".descFieldTwo");
var catError = document.querySelector('#cat-error');
var descError = document.querySelector('#desc-error');
var minError = document.querySelector('#min-error');
var secError = document.querySelector('#sec-error');
var startActivity = document.querySelector('#start-activity');
var minVal = document.querySelector('#min-val');
var minValTwo = document.querySelector('#minValTwo');
var secVal = document.querySelector('#sec-val');
var secValTwo = document.querySelector('#secValTwo');
var invalidChars = ["e", "."];
var newActivity = document.querySelector('#new-activity');
var timerBox = document.querySelector('#timer-box');
var category = '';


studyBtn.addEventListener('click', toggleStudy);
meditateBtn.addEventListener('click', toggleMeditate);
exerciseBtn.addEventListener('click', toggleExercise);
startActivity.addEventListener('click', submit);
minVal.addEventListener('keydown', charCheck);
secVal.addEventListener('keydown', charCheck);

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
    return false;
  }
}

function validateMin() {
  if (minVal.value === '') {
    minError.classList.remove('hidden');
    minError.classList.add('reveal');
    return false;
  }
}

function validateSec() {
  if (secVal.value === '') {
    secError.classList.remove('hidden');
    secError.classList.add('reveal');
    return false;
  }
}

function validateCat() {
  if (studyBtn.classList.contains('study-on') || 
  meditateBtn.classList.contains('meditate-on') ||
  exerciseBtn.classList.contains('exercise-on')) {
    return true;
  } else {
    catError.classList.remove('hidden');
    catError.classList.add('reveal');
    return false;
  }
}

function validateAll() {
    if (validateDesc() === true ||
    validateMin() === true ||
    validateSec() === true ||
    validateCat() === true)
    {
    return true;
    }
  }

function submit() {
  if (validateAll() === true) {
  newActivity.classList.remove('reveal');
  newActivity.classList.add('hidden');
  timerBox.classList.remove('hidden');
  timerBox.classList.add('reveal');
  descFieldTwo.innerText = descField.value;
  minValTwo.innerText = minVal.value;
  secValTwo.innerText = secVal.value;
  // minVal.value + secVal.value 
  } 
}

function charCheck(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}



// minval.input.value = span.input.value