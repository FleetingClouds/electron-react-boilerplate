// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

import { Link } from 'react-router-dom';

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div>

        <nav className="navbar navbar-inverse visible-xs">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Logo</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Dashboard</a></li>
                <li><a href="#">Age</a></li>
                <li><a href="#">Gender</a></li>
                <li><a href="#">Geo</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-fluid">
          <div className="row content">
            <div className="col-sm-3 sidenav hidden-xs">
              <br/>
              <h1>Iridium Blue</h1>
              <h2>Facturacion Electronica</h2>
              <ul className="nav nav-pills nav-stacked">
                <li><a href="#section1">Dashboard</a></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/upload">Upload</Link></li>
                <li><Link to="/counter">Counter</Link></li>
              </ul>
            </div>

            <div class="clearfix visible-xs"></div>
            <div className="col-sm-9">
              {this.props.children}
            </div>
          </div>
        </div>

      </div>

    );
  }
}
