import styled from '@emotion/styled';
import bkg from '../../../assets/images/bkg.jpg';

export default styled.div({
  '&#author-page': {
    '.title': {
      position: 'relative',
      marginTop: '100px',

      '.text': {
        fontFamily: 'JI Chubby Caps, sans-serif',
        fontSize: '52px',
        textAlign: 'center',
        marginBottom: '-16px',
        paddingBottom: '42px',
      },

      img: {
        position: 'absolute',
        top: '-104px',
        right: '16px',
        width: '100px',
        height: '100px',
      },
    },

    '.content-section': {
      fontSize: '22px',
    },

    '.first-section': {
      display: 'flex',
      flexDirection: 'row',

      '.border-box:first-of-type': {
        borderRightWidth: 0,
      },
    },

    '.carolyn': {
      img: {
        width: '320px',
        marginBottom: '-10px',
      },
    },

    '.border-box:not(.back-box):not(.carolyn)': {
      padding: '16px',
    },

    '.second-section': {

      '.border-box:first-of-type': {
        borderBottomWidth: 0,
      },
    },

    '.content-section': {
      '&:last-of-type': {
        marginBottom: '64px',
      },
    },

    '@media (max-width: 600px)': {
      '.title': {
        '.text': {
          fontSize: '36px',
          lineHeight: '32px',
          marginBottom: '-20px',
        },
      },

      '.first-section': {
        display: 'block',

        '.border-box:first-of-type': {
          borderRightWidth: '6px',
          marginBottom: '32px',

          img: {
            width: '100%',
            marginBottom: '-10px',
          },
        },
      },

      '.second-section': {
        display: 'block',

        '.border-box:first-of-type': {
          borderBottomWidth: '6px',
          marginBottom: '32px',
        },
      },
    },
  },
});
