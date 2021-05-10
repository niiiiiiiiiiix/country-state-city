const express = require("express");
const country = express.Router();
const ctrl = require("../controllers/country.controller");

country.get("/", async (req, res, next) => {
  try {
    const countries = await ctrl.getAllCountries(next);
    res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
});

country.get("/:name", async (req, res, next) => {
  try {
    const countries = await ctrl.getSpecificCountry(req.params.name, next);
    res.status(200).json(countries);
  } catch (error) {
    next(error);
  }
});

module.exports = country;
