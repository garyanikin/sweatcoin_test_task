import React, { Component } from "react";
import Container from "./Container";

import styled from "styled-components";

class App extends Component<any, any> {
  render() {
    return (
      <div className={this.props.className}>
        <Container/>
      </div>
    );
  }
}

const StyledApp = styled(App)`
  width: 314px;
  margin: 20px auto;
`;

export default StyledApp;
