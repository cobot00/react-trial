import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit.js';
import DeleteIcon from '@material-ui/icons/Delete.js';

export class ListForm extends React.Component {
  constructor(props) {
    super();

    const records = Array(100).fill(0).map((_, index) => {
      const n = index + 1;
      return {id: n, label: `X${n}`};
    });

    this.state = {
      records: records
    };
  }

  onClickCreate() {
    const records = this.state.records;
    const lastRecord = records[records.length - 1];
    const newId = lastRecord.id + 1;
    const record = {id: newId, label: `X${newId}`};
    records.push(record);

    this.setState({
      records: records
    });
  }

  onClickUpdate(id) {
    console.log('[onClickUpdate] id: ' + id);
  }

  onClickDelete(id) {
    const records = this.state.records;
    const index = records.findIndex((r) => r.id === id);
    if (index < 0) return;
    records.splice(index, 1);

    this.setState({
      records: records
    });
  }

  render() {
    return (
      <div>
        <h2>リスト表示</h2>

        <div>
          <ul className="flex-container" >
            <li>
              <div>
                {this.state.records.length}件
              </div>
            </li>

            <li className="right-justified-item">
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => this.onClickCreate()}
                style={{marginRight: '30px'}}
              >
                Create
              </Button>
            </li>
          </ul>
        </div>

        <FixedHeaderTable
          rows={this.state.records}
          updateAction={(id) => this.onClickUpdate(id)}
          deleteAction={(id) => this.onClickDelete(id)}
        />
      </div>
    );
  }
}

const FixedHeaderTable = (props) => {
  const rows = props.rows || [];
  const updateAction = props.updateAction;
  const deleteAction = props.deleteAction;

  return (
    <div style={{height: '400px', overflow: 'scroll', marginBottom: '30px'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="sticky-head">id</TableCell>
            <TableCell className="sticky-head">label</TableCell>
            <TableCell className="sticky-head">action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.label}</TableCell>
              <TableCell>
                <button onClick={() => updateAction(row.id)} className="cell-button" style={{marginRight: '30px'}}>
                  <EditIcon color="primary" fontSize="small" />
                </button>

                <button onClick={() => deleteAction(row.id)} className="cell-button">
                  <DeleteIcon color="secondary" fontSize="small" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

FixedHeaderTable.propTypes = {
  rows: PropTypes.array,
  updateAction: PropTypes.func,
  deleteAction: PropTypes.func
};
