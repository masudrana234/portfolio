import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { CV } from '../components/CV'
import { Description, Section, Title } from '../styles/styles'
import { PageSection } from '../styles/resume'
import { BsFileText } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;
const canva = process.env.NEXT_PUBLIC_CANVA_URL;

export default function Resume() {
  const resumeData = { canva }
  
  let previewData = '';
  if (resumeData.canva) {
    previewData = `${resumeData.canva.substr(
      0,
      resumeData.canva.lastIndexOf('/') + 1
    )}view?embed`;
  }

  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'bn');
  }, [router.locale]);

  return (
    <>
      <Head>
        <title>{currentLang === 'bn' ? 'রিজিউম | মোঃ মাসুদ রানা' : 'Resume | Md. Masud Rana'}</title>
        <meta
          name="description"
          content={currentLang === 'bn' 
            ? 'এটি আমার আপডেট করা রিজিউম, আপনি এটি দেখতে বা ডাউনলোড করতে পারেন' 
            : 'This is my updated resume, you can view or download it.'}
        />
        <meta property="og:title" content={currentLang === 'bn' ? 'রিজিউম | মোঃ মাসুদ রানা' : 'Resume | Md. Masud Rana'} />
        <meta
          property="og:description"
          content={currentLang === 'bn' 
            ? 'এটি আমার আপডেট করা রিজিউম, আপনি এটি দেখতে বা ডাউনলোড করতে পারেন' 
            : 'This is my updated resume, you can view or download it.'}
        />
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p>../{currentLang === 'bn' ? 'রিজিউম' : 'resume'}</p>
          {currentLang === 'bn' ? 'পেশাদার রিজিউম' : 'Professional Resume'}
          <span>
            <BsFileText /> {currentLang === 'bn' ? 'রিজিউম' : 'Resume'}
          </span>
        </Title>
        <Description style={{width:'100%', textAlign: 'center', marginBottom: '1px'}}>
          {currentLang === 'bn' 
            ? 'এটি আমার আপডেট করা পেশাদার রিজিউম, Canva ওয়েবসাইট দ্বারা চালিত। নীচের ডাউনলোড বাটনে ক্লিক করে আপনি আমার রিজিউম ডাউনলোড করতে পারেন।' 
            : 'This is my updated professional resume, powered by Canva. You can download my resume by clicking the download button below.'}
        </Description>

        <PageSection>
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title={currentLang === 'bn' ? 'মোঃ মাসুদ রানার রিজিউম' : 'Md. Masud Rana Resume'}
          />

          <CV />
        </PageSection>
      </Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  )
}
