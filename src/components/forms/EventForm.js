import React from 'react';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

export class EventForm extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonColor: 'default',
      buttonVariant: 'contained'
    };
  }

  onChangeInput(e, key) {
    this.setState({[key]: e.target.value});
  }

  onChangeSelect(e, key) {
    this.setState({[key]: e.target.value});
  }

  onChangeCheckbox(e, key) {
    this.setState({[key]: e.target.checked});
  }

  render() {
    return (
      <div>
        <h2>イベント制御</h2>

        <div>
          <h3>ボタン設定</h3>

          <ul className="flex-container" >
            <li style={{marginRight: '50px'}}>
              <div className="block-margin">
                <label className="item-caption" style={{minWidth: '100px'}}>color</label>

                <Select
                  value={this.state.buttonColor}
                  onChange={(e) => this.onChangeSelect(e, 'buttonColor')}
                  style={{minWidth: '150px'}}
                >
                  <MenuItem value={'default'}>default</MenuItem>
                  <MenuItem value={'primary'}>primary</MenuItem>
                  <MenuItem value={'secondary'}>secondary</MenuItem>
                </Select>
              </div>

              <div>
                <label className="item-caption" style={{minWidth: '100px'}}>variant</label>

                <Select
                  value={this.state.buttonVariant}
                  onChange={(e) => this.onChangeSelect(e, 'buttonVariant')}
                  style={{minWidth: '150px'}}
                >
                  <MenuItem value={'contained'}>contained</MenuItem>
                  <MenuItem value={'outlined'}>outlined</MenuItem>
                  <MenuItem value={'text'}>text</MenuItem>
                </Select>
              </div>
            </li>

            <li>
              <Button
                variant={this.state.buttonVariant}
                color={this.state.buttonColor}
                style={{marginRight: '20px'}}
              >
                {this.state.buttonColor}
              </Button>
            </li>
          </ul>
        </div>

        <div>
          <h3>表示制御</h3>

          <ul className="flex-container" >
            <li style={{marginRight: '50px'}}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.showEdit}
                    onChange={(e) => this.onChangeCheckbox(e, 'showEdit')}
                    color="primary"
                    inputProps={{
                      'aria-label': 'primary checkbox',
                    }}
                  />
                }
                label="名前を入力する"
              />
            </li>

            <li>
              {this.state.showEdit ? <TextField label="名前" value={this.state.edit} /> : null}
            </li>
          </ul>
        </div>

        <SubComponent sex={this.state.sex} />
      </div>
    );
  }
}

const SubComponent = (params) => {
  if (params.sex === 'female') {
    return (
      <div>sub</div>
    );
  } else {
    return null;
  }
};
