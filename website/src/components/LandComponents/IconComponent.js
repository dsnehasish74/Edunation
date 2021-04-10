import React from "react";
import Aone from "../asset/land.png";
import Atwo from "../asset/land.png";
import Athree from "../asset/land.png";
import Afour from "../asset/land.png";

export default function IconComponent() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Aone} alt='bg' width='150px' />
          <h5 className='font'>Community</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Atwo} alt='bg' width='150px' />
          <h5 className='font'>Books</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Athree} alt='bg' width='150px' />
          <h5 className='font'>Backpacks</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
        <div className='col s12 m6'>
          <img className='responsive-img' src={Afour} alt='bg' width='150px' />
          <h5 className='font'>Events</h5>
          <p className='para'>
           In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>You're inside.</b>
          </h6>
        </div>
      </div>
    </div>
  );
}