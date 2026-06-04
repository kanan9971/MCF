"""
MC Fintech — Local Preview Server
Reads vercel.json rewrite rules so that /about serves about.html etc.
Usage: python preview.py
"""
import http.server
import json
import os
import socket

PORT = 3000
ROOT = os.path.dirname(os.path.abspath(__file__))

# Load rewrite rules from vercel.json
with open(os.path.join(ROOT, 'vercel.json'), 'r', encoding='utf-8') as f:
    vercel = json.load(f)

rewrites = {}
for rule in vercel.get('rewrites', []):
    rewrites[rule['source']] = rule['destination']

class RewritingHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        # Apply rewrite rules
        path = self.path.split('?')[0]
        if path == '/':
            self.path = '/index.html'
        elif path in rewrites:
            self.path = rewrites[path]
        else:
            # Try appending .html if file not found later
            self.path = path

        super().do_GET()

    def handle_one_request(self):
        """Override to add .html fallback on 404"""
        try:
            super().handle_one_request()
        except Exception:
            pass

    def send_head(self):
        """Try .html fallback if file not found"""
        result = super().send_head()
        if result is None and not self.path.endswith('.html'):
            # Try appending .html
            original_path = self.path
            self.path = original_path + '.html'
            result = super().send_head()
            if result is None:
                self.path = original_path
        return result

def main():
    # Kill existing process on the port
    os.system(f'for /f "tokens=5" %a in (\'netstat -ano ^| findstr :{PORT}\') do taskkill /F /PID %a 2>nul')

    with http.server.HTTPServer(('', PORT), RewritingHandler) as httpd:
        print(f'\n  MC Fintech preview running at:')
        print(f'  http://localhost:{PORT}\n')
        print(f'  Press Ctrl+C to stop.\n')
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print('\n  Server stopped.')

if __name__ == '__main__':
    main()