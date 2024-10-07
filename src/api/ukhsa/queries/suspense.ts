// generated with @7nohe/openapi-react-query-codegen@1.6.1
import { UseQueryOptions, useSuspenseQuery } from '@tanstack/react-query';

import {
  GeographiesService,
  GeographyTypesService,
  HealthService,
  MetricsService,
  SubThemesService,
  ThemesService,
  TopicsService,
} from '../requests/services.gen';
import * as Common from './common';

export const useHealthServiceGetHealthSuspense = <
  TData = Common.HealthServiceGetHealthDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseHealthServiceGetHealthKeyFn(queryKey),
    queryFn: () => HealthService.getHealth() as TData,
    ...options,
  });

export const useThemesServiceGetThemeListSuspense = <
  TData = Common.ThemesServiceGetThemeListDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseThemesServiceGetThemeListKeyFn(queryKey),
    queryFn: () => ThemesService.getThemeList() as TData,
    ...options,
  });

export const useThemesServiceGetThemeDetailSuspense = <
  TData = Common.ThemesServiceGetThemeDetailDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    theme,
  }: {
    theme: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseThemesServiceGetThemeDetailKeyFn({ theme }, queryKey),
    queryFn: () => ThemesService.getThemeDetail({ theme }) as TData,
    ...options,
  });

export const useSubThemesServiceGetSubThemeListSuspense = <
  TData = Common.SubThemesServiceGetSubThemeListDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    theme,
  }: {
    theme: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSubThemesServiceGetSubThemeListKeyFn({ theme }, queryKey),
    queryFn: () => SubThemesService.getSubThemeList({ theme }) as TData,
    ...options,
  });

export const useSubThemesServiceGetSubThemeDetailSuspense = <
  TData = Common.SubThemesServiceGetSubThemeDetailDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    subTheme,
    theme,
  }: {
    subTheme: string;
    theme: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSubThemesServiceGetSubThemeDetailKeyFn({ subTheme, theme }, queryKey),
    queryFn: () => SubThemesService.getSubThemeDetail({ subTheme, theme }) as TData,
    ...options,
  });

export const useTopicsServiceGetTopicListSuspense = <
  TData = Common.TopicsServiceGetTopicListDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    subTheme,
    theme,
  }: {
    subTheme: string;
    theme: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTopicsServiceGetTopicListKeyFn({ subTheme, theme }, queryKey),
    queryFn: () => TopicsService.getTopicList({ subTheme, theme }) as TData,
    ...options,
  });

export const useTopicsServiceGetTopicDetailSuspense = <
  TData = Common.TopicsServiceGetTopicDetailDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    subTheme,
    theme,
    topic,
  }: {
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTopicsServiceGetTopicDetailKeyFn({ subTheme, theme, topic }, queryKey),
    queryFn: () => TopicsService.getTopicDetail({ subTheme, theme, topic }) as TData,
    ...options,
  });

export const useGeographyTypesServiceGetGeographyTypeListSuspense = <
  TData = Common.GeographyTypesServiceGetGeographyTypeListDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    subTheme,
    theme,
    topic,
  }: {
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGeographyTypesServiceGetGeographyTypeListKeyFn({ subTheme, theme, topic }, queryKey),
    queryFn: () => GeographyTypesService.getGeographyTypeList({ subTheme, theme, topic }) as TData,
    ...options,
  });

export const useGeographyTypesServiceGetGeographyTypeDetailSuspense = <
  TData = Common.GeographyTypesServiceGetGeographyTypeDetailDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    geographyType,
    subTheme,
    theme,
    topic,
  }: {
    geographyType: string;
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGeographyTypesServiceGetGeographyTypeDetailKeyFn(
      { geographyType, subTheme, theme, topic },
      queryKey,
    ),
    queryFn: () => GeographyTypesService.getGeographyTypeDetail({ geographyType, subTheme, theme, topic }) as TData,
    ...options,
  });

export const useGeographiesServiceGetGeographyListSuspense = <
  TData = Common.GeographiesServiceGetGeographyListDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    geographyType,
    subTheme,
    theme,
    topic,
  }: {
    geographyType: string;
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGeographiesServiceGetGeographyListKeyFn({ geographyType, subTheme, theme, topic }, queryKey),
    queryFn: () => GeographiesService.getGeographyList({ geographyType, subTheme, theme, topic }) as TData,
    ...options,
  });

export const useGeographiesServiceGetGeographyDetailSuspense = <
  TData = Common.GeographiesServiceGetGeographyDetailDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    geography,
    geographyType,
    subTheme,
    theme,
    topic,
  }: {
    geography: string;
    geographyType: string;
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseGeographiesServiceGetGeographyDetailKeyFn(
      { geography, geographyType, subTheme, theme, topic },
      queryKey,
    ),
    queryFn: () => GeographiesService.getGeographyDetail({ geography, geographyType, subTheme, theme, topic }) as TData,
    ...options,
  });

export const useMetricsServiceGetMetricListSuspense = <
  TData = Common.MetricsServiceGetMetricListDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[],
>(
  {
    geography,
    geographyType,
    subTheme,
    theme,
    topic,
  }: {
    geography: string;
    geographyType: string;
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMetricsServiceGetMetricListKeyFn(
      { geography, geographyType, subTheme, theme, topic },
      queryKey,
    ),
    queryFn: () => MetricsService.getMetricList({ geography, geographyType, subTheme, theme, topic }) as TData,
    ...options,
  });

export const useMetricsServiceGetMetricDetailSuspense = <
  TData = Common.MetricsServiceGetMetricDetailDefaultResponse,
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
    page,
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
    page?: number;
    pageSize?: number;
    sex?: string;
    stratum?: string;
    subTheme: string;
    theme: string;
    topic: string;
    year?: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>,
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMetricsServiceGetMetricDetailKeyFn(
      {
        age,
        date,
        epiweek,
        geography,
        geographyType,
        inReportingDelayPeriod,
        metric,
        page,
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
    queryFn: () =>
      MetricsService.getMetricDetail({
        age,
        date,
        epiweek,
        geography,
        geographyType,
        inReportingDelayPeriod,
        metric,
        page,
        pageSize,
        sex,
        stratum,
        subTheme,
        theme,
        topic,
        year,
      }) as TData,
    ...options,
  });
