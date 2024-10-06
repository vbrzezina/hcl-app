import { PropsWithChildren } from 'react';

import { Layout } from 'antd';
import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token, responsive }) => ({
  wrapper: css`
    padding-inline: ${token.paddingXL}px;

    ${responsive.sm} {
      padding: 0;
    }
  `,
  main: css`
    display: flex;
    flex-direction: column;
    padding: ${token.paddingXL}px;
  `,
}));

const Main = ({ children }: PropsWithChildren) => {
  const { styles } = useStyles();

  return (
    <Layout className={styles.wrapper}>
      <Layout.Content className={styles.main}>{children}</Layout.Content>
    </Layout>
  );
};

export default Main;
