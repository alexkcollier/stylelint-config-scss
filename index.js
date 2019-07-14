module.exports = {
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    // For the sake of playing nice with the prettier formatter
    'declaration-colon-newline-after': null,
    'string-quotes': ['single'],
    // For the sake of playing nice with the prettier formatter
    'value-list-comma-newline-after': null,

    // plugin rules
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'function',
      },
      {
        type: 'at-rule',
        name: 'mixin',
      },
      {
        type: 'at-rule',
        name: 'extend',
      },
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      'rules',
      {
        type: 'at-rule',
        name: 'media',
      },
    ],
    'order/properties-alphabetical-order': true,
    'scss/at-else-empty-line-before': 'never',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
  },
}
