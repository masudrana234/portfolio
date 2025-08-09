import Head from 'next/head';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { PrivacyPolicyContainer } from '../styles/privacypolicy';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
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
        <title>{currentLang === 'bn' ? 'গোপনীয়তা নীতি | মোঃ মাসুদ রানা' : 'Privacy Policy | Md. Masud Rana'}</title>
        <meta 
          name="description" 
          content={currentLang === 'bn' 
            ? 'মোঃ মাসুদ রানার পোর্টফোলিও ওয়েবসাইটের গোপনীয়তা নীতি' 
            : 'Privacy policy for Md. Masud Rana\'s portfolio website'}
        />
      </Head>
      <PrivacyPolicyContainer>
        <br/><br/>
        <h1>{currentLang === 'bn' ? 'গোপনীয়তা নীতি' : 'Privacy Policy'}</h1>

        <h2>{currentLang === 'bn' ? 'সর্বশেষ আপডেট: আগস্ট ৭, ২০২৫' : 'Last Updated: August 7th, 2025'}</h2>

        <p>{currentLang === 'bn' 
          ? 'আপনার গোপনীয়তা আমাদের জন্য গুরুত্বপূর্ণ। এই গোপনীয়তা নীতি ব্যাখ্যা করে কিভাবে মোঃ মাসুদ রানার পোর্টফোলিও ওয়েবসাইট আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষা করে।' 
          : 'Your privacy is important to us. This Privacy Policy explains how Md. Masud Rana\'s Portfolio collects, uses, and protects your information when you interact with our website.'}
        </p>

        <h3>1. {currentLang === 'bn' ? 'আমরা যে তথ্য সংগ্রহ করি' : 'Information We Collect'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আমরা নিম্নলিখিত ধরনের তথ্য সংগ্রহ করতে পারি যখন আপনি আমাদের ওয়েবসাইট ব্যবহার করেন:' 
          : 'We may collect the following types of information when you use our website:'}
        </p>
        <ul>
          <li><strong>{currentLang === 'bn' ? 'ব্যক্তিগত তথ্য:' : 'Personal Information:'}</strong> {currentLang === 'bn' 
            ? 'নাম, ইমেইল ঠিকানা, ফোন নম্বর, এবং প্রতিক্রিয়া (ফর্মের মাধ্যমে)' 
            : 'Name, email address, phone number, and feedback (via forms)'}
          </li>
          <li><strong>{currentLang === 'bn' ? 'অব্যক্তিগত তথ্য:' : 'Non-Personal Information:'}</strong> {currentLang === 'bn' 
            ? 'আইপি ঠিকানা, ব্রাউজার টাইপ, ডিভাইস টাইপ, দেখা পৃষ্ঠাগুলি, এবং মিথস্ক্রিয়া (কুকিজ এবং তৃতীয় পক্ষের টুলের মাধ্যমে সংগ্রহ করা)' 
            : 'IP address, browser type, device type, pages visited, and interactions (collected via cookies and third-party tools)'}
          </li>
        </ul>

        <h3>2. {currentLang === 'bn' ? 'আমরা কিভাবে আপনার তথ্য ব্যবহার করি' : 'How We Use Your Information'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আপনার তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করা হয়:' 
          : 'Your information is used for the following purposes:'}
        </p>
        <ul>
          <li>{currentLang === 'bn' 
            ? 'যোগাযোগ ফর্মের মাধ্যমে জমা দেওয়া আপনার অনুসন্ধানের উত্তর দিতে' 
            : 'To respond to your inquiries submitted through the contact form'}
          </li>
          <li>{currentLang === 'bn' 
            ? 'প্রতিক্রিয়া সংগ্রহ করতে এবং ওয়েবসাইটের কার্যকারিতা উন্নত করতে' 
            : 'To gather feedback and improve the website\'s functionality'}
          </li>
          <li>{currentLang === 'bn' 
            ? 'তৃতীয় পক্ষের বিশ্লেষণ টুল ব্যবহার করে সাইটের কর্মক্ষমতা এবং ব্যবহারের প্রবণতা নিরীক্ষণ এবং বিশ্লেষণ করতে' 
            : 'To monitor and analyze site performance and usage trends using third-party analytics tools'}
          </li>
        </ul>

        <h3>3. {currentLang === 'bn' ? 'তৃতীয় পক্ষের সেবা' : 'Third-Party Services'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আমরা আপনার অভিজ্ঞতা উন্নত করতে তৃতীয় পক্ষের সেবা ব্যবহার করি, যার মধ্যে রয়েছে:' 
          : 'We use third-party services to enhance your experience, including:'}
        </p>
        <ul>
          <li><strong>Google Analytics:</strong> {currentLang === 'bn' 
            ? 'ওয়েবসাইট ট্রাফিক এবং ব্যবহারের ধরণ ট্র্যাক করে' 
            : 'Tracks website traffic and usage patterns'}
          </li>
          <li><strong>Vercel Analytics:</strong> {currentLang === 'bn' 
            ? 'ওয়েবসাইটের কর্মক্ষমতা নিরীক্ষণ করে' 
            : 'Monitors website performance'}
          </li>
          <li><strong>Botpress:</strong> {currentLang === 'bn' 
            ? 'ইন্টারেক্টিভ যোগাযোগের জন্য AI চ্যাটবট চালায়' 
            : 'Powers the AI chatbot for interactive communication'}
          </li>
          <li><strong>Email.js:</strong> {currentLang === 'bn' 
            ? 'ইমেইল যোগাযোগ এবং ফর্ম জমা সহজতর করে' 
            : 'Facilitates email communication and form submissions'}
          </li>
        </ul>
        <p>{currentLang === 'bn' 
          ? 'এই তৃতীয় পক্ষের সেবাগুলি তাদের নিজস্ব গোপনীয়তা নীতি অনুযায়ী আপনার তথ্য সংগ্রহ, ব্যবহার এবং সংরক্ষণ করতে পারে।' 
          : 'These third-party services may collect, use, and store your data according to their respective privacy policies.'}
        </p>

        <h3>4. {currentLang === 'bn' ? 'কুকিজ এবং ট্র্যাকিং প্রযুক্তি' : 'Cookies and Tracking Technologies'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আমরা বিশ্লেষণ এবং ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য কুকিজ এবং অনুরূপ প্রযুক্তি ব্যবহার করতে পারি। এই সাইট ব্যবহার চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের কুকিজ ব্যবহারের জন্য সম্মতি দেন।' 
          : 'We may use cookies and similar technologies for analytics and improving user experience. By continuing to use this site, you consent to our use of cookies.'}
        </p>

        <h3>5. {currentLang === 'bn' ? 'ডেটা সুরক্ষা' : 'Data Protection'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আমরা অননুমোদিত অ্যাক্সেস, প্রকাশ, পরিবর্তন বা ধ্বংস থেকে আপনার ব্যক্তিগত তথ্য সুরক্ষার জন্য উপযুক্ত ব্যবস্থা নিই। তবে, কোনো অনলাইন প্ল্যাটফর্ম সম্পূর্ণ নিরাপত্তা নিশ্চিত করতে পারে না। আমরা এই নীতিতে বর্ণিত উদ্দেশ্যগুলি পূরণ করার জন্য প্রয়োজনীয় সময়ের জন্য আপনার ডেটা সংরক্ষণ করি, যদি না আইন দ্বারা দীর্ঘতর ধারণ সময় প্রয়োজন বা অনুমোদিত হয়।' 
          : 'We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. However, no online platform can guarantee absolute security. We retain your data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'}
        </p>

        <h3>6. {currentLang === 'bn' ? 'ডেটা শেয়ারিং' : 'Data Sharing'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আমরা আপনার ব্যক্তিগত তথ্য আইন দ্বারা প্রয়োজনীয় বা প্রয়োজনীয় সেবা প্রদানের জন্য (যেমন বিশ্লেষণ, হোস্টিং) ছাড়া তৃতীয় পক্ষের সাথে বিক্রি, ভাড়া বা শেয়ার করি না।' 
          : 'We do not sell, rent, or share your personal information with third parties except as required by law or to provide essential services (e.g., analytics, hosting).'}
        </p>

        <h3>7. {currentLang === 'bn' ? 'আপনার অধিকার' : 'Your Rights'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আপনার নিম্নলিখিত অধিকার রয়েছে:' 
          : 'You have the right to:'}
        </p>
        <ul>
          <li>{currentLang === 'bn' 
            ? 'আপনার ব্যক্তিগত তথ্য অ্যাক্সেস, আপডেট বা মুছতে' 
            : 'Access, update, or delete your personal information'}
          </li>
          <li>{currentLang === 'bn' 
            ? 'যে কোনো সময় ডেটা সংগ্রহের জন্য সম্মতি প্রত্যাহার করতে' 
            : 'Withdraw consent for data collection at any time'}
          </li>
          <li>{currentLang === 'bn' 
            ? 'আপনার ডেটা কিভাবে ব্যবহার করা হয় সে সম্পর্কে স্পষ্টতা চাইতে' 
            : 'Request clarification on how your data is used'}
          </li>
        </ul>

        <h3>8. {currentLang === 'bn' ? 'এই গোপনীয়তা নীতিতে পরিবর্তন' : 'Changes to This Privacy Policy'}</h3>
        <p>{currentLang === 'bn' 
          ? 'আমরা পর্যায়ক্রমে এই গোপনীয়তা নীতি আপডেট করতে পারি। কোনো পরিবর্তন এই পৃষ্ঠায় প্রতিফলিত হবে, এবং আমরা আপনাকে নিয়মিত এটি পর্যালোচনা করতে উত্সাহিত করি।' 
          : 'We may update this Privacy Policy periodically. Any changes will be reflected on this page, and we encourage you to review it regularly.'}
        </p>

        <h3>9. {currentLang === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}</h3>
        <p>{currentLang === 'bn' 
          ? 'যদি এই গোপনীয়তা নীতি সম্পর্কে আপনার কোন প্রশ্ন বা উদ্বেগ থাকে, তাহলে আমাদের সাথে যোগাযোগ করুন:' 
          : 'If you have questions or concerns about this Privacy Policy, contact us at:'}
        </p>
        <p><strong>{currentLang === 'bn' ? 'মোঃ মাসুদ রানা' : 'Md. Masud Rana'}</strong><br />
          {currentLang === 'bn' ? 'ইমেইল:' : 'Email:'} masudrm50@gmail.com<br />
          {currentLang === 'bn' ? 'ওয়েবসাইট:' : 'Website:'} <a href="https://masud7.vercel.app">masud7.vercel.app</a>
        </p>
      </PrivacyPolicyContainer>
      <ScrollTop />
      <Footer />
    </>
  );
}
