// generated with @7nohe/openapi-react-query-codegen@1.6.1
import { type QueryClient } from '@tanstack/react-query';

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

export const prefetchUseHealthServiceGetHealth = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseHealthServiceGetHealthKeyFn(),
    queryFn: () => HealthService.getHealth(),
  });

export const prefetchUseThemesServiceGetThemeList = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseThemesServiceGetThemeListKeyFn(),
    queryFn: () => ThemesService.getThemeList(),
  });

export const prefetchUseThemesServiceGetThemeDetail = (
  queryClient: QueryClient,
  {
    theme,
  }: {
    theme: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseThemesServiceGetThemeDetailKeyFn({ theme }),
    queryFn: () => ThemesService.getThemeDetail({ theme }),
  });

export const prefetchUseSubThemesServiceGetSubThemeList = (
  queryClient: QueryClient,
  {
    theme,
  }: {
    theme: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSubThemesServiceGetSubThemeListKeyFn({ theme }),
    queryFn: () => SubThemesService.getSubThemeList({ theme }),
  });

export const prefetchUseSubThemesServiceGetSubThemeDetail = (
  queryClient: QueryClient,
  {
    subTheme,
    theme,
  }: {
    subTheme: string;
    theme: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSubThemesServiceGetSubThemeDetailKeyFn({ subTheme, theme }),
    queryFn: () => SubThemesService.getSubThemeDetail({ subTheme, theme }),
  });

export const prefetchUseTopicsServiceGetTopicList = (
  queryClient: QueryClient,
  {
    subTheme,
    theme,
  }: {
    subTheme: string;
    theme: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTopicsServiceGetTopicListKeyFn({ subTheme, theme }),
    queryFn: () => TopicsService.getTopicList({ subTheme, theme }),
  });

export const prefetchUseTopicsServiceGetTopicDetail = (
  queryClient: QueryClient,
  {
    subTheme,
    theme,
    topic,
  }: {
    subTheme: string;
    theme: string;
    topic: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTopicsServiceGetTopicDetailKeyFn({ subTheme, theme, topic }),
    queryFn: () => TopicsService.getTopicDetail({ subTheme, theme, topic }),
  });

export const prefetchUseGeographyTypesServiceGetGeographyTypeList = (
  queryClient: QueryClient,
  {
    subTheme,
    theme,
    topic,
  }: {
    subTheme: string;
    theme: string;
    topic: string;
  },
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseGeographyTypesServiceGetGeographyTypeListKeyFn({ subTheme, theme, topic }),
    queryFn: () => GeographyTypesService.getGeographyTypeList({ subTheme, theme, topic }),
  });

export const prefetchUseGeographyTypesServiceGetGeographyTypeDetail = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseGeographyTypesServiceGetGeographyTypeDetailKeyFn({ geographyType, subTheme, theme, topic }),
    queryFn: () => GeographyTypesService.getGeographyTypeDetail({ geographyType, subTheme, theme, topic }),
  });

export const prefetchUseGeographiesServiceGetGeographyList = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseGeographiesServiceGetGeographyListKeyFn({ geographyType, subTheme, theme, topic }),
    queryFn: () => GeographiesService.getGeographyList({ geographyType, subTheme, theme, topic }),
  });

export const prefetchUseGeographiesServiceGetGeographyDetail = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseGeographiesServiceGetGeographyDetailKeyFn({ geography, geographyType, subTheme, theme, topic }),
    queryFn: () => GeographiesService.getGeographyDetail({ geography, geographyType, subTheme, theme, topic }),
  });

export const prefetchUseMetricsServiceGetMetricList = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMetricsServiceGetMetricListKeyFn({ geography, geographyType, subTheme, theme, topic }),
    queryFn: () => MetricsService.getMetricList({ geography, geographyType, subTheme, theme, topic }),
  });

export const prefetchUseMetricsServiceGetMetricDetail = (
  queryClient: QueryClient,
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
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMetricsServiceGetMetricDetailKeyFn({
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
    }),
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
      }),
  });
