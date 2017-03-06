var React = require('react');
var Film = require('./Film.jsx');

var FilmList = React.createClass({
  render: function(){

    var filmNodes = this.props.films.map(function(film){
      return <Film key={film.id} title={film.title} link={film.link} />
    });

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    );
  },
});

module.exports = FilmList;
