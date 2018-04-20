import DayColors from "./colors/day";
import Dimensions from "./dimensions";
import FaMoon from "@fortawesome/fontawesome-free-solid/faMoon";
import FaSun from "@fortawesome/fontawesome-free-solid/faSun";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import NightColors from "./colors/night";
import React from "react";
import Style from "./page.style";
import { FlexGrid, FlexItem } from "flex-item";
import { ThemeProvider, withTheme } from "styled-components";

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "night"
    };
  }

  changeMode() {
    let theme = this.state.theme;
    if(theme === "day") {
      theme = "night";
    } else {
      theme = "day";
    }

    this.setState({
      spin: true,
      theme: theme
    });
  }

  render() {
    const theme = {
      dimensions: Dimensions
    };
    if(this.state.theme === "night") {
      theme["colors"] = NightColors;
    } else {
      theme["colors"] = DayColors;
    }

    let icon = FaSun;
    if(this.state.theme === "night") {
      icon = FaMoon;
    }

    return(
      <ThemeProvider theme={theme}>
        <Style className="main-page">
          <div className="mode-wrapper" onClick={() => this.changeMode()}>
            <FontAwesomeIcon icon={icon} fixedWidth color={theme.colors.text}/>
          </div>
          <FlexGrid>
            <FlexItem>
              <div className="title">Carolyn Hoffert</div>
              <div className="main-image">
                <img src="/images/main2.jpg"/>
              </div>
            </FlexItem>
          </FlexGrid>
        </Style>
      </ThemeProvider>
    );
  }
}

module.exports = withTheme(Page);
