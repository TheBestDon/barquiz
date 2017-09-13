import React, { Component } from "react";
import MyComponent from "./component";

class MyContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          id: 1,
          categoryName: "Business/Company",
          contestName: "Cognitive Building Bricks"
        },
        {
          id: 2,
          categoryName: "Magazine/Newsletter",
          contestName: "Educating people about sustainable food production"
        },
        {
          id: 3,
          categoryName: "Software Component",
          contestName: "Big Data Analytics for Cash Circulation"
        },
        {
          id: 4,
          categoryName: "Website",
          contestName: "Free programming books"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MyComponent games={this.state.games} />
      </div>
    );
  }
}

export default MyContainer;
