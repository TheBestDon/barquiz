// @flow

import React from "react";
import ResultsTableContainer from "ResultsTableContainer";
import OptionsPicker from "OptionsPicker";
import Header from "Header";
import MyContainer from "../../../playground/container";

const HomePage = () => {
  return (
    <div id="ResultsPreview">
      <OptionsPicker />
      <Header message="Recent results" />

      {/* <MyContainer /> */}

      <ResultsTableContainer />
    </div>
  );
};

export default HomePage;
