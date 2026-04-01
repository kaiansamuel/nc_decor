const https = require('https');
https.get('https://woodiz-ttm.webflow.io/', (res) => {
  let html = '';
  res.on('data', (chunk) => { html += chunk; });
  res.on('end', () => {
    const match = html.match(/<div class="copyright-text">([\s\S]*?)<\/div>/);
    if (match) {
      console.log("Copyright:", match[1]);
    }
    const badgeMatch = html.match(/<a[^>]*class="w-webflow-badge"[^>]*>([\s\S]*?)<\/a>/);
    if (badgeMatch) {
      console.log("Badge:", badgeMatch[0]);
    }
    const templateMatch = html.match(/More Templates/i);
    if (templateMatch) {
      console.log("Template Match:", templateMatch[0]);
    }
  });
});
