import { ResolveOptions } from "vite";
import { defineConfig, ViteUserConfig } from "vitest/config";

export const resolveOptions: ResolveOptions = {
  extensions: [".js", ".ts"],
};

export const viteUserConfig: ViteUserConfig["test"] = {
  environment: "node",
  globals: true,
  watch: false,
};

export default defineConfig({
  resolve: resolveOptions,
  test: {
    ...viteUserConfig,
    include: ["./src/**/*.test.ts"],
  },
});
