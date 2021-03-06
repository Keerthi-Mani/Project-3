import React from "react";
import "./WeatherForm.css";

const Form = props => {
  return (
    <div>
       <h1 className="Wheader large text-primary">Weather</h1>
      <div className="container h-100">
        <form onSubmit={props.loadweather}>
          <div>{props.error ? error() : ""}</div>
          <div className="row">
            <div className="col-md-3 offset-md-2">
              <input
                type="text"
                className="form-control"
                placeholder="City, State(code)"
                name="city"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
              <button className="btn-weather btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
