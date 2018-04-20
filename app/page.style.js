import Styled from "styled-components";

module.exports = Styled.div`
  &.main-page {
    background: #2C3E50;
    height: 100%;

    .title {
      font-size: 64px;
      font-weight: 300;
      color: #ecf0f1;
      text-align: center;
      margin: 25px 0;
      font-family: "Titillium Web", sans-serif;
      text-shadow: 2px 2px #7f8c8d;
    }

    .main-image {
      margin: 0 auto;
      max-width: 400px;
      max-height: 400px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 600px;
        border: 10px solid #34495e;
      }
    }
  }
`;
