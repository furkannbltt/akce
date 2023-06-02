import type { Config } from "jest";
require("ts-node/register");

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/app/react/setupTests.ts"],
  testMatch: ["<rootDir>/app/react/**/*.test.{ts,tsx,js,jsx}"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
};

export default config;
