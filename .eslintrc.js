module.exports =  {
  parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
  extends:  [
    'prettier',
    "eslint-config-prettier",
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: [
    'prettier',
    'import',
  ],
  env: {
    'mocha': true
  },
  rules: {
    'no-debugger': 'error',
    'no-console': 'error',
    'operator-linebreak': ["error", "after"],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    "import/newline-after-import": ["error", { "count": 1 }],
    'object-curly-newline': ["error", { 
      "ObjectExpression": {"minProperties": 3}
     }],
     '@typescript-eslint/no-unused-vars': 'error',
    'sort-imports': [
      'error', {
        "ignoreCase": true,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ['all', 'single', 'multiple', 'none'] 
      }
    ],
  'prettier/prettier': [
    'error',
    {
      singleQuote: true,
      trailingComma: 'all'
    }
  ]
  },
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
  },
};