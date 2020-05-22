module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/dist/**',
    '!**/*.config.js',
    '!**/vendor/**',
    '!**/tests/e2e/**',
    '!**/main.js',
    '!**/coverage/**',
  ]
}
