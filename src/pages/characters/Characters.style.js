import styled from '@emotion/styled';
import bkg from '../../../assets/images/bkg.jpg';

export default styled.div({
  '&#characters-page': {
    '.title': {
      position: 'relative',
      marginTop: '65px',

      '&.synopsis-title': {
        marginTop: 0,
      },

      '.text': {
        fontFamily: 'JI Chubby Caps, sans-serif',
        fontSize: '52px',
        textAlign: 'center',
        marginBottom: '-16px',
        paddingBottom: '42px',
      },
    },

    '.content-section': {
      fontSize: '22px',

      '&.character-section': {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',

        '> div:first-child': {
          marginRight: '32px',
        },

        '.character-bio': {
          flex: 1,
          padding: '16px',
        },

        '.character-photo': {
          padding: '32px',

          img: {
            maxWidth: '175px',
          },
        },
      },
    },

    '.synopsis': {
      '.border-box': {
        padding: '16px',
        marginBottom: '64px',
      },
    },

    '@media (max-width: 600px)': {
      '.title': {
        marginTop: '65px',

        '.text': {
          fontSize: '24px',
          lineHeight: '38px',
          padding: 0,
          margin: '0 0 12px',
        },
      },

      '.content-section.character-section': {
        '> div:first-child': {
          marginRight: 0,
        },

        '.character-bio, .character-photo': {
          marginRight: 0,
          margin: '16px 0',
        },

        '.character-bio': {
          order: 2,
        },

        '.character-photo': {
          flex: 1,
          order: 1,
          textAlign: 'center',
        },
      },
    },
  },
});
