import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const meta = {
  title: 'Md. Masud Rana - Management Graduate & Data Analyst',
  description: 'Professional portfolio of Md. Masud Rana showcasing management expertise, marketing skills, and technical capabilities',
  image: 'public/og-image.jpg'
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en-BD">
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Md. Masud Rana" />
          <meta name="description" content={meta.description} />
          <meta itemProp="name" content={meta.title} />
          <meta itemProp="description" content={meta.description} />
          <meta itemProp="image" content={meta.image} />
          <meta
            name="keywords"
            content="Md. Masud Rana, Management Graduate, Digital Marketer, Brand Representative, Portfolio, Jagannath University, Marketing Strategies, Team Leadership, SEO, Content Marketing, Business Management"
          />
          <meta name="copyright" content="Md. Masud Rana 2024" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="en-BD" />
          <meta name="rating" content="general" />
          <link rel="canonical" href="https://masud7.vercel.app/" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:url" content="https://masud7.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Md. Masud Rana" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:image" content={meta.image} />
          <meta property="og:locale" content="en_BD" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta name="twitter:image" content={meta.image} />
          <meta name="twitter:creator" content="@masudrana_rm" />

          <link rel="icon" href="/favicon.png" />
          
          {/* LinkedIn Profile */}
          <meta name="linkedin:profile" content="https://www.linkedin.com/in/masudrana7" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



