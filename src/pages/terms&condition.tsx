import Head from 'next/head';
import { ScrollTop } from '../components/ScrollTop';
import { Footer } from '../components/Footer';
import { TermsAndConditionsContainer } from '../styles/termsandcondition';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TermsAndConditions() {
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
        <title>{currentLang === 'bn' ? 'শর্তাবলী | মোঃ মাসুদ রানা' : 'Terms and Conditions | Md. Masud Rana'}</title>
        <meta
          name="description"
          content={currentLang === 'bn' 
            ? 'মোঃ মাসুদ রানার পোর্টফোলিও ওয়েবসাইটের শর্তাবলী' 
            : 'Terms and conditions for Md. Masud Rana\'s portfolio website'}
        />
      </Head>
      <TermsAndConditionsContainer>
        <br /><br />
        <h1>{currentLang === 'bn' ? 'শর্তাবলী' : 'Terms and Conditions'}</h1>

        <h2>{currentLang === 'bn' ? 'সর্বশেষ আপডেট: আগস্ট ৭, ২০২৫' : 'Last Updated: August 7th, 2025'}</h2>

        <p>
          {currentLang === 'bn' 
            ? 'মোঃ মাসুদ রানার পোর্টফোলিওতে স্বাগতম। এই ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি নিম্নলিখিত শর্তাবলী মেনে চলতে সম্মত হন। আপনি যদি এই শর্তাবলীর সাথে একমত না হন, অনুগ্রহ করে এই সাইট ব্যবহার করবেন না।'
            : 'Welcome to Md. Masud Rana\'s Portfolio. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use this site.'}
        </p>

        <h3>1. {currentLang === 'bn' ? 'শর্তাবলীর গ্রহণযোগ্যতা' : 'Acceptance of Terms'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'মোঃ মাসুদ রানার পোর্টফোলিও ব্যবহার করার মাধ্যমে, আপনি স্বীকার করেন যে আপনি এই শর্তাবলী এবং গোপনীয়তা নীতি পড়েছেন, বুঝেছেন এবং সম্মত হয়েছেন।'
            : 'By using Md. Masud Rana\'s Portfolio, you acknowledge that you have read, understood, and agree to these Terms and Conditions, along with the Privacy Policy.'}
        </p>

        <h3>2. {currentLang === 'bn' ? 'ওয়েবসাইট কন্টেন্টের ব্যবহার' : 'Use of Website Content'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'এই ওয়েবসাইটের কন্টেন্ট, যার মধ্যে টেক্সট, ইমেজ এবং ডিজাইন রয়েছে, শুধুমাত্র ব্যক্তিগত, তথ্যমূলক এবং বাণিজ্যিক নয় এমন ব্যবহারের জন্য। পূর্ববর্তী লিখিত অনুমতি ছাড়া আপনি কোনো কন্টেন্ট কপি, পুনরুৎপাদন, বিতরণ বা ব্যবহার করতে পারবেন না।'
            : 'The content on this website, including text, images, and design, is for personal, informational, and non-commercial use only. You may not copy, reproduce, distribute, or use any content without prior written permission.'}
        </p>

        <h3>3. {currentLang === 'bn' ? 'মালিকানা এবং স্বীকৃতি' : 'Ownership and Attribution'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'এই পোর্টফোলিওটি মূলত একটি টেমপ্লেটের উপর ভিত্তি করে তৈরি করা হয়েছে যা বিভিন্ন উৎস থেকে সংগ্রহ করা হয়েছে।'
            : 'This portfolio is based on templates collected from various sources.'}
        </p>
        <p>
          {currentLang === 'bn' 
            ? 'সাইটে করা সমস্ত পরিবর্তন এবং অতিরিক্ত বৈশিষ্ট্যগুলি <strong>মোঃ মাসুদ রানা</strong> দ্বারা ব্যক্তিগত ব্যবহারের জন্য তৈরি করা হয়েছে এবং সঠিক অনুমোদন ছাড়া পুনর্বিতরণ বা বাণিজ্যিক ব্যবহারের উদ্দেশ্যে নয়।'
            : 'All modifications and additional features made to the site by <strong>Md. Masud Rana</strong> are for personal use only and not intended for redistribution or commercial use without proper authorization.'}
        </p>

        <h3>4. {currentLang === 'bn' ? 'ব্যবহারকারীর দায়িত্ব' : 'User Responsibilities'}</h3>
        <p>{currentLang === 'bn' ? 'ফর্ম ব্যবহার বা ওয়েবসাইটের সাথে ইন্টারঅ্যাক্ট করার সময়, আপনি সম্মত হন:' : 'When using forms or interacting with the website, you agree to:'}</p>
        <ul>
          <li>{currentLang === 'bn' ? 'সঠিক এবং সত্য তথ্য প্রদান করতে' : 'Provide accurate and truthful information'}</li>
          <li>{currentLang === 'bn' ? 'অবৈধ, ক্ষতিকর বা আপত্তিকর কন্টেন্ট জমা দেওয়া থেকে বিরত থাকতে' : 'Avoid submitting unlawful, harmful, or offensive content'}</li>
          <li>{currentLang === 'bn' ? 'ওয়েবসাইট বা সার্ভারের অননুমোদিত অঞ্চলে অ্যাক্সেস করার চেষ্টা করা থেকে বিরত থাকতে' : 'Refrain from attempting to access unauthorized areas of the website or servers'}</li>
        </ul>

        <h3>5. {currentLang === 'bn' ? 'ডেটা সংগ্রহ এবং ব্যবহার' : 'Data Collection and Use'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'যোগাযোগ ফর্ম বা ফিডব্যাক ফর্মের মতো বৈশিষ্ট্যগুলি ব্যবহার করার মাধ্যমে, আপনি আমাদের <a href="/privacy-policy">গোপনীয়তা নীতি</a> এ বর্ণিত হিসাবে আপনার ডেটার সংগ্রহ এবং ব্যবহারে সম্মত হন।'
            : 'By using features like the contact form or feedback form, you agree to the collection and use of your data as outlined in our <a href="/privacy-policy">Privacy Policy</a>.'}
        </p>

        <h3>6. {currentLang === 'bn' ? 'তৃতীয় পক্ষের সেবা' : 'Third-Party Services'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'এই সাইটটি বিশ্লেষণ, ফর্ম, চ্যাটবট এবং এম্বেড পরিচালনার জন্য তৃতীয় পক্ষের টুল (যেমন Google Analytics, Vercel, Botpress, Email.js এবং অন্যান্য) ব্যবহার করে। প্রতিটি পরিষেবা তার নিজস্ব গোপনীয়তা নীতি এবং শর্তাবলী দ্বারা পরিচালিত হয়। আরও বিশদ বিবরণের জন্য আমাদের <a href="/privacy-policy">গোপনীয়তা নীতি</a> দেখুন।'
            : 'This site uses third-party tools (such as Google Analytics, Vercel, Botpress, Email.js, and others) to manage analytics, forms, chatbots, and embeds. Each service is governed by its own privacy policy and terms. Please refer to our <a href="/privacy-policy">Privacy Policy</a> for more details.'}
        </p>
        <p>
          {currentLang === 'bn' 
            ? 'এই পরিষেবাগুলি তাদের নিজস্ব শর্তাবলী এবং নীতির অধীনে কাজ করে। আমরা তাদের ডেটা সংগ্রহ বা পরিচালনা অনুশীলনের জন্য দায়ী নই।'
            : 'These services operate under their respective terms and policies. We are not responsible for their data collection or handling practices.'}
        </p>

        <h3>7. {currentLang === 'bn' ? 'দায়িত্বের সীমাবদ্ধতা' : 'Limitation of Liability'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'মোঃ মাসুদ রানার পোর্টফোলিও "যেমন আছে" ভিত্তিতে প্রদান করা হয়েছে, কোনো প্রকার ওয়ারেন্টি ছাড়াই।'
            : 'Md. Masud Rana\'s Portfolio is provided "as is," without warranties of any kind.'}
        </p>
        <p>
          {currentLang === 'bn' 
            ? 'আমরা কন্টেন্টের ভুল বা ত্রুটির জন্য দায়ী নই।'
            : 'We are not responsible for inaccuracies or errors in the content.'}
        </p>
        <p>
          {currentLang === 'bn' 
            ? 'এই ওয়েবসাইট বা তৃতীয় পক্ষের পরিষেবা ব্যবহারের ফলে সৃষ্ট কোনো ক্ষতির জন্য আমরা দায়বদ্ধ নই।'
            : 'We disclaim liability for any damages resulting from the use of this website or third-party services.'}
        </p>

        <h3>8. {currentLang === 'bn' ? 'বুদ্ধিবৃত্তিক সম্পত্তি' : 'Intellectual Property'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'সাইটে করা সমস্ত পরিবর্তন এবং অতিরিক্ত বৈশিষ্ট্যগুলি <strong>মোঃ মাসুদ রানা</strong> দ্বারা ব্যক্তিগত, বাণিজ্যিক নয় এমন ব্যবহারের জন্য তৈরি করা হয়েছে। সঠিক অনুমোদন ছাড়া অননুমোদিত ব্যবহার নিষিদ্ধ।'
            : 'All modifications made to the site by <strong>Md. Masud Rana</strong> are for personal, non-commercial use only. Unauthorized use is prohibited outside the scope of personal use.'}
        </p>

        <h3>9. {currentLang === 'bn' ? 'শর্তাবলীতে পরিবর্তন' : 'Changes to Terms and Conditions'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'আমরা যে কোনো সময় এই শর্তাবলী আপডেট বা পরিবর্তন করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলি এই পৃষ্ঠায় পোস্ট করার সাথে সাথে কার্যকর হবে। ব্যবহারকারীদের নিয়মিত শর্তাবলী পর্যালোচনা করতে উত্সাহিত করা হয়।'
            : 'We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this page. Users are encouraged to review the T&C periodically.'}
        </p>

        <h3>10. {currentLang === 'bn' ? 'প্রযোজ্য আইন' : 'Governing Law'}</h3>
        <p>
          {currentLang === 'bn' 
            ? 'এই শর্তাবলী বাংলাদেশের আইন দ্বারা পরিচালিত। এই ওয়েবসাইট ব্যবহারের ফলে উদ্ভূত কোনো বিরোধ বাংলাদেশের আদালতের এখতিয়ারের অধীন হবে।'
            : 'These Terms and Conditions are governed by the laws of Bangladesh. Any disputes arising out of the use of this website will be subject to the jurisdiction of courts in Bangladesh.'}
        </p>

        <h3>11. {currentLang === 'bn' ? 'যোগাযোগের তথ্য' : 'Contact Information'}</h3>
        <p>{currentLang === 'bn' ? 'এই শর্তাবলী সম্পর্কে প্রশ্নের জন্য যোগাযোগ করুন:' : 'For questions about these Terms and Conditions, contact:'}</p>

        <p><strong>Md. Masud Rana</strong><br />
          {currentLang === 'bn' ? 'ওয়েবসাইট:' : 'Website:'} <a href="https://masud7.vercel.app">masud7.vercel.app</a>
        </p>
      </TermsAndConditionsContainer>
      <ScrollTop />
      <Footer />
    </>
  );
}
