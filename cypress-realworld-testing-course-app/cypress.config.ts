import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    specPattern: "**/*.cy.[jt]s",

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
