import Link from 'next/link'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'
import { FooterContainer, FooterContent } from './styles'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export function Footer() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <FooterContainer>
      <FooterContent>
        <h4> &copy; {new Date().getFullYear()} Masud Rana</h4>
        <div className="footer_links">
          <Link 
            href={'/privacypolicy'} 
            aria-label={currentLang === 'ta' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'} 
            legacyBehavior
          >
            {currentLang === 'ta' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}
          </Link>
          <Link 
            href={'/terms&condition'} 
            aria-label={currentLang === 'ta' ? 'শর্তাবলী' : 'Terms and Conditions'} 
            legacyBehavior
          >
            {currentLang === 'ta' ? 'শর্তাবলী' : 'Terms and Conditions'}
          </Link>
        </div>
      </FooterContent>
      <div className="links">
        <Link
          href={'https://github.com/masudrana234'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'গিটহাব লিংক' : 'Link to Github'}
        >
          <FiGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/masudrana7'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'লিংকডইন লিংক' : 'Link to Linkedin'}
        >
          <FiLinkedin />
        </Link>
        <Link
          href={'https://www.instagram.com/masudrana_rm'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'ইনস্টাগ্রাম' : 'Instagram'}
        >
          <FiInstagram />
        </Link>
        <Link
          href={'https://x.com/masudrana_rm'}
          target="_blank"
          aria-label={currentLang === 'ta' ? 'টুইটার' : 'Twitter'}
        >
          <FiTwitter />
        </Link>
      </div>
    </FooterContainer>
  );
}
