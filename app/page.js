import React from "react";
import Style from "./page.style";
import { FlexGrid, FlexItem } from "flex-item";

class Page extends React.Component {
  render() {
    return(
      <Style className="main-page">
        <FlexGrid>
          <FlexItem>
            <div className="title">Carolyn Hoffert</div>
            <div className="main-image">
              <img src="/images/main2.jpg"/>
            </div>
          </FlexItem>
        </FlexGrid>
      </Style>
    );
  }
}

module.exports = Page;
