import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import experiences from '../data/experiences'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Work } from '../components/Volunteer'
import { ScrollTop } from '../components/ScrollTop'
import { Certificates } from '../components/Certificates'
import { Section, Title, Description, Button } from '../styles/styles'
import { TabButton, TabContent, TabsContainer } from '../styles/experience'
import { Briefcase } from 'phosphor-react'
import works from '../data/experiences'
import { Education } from '../components/Education'
import Link from 'next/link'
import Testimonials from '../components/Testimonials'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import React from 'react'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

export default function Experience() {
  const [tabIndex, setTabIndex] = useState(0);
  let numbering = 0;

  const [query, setQuery] = useState("");
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'bn'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'bn');
  }, [router.locale]);

  return (
    <div>
      <Head>
        <title>{currentLang === 'bn' ? 'অভিজ্ঞতা | মোঃ মাসুদ রানা' : 'Experience | Md. Masud Rana'}</title>
        <meta 
          name="description" 
          content={currentLang === 'bn' 
            ? 'আমার পেশাদার অভিজ্ঞতা এবং যোগ্যতা দেখুন' 
            : 'View my professional experience and qualifications'}
        />
      </Head>

      <ScrollTop />
      <Section>
        <Title>
          <p>../{currentLang === 'bn' ? 'অভিজ্ঞতা' : 'experience'}</p>
          {currentLang === 'bn' ? 'পেশাদার অভিজ্ঞতা' : 'Professional Experience'}
          <span>
            <Briefcase /> {currentLang === 'bn' ? 'কাজ' : 'Work'}
          </span>
        </Title>

        <Description>
          <p>
            {currentLang === 'bn' 
              ? 'আমি একজন ব্র্যান্ড প্রতিনিধি হিসেবে কাজ করেছি যেখানে আমি ১০ সদস্যের একটি দলকে নেতৃত্ব দিয়েছি এবং বিক্রয় ২০% বৃদ্ধি করেছি। আমার ব্যবস্থাপনা এবং বিপণন কৌশল সম্পর্কে অভিজ্ঞতা রয়েছে।'
              : 'I have worked as a Brand Representative where I led a team of 10 and increased sales by 20%. I have experience in management and marketing strategies.'}
          </p>
        </Description>

        <TabsContainer>
          <Tabs
            className="tabs"
            selectedIndex={tabIndex}
            onSelect={index => setTabIndex(index)}
            selectedTabClassName={'is-active'}
            selectedTabPanelClassName={'is-active'}
          >
            <TabButton>
              <TabList className="tab__list">
                {works &&
                  works.map(exp => {
                    const description = exp.description[currentLang];
                    if (exp.id) {
                      numbering += 1;
                      return (
                        <React.Fragment key={exp.id}>
                          <h2>
                            {numbering >= 0 && numbering <= 10
                              ? `0${numbering - 1}`
                              : `${numbering - 1}`}
                          </h2>
                          <Tab className="tab">
                            <button>{exp.title[currentLang]}</button>
                          </Tab>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
              </TabList>
            </TabButton>
            <TabContent>
                {works.map(exp => (
                  <TabPanel className="tab__panel" key={exp.id}>
                    <div className="title-container">
                      <div className="title-content">
                        <div className="title">
                          <h1>{exp.title[currentLang]}</h1>
                          <div className="sub"></div>
                          <h2>{exp.subTitle[currentLang]}</h2>
                        </div>
                      </div>
                      <div className="office">
                        <h3>{exp.office[currentLang]}</h3>
                        <h4>{exp.date}</h4>
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: '1rem',
                        textAlign: 'justify',
                        marginBottom: '1rem'
                      }}
                    >
                      {exp.description[currentLang] ? exp.description[currentLang].split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      )) : 'Description not available'}
                    </p>
                    <div
                      style={{
                        marginTop: '1rem',
                        marginBottom: '1rem'
                      }}
                      className="links"
                    >
                      <a href={exp.link} target="_blank" rel="noreferrer">
                        <Button>{currentLang === 'bn' ? 'রিপোর্ট দেখুন' : 'View Report'}</Button>
                      </a>
                    </div>

                    <div className="techs">
                      <h3>{currentLang === 'bn' ? 'দক্ষতা:' : 'Skills:'}</h3>
                      <ul>
                        {exp.tags.map(tag => (
                          <div className="tags" key={tag.name}>
                            <Image
                              width={50}
                              height={50}
                              src={tag.icon}
                              alt={tag.name}
                            />
                            <h4>{tag.name}</h4>
                          </div>
                        ))}
                      </ul>
                    </div>
                  </TabPanel>
                ))}
            </TabContent>
          </Tabs>
        </TabsContainer>
        <Work />
        <Testimonials />
        <Education />
        <Certificates />
      </Section>
      <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
      <script src={botkey} defer></script>
      <Footer />
    </div>
  );
}
