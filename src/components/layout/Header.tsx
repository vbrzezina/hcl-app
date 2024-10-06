import { Layout } from 'antd';
import { createStyles } from 'antd-style';
import Title from 'antd/es/typography/Title';

const useStyles = createStyles(({ css, token, responsive }) => ({
  header: css`
    position: sticky;
    display: flex;
    align-items: center;
    background: ${token.colorBgBase};
    box-shadow: ${token.boxShadowTertiary};

    ${responsive.sm} {
      padding-inline: ${token.paddingXL}px;
    }
  `,
}));

const Header = () => {
  const { styles } = useStyles();

  return (
    <Layout.Header className={styles.header}>
      <Title level={4}>App title</Title>
    </Layout.Header>
  );
};

export default Header;
