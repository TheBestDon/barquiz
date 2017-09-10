// @flow

import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Header from "Header";
import OptionsPicker from "OptionsPicker";

const tableData = [
  {
    name: "John Smith",
    status: "Employed"
  },
  {
    name: "Randal White",
    status: "Unemployed"
  },
  {
    name: "Stephanie Sanders",
    status: "Employed"
  },
  {
    name: "Steve Brown",
    status: "Employed"
  },
  {
    name: "Joyce Whitten",
    status: "Employed"
  },
  {
    name: "Samuel Roberts",
    status: "Employed"
  },
  {
    name: "Adam Moore",
    status: "Employed"
  }
];

class ResultsTable extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false
    //height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

  handleChange = event => {
    this.setState({ height: event.target.value });
  };

  render() {
    return (
      <div>
        <OptionsPicker />
        <Header message="Recent results" />
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Game Date">Date</TableHeaderColumn>
              <TableHeaderColumn tooltip="Where game happend">
                City
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Place where game happend">
                Venue
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="Name of the host">
                Host
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index + 1}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter adjustForCheckbox={this.state.showCheckboxes} />
        </Table>
      </div>
    );
  }
}

export default ResultsTable;
