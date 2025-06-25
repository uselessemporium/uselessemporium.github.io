import { defineConfig } from 'astro/config'

const SCRIPT = process.env.npm_lifecycle_script || "";
const LOCALHOST_PORT = 4321;
const LOCALHOST_URL = `https://localhost:${LOCALHOST_PORT}`;
const LIVE_URL = 'https://uselessemporium.github.io';

let BASE_URL = LOCALHOST_URL;

const isBuild = SCRIPT.includes("astro build");

if(isBuild){
  BASE_URL = LIVE_URL
}

export default defineConfig({
  site: BASE_URL
});