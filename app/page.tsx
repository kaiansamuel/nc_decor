import fs from 'fs';
import path from 'path';

export default function Home() {
  const contentPath = path.join(process.cwd(), 'public', 'content.html');
  let htmlContent = '';
  
  try {
    htmlContent = fs.readFileSync(contentPath, 'utf-8');
  } catch (error) {
    console.error('Error reading content.html:', error);
    htmlContent = '<p>Erro ao carregar o conteúdo.</p>';
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      
      {/* Inline styles to override Webflow loaders if any */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .w-editor .w-editor-bem-EditSiteButton { display: none !important; }
          .w-editor-bem-EditorLogo { display: none !important; }
          html.w-mod-js *[data-ix="preloader"] { display: none !important; }
          .preloader { display: none !important; }
          .w-webflow-badge { display: none !important; }
          .template-badge { display: none !important; }
          .product-amount-box, .product-2-amount-box, .cart-item-amount, .cart-total-amount, .product-amount, .product-compare-amount { display: none !important; }
          .product-badge-box, .product-2-badge { display: none !important; }
          .hero-2-coupen-box { display: none !important; }
          .footer-top, .top-bar, .nav-2-extra { display: none !important; }
        `
      }} />

      {/* Webflow Scripts */}
      <script 
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67dbe21f59e71d28de66b346" 
      ></script>
      <script 
        src="https://cdn.prod.website-files.com/67dbe21f59e71d28de66b346/js/webflow.174f31ab.a46c08c895cb3075.js" 
      ></script>
    </>
  );
}
