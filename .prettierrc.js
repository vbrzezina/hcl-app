module.exports = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'consistent',
  importOrder: [
    /* Assets */
    `^.*\.(css|ttf)$`,
    /* Test libraries */
    `^(jest)$`,
    /* Node core modules */
    `^(crypto|http|https|url|querystring|path|fs|util)$`,
    /* Specific imports without @workspace */
    `^(react|next)(.*)$`,
    `^(antd)(.*)$`,
    /* Other imports without @workspace */
    `^(?![/.@])(.*)$`,
    /* Specific imports with @workspace */
    '^@ant-design(.*)$',
    /* Other imports with @workspace */
    '^@(?!/).*$',
    /* Specific local alias */
    '^@/pages(.*)$',
    '^@/components(.*)$',
    '^@/api(.*)$',
    '^@/utils(.*)$',
    /* Other local alias */
    '^@/(.*)$',
    /* Relative imports (excerpt public assets) */
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'classProperties', 'decorators-legacy'],
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
