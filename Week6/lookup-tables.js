function getPoemTitle(authorUserSelected){

    // lookup table
    const poemTitlesByAuthor = {
        "Dr. Seuss": "Green eggs and ham",
        "Shel Silverstein": "Falling Up",
        "Bill Shakes": "The Phoenix and the Turtle"
    }

    return poemTitlesByAuthor[authorUserSelected];
}

console.log(getPoemTitle("Bill Shakes"));

// another example - more complex data returned

// what actions were performed on xyz day?

const log = {
    "05/13/2024": "Bill wrote another poem",
    "05/12/2024": "Jane went down the rabbit hole",
    "05/11/2024": "Bill stopped writing for a day, yay!"
}


console.log(log['05/13/2024'])
// hard to pull out the user
// hard to pull out action
// formatting could be inserted incorrectly by the user
// "Went on a web surfing joyride - Bill" - different format

const logWithObject = {
  "05/13/2024": { user: "Bill", action: "Wrote another poem" },
  "05/12/2024": { user: "Jane", action: "Went down a research rabbit hole" },
  "05/11/2024": { user: "Bill",
    action: "Stopped Writing for a day? Yay!!!"
  }
};

console.log(logWithObject['05/12/2024'].action)