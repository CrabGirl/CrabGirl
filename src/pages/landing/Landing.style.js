import styled from '@emotion/styled';

export default styled.div({
  '&#landing-page': {
    '.title': {
      position: 'relative',
      marginTop: '75px',

      '.text': {
        fontFamily: 'JI Chubby Caps, sans-serif',
        fontSize: '84px',
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
          margin: '28px 16px 0',
          verticalAlign: 'top',

          '.the': {
            fontSize: '32px',
            lineHeight: '32px',
            marginTop: '-6px',
            marginLeft: '30px',
          },
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

          '.first': {
            fontSize: '50px',
            fontFamily: 'sans-serif',
          },
        },

        img: {
          position: 'absolute',
          top: '16px',
          right: '-54px',
          height: '250px',
        },
      },
    },

    '.character-section': {
      position: 'relative',


      '.character': {
        marginLeft: '40%',
        width: 'calc(60% - 18px)',

        img: {
          position: 'absolute',
          top: '-100px',
          left: '48px',
          height: '300px',
        },

        '.text': {
          fontSize: '42px',
          padding: '16px',

          '.second-line': {
            textAlign: 'right',
          },
        },
      },
    },

    '.contact-section': {
      position: 'relative',
      marginBottom: '64px',

      '.contact': {
        width: '75%',

        '.text': {
          fontSize: '48px',
          lineHeight: '75px',
          marginBottom: '-5px',
          textAlign: 'center',
        },

        img: {
          position: 'absolute',
          right: 0,
          top: 0,
          width: '32%',
        },
      },
    },

    '@media (min-width: 600px)': {
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

    '@media (max-width: 600px)': {
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
            marginTop: '16px',
            marginBottom: '16px',

            '.the': {
              marginLeft: '16px',
            },
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
            marginTop: 0,
            paddingTop: '52px',
            textAlign: 'center',
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
            textAlign: 'right',
          },
        },
      },

      '.contact-section': {
        marginBottom: '32px',

        '.contact': {
          width: 'calc(100% - 12px)',
          marginTop: 0,
          marginLeft: 0,

          '.text': {
            fontSize: '28px',
            lineHeight: '42px',
            textAlign: 'left',
            paddingLeft: '16px',
          },

          img: {
            position: 'absolute',
            top: '8px',
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
