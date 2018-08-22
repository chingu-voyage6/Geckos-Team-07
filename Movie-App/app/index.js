var React = require('react');
var ReactDOM = require('react-dom');
var iPadimg = require('../public/iPadProWhite.png');
var iPhoneimg = require('../public/iphone.png')
var moviePoster1 =require('../public/1.png');
var moviePoster2 =require('../public/2.png');
var moviePoster3 =require('../public/3.png');
var moviePoster4 =require('../public/4.png');
var moviePoster5 =require('../public/5.png');
var moviePoster6 =require('../public/6.png');
var moviePoster7 =require('../public/7.png');
var moviePoster8 =require('../public/8.png');
require('./index.css');


class App extends React.Component {
  render() {
    return (
    <div className='container'>
      <header className="header">
        <nav>
          <a href='#' className='logo'>movies.</a>
            <ul className='desktop'>
              <li><a href='#'> Features</a></li>
              <li><a href='#'> Pricing</a></li>
              <li><a href='#'> Sign Up / Log In</a></li>
            </ul>
            <div className = 'mobile'>
              <label htmlFor='toggle'>&#9776;</label>
              <input type='checkbox' id='toggle' />
              <ul>
                <li><a href='#'> Features</a></li>
                <li><a href='#'> Pricing</a></li>
                <li><a href='#'> Sign Up / Log In</a></li>
              </ul>
            </div>
        </nav>
        <p id='h1'>Stream Any Movie at  AnyTime with No Individulal Movie Costs or Rental Fees.</p>
        <div className='btnGroup'>
          <a href='#' className='btnWhite'>try it free</a>
          <div className='whiteBG'></div>
        </div>
        <p>Thousands of movies with <strong>no rental fees</strong>. Our <br/>monthly plan gives you unlimited access to our<br/> movies library</p>
        <p><strong>Forget the theaters</strong>! Exclusive access  to <br/>movies in theaters on release date.</p>
        <img src={iPadimg} alt='iPad' className='iPad' />
        <img src={iPhoneimg} alt='iPhone' className='iPhone' />
      </header>
      <div className='new4kMovies'>
        <div className='sectionTitle'>
          <strong id='h2'>new 4k movies</strong>
          <a href="#" className='btnGreen'><strong>view more</strong></a>
        </div>
        <ul>
          <li><a href='#'><img src={moviePoster1} /></a></li>
          <li><a href='#'><img src={moviePoster2} /></a></li>
          <li><a href='#'><img src={moviePoster3} /></a></li>
          <li><a href='#'><img src={moviePoster4} /></a></li>
        </ul>
        <ul>
          <li><a href='#'><img src={moviePoster5} /></a></li>
          <li><a href='#'><img src={moviePoster6} /></a></li>
          <li><a href='#'><img src={moviePoster7} /></a></li>
          <li><a href='#'><img src={moviePoster8} /></a></li>
        </ul>
      </div>
      <div className='callToAction'>
        <p id='h1'>Watch Your Favourite Movies and Explore Similar Titles. Get Started Today for <span>$5.99</span>/month</p>
        <a href='#' className='btnColor'>get started</a>
      </div>
      <footer>
        <div className='copy'>
          <a href='#' className='logo'>movies.</a>
          <p>©2018 Movie Website LLC.-<span>Aamir</span></p>
        </div>
        <ul>
          <li><a href='#'>Account</a></li>
          <li><a href='#'>Help Center</a></li>
          <li><a href='#'>Terms</a></li>
          <li><a href='#'>Privacy</a></li>
        </ul>
      </footer>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
