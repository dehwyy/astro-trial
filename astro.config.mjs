import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: true
    }
  }), vue(), solidJs(), svelte(), mdx()],
  output: "server"
});