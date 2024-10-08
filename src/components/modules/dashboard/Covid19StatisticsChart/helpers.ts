import { LineConfig } from '@ant-design/charts';

import { GetMetricDetailData, MetricTimeSeriesList } from '@/api/ukhsa';

import { COVID19Metrics } from '@/utils/constants';

const getLabel = (record: MetricTimeSeriesList) => {
  switch (record.metric) {
    case COVID19Metrics.CasesByDay:
      return 'Cases by date';
    case COVID19Metrics.AdmissionByDay:
      return 'Admission by day';
    case COVID19Metrics.DeathsONSRegByWeek:
      return 'Deaths ONS by week';
  }
};

export const getCovid19EnglandMetricParams = (
  metric: string,
  params: Pick<GetMetricDetailData, 'pageSize' | 'year'> = {},
): GetMetricDetailData => {
  return {
    theme: 'infectious_disease',
    subTheme: 'respiratory',
    topic: 'COVID-19',
    geographyType: 'Nation',
    geography: 'England',
    metric,
    ...params,
  };
};

export const getCovid19LineChartConfig = (data: MetricTimeSeriesList[]): LineConfig => {
  return {
    data,
    xField: (record: MetricTimeSeriesList) => new Date(record.date),
    yField: 'metric_value',
    colorField: getLabel,
    sizeField: 2,
    axis: {
      x: {
        tickCount: 12,
      },
    },
  };
};
