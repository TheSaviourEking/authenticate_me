module.exports = {
    apps: [
      {
        name: 'my-app',
        build: 'cd frontend && npm install && npm run build',
        publish: 'frontend/build',
        functions: [
          {
            name: 'api',
            path: '/api/*',
            handler: 'backend/server.js',
          },
          {
            name: 'serve',
            path: '/*',
            handler: 'frontend/build/index.html',
          },
        ],
      },
    ],
  };
  