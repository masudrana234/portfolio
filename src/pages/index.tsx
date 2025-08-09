import Head from "next/head";
import { About } from "../components/CardAbout";
import { Header } from "../components/Header";
import { HomeHero } from "../components/Home";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { ScrollTop } from "../components/ScrollTop";
import { Footer } from "../components/Footer";
import { Experience } from "../components/Experience";
import { CardContact } from "../components/CardContact";
import { Section } from "../styles/styles";
import { Work } from "../components/Volunteer";
import { Education } from "../components/Education";
import { Achievements } from "../components/Achievements";
import { Testimonials } from "../components/Testimonials";
import { Publications } from "../components/Publications";
import { Certificates } from "../components/Certificates/index";
import { Work_Experience } from "../components/Work/index";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Home() {
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
        <title>{currentLang === 'bn' ? 'মোঃ মাসুদ রানার পোর্টফোলিও' : 'Md. Masud Rana\'s Portfolio'}</title>
        <meta 
          name="description" 
          content={currentLang === 'bn' 
            ? 'ব্যবস্থাপনা স্নাতক এবং ডিজিটাল মার্কেটিং পেশাদার মোঃ মাসুদ রানার পেশাদার পোর্টফোলিও' 
            : 'Professional portfolio of Md. Masud Rana, Management Graduate and Digital Marketing Professional'}
        />
        <meta property="og:title" content={currentLang === 'bn' ? 'মোঃ মাসুদ রানার পোর্টফোলিও' : 'Md. Masud Rana\'s Portfolio'} />
        <meta property="og:url" content="https://masud7.vercel.app" />
      </Head>
      
      <ScrollTop />
      <Section>
        <HomeHero />
        <About />
        <Skills />
        <Education />
        <Work_Experience/>
        <Experience />
        <Work />
        <Achievements />
        <Publications />
        <Certificates />
        <Projects />
        <Testimonials />
        <CardContact />
      </Section>

      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
