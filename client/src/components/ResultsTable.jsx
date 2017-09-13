// @flow

import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

const ResultsTable = ({ games, config }) => (
  <Table
    height={config.height}
    fixedHeader={config.fixedHeader}
    fixedFooter={config.fixedFooter}
    selectable={config.selectable}
    multiSelectable={config.multiSelectable}
  >
    <TableHeader
      displaySelectAll={config.showCheckboxes}
      adjustForCheckbox={config.showCheckboxes}
      enableSelectAll={config.enableSelectAll}
    >
      <TableRow>
        <TableHeaderColumn tooltip="Game Date">Date</TableHeaderColumn>
        <TableHeaderColumn tooltip="Where game happend">City</TableHeaderColumn>
        <TableHeaderColumn tooltip="Place where game happend">
          Venue
        </TableHeaderColumn>
        <TableHeaderColumn tooltip="Name of the host">Host</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody
      displayRowCheckbox={config.showCheckboxes}
      deselectOnClickaway={config.deselectOnClickaway}
      showRowHover={config.showRowHover}
      stripedRows={config.stripedRows}
    >
      {games.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{index + 1}</TableRowColumn>
          <TableRowColumn>{row.categoryName}</TableRowColumn>
          <TableRowColumn>{row.contestName}</TableRowColumn>
          <TableRowColumn>{row.contestName}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

ResultsTable.propTypes = {
  games: PropTypes.array.isRequired,
  config: PropTypes.object.isRequired
};

export default ResultsTable;
