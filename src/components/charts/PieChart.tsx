import dynamic from 'next/dynamic';
import React from 'react';

import { createStyles } from 'antd-style';

import { PieConfig } from '@ant-design/charts';

import { Loader } from '../layout';

// FIXME: @antv/g2 commonjs has ESM dependency which can't be resolved with require()
// It's actually convenient because the chart component otherwise blinks on load before it gets rendered
const Pie = dynamic(async () => (await import('@ant-design/charts')).Pie, {
  loading: () => <Loader />,
  ssr: false,
});

export type PieChartProps = PieConfig & {
  height?: number;
};

const useStyles = createStyles(({ css }, { height }: PieChartProps) => ({
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

export const PieChart = (props: PieChartProps) => {
  const { styles } = useStyles(props);

  return (
    <div className={styles.chartContainer}>
      <Pie {...props} autoFit={true} />
    </div>
  );
};
