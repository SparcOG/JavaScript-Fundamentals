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
  newStoreWorkouts = [];

  constructor() {
    // this.reset();
    // this.#workouts = [];
    this._renderDeleteAllWorkoutButton();
    const deleteAllBtn = document.querySelector('.delete-all-btn');

    // Get user's posotion
    this._getPosition();

    //Get data from local storage
    this._getLocalStorage();

    // Render workout delete all button

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener(
      'click',
      function (e) {
        if (e.target.classList.contains('delete__button')) {
          this._deleteWorkout(e);
        }
        if (e.target.classList.contains('edit__button')) {
          this._editPopap(e);
        }
        this._moveToPopup(e);
      }.bind(this)
    );
    // deleteAllBtn.addEventListener('click', this.reset.bind(this));
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
      console.log(work);
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
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    workout.marker = L.marker(workout.coords)
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
    console.log(workout);
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

  _renderDeleteAllWorkoutButton() {
    let htmlDeleteAll = `<button class="delete-all-btn">
    Удалить все тренировки
  </button>`;

    containerWorkouts.insertAdjacentHTML('beforebegin', htmlDeleteAll);
  }

  _moveToPopup(event) {
    const workoutEl = event.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    if (!workout || !workout.coords) return;

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    this._setLocalStorage();
  }

  _editPopap(event) {
    const btn = event.target.closest('.workout');

    if (!btn) return;

    const workoutButton = this.#workouts.find(
      work => work.id === btn.dataset.id
    );

    // Запросить у пользователя новое значение
    const newDistance = parseFloat(prompt('Введите новое расстояние:'));
    workoutButton.distance = newDistance;

    const newDuration = parseFloat(prompt('Введите новую продолжительность:'));
    workoutButton.duration = newDuration;

    let newCadence;
    if (workoutButton.type === 'running') {
      newCadence = parseInt(prompt('Введите новую каденцию:'));
      workoutButton.cadence = newCadence;
    }

    let newElevGain;
    if (workoutButton.type === 'cycling') {
      newElevGain = parseInt(prompt('Введите новое усиление высоты:'));
      workoutButton.elevationGain = newElevGain;
    }

    const workoutElement = event.target.closest('.workout');
    console.log(workoutElement);

    // Get all the elements with class workout__value
    const workoutValues = workoutElement.querySelectorAll('.workout__value');
    console.log(workoutValues);

    for (let i = 0; i < workoutValues.length; i++) {
      // The first element is for distance
      if (i == 0) {
        workoutValues[i].textContent = newDistance;
      }

      // The second element is for duration
      else if (i == 1) {
        workoutValues[i].textContent = newDuration;
      } else if (i == 3 && workoutButton.type === 'running') {
        workoutValues[i].textContent = newCadence;
      } else if (i == 3 && workoutButton.type === 'cycling') {
        workoutValues[i].textContent = newElevGain;
      }
    }

    this._setLocalStorage();
  }

  _deleteWorkout(event) {
    const workoutElement = event.target.closest('.workout');

    if (!workoutElement) return;

    const workoutId = workoutElement.dataset.id;
    const workout = this.#workouts.find(workout => workout.id === workoutId);

    if (!workout) return;

    this.#workouts = this.#workouts.filter(workout => workout.id !== workoutId);

    if (workout.marker) {
      this.#map.removeLayer(workout.marker);
    }

    workoutElement.remove();
  }

  // _setLocalStorage() {
  //   const replacer = (key, value) => {
  //     if (typeof value === 'array' && value !== null) {
  //       if (this.newStoreWorkouts.includes(value)) {
  //         return '[Circular]';
  //       }
  //       this.newStoreWorkouts.push(value);
  //     }
  //     return value;
  //   };

  //   localStorage.setItem('workouts', JSON.stringify(this.#workouts, replacer));
  // }
  // _setLocalStorage() {
  //   const newStoreWorkouts = [];
  //   const replacer = (key, value) => {
  //     if (Array.isArray(value) && value !== null) {
  //       if (newStoreWorkouts.includes(value)) {
  //         return '[Circular]';
  //       }
  //       newStoreWorkouts.push(value);
  //     }
  //     return value;
  //   };

  //   localStorage.setItem(
  //     'workouts',
  //     JSON.stringify(newStoreWorkouts, replacer)
  //   );
  // }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  // _getLocalStorage() {
  //   const data = JSON.parse(localStorage.getItem('workouts'));
  //   console.log(typeof this.#workouts);

  //   if (!data) return;

  //   this.#workouts = data;

  //   this.#workouts.forEach(work => {
  //     this._renderWorkout(work);
  //   });
  // }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }
  // _getLocalStorage() {
  //   const workoutsArray = [...this.#workouts];
  //   const data = JSON.parse(localStorage.getItem('workoutsArray'));
  //   console.log(typeof this.#workouts);
  //   console.log(typeof workoutsArray);

  //   if (Array.isArray(data)) {
  //     // Проверяем, является ли data массивом
  //     this.#workouts = data;

  //     this.#workouts.forEach(work => {
  //       this._renderWorkout(work);
  //     });
  //   } else {
  //     console.log('Данные в localStorage не являются массивом');
  //   }
  // }

  // if (data) {
  //   data.forEach(workoutData => {
  //     let workout;
  //     if (workoutData.type === 'running') {
  //       workout = new Running(...Object.values(workoutData));
  //     } else if (workoutData.type === 'cycling') {
  //       workout = new Cycling(...Object.values(workoutData));
  //     }
  //     // Добавьте новую тренировку в массив тренировок приложения и отобразите ее на карте и в списке
  //     this.#workouts.push(workout);
  //     this._renderWorkoutMarker(workout);
  //     this._renderWorkout(workout);
  //   });
  // }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

console.log(
  `Пока у меня конкретная незадача, я нашел методы которые решают мои проблемы, но они приводят к другим более сложним, переработать методы вретли уже получится, нужно какое то промежуточное действие, нужно подумать о другом подходе...`
);

// const newDistance = new Object(prompt('Введите новое расстояние:'));
// this._renderWorkout(newDistance);
// const newDistance = workout.distance;
// workout.distance = newDistance;
// console.log(newDistance);
// console.log(workout.distance);
// const workout = new Running([39, -12], 5.2, 24, 178);
// if (!'coords' in workout) return;
