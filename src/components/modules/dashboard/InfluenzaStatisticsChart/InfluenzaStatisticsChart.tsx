import { Suspense } from 'react';

import { Avatar, Card, Flex, Typography } from 'antd';
import { createStyles } from 'antd-style';

import { CommentOutlined } from '@ant-design/icons';

import { QueryClient } from '@tanstack/react-query';

import { LineChart } from '@/components/charts';
import { Loader } from '@/components/layout';

import { prefetchUseMetricsServiceGetMetricDetail, useMetricsServiceGetMetricDetailSuspense } from '@/api/ukhsa';

import { InfluenzaMetrics } from '@/utils/constants';

import { getInfluenzaEnglandMetricParams, getInfluenzaLineChartConfig } from './helpers';

export const prefetchInfluenzaStatisticsChartData = async (queryClient: QueryClient, year: number) => {
  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getInfluenzaEnglandMetricParams(InfluenzaMetrics.TestingPositivityByWeek, { pageSize: 1000, year }),
  );
};

const useStyles = createStyles(({ css }) => ({
  meta: css`
    align-items: center;

    .ant-card-meta-avatar {
      width: 100%;
    }
  `,
  icon: css`
    font-size: 20px;
  `,
}));

type InfluenzaStatisticsChartProps = {
  height: number;
  year: number;
};

const InfluenzaStatisticsChartContent = ({ height, year }: InfluenzaStatisticsChartProps) => {
  const { data: testingPositivityByWeek } = useMetricsServiceGetMetricDetailSuspense(
    getInfluenzaEnglandMetricParams(InfluenzaMetrics.TestingPositivityByWeek, { pageSize: 1000, year }),
  );

  return (
    <>
      <LineChart height={height} {...getInfluenzaLineChartConfig(testingPositivityByWeek.results)} />
    </>
  );
};

export const InfluenzaStatisticsChart = (props: InfluenzaStatisticsChartProps) => {
  const { styles } = useStyles();

  return (
    <Card title="Influenza testing positivity by week">
      <Suspense fallback={<Loader height={props.height} />}>
        <InfluenzaStatisticsChartContent {...props} />
      </Suspense>
      <Card.Meta
        className={styles.meta}
        avatar={
          <Flex justify="space-between">
            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            <Flex>
              <Typography className={styles.icon}>
                3 <CommentOutlined />
              </Typography>
            </Flex>
          </Flex>
        }
      />
    </Card>
  );
};
