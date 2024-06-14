const express = require("express");
const { searchEpisodes } = require("../controllers/espisodesController");

const router = express.Router();

router.get("/search", searchEpisodes);

module.exports = router;
