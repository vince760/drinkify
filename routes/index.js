const express = require("express");
const router = express.Router();
const {
  getRandomDrink,
  getDrinkByAlpha,
  getDrinkByName,
  getDrinkByIngredient,
  getDrinkById,
} = require("../services/drinkService");

//Get random on page load
router.get("/node-api/random", async function (req, res, next) {
  await getRandomDrink()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("RESPONSE NOT GOOD", err);
    });
});

// Get Drink By Alphacharacter
router.get("/node-api/alpha/:alpha", async function (req, res, next) {
  console.log(req.params.alpha);
  const alpha = req.params.alpha;
  await getDrinkByAlpha(alpha)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("RESPONSE NOT GOOD", err);
    });
});

// Get Drink By Name
router.get("/node-api/name/:name", async function (req, res, next) {
  console.log(req.params.name);
  const name = req.params.name;
  await getDrinkByName(name)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("RESPONSE NOT GOOD", err);
    });
});

// Get Drink By Ingredient
router.get("/node-api/ingredient/:ingredient", async function (req, res, next) {
  console.log(req.params.ingredient);
  const ingredient = req.params.ingredient;
  await getDrinkByIngredient(ingredient)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("RESPONSE NOT GOOD", err);
    });
});

router.get("/node-api/drink-id/:id", async function (req, res, next) {
  console.log(req.params.id);
  const id = req.params.id;
  await getDrinkById(id)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      console.log("RESPONSE NOT GOOD", err);
    });
});

module.exports = router;
