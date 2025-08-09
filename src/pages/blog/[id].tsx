import { GetServerSideProps } from 'next';
import axios from 'axios';
import createDOMPurify from 'dompurify';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { Footer } from '../../components/Footer';
import { ScrollTop } from '../../components/ScrollTop';
import { NewsletterForm } from '../../components/Newsletter';
import { MainContainer, GiscusContainer, MarkdownContainer, CenteredContainer, TextContainer, Tag, TOCContainer, TOCList, TOCItem, InfoContainer, InfoItem } from '../../styles/markdown';
import Link from 'next/link';
import { ButtonSecondary } from '../../styles/styles';
import { ArrowLeft } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import Giscus from '@giscus/react';
import TextToSpeechPlayer from '../../components/TTS/TextToSpeechPlayer';
import blogData from '../../data/blogs';
import { JSDOM } from 'jsdom';

interface BlogProps {
  htmlContent: string;
  title: string;
  date: string;
  readTime: string;
  tags: { name: string }[];
  discussions: any[];
}

export default function BlogDetail({ htmlContent, title, date, readTime, tags, discussions }: BlogProps) {
  const router = useRouter();
  const { id } = router.query;
  const { t, i18n } = useTranslation('common');
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');
  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>([]);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'bn');
  }, [router.locale]);

  useEffect(() => {
    const generateTOC = (htmlContent: string) => {
      const toc: { id: string; text: string; level: number }[] = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const headings = doc.querySelectorAll('h1, h2');
      headings.forEach((heading) => {
        toc.push({
          id: heading.id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.substring(1)),
        });
      });
      return toc;
    };

    setToc(generateTOC(htmlContent));
  }, [htmlContent]);

  const audioSrc = `/tts/blog${id}.mp3`;

  return (
    <>
      <Head>
        <title>{title} | Md. Masud Rana</title>
        <meta name="description" content={`Read ${title} by Md. Masud Rana, Management Graduate and Digital Marketer`} />
      </Head>
      <ScrollTop />
      <MainContainer>
        <br /><br />
        <TextContainer>
          <h1>{title}</h1>
          <InfoContainer>
            <InfoItem>{currentLang === 'bn' ? 'প্রকাশের তারিখ:' : 'Date Published:'} {date}</InfoItem>
            <InfoItem>{currentLang === 'bn' ? 'পড়ার সময়:' : 'Read Time:'} {readTime}</InfoItem>
          </InfoContainer>
          <div>
            {tags.map((tag) => (
              <Tag key={tag.name}>{tag.name}</Tag>
            ))}
          </div>
        </TextContainer>
        <TOCContainer>
          <h2>{currentLang === 'bn' ? 'সূচিপত্র' : 'Table of Contents'}</h2>
          <TOCList>
            {toc.map((item) => (
              <TOCItem key={item.id} level={item.level}>
                <a href={`#${item.id}`}>{item.text}</a>
              </TOCItem>
            ))}
          </TOCList>
        </TOCContainer>
        <TextToSpeechPlayer contentRef={contentRef} audioSrc={audioSrc} />
        <MarkdownContainer ref={contentRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
        <GiscusContainer>
          <Giscus
            repo="masudrana234/portfolio"
            repoId="YOUR_REPO_ID"
            category="Blog"
            categoryId="YOUR_CATEGORY_ID"
            mapping="specific"
            term={`Blog Post ID: ${id}`}
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="dark"
            lang={currentLang}
            loading="lazy"
          />
        </GiscusContainer>
        <NewsletterForm />
        <CenteredContainer>
          <Link href={'/blog'} legacyBehavior>
            <ButtonSecondary>
              <a>
                <ArrowLeft style={{ marginBottom: '-0.2rem' }} weight="bold" size={18} />{' '}
                {currentLang === 'bn' ? 'ফিরে যান' : 'Go Back'}
              </a>
            </ButtonSecondary>
          </Link>
        </CenteredContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    // Fetch blog content from your Blogger API
    const response = await axios.get(`https://masudrm.blogspot.com/feeds/posts/default/${id}?alt=json`);
    const blogContent = response.data.content.$t;

    // Create a DOMPurify instance
    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify(window);

    // Parse the HTML content
    const dom = new JSDOM(blogContent);
    const document = dom.window.document;

    // Clean up the content as needed
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    if (header) header.remove();
    if (footer) footer.remove();

    const firstH1 = document.querySelector('h1');
    if (firstH1) {
      let currentNode = firstH1.previousSibling;
      while (currentNode) {
        const previousNode = currentNode.previousSibling;
        currentNode.remove();
        currentNode = previousNode;
      }
      firstH1.remove();
    }

    // Get the sanitized HTML content
    const htmlContent = DOMPurify.sanitize(document.body.innerHTML);

    // Fetch additional blog data
    const blog = blogData.find((b) => b.id.toString() === id);
    if (!blog) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        htmlContent,
        title: blog.title[currentLang] || blog.title.en,
        date: blog.date[currentLang] || blog.date.en,
        readTime: blog.read[currentLang] || blog.read.en,
        tags: blog.tags,
      },
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return {
      notFound: true,
    };
  }
};
