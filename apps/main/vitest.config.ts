import { defineConfig } from "vitest/config";

import { resolveOptions, viteUserConfig } from "../../base-vitest";

export default defineConfig({
  resolve: resolveOptions,
  test: {
    ...viteUserConfig,
    include: ["./src/**/*.test.ts"],
    exclude: ["./src/**/*.integration.test.ts"],
  },
});
