import React, { Component } from "react";
import bg from "../asset/land.png";
import {Link} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
export default class HeaderComponent extends Component {

  render() {
    return (
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={bg} />
        </div>
        <div className='col s12 m6'>
          <h4 className='font'>
            <b>Find your</b>
          </h4>
          <h1 className='title purple-text text-darken-4'>
            Edunati
            <u>
              <span className='teal-text text-accent-3 i-line'>on</span>
            </u>{" "}
          </h1>
          <p className='para'>
          Bringing everything together under one umbrella, to
make the teaching process much easier and more fun for the teachers and the students as well.            <br /> 
          </p>
          <h6 className='font'>
            <b>Join Us Today</b>
          </h6>
          <p className='para'>
            There are many variations tools available.
          </p>
          <Link
            to="/"
            className='btn btn-header white-text text-darken-4 teal accent-3 modal-trigger'
          >
            Get into classroom
          </Link>
        </div>
      </div>
    );
  }
}