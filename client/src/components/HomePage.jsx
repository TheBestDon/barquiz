// @flow

import React from "react";
import ResultsTableContainer from "ResultsTableContainer";
import OptionsPicker from "OptionsPicker";
import Header from "Header";

const HomePage = () => {
  return (
    <div id="ResultsPreview">
      <OptionsPicker />
      <Header message="Recent results" />
      <ResultsTableContainer />
    </div>
  );
};

export default HomePage;
