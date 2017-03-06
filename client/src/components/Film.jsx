var React = require('react');

var Film = React.createClass({
  render: function(){
    return (
      <div className="film">
        <img src="http://i.imgur.com/ybiqAcl.png"/>
        <p>{this.props.title}</p>
        <a href={this.props.link}>Showtimes</a>
      </div>
    );
  },
});

module.exports = Film;
