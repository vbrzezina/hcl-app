import dynamic from 'next/dynamic';
import React from 'react';

import { createStyles } from 'antd-style';

import { LineConfig } from '@ant-design/charts';

import Loader from '../layout/Loader';

// FIXME: @antv/g2 commonjs has ESM dependency which can't be resolved with require()
// It's actually convenient because the chart component otherwise blinks on load before it gets rendered
const Line = dynamic(async () => (await import('@ant-design/charts')).Line, {
  loading: () => <Loader />,
  ssr: false,
});

export type HomeExampleProps = LineConfig & {
  height?: number;
};

const useStyles = createStyles(({ css }, { height }: HomeExampleProps) => ({
  chartContainer: css`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    ${height &&
    css`
      height: ${height}px;
    `}
  `,
}));

const LineChart = (props: HomeExampleProps) => {
  const { styles } = useStyles(props);

  return (
    <div className={styles.chartContainer}>
      <Line {...props} autoFit={true} />
    </div>
  );
};

export default LineChart;
