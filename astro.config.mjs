import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  integrations: [lit(), react(), tailwind({
    config: {
      applyBaseStyles: true
    }
  }), vue(), solidJs(), svelte(), mdx()],
  output: "server"
});