module.exports = {
  rootDir: ".",
  testEnvironment: "node",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  coveragePathIgnorePatterns: ["tests"],
  modulePathIgnorePatterns: ["dist"],
  reporters: ["default"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
};
