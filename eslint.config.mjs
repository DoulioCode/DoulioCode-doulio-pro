import coreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...coreWebVitals,
  {
    ignores: ["node_modules/**", ".next/**", "playwright-report/**", "test-results/**"],
  },
];

export default config;
