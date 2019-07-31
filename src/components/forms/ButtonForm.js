import React from 'react';
import Button from '@material-ui/core/Button';

export const ButtonForm = () => {
  return (
    <div>
      <h2>Materila-UI Buttons</h2>

      <div className="block-margin">
        <h3>Contained Buttons</h3>

        <Button variant="contained" color="default" style={{marginRight: '20px'}}>default</Button>
        <Button variant="contained" color="primary" style={{marginRight: '20px'}}>primary</Button>
        <Button variant="contained" color="secondary" style={{marginRight: '20px'}}>secondary</Button>
        <Button variant="contained" color="primary" disabled style={{marginRight: '20px'}}>primary</Button>
      </div>

      <div className="block-margin">
        <h3>Outlined Buttons</h3>

        <Button variant="outlined" color="default" style={{marginRight: '20px'}}>default</Button>
        <Button variant="outlined" color="primary" style={{marginRight: '20px'}}>primary</Button>
        <Button variant="outlined" color="secondary" style={{marginRight: '20px'}}>secondary</Button>
        <Button variant="outlined" color="primary" disabled style={{marginRight: '20px'}}>primary</Button>
      </div>

      <div className="block-margin">
        <h3>Small Contained Buttons</h3>

        <Button variant="contained" color="default" size="small" style={{marginRight: '20px'}}>default</Button>
        <Button variant="contained" color="primary" size="small" style={{marginRight: '20px'}}>primary</Button>
        <Button variant="contained" color="secondary" size="small" style={{marginRight: '20px'}}>secondary</Button>
        <Button variant="contained" color="primary" size="small" disabled style={{marginRight: '20px'}}>primary</Button>
      </div>

      <div className="block-margin">
        <h3>Small Outlined Buttons</h3>

        <Button variant="outlined" color="default" size="small" style={{marginRight: '20px'}}>default</Button>
        <Button variant="outlined" color="primary" size="small" style={{marginRight: '20px'}}>primary</Button>
        <Button variant="outlined" color="secondary" size="small" style={{marginRight: '20px'}}>secondary</Button>
        <Button variant="outlined" color="primary" size="small" disabled style={{marginRight: '20px'}}>primary</Button>
      </div>
    </div>
  );
};
