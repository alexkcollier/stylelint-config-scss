module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier'],
  fix: true,
  formatter: () => require('prettier'),
  rules: {
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested']
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: ['else'],
        except: ['first-nested', 'blockless-after-blockless']
      }
    ]
  }
}
