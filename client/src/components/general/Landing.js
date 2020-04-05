import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const Landing = () => {
  return (
    <main className='landing'>
      <Navbar />

      <div className='landing'>
        <section className='hero'>
          <div className='container'>
            <h1>Some sort of Tagline Here</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              convallis, metus sit amet finibus placerat, lacus sapien laoreet
              risus, quis porta ligula ipsum sit amet erat. Quisque et feugiat
              turpis. Mauris tincidunt nunc quam, in dictum.
            </p>
            <Link to='/register' className='button'>
              Sign Up for Free
            </Link>
          </div>
        </section>
        <section className='is-bright'>
          <div className='container'>
            <div className='benefits-wrapper'>
              <figure>
                <h3>Header here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus convallis, metus sit amet finibus placerat, lacus
                  sapien laoreet risus, quis porta ligula ipsum.
                </p>
              </figure>
              <figure>
                <h3>Header here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus convallis, metus sit amet finibus placerat, lacus
                  sapien laoreet risus, quis porta ligula ipsum.
                </p>
              </figure>
              <figure>
                <h3>Header here</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus convallis, metus sit amet finibus placerat, lacus
                  sapien laoreet risus, quis porta ligula ipsum.
                </p>
              </figure>
            </div>
          </div>
        </section>
      </div>

      <Footer />

    </main>
  );
};

export default Landing;
