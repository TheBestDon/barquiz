import express from "express";
import data from "../testData";

const router = new express.Router();

router.get("/games", (req, res) => {
  res.send({ games: data.contests });
});

module.exports = router;
