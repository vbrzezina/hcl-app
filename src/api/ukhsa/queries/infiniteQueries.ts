// generated with @7nohe/openapi-react-query-codegen@1.6.1
import { InfiniteData, useInfiniteQuery, UseInfiniteQueryOptions } from '@tanstack/react-query';

import { MetricsService } from '../requests/services.gen';
import * as Common from './common';

export const useMetricsServiceGetMetricDetailInfinite = <
  TData = InfiniteData<Common.MetricsServiceGetMetricDetailDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    age,
    date,
    epiweek,
    geography,
    geographyType,
    inReportingDelayPeriod,
    metric,
    pageSize,
    sex,
    stratum,
    subTheme,
    theme,
    topic,
    year,
  }: {
    age?: string;
    date?: string;
    epiweek?: number;
    geography: string;
    geographyType: string;
    inReportingDelayPeriod?: boolean;
    metric: string;
    pageSize?: number;
    sex?: string;
    stratum?: string;
    subTheme: string;
    theme: string;
    topic: string;
    year?: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useInfiniteQuery({
    queryKey: Common.UseMetricsServiceGetMetricDetailKeyFn(
      {
        age,
        date,
        epiweek,
        geography,
        geographyType,
        inReportingDelayPeriod,
        metric,
        pageSize,
        sex,
        stratum,
        subTheme,
        theme,
        topic,
        year,
      },
      queryKey,
    ),
    queryFn: ({ pageParam }) =>
      MetricsService.getMetricDetail({
        age,
        date,
        epiweek,
        geography,
        geographyType,
        inReportingDelayPeriod,
        metric,
        page: pageParam as number,
        pageSize,
        sex,
        stratum,
        subTheme,
        theme,
        topic,
        year,
      }) as TData,
    initialPageParam: 'initialPageParam',
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: number;
        }
      ).nextPage,
    ...options,
  });
