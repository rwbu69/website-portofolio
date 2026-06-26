18:58:18.035       at async runAutoConfigLogic (/opt/buildhome/.npm/_npx/32026684e21afda6/node_modules/wrangler/wrangler-dist/cli.js:288193:21)
18:58:18.035       at async maybeRunAutoConfig (/opt/buildhome/.npm/_npx/32026684e21afda6/node_modules/wrangler/wrangler-dist/cli.js:288300:35)
18:58:18.035       at async Object.handler (/opt/buildhome/.npm/_npx/32026684e21afda6/node_modules/wrangler/wrangler-dist/cli.js:288667:34)
18:58:18.035       at async /opt/buildhome/.npm/_npx/32026684e21afda6/node_modules/wrangler/wrangler-dist/cli.js:229892:26 {
18:58:18.035     shortMessage: 'Command failed with exit code 1: bun run build',
18:58:18.035     command: 'bun run build',
18:58:18.035     escapedCommand: 'bun run build',
18:58:18.035     exitCode: 1,
18:58:18.035     signal: undefined,
18:58:18.035     signalDescription: undefined,
18:58:18.035     stdout: '\x1B[2m11:58:15\x1B[22m \x1B[34m[@astrojs/cloudflare]\x1B[39m Enabling image processing with Cloudflare Images for production with the "IMAGES" Images binding.\n' +
18:58:18.036       '\x1B[2m11:58:15\x1B[22m \x1B[34m[@astrojs/cloudflare]\x1B[39m Enabling sessions with Cloudflare KV with the "SESSION" KV binding.\n' +
18:58:18.036       '\x1B[2m11:58:15\x1B[22m \x1B[34m[vite]\x1B[39m Re-optimizing dependencies because lockfile has changed\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[content]\x1B[39m Syncing content\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[content]\x1B[39m Astro config changed\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[content]\x1B[39m Clearing content store\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[content]\x1B[39m Synced content\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[types]\x1B[39m Generated \x1B[2m2.21s\x1B[22m\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m output: \x1B[34m"static"\x1B[39m\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m mode: \x1B[34m"static"\x1B[39m\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m directory: \x1B[34m/opt/buildhome/repo/dist/\x1B[39m\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m adapter: \x1B[32m@astrojs/cloudflare\x1B[39m\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m Collecting build info...\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m \x1B[32m✓ Completed in 2.26s.\x1B[39m\n' +
18:58:18.036       '\x1B[2m11:58:17\x1B[22m \x1B[34m[build]\x1B[39m Building static entrypoints...',
18:58:18.036     stderr: '$ astro build\n' +
18:58:18.038       'rollupOptions.input should not be an html file when building for SSR. Please specify a dedicated SSR entry.\n' +
18:58:18.038       '  \x1B[1mLocation:\x1B[22m\n' +
18:58:18.038       '    \x1B[4m/opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33532:73\x1B[24m\n' +
18:58:18.038       '  \x1B[1mStack trace:\x1B[22m\n' +
18:58:18.038       '\x1B[2m    at resolveRollupOptions (file:///opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33532:73)\n' +
18:58:18.038       '    at Object.build (file:///opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33980:25)\n' +
18:58:18.038       '    at Object.buildApp (file:///opt/buildhome/repo/node_modules/astro/node_modules/vite/dist/node/chunks/config.js:33972:26)\n' +
18:58:18.038       '    at async viteBuild (file:///opt/buildhome/repo/node_modules/astro/dist/core/build/static-build.js:68:3)\n' +
18:58:18.038       '    at async AstroBuilder.run (file:///opt/buildhome/repo/node_modules/astro/dist/core/build/index.js:199:7)\x1B[22m\n' +
18:58:18.038       'error: script "build" exited with code 1',
18:58:18.038     failed: true,
18:58:18.038     timedOut: false,
18:58:18.038     isCanceled: false,
18:58:18.038     killed: false
18:58:18.039   }
18:58:18.039 