import { GetMetricDetailData, MetricTimeSeriesList } from '@/api/ukhsa';

import { COVID19Metrics } from '@/utils/constants';

const getLabel = (record: MetricTimeSeriesList) => {
  switch (record.metric) {
    case COVID19Metrics.CasesByDay:
      return 'Cases by date';
    case COVID19Metrics.AdmissionByDay:
      return 'Healthcare admission by day';
    case COVID19Metrics.OccupiedBedsByDay:
      return 'Occupied beds by day';
    case COVID19Metrics.PCRcountByDay:
      return 'PCR count by day';
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

export const getCovid19LineChartConfig = (data: MetricTimeSeriesList[]) => {
  return {
    data,
    xField: (record: MetricTimeSeriesList) => new Date(record.date),
    yField: 'metric_value',
    sizeField: 'metric_value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: getLabel,
  };
};
