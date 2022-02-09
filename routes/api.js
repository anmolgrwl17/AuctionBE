const { Router } = require("express");
const db = require('../database');
const router = Router();

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/auction", async (req, res) => {
  const result = await db.promise().query('SELECT * FROM auction');
  res.status(200).send(result[0]);
});

router.get("/auction/:id", async (req, res) => {
  const id =req.params.id;
  const result = await db.promise().query('SELECT * FROM auction WHERE id = ?', id);
  console.log(id);
  if (result.length === [0])
    res.status(200).send("Invalid id")
  else
    res.status(200).send(result[0]);
});

module.exports = router;