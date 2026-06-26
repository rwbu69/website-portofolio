19:02:26.366     escapedCommand: 'bun run build',
19:02:26.366     exitCode: 1,
19:02:26.366     signal: undefined,
19:02:26.366     signalDescription: undefined,
19:02:26.367     stdout: '\x1B[2m12:02:24\x1B[22m \x1B[34m[@astrojs/cloudflare]\x1B[39m Enabling image processing with Cloudflare Images for production with the "IMAGES" Images binding.\n' +
19:02:26.367       '\x1B[2m12:02:24\x1B[22m \x1B[34m[@astrojs/cloudflare]\x1B[39m Enabling sessions with Cloudflare KV with the "SESSION" KV binding.\n' +
19:02:26.367       '\x1B[2m12:02:24\x1B[22m \x1B[34m[vite]\x1B[39m Re-optimizing dependencies because lockfile has changed\n' +
19:02:26.367       '\x1B[2m12:02:25\x1B[22m \x1B[34m[content]\x1B[39m Syncing content\n' +
19:02:26.367       '\x1B[2m12:02:25\x1B[22m \x1B[34m[content]\x1B[39m Astro config changed\n' +
19:02:26.367       '\x1B[2m12:02:25\x1B[22m \x1B[34m[content]\x1B[39m Clearing content store\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[content]\x1B[39m Synced content\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[types]\x1B[39m Generated \x1B[2m1.13s\x1B[22m\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m output: \x1B[34m"static"\x1B[39m\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m mode: \x1B[34m"static"\x1B[39m\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m directory: \x1B[34m/opt/buildhome/repo/dist/\x1B[39m\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m adapter: \x1B[32m@astrojs/cloudflare\x1B[39m\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m Collecting build info...\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m \x1B[32m✓ Completed in 1.16s.\x1B[39m\n' +
19:02:26.368       '\x1B[2m12:02:25\x1B[22m \x1B[34m[build]\x1B[39m Building static entrypoints...',
19:02:26.368     stderr: '$ astro build\n' +
19:02:26.368       'rollupOptions.input should not be an html file when building for SSR. Please specify a dedicated SSR entry.\n' +
19:02:26.368       '  \x1B[1mLocation:\x1B[22m\n' +
19:02:26.368       '    \x1B[4m/opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33532:73\x1B[24m\n' +
19:02:26.368       '  \x1B[1mStack trace:\x1B[22m\n' +
19:02:26.368       '\x1B[2m    at resolveRollupOptions (file:///opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33532:73)\n' +
19:02:26.368       '    at Object.build (file:///opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33980:25)\n' +
19:02:26.368       '    at Object.buildApp (file:///opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33972:26)\n' +
19:02:26.368       '    at async viteBuild (file:///opt/buildhome/repo/node_modules/astro/dist/core/build/static-build.js:68:3)\n' +
19:02:26.368       '    at async AstroBuilder.run (file:///opt/buildhome/repo/node_modules/astro/dist/core/build/index.js:199:7)\x1B[22m\n' +
19:02:26.369       'error: script "build" exited with code 1',
19:02:26.369     failed: true,
19:02:26.369     timedOut: false,
19:02:26.369     isCanceled: false,
19:02:26.369     killed: false
19:02:26.369   }
19:02:26.369
19:02:26.369
19:02:26.369
19:02:26.369 Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
19:02:26.369
19:02:26.370 ✘ [ERROR] Running custom build `bun run build` failed. There are likely more logs from your build command above.
19:02:26.371
19:02:26.371
19:02:26.391 🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-06-26_12-02-16_818.log"
19:02:26.499 Failed: error occurred while running deploy command