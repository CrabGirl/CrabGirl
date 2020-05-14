import styled from '@emotion/styled';

export default styled.div({
  '&.back-section': {
    position: 'relative',

    '.border-box.back-box': {
      position: 'absolute',
      top: '32px',
      left: '32px',
      padding: '8px 10px 8px 32px',

      '.back': {
        fontSize: '18px',
      },

      '.line1': {
        position: 'absolute',
        top: '13px',
        left: '8px',
        width: '12px',
        height: '4px',
        background: 'black',
        borderRadius: '16px',
        transform: 'rotate(135deg)',
      },

      '.line2': {
        position: 'absolute',
        top: '19px',
        left: '8px',
        width: '12px',
        height: '4px',
        background: '#191C1F',
        borderRadius: '16px',
        transform: 'rotate(45deg)',
      },
    },
  },
});
