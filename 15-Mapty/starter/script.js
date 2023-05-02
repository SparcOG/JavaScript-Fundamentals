'use strict';
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date = ...
    // this.id = ...
    this.coords = coords; // [Lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = 'cycling'
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);

/////////////////////////////////////////////////
///// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
// const editButton = document.querySelector('#editt');

class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 13;

  constructor() {
    // Get user's posotion
    this._getPosition();

    //Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener(
      'click',
      function (e) {
        this._editpopap(e);
        this._moveToPopup(e);
      }.bind(this)
    );
    // myEditButton.forEach(button => {
    //   button.addEventListener('click', e => {
    //     // Call the _editpopap method from the App class
    //     this._editpopap(e);
    //   });
    // });
  }

  // this._moveToPopup.bind(this)
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude}, ${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    console.log(workout);

    // Check if data valid

    // If workout running, create ranning object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (!allPositive(distance, duration, elevation))
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    const editButton = document.querySelectorAll('.edit__button');
    // другой код
    window.myEditButton = editButton;
    let html = `
    <button class="edit__button workout--${workout.type} data-numberWorkout="${
      workout.numberWorkout
    }">Редактировать</button>
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
     <h2 class="workout__title">${workout.description}</h2>
       <div class="workout__details">
         <span class="workout__icon">${
           workout.type === 'running' ? '🏃‍♂️' : '🚴'
         }</span>
          <span class="workout__value data-unit="km"">${workout.distance}</span>
         <span class="workout__unit">km</span>
       </div>
       <div class="workout__details">
         <span class="workout__icon">⏱</span>
         <span class="workout__value data-unit="min"">${workout.duration}</span>
         <span class="workout__unit">min</span>
       </div>`;

    if (workout.type === 'running')
      html += `
         <div class="workout__details">
           <span class="workout__icon">⚡️</span>
           <span class="workout__value">${workout.pace.toFixed(1)}</span>
           <span class="workout__unit">min/km</span>
         </div>
         <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
           <span class="workout__value">${workout.cadence}</span>
           <span class="workout__unit">spm</span>
         </div>
     </li>`;

    if (workout.type === 'cycling')
      html += `
         <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
          </li> -->`;

    form.insertAdjacentHTML('afterend', html);

    // for (let span of document.querySelectorAll('[data-unit]')) {
    //   // вставить соответствующую информацию в поле
    //   let field = span.getAttribute('data-unit');
    //   console.log(field);
    // }
  }

  _moveToPopup(event) {
    // const workoutEl = event.target.closest('.workout');
    // console.log(workoutEl);
    const btn = event.target.closest('.edit__button');
    console.log(btn);

    if (!btn) return;

    // if (!workoutEl) return;

    // const workouttss = this.#workouts.find(
    //   work => work.id === workoutEl.dataset.id
    // );

    const workoutButton = this.#workouts.find(
      work => work.numberWorkout === btn.dataset.numberWorkout
    );

    // this.#map.setView(workout.coords, this.#mapZoomLevel, {
    //   animate: true,
    //   pan: {
    //     duration: 1,
    //   },
    // });
    // console.log(workouttss);
    console.log(workoutButton);
    // console.log(workoutButton)
    this._editpopap(workoutButton);
    // using the public interface
    // workout.click();
  }

  _editpopap(workoutButton) {
    console.log(workoutButton.id);
    // Получить элемент тренировки из DOM
    const workoutElement = document.querySelector(
      `[data-numberWorkout="${workoutButton.id}"]`
    );
    console.log(workoutElement);

    if (!workoutElement) {
      return;
    }

    // Запросить у пользователя новое значение
    const newDistance = prompt('Введите новое расстояние:');
    if (!newDistance) {
      return;
    }

    const newDuration = prompt('Введите новую продолжительность:');
    if (!newDuration) {
      return;
    }
    let newCadence;
    if (workoutButton.type === 'running') {
      newCadence = prompt('Введите новую каденцию:');
      if (!newCadence) {
        return;
      }
    }

    let newElevGain;
    if (workoutButton.type === 'cycling') {
      newElevGain = prompt('Введите новое усиление высоты:');
      if (!newElevGain) {
        return;
      }
    }

    // Get all the elements with class workout__value
    const workoutValues = workoutElement.querySelectorAll('.workout__value');

    for (let i = 0; i < workoutValues.length; i++) {
      // The first element is for distance
      if (i == 0) {
        workoutValues[i].textContent = newDistance;
      }

      // The second element is for duration
      else if (i == 1) {
        workoutValues[i].textContent = newDuration;
      } else if (i == 2 && workoutButton.type === 'running') {
        workoutValues[i].textContent = newCadence;
      } else if (i == 3 && workoutButton.type === 'cycling') {
        workoutValues[i].textContent = newElevGain;
      }

      // Обновить локальное хранилище
    }
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

console.log(
  `Проблема с получением идетификатора тренировки он неизвестный, не получается обратится по id, нужно подумать как его получить`
);

// const newDistance = new Object(prompt('Введите новое расстояние:'));
// this._renderWorkout(newDistance);
// const newDistance = workout.distance;
// workout.distance = newDistance;
// console.log(newDistance);
// console.log(workout.distance);
