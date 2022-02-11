import axios from 'axios';
import * as helpers from './serviceHelpers';

const getRandomDrinks = (data) => {
  const config = {
    method: 'GET',
    url: `/random`,
    data,
    crossdomain: true,
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchDrinkByAlpha = (alpha) => {
  const config = {
    method: 'GET',
    url: `/alpha/${alpha}`,
    crossdomain: true,
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByDrinkName = (name) => {
  const config = {
    method: 'GET',
    url: `/name/${name}`,
    crossdomain: true,
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByIngredient = (ingredient) => {
  const config = {
    method: 'GET',
    url: `/ingredient/${ingredient}`,
    crossdomain: true,
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchById = (id) => {
  const config = {
    method: 'GET',
    url: `/drink-id/${id}`,
    crossdomain: true,
    headers: { 'Content-Type': 'application/json' },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

export {
  getRandomDrinks,
  searchDrinkByAlpha,
  searchByDrinkName,
  searchByIngredient,
  searchById,
};
