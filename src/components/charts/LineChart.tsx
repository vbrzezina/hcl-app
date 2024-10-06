import dynamic from 'next/dynamic';
import React from 'react';

import { Spin } from 'antd';
import { createStyles } from 'antd-style';

export type HomeExampleProps = {
  data: unknown[];
  xField: string;
  yField: string;
  height?: number;
};

const useStyles = createStyles(({ css }, { height }: HomeExampleProps) => ({
  chartContainer: css`
    position: relative;
    overflow: hidden;

    ${height &&
    css`
      height: ${height}px;
    `}
  `,
  spinner: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
}));

const LineChart = (props: HomeExampleProps) => {
  const { styles } = useStyles(props);
  const { data, xField, yField } = props;

  // FIXME: @antv/g2 commonjs has ESM dependency which can't be resolved with require()
  const Line = dynamic(async () => (await import('@ant-design/charts')).Line, {
    loading: () => <Spin className={styles.spinner} />,
    ssr: false,
  });

  return (
    <div className={styles.chartContainer}>
      <Line xField={xField} yField={yField} data={data} autoFit={true} />
    </div>
  );
};

export default LineChart;
