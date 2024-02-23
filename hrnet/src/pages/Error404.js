import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../components/buttons/ValidButton';

function Error404() {

  useEffect(() => {
    document.title = "HRnet - page 404";
  }, []);

    return (
      <section className="page-404">
        <div className="center-text">
          <h1 className="heading">
            <span className="heading__top">404</span>
            <span className="heading__bottom">Page not found</span>
          </h1>
        </div>
        <div className="button-wrapper">
          <NavLink to="/list" style={{ textDecoration: "none" }}>
            <Button text="Home" />
          </NavLink>
        </div>
      </section>
    );
  }
  
  export default Error404;