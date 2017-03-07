var React = require('react');

var Footer = function(props){
  return(
    <div className="footer">
      <a href="https://www.google.com">See more opening this week »</a>
      <hr id="separating-hr"/>
      <button>Get Showtimes »</button>
      <hr />
    </div>
  )
}

module.exports = Footer;
