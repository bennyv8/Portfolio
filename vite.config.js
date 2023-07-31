import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig(() => {
  return {
    server:{
	host: true,
	port: 3000,
	https: {
		key: fs.readFileSync('/etc/letsencrypt/live/bennyvan.com/privkey.pem'),
		cert: fs.readFileSync('/etc/letsencrypt/live/bennyvan.com/fullchain.pem')
	}
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});
