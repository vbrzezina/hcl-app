import { Suspense } from 'react';

import { Avatar, Card, Flex, Typography } from 'antd';
import { createStyles } from 'antd-style';

import { CommentOutlined } from '@ant-design/icons';

import { QueryClient } from '@tanstack/react-query';

import { LineChart } from '@/components/charts';
import { Loader } from '@/components/layout';

import { prefetchUseMetricsServiceGetMetricDetail, useMetricsServiceGetMetricDetailSuspense } from '@/api/ukhsa';

import { COVID19Metrics } from '@/utils/constants';

import { getCovid19EnglandMetricParams, getCovid19LineChartConfig } from './helpers';

export const prefetchCovid19StatisticsChartData = async (queryClient: QueryClient, year: number) => {
  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getCovid19EnglandMetricParams(COVID19Metrics.CasesByDay, { pageSize: 365, year }),
  );

  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getCovid19EnglandMetricParams(COVID19Metrics.AdmissionByDay, { pageSize: 365, year }),
  );

  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getCovid19EnglandMetricParams(COVID19Metrics.DeathsONSRegByWeek, { pageSize: 53, year }),
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

type Covid19StatisticsChartProps = {
  height: number;
  year: number;
};

const Covid19StatisticsChartContent = ({ height, year }: Covid19StatisticsChartProps) => {
  const { data: covidCasesByDay } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.CasesByDay, { pageSize: 365, year }),
  );
  const { data: covidAdmissionByDay } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.AdmissionByDay, { pageSize: 365, year }),
  );
  const { data: covidDeathsONSRegByWeek } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.DeathsONSRegByWeek, { pageSize: 53, year }),
  );

  const data = [...covidCasesByDay.results, ...covidAdmissionByDay.results, ...covidDeathsONSRegByWeek.results];

  return (
    <>
      <LineChart height={height} {...getCovid19LineChartConfig(data)} />
    </>
  );
};

export const Covid19StatisticsChart = (props: Covid19StatisticsChartProps) => {
  const { styles } = useStyles();

  return (
    <Card title="COVID-19 cases by day">
      <Suspense fallback={<Loader height={props.height} />}>
        <Covid19StatisticsChartContent {...props} />
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
