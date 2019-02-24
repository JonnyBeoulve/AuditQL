import React, { Component } from 'react';
import { GlobalStyle } from '../../theme';

/* This container will list all audits. This will temporarily serve as the main container of
the app until the project is expanded in the future. */
class Audits extends Component {
  render() {
    return (
        <div className="main">
            <GlobalStyle />
            <h1>Audits</h1>
        </div>
    );
  }
}

export default Audits;
