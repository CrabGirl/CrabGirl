import styled from '@emotion/styled';

export default styled.div({
  '&.layout': {
    'header': {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      backgroundColor: '#2C3E50',
      height: '50px',
      borderBottom: '2px solid #34495E',

      '.name': {
        fontSize: '32px',
        fontWeight: 300,
        lineHeight: '47px',
        color: '#ECf0F1',
        fontFamily: 'Titillium Web, sans-serif',
        textShadow: '2px 2px #7F8C8D',
        marginLeft: '12px',
      },
    },

    '.standard-page': {
      height: 'calc(100% - 50px)',
      overflowY: 'auto',
      background: 'linear-gradient(135deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(225deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(315deg,#34495E 25%,transparent 25%),linear-gradient(45deg,#34495E 25%,transparent 25%)',
      backgroundSize: '100px 100px',
      backgroundColor: '#2C3E50',
      marginTop: '52px',
    },

    '.content-section': {
      maxWidth: '1200px',
      width: '100%',
      margin: '0 auto',
    },
  },
});
