/* eslint-disable-next-line import/no-anonymous-default-export */
import Link from 'next/link'
import { Form } from './Form'
import { Description, Section, Title } from '../../styles/styles'
import { ContainerContact, ContactContent, ResponsiveIframeContainer } from './styles'
import { BsWhatsapp } from 'react-icons/bs'
import { Envelope, TelegramLogo, LinkedinLogo } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const calendy = process.env.NEXT_PUBLIC_CALENDLY_URL;
const calender = process.env.NEXT_PUBLIC_PORTFOLIO_CALENDER_URL;

export function Contact() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState<'en' | 'ta'>('en');

  useEffect(() => {
    const { locale } = router;
    setCurrentLang(locale as 'en' | 'ta');
  }, [router.locale]);

  return (
    <Section>
      <Title>
        <p>../contact</p>
        {currentLang === 'ta' ? 'தொடர்பு படிவம்' : 'Contact Form'}
        <span>
          <Envelope /> {currentLang === 'ta' ? 'தொடர்பு' : 'Contact'}
        </span>
      </Title>
      <Description>
        {currentLang === 'ta' ? 'সুতরাং আপনি যদি কঠোর পরিশ্রমী, প্রকৃত এবং সবসময় একটি ভাল চ্যালেঞ্জের জন্য প্রস্তুত কাউকে খুঁজছেন, তাহলে আমার চেয়ে আর কোথাও দেখার দরকার নেই! আসুন যোগাযোগ করি এবং দেখি কীভাবে আমরা একসাথে পরিবর্তন আনতে পারি' : 'So if you are looking for someone hardworking, authentic and always up for a good challenge, look no further than yours truly! Lets connect and see how we can make a difference together:)'}
      </Description>

      <ContainerContact>
        <ContactContent>
          <div className="contact-content">
            <h4>
              <LinkedinLogo size={22} color="#00fffb" /> Linkedin{' '}
            </h4>
            <Link href="https://www.linkedin.com/in/masudrana7/" target="_blank">
              <span>masudrana7</span>
            </Link>
          </div>

          <div className="contact-content">
            <h4>
              {' '}
              <TelegramLogo size={22} color="#00fffb" /> Email{' '}
            </h4>
            <Link href="mailto:masudrm50@gmail.com" target="_blank">
              <span>masudrm50@gmail.com</span>
            </Link>
          </div>
        </ContactContent>
        <Form />
        <Title style={{ textAlign: "center" }}>
          {currentLang === 'ta' ? 'মিটিং সময় ঠিক করুন' : 'Schedule a Meeting'}
        </Title>
        <Description style={{ textAlign: "center", marginTop: "3px" }}>
          {currentLang === 'ta' ? 'இது Calendy மூலம் இயக்கப்படுகிறது. எனவே, ஏற்றுவதற்கு சில நேரம் ஆகலாம். (குறிப்பு: சந்திப்பை திட்டமிட நீங்கள் Calendy குக்கீகளை ஏற்க வேண்டும்)' : 'This is powered by Calendy. Hence, it may take some time for loading. (Note: You have to accept the cookies by Calendy in order to Schedule a meet)'}
        </Description>
        <ResponsiveIframeContainer>
          <iframe
            src={calendy}
            width="100%"
            height="800px"
            frameBorder="0"
            title="Calendly"
          ></iframe>
        </ResponsiveIframeContainer>
        <Title style={{ textAlign: "center" }}>
          {currentLang === 'ta' ? 'আমার ক্যালেন্ডার দেখুন' : 'See my Calendar'}
        </Title>
        <ResponsiveIframeContainer>
        <iframe
          src={calender}
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        ></iframe>
        </ResponsiveIframeContainer>
      </ContainerContact>
    </Section>
  );

}

