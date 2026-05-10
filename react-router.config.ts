import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  subResourceIntegrity: true,
  future: {
    unstable_optimizeDeps: true,
    unstable_trailingSlashAwareDataRequests: true,
    v8_middleware: true,
    v8_splitRouteModules: true,
    v8_viteEnvironmentApi: true,
  },
  prerender: true,
  // async prerender({ getStaticPaths }) {
  //   return [...getStaticPaths()];
  // },
} satisfies Config;
