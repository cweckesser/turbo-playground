import { ResolveOptions } from "vite";
import { ViteUserConfig } from "vitest/config";

export const resolveOptions: ResolveOptions = {
  extensions: [".js", ".ts"],
};

export const viteUserConfig: ViteUserConfig["test"] = {
  environment: "node",
  globals: true,
  watch: false,
  passWithNoTests: true,
};
