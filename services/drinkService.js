const axios = require("axios");
const apiKey = process.env.COCKTAIL_DB_API_KEY;

/* GET RANDOM DRINKS */
async function getRandomDrink() {
  return new Promise((resolve, reject) => {
    let drinkArray = [];
    for (let i = 0; i < 4; i++) {
      axios
        .get("http://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then((response) => {
          drinkArray.push(response.data.drinks[0]);
          if (i === 3) {
            resolve(drinkArray);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

/* GET DRINK BY ALPHA CHARACTER */
async function getDrinkByAlpha(alpha) {
  return new Promise((resolve, reject) => {
    let drinkArray = [];
    for (let i = 0; i < 4; i++) {
      axios
        .get(
          `http://www.thecocktaildb.com/api/json/v1/1/filter.php?${alpha}=Ordinary_Drink`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

/* GET DRINK BY NAME */
async function getDrinkByName(name) {
  return new Promise((resolve, reject) => {
    let drinkArray = [];
    
      axios
        .get(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        .then((response) => {
          resolve(response.data.drinks);
        })
        .catch((err) => {
          reject(err);
        });
    
  });
}

/* GET DRINK BY INGREDIENT */
async function getDrinkByIngredient(ingredient) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .then((response) => {
        console.log(response.data.drinks);
        resolve(response.data.drinks);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

/* GET DRINK BY ID */
async function getDrinkById(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.drinks)
        resolve(response.data.drinks);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

exports.getRandomDrink = getRandomDrink;
exports.getDrinkByAlpha = getDrinkByAlpha;
exports.getDrinkByName = getDrinkByName;
exports.getDrinkByIngredient = getDrinkByIngredient;
exports.getDrinkById = getDrinkById;
