module.exports = {
  globals: {
      'ts-jest': {
          tsConfig: 'tsconfig.json'
      }
  },
  moduleFileExtensions: [
      'ts',
      'js',
      'json'
  ],
  pretest: 'ts-jest',
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: [
      '**/test/**/*.test.(ts|js)'
  ],
  testEnvironment: 'node'
};
