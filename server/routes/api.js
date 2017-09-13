// @flow

import express from "express";
import data from "../testData";

const router = new express.Router();

router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});

module.exports = router;
