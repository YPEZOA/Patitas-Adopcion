module.exports = {
  preset: 'react-native',
  rootDir: './',
  collectCoverage: true,
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.test.tsx'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|react-navigation|@react-navigation/.*)',
  ],
  setupFiles: ['./jest.setup.js'],
}
