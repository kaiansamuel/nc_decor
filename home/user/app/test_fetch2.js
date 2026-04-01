const https = require('https');
https.get('https://woodiz-ttm.webflow.io/', (res) => {
  let html = '';
  res.on('data', (chunk) => { html += chunk; });
  res.on('end', () => {
    const lines = html.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('More Templates')) {
        console.log(`Line ${i}:`, lines[i]);
      }
    }
  });
});
