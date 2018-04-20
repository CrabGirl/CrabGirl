import Styled from "styled-components";

module.exports = Styled.div`
  &.main-page {
    background: linear-gradient(135deg, ${props => props.theme.colors.background2} 25%, transparent 25%) -50px 0, linear-gradient(225deg, ${props => props.theme.colors.background2} 25%, transparent 25%) -50px 0, linear-gradient(315deg, ${props => props.theme.colors.background2} 25%, transparent 25%), linear-gradient(45deg, ${props => props.theme.colors.background2} 25%, transparent 25%);  
    background-size: 100px 100px;
    background-color: ${props => props.theme.colors.background};
    height: 100%;
    user-select: none;

    .title {
      font-size: 64px;
      font-weight: 300;
      color: ${props => props.theme.colors.text};
      text-align: center;
      margin: 25px 0;
      font-family: "Titillium Web", sans-serif;
      text-shadow: 2px 2px ${props => props.theme.colors.textShadow};
    }

    .mode-wrapper {
      position: fixed;
      top: 12px;
      right: 9px;
      cursor: pointer;

      .fa-sun, .fa-moon {
        width: 30px;
        height: 30px;
      }
    }

    .main-image {
      margin: 0 auto;
      max-width: 400px;
      max-height: 400px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 600px;
        border: 10px solid ${props => props.theme.colors.mainImage};
      }
    }

    .footer {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: ${props => props.theme.colors.background};
      padding: 12px 0;

      .flex-item {
        text-align: center;
      }

      .fa-envelope, .fa-twitter {
        width: 30px;
        height: 30px;
      }
    }

    @media (max-width: ${props => props.theme.dimensions.tabletBreakpoint}px) {
      .title {
        font-size: 48px;
        font-weight: 300;
        margin: 25px 0;
      }

      .main-image {
        max-width: 300px;
        max-height: 300px;
      }
    }
  }
`;
