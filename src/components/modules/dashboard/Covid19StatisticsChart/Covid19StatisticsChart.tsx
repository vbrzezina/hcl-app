import { Suspense } from 'react';

import { Avatar, Card } from 'antd';

import { QueryClient } from '@tanstack/react-query';

import LineChart from '@/components/charts/LineChart';
import Loader from '@/components/layout/Loader';

import {
  GetMetricDetailData,
  prefetchUseMetricsServiceGetMetricDetail,
  useMetricsServiceGetMetricDetailSuspense,
} from '@/api/ukhsa';

import { COVID19Metrics } from '@/utils/constants';

import { getCovid19EnglandMetricParams, getCovid19LineChartConfig } from './helpers';

export const prefetchCovid19StatisticsChartData = async (
  queryClient: QueryClient,
  params: Pick<GetMetricDetailData, 'pageSize' | 'year'> = {},
) => {
  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getCovid19EnglandMetricParams(COVID19Metrics.AdmissionByDay, params),
  );

  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getCovid19EnglandMetricParams(COVID19Metrics.OccupiedBedsByDay, params),
  );

  await prefetchUseMetricsServiceGetMetricDetail(
    queryClient,
    getCovid19EnglandMetricParams(COVID19Metrics.PCRcountByDay, params),
  );
};

type Covid19StatisticsChartProps = {
  height: number;
} & Pick<GetMetricDetailData, 'pageSize' | 'year'>;

const Covid19StatisticsChartContent = ({ height, ...params }: Covid19StatisticsChartProps) => {
  const { data: covidCasesByDay } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.CasesByDay, params),
  );
  const { data: covidAdmissionByDay } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.AdmissionByDay, params),
  );
  const { data: covidPCRcountByDay } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.PCRcountByDay, params),
  );
  const { data: covidOccupiedBedsByDay } = useMetricsServiceGetMetricDetailSuspense(
    getCovid19EnglandMetricParams(COVID19Metrics.OccupiedBedsByDay, params),
  );

  const data = [
    ...covidCasesByDay.results,
    ...covidAdmissionByDay.results,
    ...covidOccupiedBedsByDay.results,
    ...covidPCRcountByDay.results,
  ];

  return (
    <>
      <LineChart height={height} {...getCovid19LineChartConfig(data)} />
    </>
  );
};

export const Covid19StatisticsChart = (props: Covid19StatisticsChartProps) => {
  return (
    <Card title="Covid-19 England National Statistic">
      <Suspense fallback={<Loader height={props.height} />}>
        <Covid19StatisticsChartContent {...props} />
      </Suspense>
      <Card.Meta
        style={{ alignItems: 'center' }}
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      />
    </Card>
  );
};

export default Covid19StatisticsChart;
