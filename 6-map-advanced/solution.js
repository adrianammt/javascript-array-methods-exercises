const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below

const movieTitels = tvShows.map((element) => {
  return element.title;
});
console.log(movieTitels);

const titleAndRatings = tvShows.map((element) => {
  const title = element.title;
  const rating = element.rating;
  return `${title}, ${rating}`;
});
console.log(titleAndRatings);

const conditionalMovieTitels = tvShows.map((element) => {
  const title = element.title;
  const rating = element.rating;
  if (rating >= 9) {
    return element.title.toUpperCase();
  } else {
    return element.title.toLowerCase();
  }
});
console.log(conditionalMovieTitels);
