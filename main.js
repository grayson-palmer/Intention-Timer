var studyBtn = document.querySelector('#study-btn');
var meditateBtn = document.querySelector('#meditate-btn');
var exerciseBtn = document.querySelector('#exercise-btn');
var descField = document.querySelector('#desc-field');
var descError = document.querySelector('#desc-error');
var startActivity = document.querySelector('#start-activity');
var minVal = document.querySelector('#min-val');
var secVal = document.querySelector('#sec-val');
var invalidChars = ["e", "."];
var newActivity = querySelector('#new-activity');
var timerBox = querySelector('#timer-box');

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
  }
}

function validateMin() {
  if (minVal.value === '') {
    //Set var and class list for error
  }
}

function validateSec() {
  if (secVal.value === '') {
    //Set var and class list for error
  }
}

// function validate() {
//   if (descField.value === '') {
//     descError.classList.remove('hidden');
//     descError.classList.add('reveal');
//   }
//   else if (minVal.value === '') {
//     alert('A minute value is required');
//   }
//   else if (secVal.value === '') {
//     alert('A second value is required');
//   }
//   return true;
// }

function submit() {
  if (validate().value === true) {
  newActivity.classList.remove('reveal');
  newActivity.classList.add('hidden');
  timerBox.classList.remove('hidden');
  timerBox.classList.add('reveal');
  }
}

function charCheck(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}

