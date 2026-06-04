const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

// Load rewrites from vercel.json
const vercelConfig = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf8'));
const rewrites = vercelConfig.rewrites || [];

function rewrite(pathname) {
  for (const rule of rewrites) {
    if (rule.source === pathname) return rule.destination;
  }
  return null;
}

const server = http.createServer((req, res) => {
  let pathname = new URL(req.url, 'http://localhost').pathname;

  // Apply rewrite rules
  const dest = rewrite(pathname);
  if (dest) pathname = dest;

  // Default to index.html for root
  if (pathname === '/') pathname = '/index.html';

  const filePath = path.join(ROOT, pathname);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Try appending .html
      const htmlPath = filePath + '.html';
      fs.readFile(htmlPath, (err2, data2) => {
        if (err2) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 — Page Not Found</h1><p><a href="/">Go Home</a></p>');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data2);
        }
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n  MC Fintech website running at:\n`);
  console.log(`  http://localhost:${PORT}\n`);
  console.log('  Pages:');
  console.log(`  http://localhost:${PORT}/`);
  console.log(`  http://localhost:${PORT}/about`);
  console.log(`  http://localhost:${PORT}/services`);
  console.log(`  http://localhost:${PORT}/funding`);
  console.log(`  http://localhost:${PORT}/promotion`);
  console.log(`  http://localhost:${PORT}/ai-videos`);
  console.log(`  http://localhost:${PORT}/my-way`);
  console.log(`  http://localhost:${PORT}/aura`);
  console.log(`  http://localhost:${PORT}/shop`);
  console.log(`  http://localhost:${PORT}/join-us`);
  console.log(`  http://localhost:${PORT}/contact`);
  console.log('\n  Press Ctrl+C to stop.\n');
});
