import React from "react";
import One from "../asset/card1.jpg";
import Two from "../asset/cards2.jpg";
import Three from "../asset/card3.jpg";
import Four from "../asset/card1.jpg";

export default function AboutComponent() {
  return (
    <div className='about hide-on-small-only'>
      <h4 className='font'>
          <b>Now Connected.</b>
        </h4>
      <div className='row'>
        
        <div className='col s12 m3'>
          <img className='responsive-img' src={One} alt='bg' width='150px' />
          <h5 className='font'>Experience</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>Check up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Two} alt='bg' width='150px' />
          <h5 className='font'>Ability</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>Level Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Three} alt='bg' width='150px' />
          <h5 className='font'>Access</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>Rise Up.</b>
          </h6>
        </div>
        <div className='col s12 m3'>
          <img className='responsive-img' src={Four} alt='bg' width='150px' />
          <h5 className='font'>Reward</h5>
          <p className='para'>
          In recent years, the world has changed dramatically, with online teaching creating a virtual revolution in the world of education.
          </p>
          <h6>
            <b>Cash Up.</b>
          </h6>
        </div>
      </div>
    </div>
  );
}