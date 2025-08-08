import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function About() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/Professional_edited.jpg"
            alt="Masud Rana's Image"
            loading="lazy"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>{currentLang === 'ta' ? 'আমার সম্পর্কে' : 'About Me'}</h2>
            <li>
              {currentLang === 'ta' ? 
              'জগন্নাথ বিশ্ববিদ্যালয় থেকে ব্যবস্থাপনা স্টাডিজে বিএবিএ ডিগ্রি অর্জনকারী একজন উচ্চপ্রেরণাদায়ী এবং ফলাফল-ভিত্তিক পেশাদার।' : 
              'A highly motivated and results-oriented Management Studies graduate from Jagannath University.'}
            </li>
            <li>
              {currentLang === 'ta' ? 
              'ইন্টারেক্টিভ কেয়ারে ব্র্যান্ড রিপ্রেজেন্টেটিভ হিসেবে আমার অভিজ্ঞতা রয়েছে, যেখানে আমি বিপণন কৌশল তৈরি করেছি, ১০ সদস্যের একটি দলকে নেতৃত্ব দিয়েছি এবং বিক্রয় ও জড়িততা ২০% বৃদ্ধি করেছি।' : 
              'Experienced as a Brand Representative at Interactive Care, where I developed marketing strategies, led a team of 10, and increased sales & engagement by 20%.'}
            </li>
            <li>
              {currentLang === 'ta' ? 
              'আমার দক্ষতার মধ্যে রয়েছে ডিজিটাল মার্কেটিং, দল ব্যবস্থাপনা, এবং বিভিন্ন প্রযুক্তিগত সরঞ্জাম যেমন এমএস অফিস, অ্যাডোবি ফটোশপ, এবং ওয়েব ডেভেলপমেন্ট টুলস (HTML, CSS, JavaScript)।' : 
              'My skills include digital marketing, team management, and various technical tools like MS Office, Adobe Photoshop, and web development tools (HTML, CSS, JavaScript).'}
            </li>
          </div>

          <div className='aboutButton'>
            <Link href={'/resume'}>
              <Button>
                {currentLang === 'ta' ? 'রিজিউম' : 'Resume'}
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>
            </Link>
            <Link href={'/about'}>
              <ButtonAlternatives>
                {currentLang === 'ta' ? 'আরও পড়ুন' : 'Read more'}
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>
            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
