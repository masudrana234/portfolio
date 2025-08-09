import Head from 'next/head'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Contacts() {
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
        <title>{currentLang === 'bn' ? 'যোগাযোগ | মোঃ মাসুদ রানা' : 'Contact | Md. Masud Rana'}</title>
        <meta
          name="description"
          content={currentLang === 'bn' 
            ? 'আমার সাথে যোগাযোগ করুন - ব্যবস্থাপনা এবং বিপণন সম্পর্কিত সহযোগিতার সুযোগ নিয়ে আলোচনা করুন' 
            : 'Get in touch with me - Let us discuss collaboration opportunities in management and marketing'}
        />
        <meta property="og:title" content={currentLang === 'bn' ? 'যোগাযোগ | মোঃ মাসুদ রানা' : 'Contact | Md. Masud Rana'} />
        <meta
          property="og:description"
          content={currentLang === 'bn' 
            ? 'আমার সাথে যোগাযোগ করুন - ব্যবস্থাপনা এবং বিপণন সম্পর্কিত সহযোগিতার সুযোগ নিয়ে আলোচনা করুন' 
            : 'Get in touch with me - Let us discuss collaboration opportunities in management and marketing'}
        />
        <meta property="og:url" content="https://masudrana.vercel.app/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ScrollTop />
      <Contact />
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  )
}
