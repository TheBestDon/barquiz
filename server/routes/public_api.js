import express from "express";
import { MongoClient } from "mongodb";
import assert from "assert";
import config from "config";

let mdb;
MongoClient.connect(config.dbUri, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

const router = new express.Router();

router.get("/games", (req, res) => {
  let games = {};
  mdb
    .collection("games")
    .find({})
    .project({
      id: 1,
      city: 1,
      gameDate: 1,
      venueName: 1,
      hostName: 1
    })
    .each((err, game) => {
      assert.equal(null, err);

      if (!game) {
        res.send(games);
        return;
      }
      games[game.id] = game;
    });
});

module.exports = router;
