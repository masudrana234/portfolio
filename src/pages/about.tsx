import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, InstagramLogo } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { Instagram } from './api/Instagram'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import React from 'react'
import { Linkedin } from './api/Linkedin'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  const { t, i18n } = useTranslation('common'); // Use the 'common' namespace
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return <>
   <Head>
  <title>{currentLang === 'ta' ? 'সম্পর্কে | মোঃ মাসুদ রানা' : 'About | Md. Masud Rana'}</title>
  <meta
    name="description"
    content={currentLang === 'ta' ? 'আমি মোঃ মাসুদ রানা, জগন্নাথ বিশ্ববিদ্যালয় থেকে ব্যবস্থাপনা স্টাডিজে বিএবিএ ডিগ্রিধারী এবং একজন উচ্চপ্রেরণাদায়ী পেশাদার।' : 'I am Md. Masud Rana, a BBA graduate in Management Studies from Jagannath University and a highly motivated professional.'}
  />
  <meta property="og:title" content={currentLang === 'ta' ? 'সম্পর্কে | মোঃ মাসুদ রানা' : 'About | Md. Masud Rana'} />
  <meta
    property="og:description"
    content={currentLang === 'ta' ? 'আমি মোঃ মাসুদ রানা, জগন্নাথ বিশ্ববিদ্যালয় থেকে ব্যবস্থাপনা স্টাডিজে বিএবিএ ডিগ্রিধারী এবং একজন উচ্চপ্রেরণাদায়ী পেশাদার।' : 'I am Md. Masud Rana, a BBA graduate in Management Studies from Jagannath University and a highly motivated professional.'}
  />
</Head>

<ScrollTop />
<Section>
  <S.AboutContainer>
    <Title>
      <p>{currentLang === 'ta' ? '../সম্পর্কে' : '../about'}</p>
      {currentLang === 'ta' ? 'আমার সম্পর্কে!!' : 'About Myself!!'}
      <span>
        <BiUserPin /> {currentLang === 'ta' ? 'সম্পর্কে' : 'About'}
      </span>
    </Title>

    <S.AboutContent>
      <S.AboutImage>
        <img
          className="AboutImg"
  src="/Saravana.jpg"
          alt="Md. Masud Rana"
        />

        <div className="links">
          <ul>
            <Link
              href={'https://github.com/masudrana234'}
              target="_blank"
              aria-label="Github">
              <AiFillGithub size={25} />@masudrana234
            </Link>
            <Link
              href={'https://www.linkedin.com/in/masudrana7/'}
              target="_blank"
              aria-label="Linkedin">
              <BsLinkedin size={25} />@masudrana7
            </Link>
            <Link
              href={'https://api.whatsapp.com/send?phone=8801308202656'}
              target="_blank"
              aria-label="WhatsApp">
              <RiWhatsappFill size={25} />+880 1308-202656
            </Link>
            <Link
              href={'mailto:masudrm50@gmail.com'}
              className="email"
              target="_blank"
              aria-label="email">
              <GrMail size={25} />masudrm50@gmail.com
            </Link>
          </ul>
        </div>

        <S.AboutContact>
          <h3>
            {currentLang === 'ta' ? 'আসুন কথা বলি, হয়তো আমরা একসাথে একটি দুর্দান্ত প্রকল্প তৈরি করতে পারি?' : 'Lets talk, maybe create an amazing project together?'}
          </h3>
          <p>{currentLang === 'ta' ? 'আমাকে একটি বার্তা পাঠান! 😉' : 'Send me a message! 😉'}</p>
          <Link href={'/contact'}>
            <ButtonAlt>{currentLang === 'ta' ? 'যোগাযোগ করুন' : 'Contact'}</ButtonAlt>
          </Link>
        </S.AboutContact>
      </S.AboutImage>
      
         <S.AboutDescription>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '👋 আসসালামু আলাইকুম! আমি মোঃ মাসুদ রানা, 🎓 জগন্নাথ বিশ্ববিদ্যালয় থেকে ব্যবস্থাপনা স্টাডিজে বিএবিএ ডিগ্রিধারী এবং একজন উচ্চপ্রেরণাদায়ী পেশাদার।' : '👋 Hello! I am Md. Masud Rana, 🎓 a BBA graduate in Management Studies from Jagannath University and a highly motivated professional.'}
  </p>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '💼 বর্তমানে আমি ইন্টারেক্টিভ কেয়ারে একজন ব্র্যান্ড প্রতিনিধি হিসেবে কাজ করছি, যেখানে আমি ১০ সদস্যের একটি দলকে নেতৃত্ব দিয়েছি এবং বিক্রয় ও জড়িততা ২০% বৃদ্ধি করেছি।' : '💼 Currently working as a Brand Representative at Interactive Care, where I led a team of 10 and increased sales & engagement by 20%.'}
  </p>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '📈 আমার দক্ষতার মধ্যে রয়েছে ডিজিটাল মার্কেটিং, দল ব্যবস্থাপনা, এবং বিভিন্ন প্রযুক্তিগত সরঞ্জাম যেমন এমএস অফিস, অ্যাডোবি ফটোশপ, এবং ওয়েব ডেভেলপমেন্ট টুলস (HTML, CSS, JavaScript)।' : '📈 My skills include digital marketing, team management, and various technical tools like MS Office, Adobe Photoshop, and web development tools (HTML, CSS, JavaScript).'}
  </p>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '🎓 আমার শিক্ষাগত যোগ্যতার মধ্যে রয়েছে জগন্নাথ বিশ্ববিদ্যালয় থেকে বিএবিএ (সিজিপিএ ৩.৬০), রাজশাহী কলেজ থেকে এইচএসসি (জিপিএ ৫.০০), এবং আল হেলাল ইসলামি একাডেমী অ্যান্ড কলেজ থেকে এসএসসি (জিপিএ ৫.০০)।' : '🎓 My academic qualifications include BBA from Jagannath University (CGPA: 3.60), HSC from Rajshahi College (GPA: 5.00), and SSC from Al Helal Islami Academy & College (GPA: 5.00).'}
  </p>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '🌟 আমি বাংলাদেশ ন্যাশনাল ক্যাডেট কোর (বিএনসিসি)-এর একজন ক্যাডেট ছিলাম, যেখানে আমি শৃঙ্খলা, দলগত কাজ এবং নেতৃত্ব প্রদর্শন করেছি।' : '🌟 I was a Cadet in Bangladesh National Cadet Corps (BNCC), demonstrating discipline, teamwork, and leadership.'}
  </p>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '🌍 আমার শখের মধ্যে রয়েছে নতুন প্রযুক্তি শেখা, ব্যবসায়িক কেস স্টাডি পড়া এবং সামাজিক কার্যক্রমে অংশগ্রহণ করা। আমি বিশ্বাস করি যে ক্রমাগত শেখা এবং ব্যক্তিগত উন্নয়নই সাফল্যের চাবিকাঠি।' : '🌍 My hobbies include learning new technologies, reading business case studies, and participating in social activities. I believe continuous learning and personal development are keys to success.'}
  </p>
  <p style={{ textAlign: 'justify' }}>
    {currentLang === 'ta' ? '🤝 আমি সবসময় নতুন চ্যালেঞ্জ এবং সহযোগিতার সুযোগ খুঁজছি। যদি আপনি একজন কঠোর পরিশ্রমী, লক্ষ্যপ্রণোদিত এবং দলগত কাজে বিশ্বাসী ব্যক্তির সন্ধান করেন, তাহলে আমি আপনার জন্য উপযুক্ত হতে পারি!' : '🤝 I am always looking for new challenges and collaboration opportunities. If you are looking for a hardworking, goal-oriented and team-player individual, I might be the right fit!'}
  </p>
</S.AboutDescription>
        </S.AboutContent>
      </S.AboutContainer>

      {/* Social Begins */}

     <Title>
  {currentLang === 'ta' ? 'লিংকডইন পোস্ট' : 'LinkedIn Post'}
  <span>
    <BsLinkedin /> {currentLang === 'ta' ? 'সাম্প্রতিক' : 'Latest'}
  </span>
</Title>
<S.InBox>
  <Linkedin />
</S.InBox>
<Title>
  {currentLang === 'ta' ? 'ইনস্টাগ্রাম পোস্ট' : 'Instagram Post'}
  <span>
    <InstagramLogo /> {currentLang === 'ta' ? 'সাম্প্রতিক' : 'Latest'}
  </span>
</Title>
<S.InBox>
  <Instagram />
</S.InBox>
<a style={{ textAlign: 'center' }}>
  {currentLang === 'ta' ? 'আপনার ❤️ দেখান, লাইক এবং কমেন্ট করে, আরও আপডেটের জন্য আমার ইনস্টাগ্রাম ফলো করুন।' : 'Show your ❤️ by liking and commenting, Follow me on Instagram for more updates.'}
</a>

      {/* Social Ends */}

      <Link href={'/#home'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            {currentLang === 'ta' ? 'পেছনে ফিরে যান' : 'Go Back'}
          </a>
        </ButtonSecondary>
      </Link>
    </Section>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src={botkey} defer></script>
    <Footer />
  </>;
}

