import { CSSProperties, PropsWithChildren } from 'react';

import { BreakpointMapParams, createStyles } from 'antd-style';

type ShowProps = {
  up: keyof BreakpointMapParams;
  display?: CSSProperties['display'];
};

const useStyles = createStyles(({ css, responsive }, { up, display = 'inline-block' }: ShowProps) => ({
  container: css`
    display: none;

    ${responsive[up]} {
      display: ${display};
    }
  `,
}));

export const Show = ({ children, ...props }: PropsWithChildren<ShowProps>) => {
  const { styles } = useStyles(props);

  return <div className={styles.container}>{children}</div>;
};
