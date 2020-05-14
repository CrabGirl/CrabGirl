import styled from '@emotion/styled';
import bkg from '../../../assets/images/bkg.jpg';

export default styled.div({
  '&#author-page': {
    '.title': {
      position: 'relative',
      marginTop: '136px',

      '.text': {
        fontFamily: 'JI Chubby Caps, sans-serif',
        fontSize: '52px',
        textAlign: 'center',
        marginBottom: '-16px',
        paddingBottom: '42px',
      },

      img: {
        position: 'absolute',
        top: '-174px',
        right: '16px',
        width: '150px',
      },
    },

    '.content-section': {
      fontSize: '22px',
    },

    '.box-title': {
      fontFamily: 'JI Chubby Caps, sans-serif',
      fontSize: '24px',
      margin: '-12px 0 8px',
    },

    '.first-section': {
      display: 'flex',

      '.left': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginRight: '16px',

        '.tiddlywinks': {
          position: 'relative',
          padding: '16px',
          marginBottom: '32px',

          img: {
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '75px',
          },
        },

        '.cred': {
          flex: 1,
          position: 'relative',
          padding: '16px',

          img: {
            position: 'absolute',
            bottom: '5px',
            right: '-23px',
            width: '80px',
          },
        },
      },

      '.right': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '16px',

        '.photo': {
          position: 'relative',
          alignSelf: 'flex-end',
          width: '300px',
          marginBottom: '32px',

          'img.carolyn-photo': {
            height: '300px',
            marginBottom: '-9px',
          },

          'img.camera': {
            position: 'absolute',
            bottom: '-18px',
            left: '-62px',
            width: '75px',
          },
        },

        '.art': {
          flex: 1,
          position: 'relative',
          padding: '16px',

          img: {
            position: 'absolute',
            top: '-16px',
            right: '9px',
            height: '75px',
          },
        },
      },
    },

    '.quest-container': {
      position: 'relative',
      marginBottom: '100px',

      '.quest': {
        padding: '16px',

        'div:last-child': {
          marginTop: '16px',
        },

        img: {
          position: 'absolute',
          bottom: '-10px',
          right: '-2px',
          width: '180px',
        },
      },
    },

    '.mobile': {
      display: 'none',
    },

    '@media (max-width: 600px)': {
      '.title': {
        marginTop: '65px',

        '.text': {
          fontSize: '32px',
          lineHeight: '40px',
          padding: 0,
          margin: '0 0 15px',
        },

        img: {
          top: '-94px',
          width: '75px',
        },
      },

      '.first-section, .quest-container': {
        display: 'none',
      },

      '.mobile': {
        display: 'block',

        '.photo': {
          position: 'relative',
          marginBottom: '32px',

          'img.carolyn-photo': {
            height: 'initial',
            maxWidth: '100%',
            marginBottom: '-9px',
          },

          'img.camera': {
            position: 'absolute',
            bottom: '-18px',
            left: '-18px',
            width: '75px',
          },
        },

        '.art, .cred, .quest, .tiddlywinks': {
          position: 'relative',
          padding: '16px',
          marginBottom: '32px',

          '.box-title': {
            textAlign: 'center',
          },
        },

        '.tiddlywinks': {
          '.img-wrapper': {
            display: 'block',
            textAlign: 'right',
            marginBottom: '-9px',

            img: {
              width: '75px',
              marginBottom: '-12px',
            },
          },
        },

        '.quest': {
          '.img-wrapper': {
            display: 'block',
            textAlign: 'center',
            marginBottom: '-14px',

            img: {
              width: '180px',
            },
          },
        },

        '.art': {
          '.img-wrapper': {
            display: 'block',
            textAlign: 'right',
            marginBottom: '-14px',
            marginRight: '6px',

            img: {
              height: '80px',
            },
          },
        },

        '.cred': {
          paddingBottom: '40px',

          '.img-wrapper': {
            img: {
              position: 'absolute',
              bottom: '-42px',
              left: '10px',
              height: '80px',
            },
          },
        },
      },
    },
  },
});
