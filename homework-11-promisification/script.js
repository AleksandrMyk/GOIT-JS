'use strict';
// 1------------------------------------------------------------------------------
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние 
//"resolved" через ms миллисекунд. Значением исполнившегося промиса 
//должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  
  return new Promise(resolved => {
    setTimeout(() => {
      resolved(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// 2------------------------------------------------------------------------------
//Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию 
//callback, а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false }
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user
    );

    resolve(updatedUsers);
  });
};

const logg = updatedUsers => console.table(updatedUsers);

toggleUserState(users, "Mango").then(logg);
toggleUserState(users, "Lux").then(logg);

// 3------------------------------------------------------------------------------
//Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции 
//onSuccess и onError, а принимала всего один параметр transaction и возвращала проми

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    let id = transaction.id;
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        const result = { id, delay };
        resolve(result);
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
const logSuccess2 = (result) => {
  console.log(`Transaction ${result.id} processed in ${result.delay}ms`);
};
const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess2)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess2)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess2)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess2)
  .catch(logError);