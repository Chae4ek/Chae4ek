import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://chae4ek.github.io",
  // base: "/Chae4ek",
  integrations: [compress()],
});
