import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), vue(), solidJs(), svelte()]
});