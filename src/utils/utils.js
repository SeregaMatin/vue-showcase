export const isEmptyObject = function isEmptyObject(object) {
  let key;

  // Here for-in loop is the fastest solution, so we need to turn off 'no-restricted-syntax' rule.
  // eslint-disable-next-line no-restricted-syntax
  for (key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      return false;
    }
  }

  return true;
};

export const getRandomInt = function getRandomInt(min, max) {
  const intMin = Math.ceil(min);
  const intMax = Math.floor(max);

  return Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
};

export const getRandomArrayItems = function getRandomArrayItems(array, count) {
  const result = [];
  if (!Array.isArray(array) || count <= 0) {
    return result;
  }

  // Shuffle array and take specified items count.
  // Such implementation with sorting is unefficient for big arrays, but it's fine for a small chunks of test data.
  return array.sort(() => Math.random() - Math.random()).slice(0, count);
};

export const getRandomObjectItems = function getRandomObjectItems(object, count) {
  const result = [];
  if (isEmptyObject(object) || count <= 0) {
    return result;
  }

  const randomObjectKeys = getRandomArrayItems(Object.keys(object), count);
  randomObjectKeys.forEach((randomObjectKey) => {
    const randomObjectItem = object[randomObjectKey];

    result.push(randomObjectItem);
  });

  return result;
};

export const arrayToObject = function arrayToObject(array, keyPropertyName) {
  const result = {};
  if (!Array.isArray(array)) {
    return result;
  }

  let i;
  const count = array.length;
  for (i = 0; i < count; i++) {
    const currentArrayItem = array[i];
    const key = `${currentArrayItem[keyPropertyName]}`;

    result[key] = currentArrayItem;
  }

  return result;
};

export const objectToArray = function objectToArray(object) {
  if (!object) {
    return [];
  }

  return Object.values(object);
};

export const formatNumber = function formatNumber({ number, thousandsSeparator = ',' }) {
  const numberParts = `${number}`.split('.');
  numberParts[0] = numberParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

  return numberParts.join('.');
};
