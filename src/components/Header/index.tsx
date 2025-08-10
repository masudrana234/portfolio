import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '../../styles/styles'
import { useThemeContext } from '../../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSwitcher from '../Language/index';
import Settings from '../Settings/SettingsButton';
import AudioPlayer from '../Music/AudioPlayer';
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

export function Header() {
  const [open, setOpen] = useState(false);
  const { currentTheme, toggleTheme } = useThemeContext(); 
  const handleOpen = () => {
    setOpen(!open);
  };
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');
  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content" style={{ display: 'flex' }}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={40}
              height={40}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Masud Rana'}
        </Link>
        <div className="settings">
          <Settings toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </div>
        <style jsx>{`
          .settings {
            padding-top: 0.2rem;
            padding-bottom: 0.2rem;
            padding-left: 0.5rem;
            margin: 0 0.5rem;
          }
        `}</style>
        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={30} weight="bold" />
          ) : (
            <List size={30} weight="bold" />
          )}
        </MobileIcon>
      </div>
      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>
              <span>{currentLang === 'ta' ? 'হোম' : 'Home'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/about'}>
              <span>{currentLang === 'ta' ? 'সম্পর্কে' : 'About'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/experience'}>
              <span>{currentLang === 'ta' ? 'অভিজ্ঞতা' : 'Experience'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/blog'}>
              <span>{currentLang === 'ta' ? 'ব্লগ' : 'Blogs'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/projects'}>
              <span>{currentLang === 'ta' ? 'প্রকল্প' : 'Projects'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/resume'}>
              <span>{currentLang === 'ta' ? 'জীবনবৃত্তান্ত' : 'Resume'}</span>
            </Link>
          </li>
          <li>
            <Link href={'/contact'}>
              <span>{currentLang === 'ta' ? 'যোগাযোগ' : 'Contact'}</span>
            </Link>
          </li>
        </ul>
        <Icons>
          <Link
            href={'https://github.com/masudrana234'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'গিটহাব লিঙ্ক' : 'Link to Github'}>
            <FiGithub />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/masudrana7/'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'লিংকডইন লিঙ্ক' : 'Link to Linkedin'}>
            <FiLinkedin />
          </Link>
          <Link
            href={'https://www.instagram.com/masudrana_rm?utm_source=qr'}
            target="_blank"
            aria-label={currentLang === 'ta' ? 'ইনস্টাগ্রাম' : 'Instagram'}>
            <FiInstagram />
          </Link>
          <Link
            href={'https://api.whatsapp.com/send?phone=8801308202656'}
            target="_blank"
            aria-label={currentLang === 'ta' ? হোয়াটসঅ্যাপে যোগাযোগ করুন' : 'Link to contact via WhatsApp'}>
            <FaWhatsapp />
          </Link>
        </Icons>
      </NavMenu>
    </HeaderContainer>
  );
}

