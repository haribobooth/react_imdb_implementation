var React = require('react');
var FilmList = require('./FilmList.jsx');
var Footer = require('./Footer.jsx');

var sampleData = [
  {id: 1, title: "Titanic", link: "https://www.google.com"},
  {id: 2, title: "Avatar", link: "https://www.google.com"},
  {id: 3, title: "Toy Story", link: "https://www.google.com"},
  {id: 4, title: "Pulp Fiction", link: "https://www.google.com"},
  {id: 5, title: "Ant-Man", link: "https://www.google.com"},
  {id: 6, title: "John Wick", link: "https://www.google.com"},
];

var FilmContainer = React.createClass({
  render: function(){
    return (
      <div className="film-container">
        <p id="title">UK Opening this week</p>
        <FilmList films={sampleData}/>
        <Footer />
      </div>
    );
  },
});

module.exports = FilmContainer;
