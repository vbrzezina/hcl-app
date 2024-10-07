import React from 'react';

import { Spin } from 'antd';
import { createStyles } from 'antd-style';

export type LoadingProps = {
  height?: number;
};

const useStyles = createStyles(({ css }, { height }: LoadingProps) => ({
  spinnerContainer: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;

    ${height &&
    css`
      height: ${height}px;
    `}
  `,
}));

const Loader = (props: LoadingProps) => {
  const { styles } = useStyles(props);

  return (
    <div className={styles.spinnerContainer}>
      <Spin />
    </div>
  );
};

export default Loader;
