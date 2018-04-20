import Styled from "styled-components";

module.exports = Styled.div`
  &.main-page {
    background: ${props => props.theme.colors.background};
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
  }
`;
