import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    boxShadow: '1px',
    borderRadius: 10,
    colorBorderSecondary: 'rgba(200, 200, 200, .4)',
    colorPrimary: '#00857b',
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
    },
    Button: {
      borderRadius: 5,
      defaultShadow: 'none',
      primaryShadow: 'none',
    },
  },
};

export default theme;
