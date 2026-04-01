const https = require('https');
https.get('https://woodiz-ttm.webflow.io/', (res) => {
  let html = '';
  res.on('data', (chunk) => { html += chunk; });
  res.on('end', () => {
    const lines = html.split('\n');
    lines.forEach(line => {
      if (line.includes('Webflow') || line.includes('Templates')) {
        console.log(line.trim());
      }
    });
  });
});
