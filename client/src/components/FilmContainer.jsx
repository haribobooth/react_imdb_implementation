var React = require('react');
var FilmList = require('./FilmList.jsx');

var sampleData = [
  {id: 1, title: "Titanic", link: "https://www.google.com"},
  {id: 2, title: "Avatar", link: "https://www.google.com"},
  {id: 3, title: "Toy Story", link: "https://www.google.com"},
  {id: 4, title: "Pulp Fiction", link: "https://www.google.com"},
];

var FilmContainer = React.createClass({
  render: function(){
    return (
      <div className="film-container">
        <p id="title">UK Opening this week</p>
        <FilmList films={sampleData}/>
        <a href="https://www.google.com">See more opening this week >></a>
        <hr id="separating-hr"/>
        <button>Get Showtimes >></button>
        <hr />
      </div>
    );
  },
});

module.exports = FilmContainer;
