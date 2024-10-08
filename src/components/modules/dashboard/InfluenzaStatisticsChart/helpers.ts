import { LineConfig } from '@ant-design/charts';

import { GetMetricDetailData, MetricTimeSeriesList } from '@/api/ukhsa';

export const getInfluenzaEnglandMetricParams = (
  metric: string,
  params: Pick<GetMetricDetailData, 'pageSize' | 'year'> = {},
): GetMetricDetailData => {
  return {
    theme: 'infectious_disease',
    subTheme: 'respiratory',
    topic: 'Influenza',
    geographyType: 'Nation',
    geography: 'England',
    metric,
    ...params,
  };
};

export const getInfluenzaLineChartConfig = (data: MetricTimeSeriesList[]): LineConfig => {
  return {
    data,
    xField: (record: MetricTimeSeriesList) => new Date(record.date),
    yField: 'metric_value',
    legend: true,
    colorField: 'age',
    sizeField: 2,
    axis: {
      x: {
        tickCount: 12,
      },
      y: {
        labelFormatter: (v: string) => `${v}%`,
      },
    },
  };
};
