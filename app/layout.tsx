import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css'; // Global styles
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'NC Decor - Móveis e Decoração',
  description: 'Explore designs premium em Luis Eduardo Magalhães',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const stylePath = path.join(process.cwd(), 'public', 'style.css');
  let styleContent = '';
  try {
    styleContent = fs.readFileSync(stylePath, 'utf-8');
  } catch (error) {
    console.error('Error reading style.css:', error);
  }

  return (
    <html lang="pt-BR" className="w-mod-js w-mod-ix" data-wf-domain="woodiz-ttm.webflow.io" data-wf-page="67dbe21f59e71d28de66b34f" data-wf-site="67dbe21f59e71d28de66b346">
      <head>
        <link href="https://cdn.prod.website-files.com/67dbe21f59e71d28de66b346/css/woodiz-ttm.webflow.shared.abe872ec9.min.css" rel="stylesheet" type="text/css" />
        <style dangerouslySetInnerHTML={{__html: styleContent}} />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
        <script dangerouslySetInnerHTML={{__html: `WebFont.load({  google: {    families: ["Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"]  }});`}}></script>
        <script dangerouslySetInnerHTML={{__html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}}></script>
      </head>
      <body className="body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
