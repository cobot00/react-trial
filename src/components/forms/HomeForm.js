import React from 'react';
import Button from '@material-ui/core/Button';

import {SessionContext} from 'session/session-context.js';

export class HomeForm extends React.Component {
  render() {
    return (
      <SessionContext.Consumer>
        {(context) => (
          <div style={{marginLeft: '20px'}}>
            <h2>ホーム</h2>

            <div style={{marginLeft: '20px', width: '600px'}}>
              <h3 style={{marginBottom: '5px'}}>環境変数</h3>

              <div style={{marginLeft: '5px'}} className='enclosed-area'>
                <div style={{marginBottom: '10px'}}>
                  <b>process.env.NODE_ENV:</b> {process.env.NODE_ENV}
                </div>

                <div style={{marginBottom: '10px'}}>
                  <b>process.env.REACT_APP_API_URL:</b> {process.env.REACT_APP_API_URL}
                </div>
              </div>
            </div>

            { context.authenticated ? <Button variant="contained" color="primary" onClick={context.logout} style={{marginTop: '30px'}} >Logout</Button> : null }
          </div>
        )}
      </SessionContext.Consumer>
    );
  }
}
