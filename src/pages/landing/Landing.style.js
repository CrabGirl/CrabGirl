import styled from '@emotion/styled';

export default styled.div({
  '&#landing-page': {
    height: '100%',
    overflowY: 'auto',
    background: 'linear-gradient(135deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(225deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(315deg,#34495E 25%,transparent 25%),linear-gradient(45deg,#34495E 25%,transparent 25%)',
    backgroundSize: '100px 100px',
    backgroundColor: '#2C3E50',

    img: {
      border: '6px solid #555555',
      background: 'darkgrey',
      width: '800px',
      margin: '0 200px',
    },

    '.content-section': {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
    },
  },
});
