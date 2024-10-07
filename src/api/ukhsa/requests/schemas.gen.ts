// This file is auto-generated by @hey-api/openapi-ts

export const $MetricTimeSeriesList = {
  type: 'object',
  properties: {
    theme: {
      type: 'string',
      maxLength: 50,
    },
    sub_theme: {
      type: 'string',
      maxLength: 50,
    },
    topic: {
      type: 'string',
      maxLength: 50,
    },
    geography_type: {
      type: 'string',
      maxLength: 50,
    },
    geography: {
      type: 'string',
      maxLength: 100,
    },
    geography_code: {
      type: 'string',
      nullable: true,
      maxLength: 9,
    },
    metric: {
      type: 'string',
      maxLength: 100,
    },
    metric_group: {
      type: 'string',
      nullable: true,
      maxLength: 50,
    },
    stratum: {
      type: 'string',
      maxLength: 50,
    },
    sex: {
      type: 'string',
      nullable: true,
      maxLength: 3,
    },
    age: {
      type: 'string',
      nullable: true,
      maxLength: 50,
    },
    year: {
      type: 'integer',
      maximum: 32767,
      minimum: 0,
    },
    month: {
      type: 'integer',
      maximum: 32767,
      minimum: 0,
      nullable: true,
    },
    epiweek: {
      type: 'integer',
      maximum: 32767,
      minimum: 0,
    },
    date: {
      type: 'string',
      format: 'date',
    },
    metric_value: {
      type: 'number',
      format: 'double',
    },
    in_reporting_delay_period: {
      type: 'boolean',
      default: false,
      description: `
Whether the record falls within the current reporting delay period. 
If true, then the value is subject to change in a subsequent retrospective update.
`,
    },
  },
  required: [
    'age',
    'date',
    'epiweek',
    'geography',
    'geography_code',
    'geography_type',
    'metric',
    'metric_value',
    'month',
    'sex',
    'stratum',
    'sub_theme',
    'theme',
    'topic',
    'year',
  ],
} as const;

export const $GeographyDetail = {
  type: 'object',
  properties: {
    metrics: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['metrics'],
} as const;

export const $GeographyList = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    link: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['link', 'name'],
} as const;

export const $GeographyTypeDetail = {
  type: 'object',
  properties: {
    geographies: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['geographies'],
} as const;

export const $GeographyTypeList = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    link: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['link', 'name'],
} as const;

export const $MetricList = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    link: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['link', 'name'],
} as const;

export const $MetricTimeSeries = {
  type: 'object',
  required: ['count', 'results'],
  properties: {
    count: {
      type: 'integer',
      example: 123,
    },
    next: {
      type: 'string',
      nullable: true,
      format: 'uri',
      example: 'http://api.example.org/accounts/?page=4',
    },
    previous: {
      type: 'string',
      nullable: true,
      format: 'uri',
      example: 'http://api.example.org/accounts/?page=2',
    },
    results: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/MetricTimeSeriesList',
      },
    },
  },
} as const;

export const $SubThemeDetail = {
  type: 'object',
  properties: {
    topics: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['topics'],
} as const;

export const $SubThemeList = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    link: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['link', 'name'],
} as const;

export const $ThemeDetail = {
  type: 'object',
  properties: {
    sub_themes: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['sub_themes'],
} as const;

export const $ThemeList = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    link: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['link', 'name'],
} as const;

export const $TopicDetail = {
  type: 'object',
  properties: {
    geography_types: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['geography_types'],
} as const;

export const $TopicList = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    link: {
      type: 'string',
      format: 'uri',
      readOnly: true,
    },
  },
  required: ['link', 'name'],
} as const;
