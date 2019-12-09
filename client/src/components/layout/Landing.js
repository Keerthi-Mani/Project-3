import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import WeatherApp from "../weather/WeatherApp";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <React.Fragment>
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Friends Connector</h1>
          <p className="lead">
            Create a Friends profile/portfolio, share posts and get help from
            other friends
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
    <div className="weather-container">
          <WeatherApp />
    </div>
    </React.Fragment>
    
  );
};

Landing.protoTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAunthenticated: state.auth.isAunthenticated
});

export default connect(mapStateToProps)(Landing);
