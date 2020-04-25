import styled from '@emotion/styled';
import bkg from '../../../assets/images/bkg.jpg';

export default styled.div({
  '&#author-page': {
    '.title': {
      position: 'relative',
      marginTop: '100px',

      '.text': {
        fontFamily: 'JI Chubby Caps, sans-serif',
        fontSize: '60px',
        textAlign: 'center',
        marginBottom: '-16px',
        paddingBottom: '50px',
      },

      img: {
        position: 'absolute',
        top: '-104px',
        left: 0,
        width: '100px',
        height: '100px',
      },
    },

    '.carolyn': {
      img: {
        width: '100%',
        marginBottom: '-8px',
      },
    },

    '.border-box:not(.carolyn)': {
      padding: '16px',
    },

    '.smaller-content-section': {
      '&:last-of-type': {
        marginBottom: '64px',
      },
    },
  },
});
