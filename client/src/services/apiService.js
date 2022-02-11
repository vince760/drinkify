import axios from "axios";
import * as helpers from "./serviceHelpers";

const getRandomDrinks = (data) => {
  const config = {
    method: "GET",
    url: `/node-api/random`,
    data,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchDrinkByAlpha = (alpha) => {
  const config = {
    method: "GET",
    url: `/node-api/alpha/${alpha}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByDrinkName = (name) => {
  const config = {
    method: "GET",
    url: `/node-api/name/${name}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchByIngredient = (ingredient) => {
  const config = {
    method: "GET",
    url: `/node-api/ingredient/${ingredient}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(helpers.onGlobalSuccess)
    .catch(helpers.onGlobalError);
};

const searchById = (id) => {
  const config = {
    method: "GET",
    url: `/node-api/drink-id/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
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
