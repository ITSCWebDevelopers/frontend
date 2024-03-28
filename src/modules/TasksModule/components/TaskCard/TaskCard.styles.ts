export const styles: Styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },

  main: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',

    '&>*': {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
  },

  panel: {
    display: 'flex',
    justifyContent: 'stretch',
    gap: '30px',

    '&>*': {
      flex: '1 1 auto',
    },
  },

  address: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
};
