'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1; // this is not working
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}"/>
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
        data.languages
      )}</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }
      </p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryAndNeihbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 1
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};
getCountryAndNeihbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
});
*/

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders;
//       console.log(data);

//       if (!neighbour && undefined) throw new Error('No neighbour found!');
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour} `,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       console.log(data);

//       const neighbour = 'sdfsdfsdfb';

//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥💥`); // this is not working
//       renderError(`Something went wrong 💥💥💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// Задача по кодировани. Перевести координаты в название города

// const whereAmI = function (lat, lng) {
//   return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok || response.status === 403)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       const [city, country] = [data.city, data.country];
//       getCountryData(country);
//       console.log(`You are in ${city}, ${country}`);
//     })
//     .catch(err => {
//       console.error(`${err.message} 💥💥💥💥)`);
//     });
// };

// const coordinates1 = whereAmI(52.508, 13.381);
// // const coordinates2 = whereAmI(19.037, 72.873);
// // const coordinates3 = whereAmI(-33.933, 18.474);
// getCountryData(coordinates1);

/// Jonas solution
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥)`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//////////////258. The Event Loop in Practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

//259. Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds'));

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

//////////////////////////////////////////////////
// 260. Promisifying the Geolocation API
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found ${res.status}`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥)`));
// };

// btn.addEventListener('click', whereAmI);

// // 261. Coding Challenge #2
const imgContainer = document.querySelector('.images');
let currentImg;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  console.log(imgPath);
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.classList.add('parallel');

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// createImage(imagePath1)
//   .then(img => {
//     console.log('Изображение успешно загружено', img);
//     currentImg = img;
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage(imagePath2);
//   })
//   .then(img => {
//     console.log('2 зображение успешно загружено', img);
//     currentImg = img;
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// // return new Promise(function (resolve, reject) {
// //   const newImage = document.createElement('img');
// //   newImage.loading = function () {
// //     document.querySelector('images').appendChild(img);
// //     resolve();
// //   };
// //   newImage.error = reject;
// //   newImage.src = imgPath;
// // })
// // createImage('img/img-1.jpg')

// console.log(
//   'Задание 2. Создать функцию которая будет загружать изображения последовательно, через 2 секунды после загрузки первого изображения.'
// );
// // createImage('img/img-1.jpg');
////////////////////////////////////////////////////////
// // 262. Consuming Promises with Async/Await
////////////////////////////////////////////////////////
// // 263. Error Handling With try...catch
////////////////////////////////////////////////////////
// // 264. Returning Values from Async Functions
/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();

    // Country data

    //  fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => {
    //   console.log(res);
    // });
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1: Will get location');
// const city = whereAmI();
// console.log('FIRST');
// console.log(city);
// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💥`));
// console.log('3: Finished getting location');

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message} 💥`);
  }
  console.log('3: Finished getting location');
})();
*/
////////////////////////////////////////////////////////
// 265. Running Promises in Parallel
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

    Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err);
  }
};

get3Countries('ukraine', 'usa', 'germany');
*/
////////////////////////////////////////////////////////
//266. Other Promise Combinators: race, allSettled and any
/*
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/ukraine`),
    getJSON(`https://restcountries.com/v3.1/name/usa`),
    getJSON(`https://restcountries.com/v3.1/name/germany`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/ukraine`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/
////////////////////////////////////////////////////////
// 267. Coding Challenge #3
// old version
// createImage(imagePath1)
//   .then(img => {
//     console.log('Изображение успешно загружено', img);
//     currentImg = img;
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage(imagePath2);
//   })
//   .then(img => {
//     console.log('2 зображение успешно загружено', img);
//     currentImg = img;
//   })
//   .then(() => wait(2))
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const imagePath1 = 'img/img-1.jpg';
// const imagePath2 = 'img/img-2.jpg';
// const loadNPause = async function () {
//   try {
//     // Load image 1
//     let img = await createImage(imagePath1);
//     console.log('Image 1 loaded', img);
//     await wait(2);
//     img.style.display = 'none';

//     // Load image 2
//     img = await createImage(imagePath2);
//     console.log('Image 2 loaded', img);
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

// loadNPause();

// Part two

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr.map(imgPath => createImage(imgPath)));
    console.log(imgs);
    console.log('All images loaded successfully!');
    return imgs;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
