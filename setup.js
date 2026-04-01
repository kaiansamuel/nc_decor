const fs = require('fs');
const https = require('https');
const path = require('path');

https.get('https://woodiz-ttm.webflow.io/', (res) => {
  let html = '';
  res.on('data', (chunk) => { html += chunk; });
  res.on('end', () => {
    // Replace texts
    html = html.replace(/<div[^>]*class="top-bar-block block-2"[^>]*>[\s\S]*?<\/div><\/div>/g, '');
    html = html.replace(/<div class="loop-item"><div class="loop-icon-box"><img[^>]*><\/div><div class="loop-text-box"><div class="loop-text">Free shipping for all order aboves \$500<\/div><\/div><\/div>/g, '');
    html = html.replace(/<div class="features-2-item-box with-borders">[\s\S]*?<div class="features-title">Free shipping<\/div>[\s\S]*?<\/div><\/div><\/div><\/div><\/div>/g, '');
    html = html.replace(/Free shipping for all order aboves \$500/g, '');
    html = html.replace(/Frete grátis para pedidos acima de R\$ 500/g, '');
    
    html = html.replace(/Woodiz/g, 'NC Decor');
    // Only replace woodiz if it's not part of a URL
    html = html.replace(/([^\/])woodiz([^\.])/g, '$1ncdecor$2');
    // Restore the CSS URL just in case
    html = html.replace(/ncdecor-ttm\.webflow\.shared/g, 'woodiz-ttm.webflow.shared');
    html = html.replace(/ncdecor-ttm\.webflow\.io/g, 'woodiz-ttm.webflow.io');
    html = html.replace(/Woodiz - Webflow Ecommerce website template/g, 'NC Decor - Móveis e Decoração');
    html = html.replace(/Explore premium designs with seamless navigation/g, 'Explore designs premium em Luis Eduardo Magalhães');
    html = html.replace(/Sign up for our newsletter and get 15% off your next order/g, 'Assine nossa newsletter e ganhe 15% de desconto no seu próximo pedido');
    html = html.replace(/Discount on 3 items buy together/g, 'Desconto na compra de 3 itens juntos');
    html = html.replace(/Home layout one/g, 'Início');
    html = html.replace(/Home layout two/g, 'Início 2');
    html = html.replace(/All pages/g, 'Todas as páginas');
    html = html.replace(/About/g, 'Sobre');
    html = html.replace(/Blog/g, 'Blog');
    html = html.replace(/Contact/g, 'Contato');
    html = html.replace(/Shop details/g, 'Detalhes da Loja');
    html = html.replace(/Shop now/g, 'Comprar agora');
    html = html.replace(/Shop/g, 'Loja');
    html = html.replace(/Categories/g, 'Categorias');
    html = html.replace(/Blog details/g, 'Detalhes do Blog');
    html = html.replace(/Search results/g, 'Resultados da Busca');
    html = html.replace(/Protected page/g, 'Página Protegida');
    html = html.replace(/Menu/g, 'Menu');
    html = html.replace(/Search…/g, 'Buscar...');
    html = html.replace(/Add To Cart/g, 'Adicionar ao Carrinho');
    html = html.replace(/Cart/g, 'Carrinho');
    html = html.replace(/Your Carrinho/g, 'Seu Carrinho');
    html = html.replace(/Subtotal/g, 'Subtotal');
    html = html.replace(/Continue to Checkout/g, 'Finalizar Compra');
    html = html.replace(/Oops! no items found./g, 'Ops! Nenhum item encontrado.');
    html = html.replace(/Let's add some products./g, 'Vamos adicionar alguns produtos.');
    html = html.replace(/BEST COLLECTIONS/g, 'MELHORES COLEÇÕES');
    html = html.replace(/GREAT RANGE/g, 'GRANDE VARIEDADE');
    html = html.replace(/Designer/g, 'Design');
    html = html.replace(/Living/g, 'Ambientes');
    html = html.replace(/Up to <span class="hero-2-discount-span">45%<\/span> off/g, 'Até <span class="hero-2-discount-span">45%</span> de desconto');
    html = html.replace(/When a finished piece expresses our creativity, either through the natural beauty of the wood, the design or the marks of shaping./g, 'Quando uma peça finalizada expressa nossa criatividade, seja pela beleza natural da madeira, pelo design ou pelas marcas da modelagem. Visite nossa loja em Luis Eduardo Magalhães.');
    html = html.replace(/VIEW ALL COLLECTIONS/g, 'VER TODAS AS COLEÇÕES');
    html = html.replace(/Coupon :/g, 'Cupom :');
    html = html.replace(/Discover more for you/g, 'Descubra mais para você');
    html = html.replace(/All/g, 'Todos');
    html = html.replace(/Best selling/g, 'Mais vendidos');
    html = html.replace(/New arrival/g, 'Novidades');
    html = html.replace(/Reviews/g, 'Avaliações');
    html = html.replace(/Stars,/g, 'Estrelas,');
    html = html.replace(/Premium quality designs created for your home/g, 'Designs de qualidade premium criados para sua casa');
    html = html.replace(/Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes/g, 'Visite a NC Decor em Luis Eduardo Magalhães e transforme sua casa com móveis de alta qualidade e design exclusivo.');
    html = html.replace(/VIew all Categories/g, 'Ver todas as Categorias');
    html = html.replace(/Chair/g, 'Cadeira');
    html = html.replace(/Lamp/g, 'Luminária');
    html = html.replace(/Sofa/g, 'Sofá');
    html = html.replace(/Table/g, 'Mesa');
    html = html.replace(/Features raw materials and metal accents/g, 'Apresenta matérias-primas e detalhes em metal');
    html = html.replace(/Embraces eclectic stylesand natural materials/g, 'Abraça estilos ecléticos e materiais naturais');
    html = html.replace(/Classic designs with ornate details/g, 'Designs clássicos com detalhes ornamentados');
    html = html.replace(/Finding the best deals and reputable retailers/g, 'Encontrando as melhores ofertas e varejistas respeitáveis');
    html = html.replace(/Our latest products/g, 'Nossos produtos mais recentes');
    html = html.replace(/Best services that we have/g, 'Os melhores serviços que temos');
    html = html.replace(/Available to you 24\/7/g, 'Disponível para você 24/7');
    html = html.replace(/Extended warranty plans/g, 'Planos de garantia estendida');
    html = html.replace(/Our latest news and articles/g, 'Nossas últimas notícias e artigos');
    html = html.replace(/Get exclusive updates and subscribe to our newsletter/g, 'Receba atualizações exclusivas e assine nossa newsletter');
    html = html.replace(/Your email address/g, 'Seu endereço de e-mail');
    html = html.replace(/Yes, subscribe me to your newsletter./g, 'Sim, quero assinar a newsletter.');
    html = html.replace(/Subscribe now/g, 'Assinar agora');
    html = html.replace(/Useful link/g, 'Links úteis');
    html = html.replace(/Our utilities/g, 'Nossas utilidades');
    html = html.replace(/Get in touch/g, 'Entre em contato');
    html = html.replace(/Need assistance\? Give us a call./g, 'Precisa de ajuda? Ligue para nós.');
    html = html.replace(/Have questions or suggestions\?/g, 'Tem dúvidas ou sugestões?');
    html = html.replace(/© 2025 by/g, '© 2026 por');
    html = html.replace(/More Templates/g, 'Mais Templates');
    
    html = html.replace(/ template by <a href="https:\/\/webflow\.com\/templates\/designers\/themetechmount" target="_blank" class="copyright-text-link">Themetechmount<\/a> \. Made with <a href="https:\/\/webflow\.com\/" target="_blank" class="copyright-text-link">Webflow <\/a>/g, '');
    html = html.replace(/<div class="template-badge">[\s\S]*?<\/div><\/a><\/div>/g, '');
    html = html.replace(/<div class="footer-top">[\s\S]*?<div class="footer-bottom">/g, '<div class="footer-bottom">');
    html = html.replace(/<div class="top-bar">[\s\S]*?<\/div><\/div><\/div><\/div><\/div>/g, '');
    html = html.replace(/<div class="nav-2-extra">[\s\S]*?<\/section>/g, '</div></div></div></div></div></section>');
    
    // Additional Portuguese Translations
    html = html.replace(/Remove/g, 'Remover');
    html = html.replace(/Pay with browser\./g, 'Pagar com o navegador.');
    html = html.replace(/Product is not available in this quantity\./g, 'Produto não disponível nesta quantidade.');
    html = html.replace(/Something went wrong when adding this item to the cart\./g, 'Algo deu errado ao adicionar este item ao carrinho.');
    html = html.replace(/Checkout is disabled on this site\./g, 'O checkout está desativado neste site.');
    html = html.replace(/The order minimum was not met\. Add more items to your cart to continue\./g, 'O pedido mínimo não foi atingido. Adicione mais itens ao seu carrinho para continuar.');
    html = html.replace(/Before you purchase, please use your email invite to verify your address so we can send order updates\./g, 'Antes de comprar, use seu convite por e-mail para verificar seu endereço para que possamos enviar atualizações do pedido.');
    html = html.replace(/Curve floor lamps/g, 'Luminárias de chão curvas');
    html = html.replace(/Design wooden chair/g, 'Cadeira de madeira design');
    html = html.replace(/Furniture wooden floor lamp/g, 'Luminária de chão de madeira');
    html = html.replace(/Furniture wooden sideboard/g, 'Aparador de madeira');
    html = html.replace(/Handicraft wooden chairs/g, 'Cadeiras de madeira artesanais');
    html = html.replace(/Home furniture wooden sofa/g, 'Sofá de madeira para casa');
    html = html.replace(/Low height masterbed/g, 'Cama de casal baixa');
    html = html.replace(/Maharaja style round table/g, 'Mesa redonda estilo marajá');
    html = html.replace(/Wooden table lamp/g, 'Luminária de mesa de madeira');
    html = html.replace(/Wooden sideboard cabinet/g, 'Armário aparador de madeira');
    html = html.replace(/Wooden king side sofa/g, 'Sofá king size de madeira');
    html = html.replace(/Wooden double bed design/g, 'Cama de casal de madeira');
    html = html.replace(/Wooden dining table/g, 'Mesa de jantar de madeira');
    html = html.replace(/Explore the intersection of contemporary and classic furniture/g, 'Explore a interseção de móveis contemporâneos e clássicos');
    html = html.replace(/Discover the power of furniture in creating unforgettable rooms/g, 'Descubra o poder dos móveis na criação de ambientes inesquecíveis');
    html = html.replace(/Choosing the perfect furniture for every room in your home/g, 'Escolhendo os móveis perfeitos para cada ambiente da sua casa');
    html = html.replace(/February 20, 2025/g, '20 de Fevereiro de 2025');
    html = html.replace(/January 12, 2025/g, '12 de Janeiro de 2025');
    html = html.replace(/December 27, 2024/g, '27 de Dezembro de 2024');
    html = html.replace(/Thank you! Your submission has been received!/g, 'Obrigado! Sua inscrição foi recebida!');
    html = html.replace(/Oops! Something went wrong while submitting the form\./g, 'Ops! Algo deu errado ao enviar o formulário.');
    html = html.replace(/Password Page/g, 'Página de Senha');
    html = html.replace(/Style Guide/g, 'Guia de Estilo');
    html = html.replace(/Changelog/g, 'Registro de Alterações');
    html = html.replace(/Licenses/g, 'Licenças');
    html = html.replace(/Lorem ipsum dolor sit amet consectetur praesent/g, 'Qualidade garantida e design exclusivo para você');

    // Fix image URLs
    html = html.replace(/src="assets\//g, 'src="https://woodiz-ttm.webflow.io/assets/');
    html = html.replace(/href="assets\//g, 'href="https://woodiz-ttm.webflow.io/assets/');

    // Extract body content
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : html;

    // Extract head content (specifically stylesheets and style blocks)
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    let headContent = headMatch ? headMatch[1] : '';
    const cssLinks = headContent.match(/<link[^>]*rel="stylesheet"[^>]*>/gi) || [];
    
    // Extract inner CSS from style tags
    let innerCss = '';
    const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let match;
    while ((match = styleRegex.exec(headContent)) !== null) {
      innerCss += match[1] + '\n';
    }

    // Remove scripts from body so we can load them via Next.js Script
    bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '');

    fs.mkdirSync('public', { recursive: true });
    fs.writeFileSync('public/content.html', bodyContent);
    fs.writeFileSync('public/head.html', cssLinks.join('\n'));
    fs.writeFileSync('public/style.css', innerCss);
    console.log('Successfully fetched and processed HTML');
  });
}).on('error', (e) => {
  console.error(e);
});
