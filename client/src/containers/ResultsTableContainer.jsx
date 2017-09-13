import React, { Component } from "react";
import axios from "axios";
import ResultsTable from "ResultsTable";
import data from "../../../server/testData.json";

class ResultsTableContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: true,
        selectable: false,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        height: "300px"
      },
      games: []
    };
  }

  componentDidMount = () => {
    axios
      .get("public_api/games")
      .then(resp => {
        this.setState({
          games: resp.data.games
        });
      })
      .catch(console.error);
  };

  componentWillUnmount = () => {
    //clean timers, listiners
  };

  render() {
    return <ResultsTable config={this.state.config} games={this.state.games} />;
  }
}

export default ResultsTableContainer;
