import styled from '@emotion/styled';
import bkg from '../../../assets/images/bkg.jpg';

export default styled.div({
  '&#landing-page': {
    height: '100%',
    overflowY: 'auto',
    background: 'linear-gradient(135deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(225deg,#34495E 25%,transparent 25%) -50px 0,linear-gradient(315deg,#34495E 25%,transparent 25%),linear-gradient(45deg,#34495E 25%,transparent 25%)',
    backgroundSize: '100px 100px',
    backgroundColor: '#2C3E50',

    '.content-section': {
      maxWidth: '800px',
      width: 'calc(100% - 64px)',
      margin: '0 auto',
      padding: '16px 32px',
    },

    '.smaller-content-section': {
      maxWidth: '575px',
      width: 'calc(100% - 64px)',
      margin: '0 auto',
      padding: '16px 32px',
    },

    '.border-box': {
      border: '9px solid #191C1F',
      background: `url(${bkg})`,
      backgroundSize: '3px',
    },

    '.title': {
      position: 'relative',
      marginTop: '75px',

      '.text': {
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

    '.second-section': {
      '.author': {
        display: 'inline-block',
        width: '55%',
        verticalAlign: 'top',

        '.text': {
          display: 'inline-block',
          fontSize: '42px',
          width: 'calc(50% - 32px)',
          lineHeight: '42px',
          margin: '42px 16px 0',
          verticalAlign: 'top',
        },

        img: {
          display: 'inline-block',
          width: 'calc(50% - 32px)',
          margin: '16px',
        },
      },

      '.chapter': {
        position: 'relative',
        display: 'inline-block',
        width: 'calc(45% - 68px)',
        height: '250px',
        marginLeft: '32px',
        verticalAlign: 'top',

        '.text': {
          fontSize: '42px',
          padding: '136px 16px 0',
          lineHeight: '42px',
        },

        img: {
          position: 'absolute',
          top: 0,
          right: '-50px',
          height: '250px',
        },
      },
    },

    '.character-section': {
      position: 'relative',
      marginTop: '64px',

      '.character': {
        marginLeft: '50%',
        width: 'calc(50% - 18px)',

        img: {
          position: 'absolute',
          top: '-128px',
          left: '96px',
          height: '300px',
        },

        '.text': {
          fontSize: '42px',
          padding: '16px',
          textAlign: 'right',
        },
      },
    },

    '.contact-section': {
      position: 'relative',
      marginBottom: '64px',

      '.contact': {
        width: '75%',
        marginTop: '48px',

        '.text': {
          fontSize: '48px',
          lineHeight: '75px',
          marginBottom: '-5px',
          textAlign: 'center',
        },

        img: {
          position: 'absolute',
          right: '0',
          top: '32px',
          width: '32%',
        },
      },
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
      '.border-box': {
        borderWidth: '6px',
      },

      '.title': {
        '.text': {
          fontSize: '64px',
          lineHeight: '48px',
          height: '48px',
          paddingBottom: '32px',
        }
      },

      '.content-section': {
        width: 'calc(100% - 32px)',
        padding: '8px 16px',
      },

      '.smaller-content-section': {
        width: 'calc(62% - 32px)',
        padding: '8px 16px',
      },

      '.second-section': {
        '.author': {
          display: 'block',
          width: 'calc(100% - 12px)',
          maxHeight: '125px',

          img: {
            margin: '16px 16px 8px',
            maxHeight: 'calc(125px - 24px)',
            maxWidth: 'calc(125px - 32px)',
          },

          '.text': {
            fontSize: '28px',
            lineHeight: '24px',
            marginTop: '26px',
          },
        },

        '.chapter': {
          display: 'block',
          width: 'calc(100% - 12px)',
          height: '150px',
          marginLeft: 0,
          marginTop: '16px',

          img: {
            height: '150px',
            right: '-38px',
          },

          '.text': {
            fontSize: '28px',
            lineHeight: '24px',
            marginTop: '26px',
            paddingTop: '52px',
          },
        },
      },

      '.character-section': {
        marginTop: 0,

        '.character': {
          width: 'calc(100% - 12px)',
          height: '125px',
          marginLeft: 0,

          img: {
            top: 0,
            left: '-24px',
            height: '125px',
          },

          '.text': {
            fontSize: '28px',
            lineHeight: '24px',
            marginTop: '36px',
          },
        },
      },

      '.contact-section': {
        marginBottom: '32px',
        '.contact': {
          width: '62%',
          marginTop: 0,
          marginLeft: 0,

          '.text': {
            fontSize: '28px',
            lineHeight: '42px',
          },

          img: {
            position: 'absolute',
            top: 0,
            right: '10%',
            width: '30%',
          },
        },
      },
    },

    '@media (max-width: 500px)': {
      '.title': {
        '.text': {
          fontSize: '32px',
          lineHeight: '40px',
          height: '40px',
          paddingBottom: '18px',
        },
      },
    },
  },
});
