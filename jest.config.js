module.exports = {
  cacheDirectory: "<rootDir>/jestCache",
    collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/node_modules/**",
    ],
    coveragePathIgnorePatterns: [
      "/types/",
      "/src/images",
      "/src/App.tsx",
      "/src/Routes.tsx",
      "/src/index.tsx",
      "/src/serviceWorker.ts",
      "src/Common/LazyRoute/LazyRoute.tsx"
  ],
  coverageThreshold: {
      global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100
      }
  },
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  coverageReporters: ["json-summary", "text", "lcov"],
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }