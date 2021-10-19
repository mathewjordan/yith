import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  moduleDirectories: ["node_modules", "src"],
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
module.exports = { config };
