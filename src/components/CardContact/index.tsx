import Link from 'next/link'
import Image from 'next/image'
import { ButtonAlt, ButtonSecondary, Section } from '../../styles/styles'
import { CardContactContainer, CardContactContent } from './styles'
import { Pen, TelegramLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function CardContact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Section>
      <CardContactContainer>
        <div className='ellipse'> 
          <Image
            width={330}
            height={410} 
            src="/vectors/circles.svg"
            alt="circles"
            loading="lazy"
          />
        </div>
        <CardContactContent>
          <div className="description">
            <h2>{currentLang === 'ta' ? 'আসুন কথা বলি!' : 'Let\'s talk!'}</h2>
            <p>
              {currentLang === 'ta' ? 
              'আপনার যদি কোন প্রশ্ন থাকে বা শুধু হ্যালো বলতে চান, অনুগ্রহ করে আমার সাথে যোগাযোগ করুন। আমি যত তাড়াতাড়ি সম্ভব আপনাকে জবাব দেওয়ার চেষ্টা করব!' : 
              'If you have questions or would just like to say hello, please contact me. I will do my best to get back to you as soon as possible!'}
            </p>
          </div>

          <div className="contact">
            <Image 
              width={480} 
              height={500} 
              src="/contact.svg" 
              alt="contact image" 
              loading="lazy"
            />
          </div>
        </CardContactContent>

        <Link href={'/contact'} legacyBehavior>
          <ButtonAlt>
            {currentLang === 'ta' ? 'আমার সাথে যোগাযোগ করুন' : 'Contact Me'}{' '}
            <TelegramLogo
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonAlt>
        </Link>
        <Link href="mailto:masudrm50@gmail.com" legacyBehavior>
          <ButtonSecondary style={{
            marginTop: '1rem',
          }}>
            {currentLang === 'ta' ? 'ইমেইল করুন' : 'Send Email'}{' '}
            <Pen
              style={{
                marginBottom: '-0.1rem',
                marginLeft: '0.2rem'
              }}
              size={16}
              weight="bold"
            />
          </ButtonSecondary>
        </Link>
      </CardContactContainer>
    </Section>
  );
}
