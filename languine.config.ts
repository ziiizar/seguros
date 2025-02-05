import { defineConfig } from "languine";

export default defineConfig({
  projectId: "",
  locale: {
    source: "en",
    targets: ["es"],
  },
  files: {
    json: {
      include: ["app/locales/[locale].json"],
    },
  },
});
