import styled from '@emotion/styled';
import bkg from '../../../assets/images/bkg.jpg';

export default styled.div({
  '&#landing-page': {
    height: '100%',
    overflowY: 'auto',
    background: 'linear-gradient(135deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(225deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(315deg,#34495E 25%,transparent 25%),linear-gradient(45deg,#34495E 25%,transparent 25%)',
    backgroundSize: '100px 100px',
    backgroundColor: '#2C3E50',

    '.title': {
      position: 'relative',
      border: '9px solid #191C1F',
      background: `url(${bkg})`,
      backgroundSize: '3px',
      marginTop: '75px',

      span: {
        display: 'block',
        fontFamily: 'JI Chubby Caps, sans-serif',
        fontSize: '96px',
        lineHeight: '100px',
        height: '100px',
        textAlign: 'center',
        paddingBottom: '50px',
      },

      img: {
        position: 'absolute',
        top: '-75px',
        left: 0,
        width: '100px',
        height: '100px',
      },
    },

    '.content-section': {
      maxWidth: '800px',
      width: 'calc(100% - 64px)',
      margin: '0 auto',
      padding: '32px',
    },

    '@media (min-width: 800px)': {
      '.title': {
        marginTop: '150px',

        img: {
          top: '-150px',
          left: '10px',
          width: '200px',
          height: '200px',
        },
      },
    },

    '@media (max-width: 800px)': {
      '.title': {
        span: {
          fontSize: '64px',
          lineHeight: '48px',
          height: '48px',
          paddingBottom: '32px',
        }
      },

      '.content-section': {
        width: 'calc(100% - 32px)',
        padding: '16px',
      },
    },

    '@media (max-width: 500px)': {
      '.title': {
        span: {
          fontSize: '32px',
          lineHeight: '40px',
          height: '40px',
          paddingBottom: '18px',
        },
      },
    },
  },
});
