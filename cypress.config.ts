import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'eecovk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});