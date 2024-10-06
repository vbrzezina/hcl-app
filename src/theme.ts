import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    boxShadow: '1px',
    borderRadius: 10,
    colorBorderSecondary: 'rgba(200, 200, 200, .4)',
  },
  components: {
    Typography: {
      titleMarginBottom: 0,
    },
  },
};

export default theme;
