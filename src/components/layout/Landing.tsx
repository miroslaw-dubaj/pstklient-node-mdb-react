import React, { Component } from 'react';
import * as styles from './Landing.scss';
import classNames from 'classnames/bind';


let classes = classNames(styles.heading, styles.landingInner, styles.darkOverlay, 'text-light');

class Landing extends Component {
  render() {
    return (
    <div className={styles.landing}>
      <div className={classes}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">PSTKlient App</h1>
                <p className="lead">
                  {' '}
                  Create a profile/portfolio, share posts and get help from
                  others
                </p>
                <hr />
                <a href="register.html" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </a>
                <a href="login.html" className="btn btn-lg btn-light">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
