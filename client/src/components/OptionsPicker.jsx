// @flow

import React, { Component } from "react";
import DatePicker from "material-ui/DatePicker";
import DropDownMenu from "material-ui/DropDownMenu";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

const items = [];
for (let i = 0; i < 100; i++) {
  items.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

class OptionsPicker extends Component {
  state = {
    autoOk: true,
    value: 10
  };

  handleChange = (event, index, value) => this.setState({ value });

  render() {
    return (
      <div className="options-picker">
        <div className="date-picker">
          <DatePicker autoOk={this.state.autoOk} hintText="Game Date" />
        </div>
        <div className="city-picker">
          <DropDownMenu
            maxHeight={300}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {items}
          </DropDownMenu>
        </div>
        <div className="host-picker">
          <DropDownMenu
            maxHeight={300}
            value={this.state.value}
            onChange={this.handleChange}
          >
            {items}
          </DropDownMenu>
        </div>
        <div className="find-button">
          <RaisedButton label="Find" primary={true} />
        </div>
      </div>
    );
  }
}

export default OptionsPicker;
