import { CSSProperties, PropsWithChildren } from 'react';

import { BreakpointMapParams, createStyles } from 'antd-style';

type HideProps = {
  up: keyof BreakpointMapParams;
  display?: CSSProperties['display'];
};

const useStyles = createStyles(({ css, responsive }, { up, display = 'inline-block' }: HideProps) => ({
  container: css`
    display: ${display};

    ${responsive[up]} {
      display: none;
    }
  `,
}));

const Hide = ({ children, ...props }: PropsWithChildren<HideProps>) => {
  const { styles } = useStyles(props);

  return <div className={styles.container}>{children}</div>;
};

export default Hide;
