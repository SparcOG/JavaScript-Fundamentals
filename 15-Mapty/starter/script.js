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
        this._moveToPopup(e);
        this._editPopap(e);
      }.bind(this)
    );
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
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <button class="edit__button workout--${workout.type}" data-id="${
      workout.id
    }">Edit wrout</button>
    <button class="delete__button workout--${workout.type}" data-id="${
      workout.id
    }">Delete wrout</button>
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
          </li>`;

    form.insertAdjacentHTML('afterend', html);

    // for (let span of document.querySelectorAll('[data-unit]')) {
    //   // вставить соответствующую информацию в поле
    //   let field = span.getAttribute('data-unit');
    //   console.log(field);
    // }
  }

  _moveToPopup(event) {
    const workoutEl = event.target.closest('.workout');
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _editPopap(event) {
    const btn = event.target.closest('.edit__button');
    const workoutId = btn.dataset.id;
    const workout = this.#workouts.find(workout => workout.id === workoutId);

    const newDistance = parseFloat(prompt('Введите новое расстояние:'));
    if (!isNaN(newDistance)) {
      workout.distance = newDistance;
    }

    const newDuration = parseFloat(prompt('Введите новую продолжительность:'));
    if (!isNaN(newDuration)) {
      workout.duration = newDuration;
    }

    if (workout instanceof Running) {
      const newCadence = parseInt(prompt('Введите новую каденцию:'));
      if (!isNaN(newCadence)) {
        workout.cadence = newCadence;
      }
    } else if (workout instanceof Cycling) {
      const newElevation = parseInt(prompt('Введите новое усиление высоты:'));
      if (!isNaN(newElevation)) {
        workout.elevationGain = newElevation;
      }
    }

    this._setLocalStorage();
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

console.log(`Пока закончил дальше нужно удалить тренировку, есть примеры`);

// const newDistance = new Object(prompt('Введите новое расстояние:'));
// this._renderWorkout(newDistance);
// const newDistance = workout.distance;
// workout.distance = newDistance;
// console.log(newDistance);
// console.log(workout.distance);
