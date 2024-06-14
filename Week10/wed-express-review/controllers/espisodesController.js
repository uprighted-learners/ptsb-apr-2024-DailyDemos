const episodes = [
  {
    title: "The Haunted Mask",
    season: 1,
    episode_number: 1,
    air_date: "1995-10-27",
    synopsis:
      "Carly Beth Caldwell buys a Halloween mask from a mysterious store. She soon discovers that the mask has a life of its own and begins to turn her into a monster.",
    cast: [
      "Kathryn Long as Carly Beth Caldwell",
      "Colin Fox as The Shopkeeper",
      "Kathryn Short as Sabrina",
    ],
    director: "Timothy Bond",
    writer: "R.L. Stine (novel), Eric Weinthal (teleplay)",
  },
  {
    title: "Say Cheese and Die",
    season: 1,
    episode_number: 3,
    air_date: "1995-11-08",
    synopsis:
      "Greg Banks finds an old camera that seems to predict bad events in the future through its photographs. When he realizes the power of the camera, he must figure out a way to stop its curse.",
    cast: [
      "Ryan Gosling as Greg Banks",
      "Renessa Blitz as Shari Walker",
      "Calvin Patterson as Doug Arthur",
    ],
    director: "Ron Oliver",
    writer: "R.L. Stine (novel), Rick Drew (teleplay)",
  },
  {
    title: "Night of the Living Dummy II",
    season: 1,
    episode_number: 10,
    air_date: "1996-01-12",
    synopsis:
      "Amy Kramer is given a ventriloquist dummy named Slappy. When strange things start happening, Amy begins to suspect that Slappy is responsible for the mayhem.",
    cast: [
      "Maggie Castle as Amy Kramer",
      "Hayden Christensen as Brad",
      "Caterina Scorsone as Sara Kramer",
    ],
    director: "Ron Oliver",
    writer: "R.L. Stine (novel), Dan Angel (teleplay), Billy Brown (teleplay)",
  },
];

const searchEpisodes = (req, res) => {
  const query = req.query;

  const episodeFound = episodes.find(
    (x) =>
      x.season.includes(query.season) && x.title.includes(query.titleContains)
  );

  res.json(episodeFound);
};

module.export = {
  searchEpisodes,
};
