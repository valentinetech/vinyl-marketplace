import react from '@vitejs/plugin-react';
import dns from 'dns';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
	server: {
		open: true,
		port: 3000,
		host: 'localhost',
	},
	build: {
		outDir: 'build',
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/vitest.setup.ts',
		coverage: {
			provider: 'istanbul',
			reporter: ['text', ['html', { subdir: 'coverage' }], 'lcov'],
		},
	},
});
