export const dashboardStyles = {
  drawer: {
    width: 320,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 320,
      boxSizing: 'border-box',
      backgroundColor: '#0D3B66',
      color:'#E0E6EE'
    },
    '& .Mui-selected': {
      color: 'green'
    },
  },
  icons: {
    color:'#E0E6EE',
    marginLeft: '20px'
  },
  text: {
    '& span': {
      marginLeft: '-10px',
      fontWeight: '600',
      fontsize: '16px'
    }
  }
};
