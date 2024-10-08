import dynamic from 'next/dynamic';
import React from 'react';

import { createStyles } from 'antd-style';

import { BarConfig } from '@ant-design/charts';

import { Loader } from '../layout';

// FIXME: @antv/g2 commonjs has ESM dependency which can't be resolved with require()
// It's actually convenient because the chart component otherwise blinks on load before it gets rendered
const Bar = dynamic(async () => (await import('@ant-design/charts')).Bar, {
  loading: () => <Loader />,
  ssr: false,
});

export type BarChartProps = BarConfig & {
  height?: number;
};

const useStyles = createStyles(({ css }, { height }: BarChartProps) => ({
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

export const BarChart = (props: BarChartProps) => {
  const { styles } = useStyles(props);

  return (
    <div className={styles.chartContainer}>
      <Bar {...props} autoFit={true} />
    </div>
  );
};
