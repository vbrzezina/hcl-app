// generated with @7nohe/openapi-react-query-codegen@1.6.1
import { UseQueryResult } from '@tanstack/react-query';

import {
  GeographiesService,
  GeographyTypesService,
  HealthService,
  MetricsService,
  SubThemesService,
  ThemesService,
  TopicsService,
} from '../requests/services.gen';

export type HealthServiceGetHealthDefaultResponse = Awaited<ReturnType<typeof HealthService.getHealth>>;
export type HealthServiceGetHealthQueryResult<
  TData = HealthServiceGetHealthDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useHealthServiceGetHealthKey = 'HealthServiceGetHealth';
export const UseHealthServiceGetHealthKeyFn = (queryKey?: Array<unknown>) => [
  useHealthServiceGetHealthKey,
  ...(queryKey ?? []),
];

export type ThemesServiceGetThemeListDefaultResponse = Awaited<ReturnType<typeof ThemesService.getThemeList>>;
export type ThemesServiceGetThemeListQueryResult<
  TData = ThemesServiceGetThemeListDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useThemesServiceGetThemeListKey = 'ThemesServiceGetThemeList';
export const UseThemesServiceGetThemeListKeyFn = (queryKey?: Array<unknown>) => [
  useThemesServiceGetThemeListKey,
  ...(queryKey ?? []),
];

export type ThemesServiceGetThemeDetailDefaultResponse = Awaited<ReturnType<typeof ThemesService.getThemeDetail>>;
export type ThemesServiceGetThemeDetailQueryResult<
  TData = ThemesServiceGetThemeDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useThemesServiceGetThemeDetailKey = 'ThemesServiceGetThemeDetail';
export const UseThemesServiceGetThemeDetailKeyFn = (
  {
    theme,
  }: {
    theme: string;
  },
  queryKey?: Array<unknown>,
) => [useThemesServiceGetThemeDetailKey, ...(queryKey ?? [{ theme }])];

export type SubThemesServiceGetSubThemeListDefaultResponse = Awaited<
  ReturnType<typeof SubThemesService.getSubThemeList>
>;
export type SubThemesServiceGetSubThemeListQueryResult<
  TData = SubThemesServiceGetSubThemeListDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSubThemesServiceGetSubThemeListKey = 'SubThemesServiceGetSubThemeList';
export const UseSubThemesServiceGetSubThemeListKeyFn = (
  {
    theme,
  }: {
    theme: string;
  },
  queryKey?: Array<unknown>,
) => [useSubThemesServiceGetSubThemeListKey, ...(queryKey ?? [{ theme }])];

export type SubThemesServiceGetSubThemeDetailDefaultResponse = Awaited<
  ReturnType<typeof SubThemesService.getSubThemeDetail>
>;
export type SubThemesServiceGetSubThemeDetailQueryResult<
  TData = SubThemesServiceGetSubThemeDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useSubThemesServiceGetSubThemeDetailKey = 'SubThemesServiceGetSubThemeDetail';
export const UseSubThemesServiceGetSubThemeDetailKeyFn = (
  {
    subTheme,
    theme,
  }: {
    subTheme: string;
    theme: string;
  },
  queryKey?: Array<unknown>,
) => [useSubThemesServiceGetSubThemeDetailKey, ...(queryKey ?? [{ subTheme, theme }])];

export type TopicsServiceGetTopicListDefaultResponse = Awaited<ReturnType<typeof TopicsService.getTopicList>>;
export type TopicsServiceGetTopicListQueryResult<
  TData = TopicsServiceGetTopicListDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTopicsServiceGetTopicListKey = 'TopicsServiceGetTopicList';
export const UseTopicsServiceGetTopicListKeyFn = (
  {
    subTheme,
    theme,
  }: {
    subTheme: string;
    theme: string;
  },
  queryKey?: Array<unknown>,
) => [useTopicsServiceGetTopicListKey, ...(queryKey ?? [{ subTheme, theme }])];

export type TopicsServiceGetTopicDetailDefaultResponse = Awaited<ReturnType<typeof TopicsService.getTopicDetail>>;
export type TopicsServiceGetTopicDetailQueryResult<
  TData = TopicsServiceGetTopicDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useTopicsServiceGetTopicDetailKey = 'TopicsServiceGetTopicDetail';
export const UseTopicsServiceGetTopicDetailKeyFn = (
  {
    subTheme,
    theme,
    topic,
  }: {
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: Array<unknown>,
) => [useTopicsServiceGetTopicDetailKey, ...(queryKey ?? [{ subTheme, theme, topic }])];

export type GeographyTypesServiceGetGeographyTypeListDefaultResponse = Awaited<
  ReturnType<typeof GeographyTypesService.getGeographyTypeList>
>;
export type GeographyTypesServiceGetGeographyTypeListQueryResult<
  TData = GeographyTypesServiceGetGeographyTypeListDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGeographyTypesServiceGetGeographyTypeListKey = 'GeographyTypesServiceGetGeographyTypeList';
export const UseGeographyTypesServiceGetGeographyTypeListKeyFn = (
  {
    subTheme,
    theme,
    topic,
  }: {
    subTheme: string;
    theme: string;
    topic: string;
  },
  queryKey?: Array<unknown>,
) => [useGeographyTypesServiceGetGeographyTypeListKey, ...(queryKey ?? [{ subTheme, theme, topic }])];

export type GeographyTypesServiceGetGeographyTypeDetailDefaultResponse = Awaited<
  ReturnType<typeof GeographyTypesService.getGeographyTypeDetail>
>;
export type GeographyTypesServiceGetGeographyTypeDetailQueryResult<
  TData = GeographyTypesServiceGetGeographyTypeDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGeographyTypesServiceGetGeographyTypeDetailKey = 'GeographyTypesServiceGetGeographyTypeDetail';
export const UseGeographyTypesServiceGetGeographyTypeDetailKeyFn = (
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
  queryKey?: Array<unknown>,
) => [useGeographyTypesServiceGetGeographyTypeDetailKey, ...(queryKey ?? [{ geographyType, subTheme, theme, topic }])];

export type GeographiesServiceGetGeographyListDefaultResponse = Awaited<
  ReturnType<typeof GeographiesService.getGeographyList>
>;
export type GeographiesServiceGetGeographyListQueryResult<
  TData = GeographiesServiceGetGeographyListDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGeographiesServiceGetGeographyListKey = 'GeographiesServiceGetGeographyList';
export const UseGeographiesServiceGetGeographyListKeyFn = (
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
  queryKey?: Array<unknown>,
) => [useGeographiesServiceGetGeographyListKey, ...(queryKey ?? [{ geographyType, subTheme, theme, topic }])];

export type GeographiesServiceGetGeographyDetailDefaultResponse = Awaited<
  ReturnType<typeof GeographiesService.getGeographyDetail>
>;
export type GeographiesServiceGetGeographyDetailQueryResult<
  TData = GeographiesServiceGetGeographyDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useGeographiesServiceGetGeographyDetailKey = 'GeographiesServiceGetGeographyDetail';
export const UseGeographiesServiceGetGeographyDetailKeyFn = (
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
  queryKey?: Array<unknown>,
) => [
  useGeographiesServiceGetGeographyDetailKey,
  ...(queryKey ?? [{ geography, geographyType, subTheme, theme, topic }]),
];

export type MetricsServiceGetMetricListDefaultResponse = Awaited<ReturnType<typeof MetricsService.getMetricList>>;
export type MetricsServiceGetMetricListQueryResult<
  TData = MetricsServiceGetMetricListDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMetricsServiceGetMetricListKey = 'MetricsServiceGetMetricList';
export const UseMetricsServiceGetMetricListKeyFn = (
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
  queryKey?: Array<unknown>,
) => [useMetricsServiceGetMetricListKey, ...(queryKey ?? [{ geography, geographyType, subTheme, theme, topic }])];

export type MetricsServiceGetMetricDetailDefaultResponse = Awaited<ReturnType<typeof MetricsService.getMetricDetail>>;
export type MetricsServiceGetMetricDetailQueryResult<
  TData = MetricsServiceGetMetricDetailDefaultResponse,
  TError = unknown,
> = UseQueryResult<TData, TError>;
export const useMetricsServiceGetMetricDetailKey = 'MetricsServiceGetMetricDetail';
export const UseMetricsServiceGetMetricDetailKeyFn = (
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
  queryKey?: Array<unknown>,
) => [
  useMetricsServiceGetMetricDetailKey,
  ...(queryKey ?? [
    {
      age: age ?? null,
      date: date ?? null,
      epiweek: epiweek ?? null,
      geography,
      geographyType,
      inReportingDelayPeriod: inReportingDelayPeriod ?? null,
      metric,
      page: page ?? null,
      pageSize: pageSize ?? null,
      sex: sex ?? null,
      stratum: stratum ?? null,
      subTheme,
      theme,
      topic,
      year: year ?? null,
    },
  ]),
];
